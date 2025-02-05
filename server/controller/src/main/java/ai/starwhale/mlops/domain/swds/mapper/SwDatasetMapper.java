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

package ai.starwhale.mlops.domain.swds.mapper;

import ai.starwhale.mlops.domain.swds.po.SwDatasetEntity;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface SwDatasetMapper {

    List<SwDatasetEntity> listDatasets(@Param("projectId") Long projectId, @Param("namePrefix") String namePrefix);

    int addDataset(@Param("swds") SwDatasetEntity swds);

    int deleteDataset(@Param("id") Long id);

    int recoverDataset(@Param("id") Long id);

    SwDatasetEntity findDatasetById(@Param("id") Long id);

    List<SwDatasetEntity> findDatasetsByIds(@Param("ids") List<Long> ids);

    SwDatasetEntity findByNameForUpdate(@Param("name") String name, @Param("projectId") Long projectId);

    SwDatasetEntity findByName(@Param("name") String name, @Param("projectId") Long projectId);

    SwDatasetEntity findDeletedDatasetById(@Param("id") Long id);

    List<SwDatasetEntity> listDeletedDatasets(@Param("name") String name, @Param("projectId") Long projectId);
}
