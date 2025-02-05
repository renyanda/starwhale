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

package ai.starwhale.mlops.domain.job;

import static org.mockito.Mockito.mock;

import ai.starwhale.mlops.JobMockHolder;
import ai.starwhale.mlops.domain.job.bo.Job;
import ai.starwhale.mlops.domain.job.mapper.JobMapper;
import ai.starwhale.mlops.domain.job.split.JobSpliteratorEvaluation;
import ai.starwhale.mlops.domain.job.step.mapper.StepMapper;
import ai.starwhale.mlops.domain.storage.StoragePathCoordinator;
import ai.starwhale.mlops.domain.task.mapper.TaskMapper;
import java.io.IOException;
import org.junit.jupiter.api.Test;


/**
 * test for {@link JobSpliteratorEvaluation}
 */
public class JobSpliteratorEvaluationTest {

    @Test
    public void testJobSpliteratorEvaluation() throws IOException {

        TaskMapper taskMapper = mock(TaskMapper.class);
        JobMapper jobMapper = mock(JobMapper.class);
        StepMapper stepMapper = mock(StepMapper.class);
        JobSpliteratorEvaluation jobSpliteratorEvaluation = new JobSpliteratorEvaluation(
                new StoragePathCoordinator("/test"), taskMapper, jobMapper, stepMapper);

        JobMockHolder jobMockHolder = new JobMockHolder();
        Job mockJob = jobMockHolder.mockJob();
        mockJob.setCurrentStep(null);
        mockJob.setSteps(null);
        // TODO
        /*
        List<StepEntity> steps = jobSpliteratorEvaluation.split(mockJob);
        Assertions.assertEquals(2,steps.size());
        Step currentStep = mockJob.getCurrentStep();
        Assertions.assertNotNull(currentStep);
        Assertions.assertEquals("PPL",currentStep.getName());
        Assertions.assertTrue(currentStep.getTasks().size()<=3);;
        Step nextStep = currentStep.getNextStep();
        Assertions.assertNotNull(nextStep);
        Assertions.assertEquals("CMP",nextStep.getName());
        Assertions.assertTrue(nextStep.getTasks().size()==1);;
        mockJob.getSteps().parallelStream().map(Step::getTasks).flatMap(Collection::parallelStream).forEach(task -> {
            Assertions.assertTrue(task instanceof WatchableTask);
        });

        verify(stepMapper,times(2)).save(any(StepEntity.class));
        verify(taskMapper,times(1)).addAll(anyList());
        verify(taskMapper,times(1)).addTask(any(TaskEntity.class));
        Assertions.assertEquals(JobStatus.READY,mockJob.getStatus());
        verify(jobMapper).updateJobStatus(List.of(mockJob.getId()), JobStatus.READY);
        */

    }
}
