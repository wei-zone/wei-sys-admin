<template>
    <div class="app-container">
        <div class="search-container">
            <el-form ref="queryFormRef" :model="queryParams" :inline="true">
                <el-form-item prop="keywords" label="关键字">
                    <el-input
                        v-model="queryParams.keywords"
                        placeholder="日志内容"
                        clearable
                        @keyup.enter="handleQuery"
                    />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="handleQuery">
                        <i-ep-search />
                        搜索
                    </el-button>
                    <el-button @click="handleResetQuery">
                        <i-ep-refresh />
                        重置
                    </el-button>
                </el-form-item>
            </el-form>
        </div>

        <el-card shadow="never">
            <el-table v-loading="loading" :data="pageData" highlight-current-row border>
                <el-table-column label="用户ID" prop="operator.id" width="120" />
                <el-table-column label="用户名" prop="operator.username" width="120" />
                <el-table-column label="模块" prop="module" width="120" />
                <el-table-column label="请求地址" prop="requestUri" width="200" />
                <el-table-column label="参数" prop="content" min-width="200" />
                <el-table-column label="IP" prop="ip" width="150" />
                <el-table-column label="浏览器" prop="browser" width="120" />
                <el-table-column label="系统" prop="os" width="120" show-overflow-tooltip />
                <el-table-column label="状态" prop="status" width="120" show-overflow-tooltip />
                <el-table-column label="消息" prop="message" width="200" show-overflow-tooltip />
                <el-table-column label="执行时间(ms)" prop="executionTime" width="120" />
                <el-table-column label="请求时间" prop="createdAt" width="180" />
            </el-table>
            <pagination
                v-if="total > 0"
                v-model:total="total"
                v-model:page="queryParams.pageCurrent"
                v-model:limit="queryParams.pageSize"
                @pagination="handleQuery"
            />
        </el-card>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'Log',
    inheritAttrs: false
})

import LogAPI, { LogPageVO, LogPageQuery } from '@/api/log'

const queryFormRef = ref(ElForm)

const loading = ref(false)
const total = ref(0)

const queryParams = reactive<LogPageQuery>({
    pageCurrent: 1,
    pageSize: 10,
    keywords: ''
})

// 日志表格数据
const pageData = ref<LogPageVO[]>()

/** 查询 */
function handleQuery() {
    loading.value = true
    LogAPI.getPage(queryParams)
        .then(data => {
            pageData.value = data.list
            total.value = data.total
        })
        .finally(() => {
            loading.value = false
        })
}
/** 重置查询 */
function handleResetQuery() {
    queryFormRef.value.resetFields()
    queryParams.pageCurrent = 1
    handleQuery()
}

onMounted(() => {
    handleQuery()
})
</script>
