/*
 * Copyright 2022 Starwhale, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package ai.starwhale.mlops.domain.bundle.recover;

import ai.starwhale.mlops.common.IdConvertor;
import ai.starwhale.mlops.domain.bundle.BundleUrl;
import ai.starwhale.mlops.domain.bundle.base.BundleEntity;
import ai.starwhale.mlops.domain.project.ProjectAccessor;
import java.util.List;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class RecoverManager {

    private final ProjectAccessor projectAccessor;
    private final RecoverAccessor recoverAccessor;
    private final IdConvertor idConvertor;

    private RecoverManager(
            ProjectAccessor projectAccessor,
            RecoverAccessor recoverAccessor,
            IdConvertor idConvertor) {
        this.projectAccessor = projectAccessor;
        this.recoverAccessor = recoverAccessor;
        this.idConvertor = idConvertor;
    }

    public static RecoverManager create(ProjectAccessor projectAccessor,
            RecoverAccessor recoverAccessor, IdConvertor idConvertor) {
        return new RecoverManager(projectAccessor, recoverAccessor, idConvertor);
    }

    public Boolean recoverBundle(BundleUrl bundleUrl) throws RecoverException {
        Long projectId = projectAccessor.getProjectId(bundleUrl.getProjectUrl());
        String name = bundleUrl.getBundleUrl();
        Long id;
        if (idConvertor.isId(name)) {
            id = idConvertor.revert(name);
            BundleEntity entity = recoverAccessor.findDeletedBundleById(id);
            if (entity == null) {
                throw new RecoverException(String.format("Recover error. Bundle can not be found by id [%s]. ", name));
            }
            name = entity.getName();
        } else {
            // To restore datasets by name, need to check whether there are duplicate names
            List<? extends BundleEntity> list = recoverAccessor.listDeletedBundlesByName(name, projectId);
            if (list.size() > 1) {
                throw new RecoverException(
                        String.format("Recover error. Duplicate names [%s] of deleted bundles. ", name));
            } else if (list.size() == 0) {
                throw new RecoverException(String.format("Recover error. Can not find deleted bundle [%s].", name));
            }
            id = list.get(0).getId();
        }

        // Check for duplicate names
        if (recoverAccessor.findByName(name, projectId) != null) {
            throw new RecoverException(String.format("Recover error. Model %s already exists.", name));
        }

        Boolean res = recoverAccessor.recover(id);
        log.info("Bundle has been recovered. Name={}", name);
        return res;
    }
}
