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

package ai.starwhale.mlops.domain.user.mapper;

import ai.starwhale.mlops.domain.user.po.UserEntity;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {

    int createUser(@Param("user") UserEntity user);

    UserEntity findUser(@Param("id") Long id);

    UserEntity findUserByName(@Param("userName") String userName);

    List<UserEntity> listUsers(@Param("userNamePrefix") String userNamePrefix);

    int changePassword(@Param("user") UserEntity user);

    int enableUser(@Param("user") UserEntity user);
}
