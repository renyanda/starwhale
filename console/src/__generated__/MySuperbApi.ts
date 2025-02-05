/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserUpdateStateRequest {
    isEnabled: boolean
}

export interface ResponseMessageString {
    code?: string
    message?: string
    data?: string
}

export interface UserUpdatePasswordRequest {
    currentUserPwd: string
    newPwd: string
}

export interface UserRoleUpdateRequest {
    currentUserPwd: string
    roleId: string
}

export interface UpdateProjectRequest {
    /** @pattern ^[a-zA-Z][a-zA-Z\d_-]{3,80}$ */
    projectName?: string
    ownerId?: string
    privacy?: string
    description?: string
}

export interface RuntimeTagRequest {
    tag: string
    action?: string
}

export interface SWMPTagRequest {
    tag: string
    action?: string
}

export interface JobModifyRequest {
    comment: string
}

export interface SWDSTagRequest {
    tag: string
    action?: string
}

export interface UserRequest {
    /** @pattern ^[a-zA-Z][a-zA-Z\d_-]{3,32}$ */
    userName: string
    userPwd: string
}

export interface UserCheckPasswordRequest {
    currentUserPwd: string
}

export interface UserRoleAddRequest {
    currentUserPwd: string
    userId: string
    roleId: string
}

export interface CreateProjectRequest {
    /** @pattern ^[a-zA-Z][a-zA-Z\d_-]{3,80}$ */
    projectName: string
    ownerId: string
    privacy: string
    description: string
}

export interface RuntimeRevertRequest {
    version?: string
    versionId?: string
    versionUrl?: string
}

export interface ClientRuntimeRequest {
    runtime?: string
    project?: string
    force?: string
    manifest?: string
}

export interface RevertSWMPVersionRequest {
    version?: string
    versionId?: string
    versionUrl?: string
}

export interface ClientSWMPRequest {
    swmp?: string
    project?: string
    force?: string
    manifest?: string
}

export interface JobRequest {
    modelVersionUrl: string
    datasetVersionUrls: string
    runtimeVersionUrl: string
    device: string

    /** @format int32 */
    deviceAmount: number
    comment?: string
    resourcePool?: string
}

export interface ConfigRequest {
    name: string
    content: string
}

export interface RevertSWDSRequest {
    version?: string
    versionId?: string
    versionUrl?: string
}

export interface UploadRequest {
    swds?: string
    phase: 'MANIFEST' | 'BLOB' | 'END' | 'CANCEL'
    force?: string
    project?: string
}

export interface ResponseMessageUploadResult {
    code?: string
    message?: string
    data?: UploadResult
}

export interface UploadResult {
    upload_id?: string
}

export interface ColumnSchemaDesc {
    name?: string
    type?: string
}

export interface RecordDesc {
    values: RecordValueDesc[]
}

export interface RecordValueDesc {
    key: string
    value?: string
}

export interface TableSchemaDesc {
    keyColumn?: string
    columnSchemaList?: ColumnSchemaDesc[]
}

export interface UpdateTableRequest {
    tableName?: string
    tableSchemaDesc?: TableSchemaDesc
    records?: RecordDesc[]
}

export interface ColumnDesc {
    columnName?: string
    alias?: string
}

export interface ScanTableRequest {
    tables?: TableDesc[]
    start?: string
    startInclusive?: boolean
    end?: string
    endInclusive?: boolean

    /** @format int32 */
    limit?: number
    keepNone?: boolean
}

export interface TableDesc {
    tableName?: string
    columns?: ColumnDesc[]
    keepNone?: boolean
}

export interface RecordListVO {
    columnTypes?: Record<
        string,
        'UNKNOWN' | 'BOOL' | 'INT8' | 'INT16' | 'INT32' | 'INT64' | 'FLOAT32' | 'FLOAT64' | 'STRING' | 'BYTES'
    >
    records?: Record<string, string>[]
    lastKey?: string
}

export interface ResponseMessageRecordListVO {
    code?: string
    message?: string
    data?: RecordListVO
}

export interface OrderByDesc {
    columnName?: string
    descending?: boolean
}

export interface QueryTableRequest {
    tableName?: string
    columns?: ColumnDesc[]
    orderBy?: OrderByDesc[]
    descending?: boolean
    filter?: TableQueryFilterDesc

    /** @format int32 */
    start?: number

    /** @format int32 */
    limit?: number
}

export interface TableQueryFilterDesc {
    operator: string
    operands?: TableQueryOperandDesc[]
}

export interface TableQueryOperandDesc {
    filter?: TableQueryFilterDesc
    columnName?: string
    boolValue?: boolean

    /** @format int64 */
    intValue?: number

    /** @format double */
    floatValue?: number
    stringValue?: string
    bytesValue?: string
}

export interface PageInfo {
    /** @format int64 */
    total?: number
    list?: object[]

    /** @format int32 */
    pageNum?: number

    /** @format int32 */
    pageSize?: number

    /** @format int32 */
    size?: number

    /** @format int64 */
    startRow?: number

    /** @format int64 */
    endRow?: number

    /** @format int32 */
    pages?: number

    /** @format int32 */
    prePage?: number

    /** @format int32 */
    nextPage?: number
    isFirstPage?: boolean
    isLastPage?: boolean
    hasPreviousPage?: boolean
    hasNextPage?: boolean

    /** @format int32 */
    navigatePages?: number
    navigatepageNums?: number[]

    /** @format int32 */
    navigateFirstPage?: number

    /** @format int32 */
    navigateLastPage?: number
}

/**
 * User object
 */
export interface UserVO {
    id?: string
    name?: string

    /** @format int64 */
    createdTime?: number
    isEnabled?: boolean
}

/**
 * Project object
 */
export interface ProjectVO {
    id?: string
    name?: string
    description?: string
    privacy?: string

    /** @format int64 */
    createdTime?: number

    /** User object */
    owner?: UserVO
    statistics?: StatisticsVO
}

export interface ResponseMessageListUserRoleVO {
    code?: string
    message?: string
    data?: UserRoleVO[]
}

/**
 * User object
 */
export interface RoleVO {
    id?: string
    name?: string
    code?: string
    description?: string
}

export interface StatisticsVO {
    /** @format int32 */
    modelCounts?: number

    /** @format int32 */
    datasetCounts?: number

    /** @format int32 */
    memberCounts?: number

    /** @format int32 */
    evaluationCounts?: number
}

/**
 * User Role object
 */
export interface UserRoleVO {
    id?: string

    /** Project object */
    project?: ProjectVO

    /** User object */
    role?: RoleVO
}

/**
 * System verion
 */
export interface SystemVersionVO {
    id?: string
    version?: string
}

/**
 * Upgrade progress object
 */
export interface UpgradeProgressVO {
    phase?: 'downloading' | 'upgrading'

    /** @format int32 */
    progress?: number
}

export interface ResponseMessageListSystemRoleVO {
    code?: string
    message?: string
    data?: SystemRoleVO[]
}

/**
 * System Role object
 */
export interface SystemRoleVO {
    id?: string

    /** User object */
    user?: UserVO

    /** User object */
    role?: RoleVO
}

export interface ResponseMessageListRoleVO {
    code?: string
    message?: string
    data?: RoleVO[]
}

export interface ResponseMessageRuntimeInfoVO {
    code?: string
    message?: string

    /** Runtime information object */
    data?: RuntimeInfoVO
}

/**
 * Runtime information object
 */
export interface RuntimeInfoVO {
    id?: string
    name?: string
    versionName?: string
    versionTag?: string
    versionMeta?: string
    manifest?: string

    /** @format int64 */
    createdTime?: number
    files?: StorageFileVO[]
}

/**
 * Storage file object
 */
export interface StorageFileVO {
    name?: string
    size?: string
}

export interface PageInfoRuntimeVersionVO {
    /** @format int64 */
    total?: number
    list?: RuntimeVersionVO[]

    /** @format int32 */
    pageNum?: number

    /** @format int32 */
    pageSize?: number

    /** @format int32 */
    size?: number

    /** @format int64 */
    startRow?: number

    /** @format int64 */
    endRow?: number

    /** @format int32 */
    pages?: number

    /** @format int32 */
    prePage?: number

    /** @format int32 */
    nextPage?: number
    isFirstPage?: boolean
    isLastPage?: boolean
    hasPreviousPage?: boolean
    hasNextPage?: boolean

    /** @format int32 */
    navigatePages?: number
    navigatepageNums?: number[]

    /** @format int32 */
    navigateFirstPage?: number

    /** @format int32 */
    navigateLastPage?: number
}

export interface ResponseMessagePageInfoRuntimeVersionVO {
    code?: string
    message?: string
    data?: PageInfoRuntimeVersionVO
}

/**
 * Runtime version object
 */
export interface RuntimeVersionVO {
    id?: string
    name?: string
    tag?: string
    meta?: object
    manifest?: string

    /** @format int64 */
    createdTime?: number

    /** User object */
    owner?: UserVO
}

/**
 * Project Role object
 */
export interface ProjectRoleVO {
    id?: string

    /** User object */
    user?: UserVO

    /** Project object */
    project?: ProjectVO

    /** User object */
    role?: RoleVO
}

export interface ResponseMessageListProjectRoleVO {
    code?: string
    message?: string
    data?: ProjectRoleVO[]
}

/**
 * SWModelPackage information object
 */
export interface SWModelPackageInfoVO {
    id?: string
    name?: string
    versionName?: string
    versionTag?: string
    versionMeta?: string
    manifest?: string

    /** @format int64 */
    createdTime?: number
    files?: StorageFileVO[]
}

/**
 * Job object
 */
export interface JobVO {
    id?: string
    uuid?: string
    modelName?: string
    modelVersion?: string
    datasets?: string[]

    /** Runtime object */
    runtime?: RuntimeVO
    device?: string

    /** @format int32 */
    deviceAmount?: number

    /** User object */
    owner?: UserVO

    /** @format int64 */
    createdTime?: number

    /** @format int64 */
    stopTime?: number
    jobStatus?:
        | 'CREATED'
        | 'READY'
        | 'PAUSED'
        | 'RUNNING'
        | 'TO_CANCEL'
        | 'CANCELLING'
        | 'CANCELED'
        | 'SUCCESS'
        | 'FAIL'
        | 'UNKNOWN'
    comment?: string
    resourcePool?: string

    /** @format int64 */
    duration?: number
}

/**
 * Runtime object
 */
export interface RuntimeVO {
    id?: string
    name?: string

    /** @format int64 */
    createdTime?: number

    /** User object */
    owner?: UserVO

    /** Runtime version object */
    version?: RuntimeVersionVO
}

export interface Graph {
    /** @format int64 */
    id?: number
    groupingNodes?: Record<string, GraphNode[]>
    edges?: GraphEdge[]
}

export interface GraphEdge {
    /** @format int64 */
    from?: number

    /** @format int64 */
    to?: number
    content?: string
}

export interface GraphNode {
    /** @format int64 */
    id?: number
    type?: string
    content?: object
    group?: string

    /** @format int64 */
    entityId?: number
}

export interface AttributeValueVO {
    name?: string
    type?: string
    value?: string
}

export interface PageInfoSummaryVO {
    /** @format int64 */
    total?: number
    list?: SummaryVO[]

    /** @format int32 */
    pageNum?: number

    /** @format int32 */
    pageSize?: number

    /** @format int32 */
    size?: number

    /** @format int64 */
    startRow?: number

    /** @format int64 */
    endRow?: number

    /** @format int32 */
    pages?: number

    /** @format int32 */
    prePage?: number

    /** @format int32 */
    nextPage?: number
    isFirstPage?: boolean
    isLastPage?: boolean
    hasPreviousPage?: boolean
    hasNextPage?: boolean

    /** @format int32 */
    navigatePages?: number
    navigatepageNums?: number[]

    /** @format int32 */
    navigateFirstPage?: number

    /** @format int32 */
    navigateLastPage?: number
}

export interface ResponseMessagePageInfoSummaryVO {
    code?: string
    message?: string
    data?: PageInfoSummaryVO
}

/**
 * Evaluation Summary object
 */
export interface SummaryVO {
    id?: string
    uuid?: string
    projectId?: string
    projectName?: string
    modelName?: string
    modelVersion?: string
    datasets?: string
    runtime?: string
    device?: string

    /** @format int32 */
    deviceAmount?: number

    /** @format int64 */
    createdTime?: number

    /** @format int64 */
    stopTime?: number
    owner?: string

    /** @format int64 */
    duration?: number
    attributes?: AttributeValueVO[]
}

/**
 * Evaluation View Config object
 */
export interface ConfigVO {
    name?: string
    content?: string

    /** @format int64 */
    createTime?: number
}

export interface ResponseMessageConfigVO {
    code?: string
    message?: string

    /** Evaluation View Config object */
    data?: ConfigVO
}

/**
 * Evaluation Attribute object
 */
export interface AttributeVO {
    name?: string
    type?: string
}

export interface ResponseMessageListAttributeVO {
    code?: string
    message?: string
    data?: AttributeVO[]
}

export interface FileStorageEnv {
    envs?: Record<string, string>
    envType?: 'S3' | 'HDFS' | 'NFS' | 'LOCAL_FS' | 'REST_RESOURCE' | 'FTP'
}

/**
 * SWDataset information object
 */
export interface SWDatasetInfoVO {
    indexTable?: string
    fileStorageEnvs?: Record<string, FileStorageEnv>
    id?: string
    name?: string
    versionName?: string
    versionTag?: string
    versionMeta?: string

    /** @format int64 */
    createdTime?: number
    files?: StorageFileVO[]
}

export interface UserRoleDeleteRequest {
    currentUserPwd: string
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios'

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean
    /** request path */
    path: string
    /** content type of request body */
    type?: ContentType
    /** query params */
    query?: QueryParamsType
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType
    /** request body */
    body?: unknown
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
    securityWorker?: (
        securityData: SecurityDataType | null
    ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
    secure?: boolean
    format?: ResponseType
}

export enum ContentType {
    Json = 'application/json',
    FormData = 'multipart/form-data',
    UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
    public instance: AxiosInstance
    private securityData: SecurityDataType | null = null
    private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
    private secure?: boolean
    private format?: ResponseType

    constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
        this.instance = axios.create({
            ...axiosConfig,
            baseURL: axiosConfig.baseURL || 'http://console.pre.intra.starwhale.ai',
        })
        this.secure = secure
        this.format = format
        this.securityWorker = securityWorker
    }

    public setSecurityData = (data: SecurityDataType | null) => {
        this.securityData = data
    }

    private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
        return {
            ...this.instance.defaults,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.instance.defaults.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        }
    }

    private createFormData(input: Record<string, unknown>): FormData {
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key]
            formData.append(
                key,
                property instanceof Blob
                    ? property
                    : typeof property === 'object' && property !== null
                    ? JSON.stringify(property)
                    : `${property}`
            )
            return formData
        }, new FormData())
    }

    public request = async <T = any, _E = any>({
        secure,
        path,
        type,
        query,
        format,
        body,
        ...params
    }: FullRequestParams): Promise<AxiosResponse<T>> => {
        const secureParams =
            ((typeof secure === 'boolean' ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
            {}
        const requestParams = this.mergeRequestParams(params, secureParams)
        const responseFormat = (format && this.format) || void 0

        if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
            requestParams.headers.common = { Accept: '*/*' }
            requestParams.headers.post = {}
            requestParams.headers.put = {}

            body = this.createFormData(body as Record<string, unknown>)
        }

        return this.instance.request({
            ...requestParams,
            headers: {
                ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
                ...(requestParams.headers || {}),
            },
            params: query,
            responseType: responseFormat,
            data: body,
            url: path,
        })
    }
}

/**
 * @title StarWhale Rest Api
 * @version {sw.version:1.0}
 * @baseUrl http://console.pre.intra.starwhale.ai
 *
 * Rest Api for starWhale controller
 */
export class Api<SecurityDataType extends unknown> {
    http: HttpClient<SecurityDataType>

    constructor(http: HttpClient<SecurityDataType>) {
        this.http = http
    }

    api = {
        /**
         * No description
         *
         * @tags User
         * @name UpdateUserState
         * @summary Enable or disable a user
         * @request PUT:/api/v1/user/{userId}/state
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        updateUserState: (userId: string, data: UserUpdateStateRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/user/${userId}/state`,
                method: 'PUT',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags User
         * @name UpdateUserPwd
         * @summary Change user password
         * @request PUT:/api/v1/user/{userId}/pwd
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        updateUserPwd: (userId: string, data: UserUpdatePasswordRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/user/${userId}/pwd`,
                method: 'PUT',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags User
         * @name UpdateCurrentUserPassword
         * @summary Update Current User password
         * @request PUT:/api/v1/user/current/pwd
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        updateCurrentUserPassword: (data: UserUpdatePasswordRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/user/current/pwd`,
                method: 'PUT',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags User
         * @name CheckCurrentUserPassword
         * @summary Check Current User password
         * @request POST:/api/v1/user/current/pwd
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        checkCurrentUserPassword: (data: UserCheckPasswordRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/user/current/pwd`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags User
         * @name UpdateUserSystemRole
         * @summary Update user role of system
         * @request PUT:/api/v1/role/{systemRoleId}
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        updateUserSystemRole: (systemRoleId: string, data: UserRoleUpdateRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/role/${systemRoleId}`,
                method: 'PUT',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags User
         * @name DeleteUserSystemRole
         * @summary Delete user role of system
         * @request DELETE:/api/v1/role/{systemRoleId}
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        deleteUserSystemRole: (systemRoleId: string, data: UserRoleDeleteRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/role/${systemRoleId}`,
                method: 'DELETE',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Returns a single project object.
         *
         * @tags Project
         * @name GetProjectByUrl
         * @summary Get a project by Url
         * @request GET:/api/v1/project/{projectUrl}
         * @secure
         * @response `200` `ProjectVO` ok.
         */
        getProjectByUrl: (projectUrl: string, params: RequestParams = {}) =>
            this.http.request<ProjectVO, any>({
                path: `/api/v1/project/${projectUrl}`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Project
         * @name UpdateProject
         * @summary Modify project information
         * @request PUT:/api/v1/project/{projectUrl}
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        updateProject: (projectUrl: string, data: UpdateProjectRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}`,
                method: 'PUT',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Project
         * @name DeleteProjectByUrl
         * @summary Delete a project by Url
         * @request DELETE:/api/v1/project/{projectUrl}
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        deleteProjectByUrl: (projectUrl: string, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}`,
                method: 'DELETE',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags SWRuntime
         * @name ManageRuntimeTag
         * @summary Manage tag of the runtime version
         * @request PUT:/api/v1/project/{projectUrl}/runtime/{runtimeUrl}/version/{versionUrl}/tag
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        manageRuntimeTag: (
            projectUrl: string,
            runtimeUrl: string,
            versionUrl: string,
            data: RuntimeTagRequest,
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/runtime/${runtimeUrl}/version/${versionUrl}/tag`,
                method: 'PUT',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags SWRuntime
         * @name ModifyRuntime
         * @summary Set tag of the model version
         * @request PUT:/api/v1/project/{projectUrl}/runtime/{runtimeUrl}/version/{runtimeVersionUrl}
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        modifyRuntime: (
            projectUrl: string,
            runtimeUrl: string,
            runtimeVersionUrl: string,
            data: RuntimeTagRequest,
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/runtime/${runtimeUrl}/version/${runtimeVersionUrl}`,
                method: 'PUT',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags SWRuntime
         * @name RecoverRuntime
         * @summary Recover a runtime
         * @request PUT:/api/v1/project/{projectUrl}/runtime/{runtimeUrl}/recover
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        recoverRuntime: (projectUrl: string, runtimeUrl: string, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/runtime/${runtimeUrl}/recover`,
                method: 'PUT',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Project
         * @name ModifyProjectRole
         * @summary Modify a project role
         * @request PUT:/api/v1/project/{projectUrl}/role/{projectRoleId}
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        modifyProjectRole: (
            projectUrl: string,
            projectRoleId: string,
            query: { roleId: string },
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/role/${projectRoleId}`,
                method: 'PUT',
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Project
         * @name DeleteProjectRole
         * @summary Delete a project role
         * @request DELETE:/api/v1/project/{projectUrl}/role/{projectRoleId}
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        deleteProjectRole: (projectUrl: string, projectRoleId: string, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/role/${projectRoleId}`,
                method: 'DELETE',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Model
         * @name ModifyModel
         * @summary Set tag of the model version
         * @request PUT:/api/v1/project/{projectUrl}/model/{modelUrl}/version/{versionUrl}
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        modifyModel: (
            projectUrl: string,
            modelUrl: string,
            versionUrl: string,
            data: SWMPTagRequest,
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/model/${modelUrl}/version/${versionUrl}`,
                method: 'PUT',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description head for swmp info
         *
         * @tags Model
         * @name HeadModel
         * @summary head for swmp info
         * @request HEAD:/api/v1/project/{projectUrl}/model/{modelUrl}/version/{versionUrl}
         * @secure
         * @response `200` `object` ok
         */
        headModel: (projectUrl: string, modelUrl: string, versionUrl: string, params: RequestParams = {}) =>
            this.http.request<object, any>({
                path: `/api/v1/project/${projectUrl}/model/${modelUrl}/version/${versionUrl}`,
                method: 'HEAD',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Model
         * @name ManageModelTag
         * @summary Manage tag of the model version
         * @request PUT:/api/v1/project/{projectUrl}/model/{modelUrl}/version/{versionUrl}/tag
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        manageModelTag: (
            projectUrl: string,
            modelUrl: string,
            versionUrl: string,
            data: SWMPTagRequest,
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/model/${modelUrl}/version/${versionUrl}/tag`,
                method: 'PUT',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Model
         * @name RecoverModel
         * @summary Recover a model
         * @request PUT:/api/v1/project/{projectUrl}/model/{modelUrl}/recover
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        recoverModel: (projectUrl: string, modelUrl: string, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/model/${modelUrl}/recover`,
                method: 'PUT',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Job
         * @name FindJob
         * @summary Job information
         * @request GET:/api/v1/project/{projectUrl}/job/{jobUrl}
         * @secure
         * @response `200` `JobVO` OK
         */
        findJob: (projectUrl: string, jobUrl: string, params: RequestParams = {}) =>
            this.http.request<JobVO, any>({
                path: `/api/v1/project/${projectUrl}/job/${jobUrl}`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Job
         * @name ModifyJobComment
         * @summary Set Job Comment
         * @request PUT:/api/v1/project/{projectUrl}/job/{jobUrl}
         * @secure
         * @response `200` `string` OK
         */
        modifyJobComment: (projectUrl: string, jobUrl: string, data: JobModifyRequest, params: RequestParams = {}) =>
            this.http.request<string, any>({
                path: `/api/v1/project/${projectUrl}/job/${jobUrl}`,
                method: 'PUT',
                body: data,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Job
         * @name RemoveJob
         * @summary Remove job
         * @request DELETE:/api/v1/project/{projectUrl}/job/{jobUrl}
         * @secure
         * @response `200` `string` OK
         */
        removeJob: (projectUrl: string, jobUrl: string, params: RequestParams = {}) =>
            this.http.request<string, any>({
                path: `/api/v1/project/${projectUrl}/job/${jobUrl}`,
                method: 'DELETE',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Dataset
         * @name ModifyDatasetVersionInfo
         * @summary Set the tag of the dataset version
         * @request PUT:/api/v1/project/{projectUrl}/dataset/{datasetUrl}/version/{versionUrl}
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        modifyDatasetVersionInfo: (
            projectUrl: string,
            datasetUrl: string,
            versionUrl: string,
            data: SWDSTagRequest,
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/dataset/${datasetUrl}/version/${versionUrl}`,
                method: 'PUT',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description head for swds info
         *
         * @tags Dataset
         * @name HeadDataset
         * @summary head for swds info
         * @request HEAD:/api/v1/project/{projectUrl}/dataset/{datasetUrl}/version/{versionUrl}
         * @secure
         * @response `200` `object` ok
         */
        headDataset: (projectUrl: string, datasetUrl: string, versionUrl: string, params: RequestParams = {}) =>
            this.http.request<object, any>({
                path: `/api/v1/project/${projectUrl}/dataset/${datasetUrl}/version/${versionUrl}`,
                method: 'HEAD',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * @description add|remove|set tags
         *
         * @tags Dataset
         * @name ManageDatasetTag
         * @summary Manage tag of the dataset version
         * @request PUT:/api/v1/project/{projectUrl}/dataset/{datasetUrl}/version/{versionUrl}/tag
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        manageDatasetTag: (
            projectUrl: string,
            datasetUrl: string,
            versionUrl: string,
            data: SWDSTagRequest,
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/dataset/${datasetUrl}/version/${versionUrl}/tag`,
                method: 'PUT',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Dataset
         * @name RecoverDataset
         * @summary Recover a dataset
         * @request PUT:/api/v1/project/{projectUrl}/dataset/{datasetUrl}/recover
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        recoverDataset: (projectUrl: string, datasetUrl: string, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/dataset/${datasetUrl}/recover`,
                method: 'PUT',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Project
         * @name RecoverProject
         * @summary Recover a project
         * @request PUT:/api/v1/project/{projectId}/recover
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        recoverProject: (projectId: string, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectId}/recover`,
                method: 'PUT',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags User
         * @name ListUser
         * @summary Get the list of users
         * @request GET:/api/v1/user
         * @secure
         * @response `200` `PageInfo` ok
         */
        listUser: (query?: { userName?: string; pageNum?: number; pageSize?: number }, params: RequestParams = {}) =>
            this.http.request<PageInfo, any>({
                path: `/api/v1/user`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags User
         * @name CreateUser
         * @summary Create a new user
         * @request POST:/api/v1/user
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        createUser: (data: UserRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/user`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags System
         * @name SystemVersionAction
         * @summary Upgrade system version or cancel upgrade
         * @request POST:/api/v1/system/version/{action}
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        systemVersionAction: (action: 'upgrade' | 'cancel', params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/system/version/${action}`,
                method: 'POST',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags User
         * @name ListSystemRoles
         * @summary List system role of users
         * @request GET:/api/v1/role
         * @secure
         * @response `200` `ResponseMessageListSystemRoleVO` ok
         */
        listSystemRoles: (params: RequestParams = {}) =>
            this.http.request<ResponseMessageListSystemRoleVO, any>({
                path: `/api/v1/role`,
                method: 'GET',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags User
         * @name AddUserSystemRole
         * @summary Add user role of system
         * @request POST:/api/v1/role
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        addUserSystemRole: (data: UserRoleAddRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/role`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Project
         * @name ListProject
         * @summary Get the list of projects
         * @request GET:/api/v1/project
         * @secure
         * @response `200` `PageInfo` ok
         */
        listProject: (
            query?: { projectName?: string; pageNum?: number; pageSize?: number; sort?: string; order?: number },
            params: RequestParams = {}
        ) =>
            this.http.request<PageInfo, any>({
                path: `/api/v1/project`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Project
         * @name CreateProject
         * @summary Create or Recover a new project
         * @request POST:/api/v1/project
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        createProject: (data: CreateProjectRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Select a historical version of the runtime and revert the latest version of the current runtime to this version
         *
         * @tags SWRuntime
         * @name RevertRuntimeVersion
         * @summary Revert Runtime version
         * @request POST:/api/v1/project/{projectUrl}/runtime/{runtimeUrl}/revert
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        revertRuntimeVersion: (
            projectUrl: string,
            runtimeUrl: string,
            data: RuntimeRevertRequest,
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/runtime/${runtimeUrl}/revert`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * @description Create a new version of the runtime. The data resources can be selected by uploading the file package or entering the server path.
         *
         * @tags SWRuntime
         * @name Upload
         * @summary Create a new runtime version
         * @request POST:/api/v1/project/{projectUrl}/runtime/{runtimeName}/version/{versionName}/file
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        upload: (
            projectUrl: string,
            runtimeName: string,
            versionName: string,
            query: { uploadRequest: ClientRuntimeRequest },
            data: { file: File },
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/runtime/${runtimeName}/version/${versionName}/file`,
                method: 'POST',
                query: query,
                body: data,
                secure: true,
                type: ContentType.FormData,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Project
         * @name ListProjectRole
         * @summary List project roles
         * @request GET:/api/v1/project/{projectUrl}/role
         * @secure
         * @response `200` `ResponseMessageListProjectRoleVO` ok
         */
        listProjectRole: (projectUrl: string, params: RequestParams = {}) =>
            this.http.request<ResponseMessageListProjectRoleVO, any>({
                path: `/api/v1/project/${projectUrl}/role`,
                method: 'GET',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Project
         * @name AddProjectRole
         * @summary Grant project role to a user
         * @request POST:/api/v1/project/{projectUrl}/role
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        addProjectRole: (projectUrl: string, query: { userId: string; roleId: string }, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/role`,
                method: 'POST',
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Select a historical version of the model and revert the latest version of the current model to this version
         *
         * @tags Model
         * @name RevertModelVersion
         * @summary Revert model version
         * @request POST:/api/v1/project/{projectUrl}/model/{modelUrl}/revert
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        revertModelVersion: (
            projectUrl: string,
            modelUrl: string,
            data: RevertSWMPVersionRequest,
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/model/${modelUrl}/revert`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Create a new version of the swmp. The data resources can be selected by uploading the file package or entering the server path.
         *
         * @tags Model
         * @name Upload1
         * @summary Create a new swmp version
         * @request POST:/api/v1/project/{projectUrl}/model/{modelName}/version/{versionName}/file
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        upload1: (
            projectUrl: string,
            modelName: string,
            versionName: string,
            query: { uploadRequest: ClientSWMPRequest },
            data: { file: File },
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/model/${modelName}/version/${versionName}/file`,
                method: 'POST',
                query: query,
                body: data,
                secure: true,
                type: ContentType.FormData,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Job
         * @name ListJobs
         * @summary Get the list of jobs
         * @request GET:/api/v1/project/{projectUrl}/job
         * @secure
         * @response `200` `PageInfo` ok
         */
        listJobs: (
            projectUrl: string,
            query?: { swmpId?: string; pageNum?: number; pageSize?: number },
            params: RequestParams = {}
        ) =>
            this.http.request<PageInfo, any>({
                path: `/api/v1/project/${projectUrl}/job`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Job
         * @name CreateJob
         * @summary Create a new job
         * @request POST:/api/v1/project/{projectUrl}/job
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        createJob: (projectUrl: string, data: JobRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/job`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Job
         * @name Action
         * @summary Job Action
         * @request POST:/api/v1/project/{projectUrl}/job/{jobUrl}/{action}
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        action: (projectUrl: string, jobUrl: string, action: string, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/job/${jobUrl}/${action}`,
                method: 'POST',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Job
         * @name RecoverJob
         * @summary Recover job
         * @request POST:/api/v1/project/{projectUrl}/job/{jobUrl}/recover
         * @secure
         * @response `200` `string` OK
         */
        recoverJob: (projectUrl: string, jobUrl: string, params: RequestParams = {}) =>
            this.http.request<string, any>({
                path: `/api/v1/project/${projectUrl}/job/${jobUrl}/recover`,
                method: 'POST',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Evaluation
         * @name GetViewConfig
         * @summary Get View Config
         * @request GET:/api/v1/project/{projectUrl}/evaluation/view/config
         * @secure
         * @response `200` `ResponseMessageConfigVO` ok
         */
        getViewConfig: (projectUrl: string, query: { name: string }, params: RequestParams = {}) =>
            this.http.request<ResponseMessageConfigVO, any>({
                path: `/api/v1/project/${projectUrl}/evaluation/view/config`,
                method: 'GET',
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Evaluation
         * @name CreateViewConfig
         * @summary Create or Update View Config
         * @request POST:/api/v1/project/{projectUrl}/evaluation/view/config
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        createViewConfig: (projectUrl: string, data: ConfigRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/evaluation/view/config`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Select a historical version of the dataset and revert the latest version of the current dataset to this version
         *
         * @tags Dataset
         * @name RevertDatasetVersion
         * @summary Revert Dataset version
         * @request POST:/api/v1/project/{projectUrl}/dataset/{datasetUrl}/revert
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        revertDatasetVersion: (
            projectUrl: string,
            datasetUrl: string,
            data: RevertSWDSRequest,
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/dataset/${datasetUrl}/revert`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Create a new version of the dataset. The data resources can be selected by uploading the file package or entering the server path.
         *
         * @tags Dataset
         * @name UploadDs
         * @summary Create a new dataset version
         * @request POST:/api/v1/project/{projectUrl}/dataset/{datasetName}/version/{versionName}/file
         * @secure
         * @response `200` `ResponseMessageUploadResult` ok
         */
        uploadDs: (
            projectUrl: string,
            datasetName: string,
            versionName: string,
            query: { uploadRequest: UploadRequest },
            data: { file?: File },
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessageUploadResult, any>({
                path: `/api/v1/project/${projectUrl}/dataset/${datasetName}/version/${versionName}/file`,
                method: 'POST',
                query: query,
                body: data,
                secure: true,
                type: ContentType.FormData,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags data-store-controller
         * @name UpdateTable
         * @request POST:/api/v1/datastore/updateTable
         * @secure
         * @response `200` `ResponseMessageString` OK
         */
        updateTable: (data: UpdateTableRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/datastore/updateTable`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags data-store-controller
         * @name ScanTable
         * @request POST:/api/v1/datastore/scanTable
         * @secure
         * @response `200` `ResponseMessageRecordListVO` OK
         */
        scanTable: (data: ScanTableRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageRecordListVO, any>({
                path: `/api/v1/datastore/scanTable`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags data-store-controller
         * @name QueryTable
         * @request POST:/api/v1/datastore/queryTable
         * @secure
         * @response `200` `ResponseMessageRecordListVO` OK
         */
        queryTable: (data: QueryTableRequest, params: RequestParams = {}) =>
            this.http.request<ResponseMessageRecordListVO, any>({
                path: `/api/v1/datastore/queryTable`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description head for runtime info
         *
         * @tags SWRuntime
         * @name HeadRuntime
         * @summary head for runtime info
         * @request HEAD:/api/v1/project/{projectUrl}/runtime/{runtimeUrl}/version/{versionUrl}
         * @secure
         * @response `200` `object` OK
         */
        headRuntime: (projectUrl: string, runtimeUrl: string, versionUrl: string, params: RequestParams = {}) =>
            this.http.request<object, any>({
                path: `/api/v1/project/${projectUrl}/runtime/${runtimeUrl}/version/${versionUrl}`,
                method: 'HEAD',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags User
         * @name GetUserById
         * @summary Get a user by user ID
         * @request GET:/api/v1/user/{userId}
         * @secure
         * @response `200` `UserVO` ok.
         */
        getUserById: (userId: string, params: RequestParams = {}) =>
            this.http.request<UserVO, any>({
                path: `/api/v1/user/${userId}`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * @description Get token of any user for third party system integration, only super admin is allowed to do this
         *
         * @tags User
         * @name UserToken
         * @summary Get arbitrary user token
         * @request GET:/api/v1/user/token/{userId}
         * @secure
         * @response `200` `string` ok
         */
        userToken: (userId: number, params: RequestParams = {}) =>
            this.http.request<string, any>({
                path: `/api/v1/user/token/${userId}`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags User
         * @name GetCurrentUser
         * @summary Get the current logged in user.
         * @request GET:/api/v1/user/current
         * @secure
         * @response `200` `UserVO` ok.
         */
        getCurrentUser: (params: RequestParams = {}) =>
            this.http.request<UserVO, any>({
                path: `/api/v1/user/current`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags User
         * @name GetCurrentUserRoles
         * @summary Get the current user roles.
         * @request GET:/api/v1/user/current/role
         * @secure
         * @response `200` `ResponseMessageListUserRoleVO` ok
         */
        getCurrentUserRoles: (query?: { projectUrl?: string }, params: RequestParams = {}) =>
            this.http.request<ResponseMessageListUserRoleVO, any>({
                path: `/api/v1/user/current/role`,
                method: 'GET',
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags System
         * @name GetCurrentVersion
         * @summary Get current version of the system
         * @request GET:/api/v1/system/version
         * @secure
         * @response `200` `SystemVersionVO` ok
         */
        getCurrentVersion: (params: RequestParams = {}) =>
            this.http.request<SystemVersionVO, any>({
                path: `/api/v1/system/version`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * @description Get the current server upgrade process. If downloading, return the download progress
         *
         * @tags System
         * @name GetUpgradeProgress
         * @summary Get the current upgrade progress
         * @request GET:/api/v1/system/version/progress
         * @secure
         * @response `200` `UpgradeProgressVO` ok
         */
        getUpgradeProgress: (params: RequestParams = {}) =>
            this.http.request<UpgradeProgressVO, any>({
                path: `/api/v1/system/version/progress`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags System
         * @name GetLatestVersion
         * @summary Get latest version of the system
         * @request GET:/api/v1/system/version/latest
         * @secure
         * @response `200` `SystemVersionVO` ok
         */
        getLatestVersion: (params: RequestParams = {}) =>
            this.http.request<SystemVersionVO, any>({
                path: `/api/v1/system/version/latest`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags System
         * @name ListResourcePools
         * @summary Get the list of resource pool
         * @request GET:/api/v1/system/resourcePool
         * @secure
         * @response `200` `string` ok
         */
        listResourcePools: (params: RequestParams = {}) =>
            this.http.request<string, any>({
                path: `/api/v1/system/resourcePool`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags System
         * @name ListAgent
         * @summary Get the list of agents
         * @request GET:/api/v1/system/agent
         * @secure
         * @response `200` `PageInfo` ok
         */
        listAgent: (query?: { ip?: string; pageNum?: number; pageSize?: number }, params: RequestParams = {}) =>
            this.http.request<PageInfo, any>({
                path: `/api/v1/system/agent`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Runtime
         * @name ListDevice
         * @summary Get the list of device types
         * @request GET:/api/v1/runtime/device
         * @secure
         * @response `200` `string` ok
         */
        listDevice: (params: RequestParams = {}) =>
            this.http.request<string, any>({
                path: `/api/v1/runtime/device`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags User
         * @name ListRoles
         * @summary List role enums
         * @request GET:/api/v1/role/enums
         * @secure
         * @response `200` `ResponseMessageListRoleVO` ok
         */
        listRoles: (params: RequestParams = {}) =>
            this.http.request<ResponseMessageListRoleVO, any>({
                path: `/api/v1/role/enums`,
                method: 'GET',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags SWRuntime
         * @name ListRuntime
         * @summary Get the list of runtimes
         * @request GET:/api/v1/project/{projectUrl}/runtime
         * @secure
         * @response `200` `PageInfo` ok
         */
        listRuntime: (
            projectUrl: string,
            query?: { runtimeName?: string; pageNum?: number; pageSize?: number },
            params: RequestParams = {}
        ) =>
            this.http.request<PageInfo, any>({
                path: `/api/v1/project/${projectUrl}/runtime`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * @description Return the information of the latest version of the current runtime
         *
         * @tags SWRuntime
         * @name GetRuntimeInfo
         * @summary Get the information of a runtime
         * @request GET:/api/v1/project/{projectUrl}/runtime/{runtimeUrl}
         * @secure
         * @response `200` `ResponseMessageRuntimeInfoVO` OK
         */
        getRuntimeInfo: (
            projectUrl: string,
            runtimeUrl: string,
            query?: { runtimeVersionUrl?: string },
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessageRuntimeInfoVO, any>({
                path: `/api/v1/project/${projectUrl}/runtime/${runtimeUrl}`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags SWRuntime
         * @name DeleteRuntime
         * @summary Delete a runtime
         * @request DELETE:/api/v1/project/{projectUrl}/runtime/{runtimeUrl}
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        deleteRuntime: (projectUrl: string, runtimeUrl: string, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/runtime/${runtimeUrl}`,
                method: 'DELETE',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags SWRuntime
         * @name ListRuntimeVersion
         * @summary Get the list of the runtime versions
         * @request GET:/api/v1/project/{projectUrl}/runtime/{runtimeUrl}/version
         * @secure
         * @response `200` `ResponseMessagePageInfoRuntimeVersionVO` OK
         */
        listRuntimeVersion: (
            projectUrl: string,
            runtimeUrl: string,
            query?: { name?: string; tag?: string; pageNum?: number; pageSize?: number },
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessagePageInfoRuntimeVersionVO, any>({
                path: `/api/v1/project/${projectUrl}/runtime/${runtimeUrl}/version`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * @description Pull file of a runtime version.
         *
         * @tags SWRuntime
         * @name Pull
         * @summary Pull file of a runtime version
         * @request GET:/api/v1/project/{projectUrl}/runtime/{runtimeUrl}/version/{versionUrl}/file
         * @secure
         * @response `200` `void` ok
         */
        pull: (projectUrl: string, runtimeUrl: string, versionUrl: string, params: RequestParams = {}) =>
            this.http.request<void, any>({
                path: `/api/v1/project/${projectUrl}/runtime/${runtimeUrl}/version/${versionUrl}/file`,
                method: 'GET',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Model
         * @name ListModel
         * @summary Get the list of models
         * @request GET:/api/v1/project/{projectUrl}/model
         * @secure
         * @response `200` `PageInfo` ok
         */
        listModel: (
            projectUrl: string,
            query?: { versionId?: string; modelName?: string; pageNum?: number; pageSize?: number },
            params: RequestParams = {}
        ) =>
            this.http.request<PageInfo, any>({
                path: `/api/v1/project/${projectUrl}/model`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * @description Return the file information in the model package of the latest version of the current model
         *
         * @tags Model
         * @name GetModelInfo
         * @summary Model information
         * @request GET:/api/v1/project/{projectUrl}/model/{modelUrl}
         * @secure
         * @response `200` `SWModelPackageInfoVO` OK
         */
        getModelInfo: (
            projectUrl: string,
            modelUrl: string,
            query?: { versionUrl?: string },
            params: RequestParams = {}
        ) =>
            this.http.request<SWModelPackageInfoVO, any>({
                path: `/api/v1/project/${projectUrl}/model/${modelUrl}`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Model
         * @name DeleteModel
         * @summary Delete a model
         * @request DELETE:/api/v1/project/{projectUrl}/model/{modelUrl}
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        deleteModel: (projectUrl: string, modelUrl: string, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/model/${modelUrl}`,
                method: 'DELETE',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Model
         * @name ListModelVersion
         * @summary Get the list of model versions
         * @request GET:/api/v1/project/{projectUrl}/model/{modelUrl}/version
         * @secure
         * @response `200` `PageInfo` ok
         */
        listModelVersion: (
            projectUrl: string,
            modelUrl: string,
            query?: { name?: string; tag?: string; pageNum?: number; pageSize?: number },
            params: RequestParams = {}
        ) =>
            this.http.request<PageInfo, any>({
                path: `/api/v1/project/${projectUrl}/model/${modelUrl}/version`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * @description Create a new version of the swmp.
         *
         * @tags Model
         * @name Pull1
         * @summary Pull file of a model version
         * @request GET:/api/v1/project/{projectUrl}/model/{modelUrl}/version/{versionUrl}/file
         * @secure
         * @response `200` `void` ok
         */
        pull1: (projectUrl: string, modelUrl: string, versionUrl: string, params: RequestParams = {}) =>
            this.http.request<void, any>({
                path: `/api/v1/project/${projectUrl}/model/${modelUrl}/version/${versionUrl}/file`,
                method: 'GET',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Job
         * @name ListTasks
         * @summary Get the list of tasks
         * @request GET:/api/v1/project/{projectUrl}/job/{jobUrl}/task
         * @secure
         * @response `200` `PageInfo` ok
         */
        listTasks: (
            projectUrl: string,
            jobUrl: string,
            query?: { pageNum?: number; pageSize?: number },
            params: RequestParams = {}
        ) =>
            this.http.request<PageInfo, any>({
                path: `/api/v1/project/${projectUrl}/job/${jobUrl}/task`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Job
         * @name GetJobResult
         * @summary Job Evaluation Result
         * @request GET:/api/v1/project/{projectUrl}/job/{jobUrl}/result
         * @secure
         * @response `200` `object` OK
         */
        getJobResult: (projectUrl: string, jobUrl: string, params: RequestParams = {}) =>
            this.http.request<object, any>({
                path: `/api/v1/project/${projectUrl}/job/${jobUrl}/result`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Job
         * @name GetJobDag
         * @summary DAG of Job
         * @request GET:/api/v1/project/{projectUrl}/job/{jobUrl}/dag
         * @secure
         * @response `200` `Graph` OK
         */
        getJobDag: (projectUrl: string, jobUrl: string, params: RequestParams = {}) =>
            this.http.request<Graph, any>({
                path: `/api/v1/project/${projectUrl}/job/${jobUrl}/dag`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Evaluation
         * @name ListEvaluationSummary
         * @summary List Evaluation Summary
         * @request GET:/api/v1/project/{projectUrl}/evaluation
         * @secure
         * @response `200` `ResponseMessagePageInfoSummaryVO` ok
         */
        listEvaluationSummary: (
            projectUrl: string,
            query: { filter: string; pageNum?: number; pageSize?: number },
            params: RequestParams = {}
        ) =>
            this.http.request<ResponseMessagePageInfoSummaryVO, any>({
                path: `/api/v1/project/${projectUrl}/evaluation`,
                method: 'GET',
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Evaluation
         * @name ListAttributes
         * @summary List Evaluation Summary Attributes
         * @request GET:/api/v1/project/{projectUrl}/evaluation/view/attribute
         * @secure
         * @response `200` `ResponseMessageListAttributeVO` ok
         */
        listAttributes: (projectUrl: string, params: RequestParams = {}) =>
            this.http.request<ResponseMessageListAttributeVO, any>({
                path: `/api/v1/project/${projectUrl}/evaluation/view/attribute`,
                method: 'GET',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Dataset
         * @name ListDataset
         * @summary Get the list of the datasets
         * @request GET:/api/v1/project/{projectUrl}/dataset
         * @secure
         * @response `200` `PageInfo` ok
         */
        listDataset: (
            projectUrl: string,
            query?: { versionId?: string; pageNum?: number; pageSize?: number },
            params: RequestParams = {}
        ) =>
            this.http.request<PageInfo, any>({
                path: `/api/v1/project/${projectUrl}/dataset`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * @description Return the information of the latest version of the current dataset
         *
         * @tags Dataset
         * @name GetDatasetInfo
         * @summary Get the information of a dataset
         * @request GET:/api/v1/project/{projectUrl}/dataset/{datasetUrl}
         * @secure
         * @response `200` `SWDatasetInfoVO` OK
         */
        getDatasetInfo: (
            projectUrl: string,
            datasetUrl: string,
            query?: { versionUrl?: string },
            params: RequestParams = {}
        ) =>
            this.http.request<SWDatasetInfoVO, any>({
                path: `/api/v1/project/${projectUrl}/dataset/${datasetUrl}`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Dataset
         * @name DeleteDataset
         * @summary Delete a dataset
         * @request DELETE:/api/v1/project/{projectUrl}/dataset/{datasetUrl}
         * @secure
         * @response `200` `ResponseMessageString` ok
         */
        deleteDataset: (projectUrl: string, datasetUrl: string, params: RequestParams = {}) =>
            this.http.request<ResponseMessageString, any>({
                path: `/api/v1/project/${projectUrl}/dataset/${datasetUrl}`,
                method: 'DELETE',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Dataset
         * @name ListDatasetVersion
         * @summary Get the list of the dataset versions
         * @request GET:/api/v1/project/{projectUrl}/dataset/{datasetUrl}/version
         * @secure
         * @response `200` `PageInfo` ok
         */
        listDatasetVersion: (
            projectUrl: string,
            datasetUrl: string,
            query?: { name?: string; tag?: string; pageNum?: number; pageSize?: number },
            params: RequestParams = {}
        ) =>
            this.http.request<PageInfo, any>({
                path: `/api/v1/project/${projectUrl}/dataset/${datasetUrl}/version`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * @description Pull SWDS uri file contents
         *
         * @tags Dataset
         * @name PullLinkContent
         * @summary Pull SWDS uri file contents
         * @request GET:/api/v1/project/{projectUrl}/dataset/{datasetUrl}/version/{versionUrl}/link
         * @secure
         * @response `200` `void` ok
         */
        pullLinkContent: (
            projectUrl: string,
            datasetUrl: string,
            versionUrl: string,
            query: { uri: string; authName?: string },
            params: RequestParams = {}
        ) =>
            this.http.request<void, any>({
                path: `/api/v1/project/${projectUrl}/dataset/${datasetUrl}/version/${versionUrl}/link`,
                method: 'GET',
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Pull SWDS files part by part.
         *
         * @tags Dataset
         * @name PullDs
         * @summary Pull SWDS files
         * @request GET:/api/v1/project/{projectUrl}/dataset/{datasetUrl}/version/{versionUrl}/file
         * @secure
         * @response `200` `void` ok
         */
        pullDs: (
            projectUrl: string,
            datasetUrl: string,
            versionUrl: string,
            query?: { part_name?: string },
            params: RequestParams = {}
        ) =>
            this.http.request<void, any>({
                path: `/api/v1/project/${projectUrl}/dataset/${datasetUrl}/version/${versionUrl}/file`,
                method: 'GET',
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Log
         * @name OfflineLogs
         * @summary list the log files of a task
         * @request GET:/api/v1/log/offline/{taskId}
         * @secure
         * @response `200` `string` ok
         */
        offlineLogs: (taskId: number, params: RequestParams = {}) =>
            this.http.request<string, any>({
                path: `/api/v1/log/offline/${taskId}`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Log
         * @name LogContent
         * @summary Get the list of device types
         * @request GET:/api/v1/log/offline/{taskId}/{fileName}
         * @secure
         * @response `200` `string` ok
         */
        logContent: (taskId: number, fileName: string, params: RequestParams = {}) =>
            this.http.request<string, any>({
                path: `/api/v1/log/offline/${taskId}/${fileName}`,
                method: 'GET',
                secure: true,
                ...params,
            }),
    }
}
