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

package ai.starwhale.mlops.domain.runtime.mapper;

import ai.starwhale.mlops.domain.runtime.po.RuntimeVersionEntity;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface RuntimeVersionMapper {

    List<RuntimeVersionEntity> listVersions(@Param("runtimeId") Long runtimeId,
            @Param("namePrefix") String namePrefix, @Param("tag") String tag);

    RuntimeVersionEntity findVersionById(@Param("id") Long id);

    List<RuntimeVersionEntity> findVersionsByIds(@Param("rtVersionIds") List<Long> rtVersionIds);

    RuntimeVersionEntity getLatestVersion(@Param("runtimeId") Long runtimeId);

    int revertTo(@Param("rtId") Long rtId, @Param("rtVersionId") Long rtVersionId);

    int addNewVersion(@Param("version") RuntimeVersionEntity version);

    int update(@Param("version") RuntimeVersionEntity version);

    int updateTag(@Param("versionId") Long versionId, @Param("tag") String tag);

    RuntimeVersionEntity findByNameAndRuntimeId(@Param("rtVersion") String rtVersion,
            @Param("runtimeId") Long runtimeId);

    RuntimeVersionEntity findByVersionOrderAndRuntimeId(@Param("versionOrder") Long versionOrder,
            @Param("runtimeId") Long runtimeId);
}
