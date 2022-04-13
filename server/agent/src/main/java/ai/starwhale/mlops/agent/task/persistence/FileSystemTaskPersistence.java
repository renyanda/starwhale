/*
 * Copyright 2022.1-2022
 * StarWhale.ai All right reserved. This software is the confidential and proprietary information of
 * StarWhale.ai ("Confidential Information"). You shall not disclose such Confidential Information and shall use it only
 * in accordance with the terms of the license agreement you entered into with StarWhale.com.
 */

package ai.starwhale.mlops.agent.task.persistence;

import ai.starwhale.mlops.agent.configuration.AgentProperties;
import ai.starwhale.mlops.agent.task.EvaluationTask;
import ai.starwhale.mlops.storage.StorageAccessService;
import cn.hutool.extra.compress.CompressUtil;
import cn.hutool.extra.compress.extractor.Extractor;
import cn.hutool.json.JSONUtil;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.nio.charset.StandardCharsets;
import java.util.Optional;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.util.StringUtils;

@Slf4j
@Service
public class FileSystemTaskPersistence implements TaskPersistence {

    @Autowired
    private AgentProperties agentProperties;
    @Autowired
    private StorageAccessService storageAccessService;

    private String baseTaskPathFormat = "%s/%s/";

    private String infoSuffix = "taskInfo.json";

    private String infoFilePath = baseTaskPathFormat + infoSuffix;

    private String statusFilePath = baseTaskPathFormat + "status/current";

    private String swdsConfigFilePath = baseTaskPathFormat + "config/swds.json";

    private String swmpDirPath = baseTaskPathFormat + "swmp/";

    private String resultDirPath = baseTaskPathFormat + "result/";

    private String logDirPath = baseTaskPathFormat + "log/";

    /**
     * archived taskInfo file path,Eg:/var/starwhale/task/archived/{taskId}/
     */
    String archivedDirPath = "%s/archived/";


    String path(String format, Object... objects) {
        return String.format(format, objects);
    }

    @Override
    public String basePathOfTask(Long id) {
        return path(baseTaskPathFormat, agentProperties.getTask().getBasePath(), id);
    }

    @Override
    public String pathOfInfoFile(Long id) {
        return path(infoFilePath, agentProperties.getTask().getBasePath(), id);
    }

    @Override
    public String pathOfStatusFile(Long id) {
        return path(statusFilePath, agentProperties.getTask().getBasePath(), id);
    }

    @Override
    public String pathOfSWMPDir(Long id) {
        return path(swmpDirPath, agentProperties.getTask().getBasePath(), id);
    }

    @Override
    public String pathOfSWDSFile(Long id) {
        return path(swdsConfigFilePath, agentProperties.getTask().getBasePath(), id);
    }

    @Override
    public String pathOfResult(Long id) {
        return path(resultDirPath, agentProperties.getTask().getBasePath(), id);
    }

    @Override
    public String pathOfLog(Long id) {
        return path(logDirPath, agentProperties.getTask().getBasePath(), id);
    }

    @Override
    public Optional<List<EvaluationTask>> getAllActiveTasks() {
        try {
            Path tasksPath = Path.of(agentProperties.getTask().getBasePath());
            if (!Files.exists(tasksPath)) {
                Files.createDirectories(tasksPath);
                log.info("init tasks dir, nothing to rebuild, path:{}", tasksPath);
                return Optional.of(List.of());
            } else {
                // rebuild taskQueue
                Stream<Path> taskInfos = Files.find(tasksPath, 1,
                        (path, basicFileAttributes) -> true);
                return Optional.of(
                        taskInfos
                                .filter(path -> path.getFileName().toString().endsWith(infoSuffix))
                                .map(path -> {
                                    try {
                                        String json = Files.readString(path);
                                        return JSONUtil.toBean(json, EvaluationTask.class);
                                    } catch (IOException e) {
                                        log.error(e.getMessage(), e);
                                    }
                                    return null;
                                })
                                .filter(Objects::nonNull)
                                .collect(Collectors.toList())
                );
            }
        } catch (Exception e) {
            log.error("get all active tasks occur error:{}", e.getMessage(), e);
            return Optional.empty();
        }

    }

    @Override
    public Optional<EvaluationTask> getTaskById(Long id) {
        try {
            // get the newest task info
            Path taskPath = Path.of(pathOfInfoFile(id));
            String json = Files.readString(taskPath);
            return Optional.of(JSONUtil.toBean(json, EvaluationTask.class));
        } catch (Exception e) {
            log.error("get task by id:{} occur error:{}", id, e.getMessage(), e);
            return Optional.empty();
        }

    }

    @Override
    public Optional<ExecuteStatus> status(Long id) {
        try {
            // get the newest task info
            Path taskPath = Path.of(pathOfStatusFile(id));
            String status = Files.readString(taskPath);
            if (StringUtils.hasText(status)) {
                return Optional.of(ExecuteStatus.valueOf(status));
            }
            return Optional.of(ExecuteStatus.UNKNOWN);
        } catch (Exception e) {
            log.error("get task container status occur error:{}", e.getMessage(), e);
            return Optional.empty();
        }

    }

    @Override
    public boolean save(EvaluationTask task) {
        try {
            Path taskPath = Path.of(pathOfInfoFile(task.getId()));
            if (!Files.exists(taskPath)) {
                Files.createFile(taskPath);
            }
            // update info to the task file
            Files.writeString(taskPath, JSONUtil.toJsonStr(task));
            return true;
        } catch (Exception e) {
            log.error("save task status occur error:{}", e.getMessage(), e);
            return false;
        }

    }

    @Override
    public boolean move2Archived(EvaluationTask task) {
        try {
            Path sourcePath = Path.of(basePathOfTask(task.getId())),
                    targetDir = Path.of(path(archivedDirPath, agentProperties.getTask().getBasePath()));
            if (!Files.exists(targetDir)) {
                Files.createDirectories(targetDir);
            }
            // move to the task file
            Files.move(sourcePath, targetDir);
            return true;
        } catch (IOException e) {
            log.error("move task to archived dir occur error:{}", e.getMessage(), e);
        }
        return false;
    }

    @Override
    public boolean preloadingSWMP(EvaluationTask task) {
        try {
            // pull swmp(tar) and uncompress it to the swmp dir
            InputStream swmpStream = storageAccessService.get(task.getSwModelPackage().getPath());
            // uncompress, default is tar:direct uncompress to the target dir
            Extractor extractor = CompressUtil.createExtractor(StandardCharsets.UTF_8, swmpStream);
            extractor.extract(
                    new File(pathOfSWMPDir(task.getId())));
            return true;
        } catch (Exception e) {
            log.error("preloading swmp occur error:{}", e.getMessage(), e);
            return false;
        }

    }

    @Override
    public boolean generateSWDSConfig(EvaluationTask task) {
        return false;
    }

    @Override
    public boolean uploadResult(EvaluationTask task) {
        try {
            // results is a set of files
            Stream<Path> results = Files.find(Path.of(pathOfResult(task.getId())), 1, (a, b) -> true);
            results.collect(Collectors.toList()).forEach(path -> {
                try {
                    storageAccessService.put(task.getResultPath() + "/" + path.getFileName(),
                            new BufferedInputStream(new FileInputStream(String.valueOf(path))));
                } catch (IOException e) {
                    log.error("upload result:{} occur error:{}", path.getFileName(), e.getMessage(), e);
                }
            });
            return true;
        } catch (IOException e) {
            log.error("upload result occur error:{}", e.getMessage(), e);
            return false;
        }

    }
}
