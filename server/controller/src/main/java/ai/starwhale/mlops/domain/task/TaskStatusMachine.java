/*
 * Copyright 2022.1-2022
 * StarWhale.ai All right reserved. This software is the confidential and proprietary information of
 * StarWhale.ai ("Confidential Information"). You shall not disclose such Confidential Information and shall use it only
 * in accordance with the terms of the license agreement you entered into with StarWhale.ai.
 */

package ai.starwhale.mlops.domain.task;

import java.util.Collection;

/**
 * manage status of Tasks or side effects caused by change of Task status (Job status change)
 */
public interface TaskStatusMachine {

    void adopt(Collection<Task> newBorn);

    void statusChange(Collection<Task> livingTasks, Task.TaskStatus targetStatus);

    Collection<Task> ofStatus(Task.TaskStatus taskStatus);

}
