import { defineMock } from './base'

export default defineMock([
    {
        url: 'depts/options',
        method: ['GET'],
        body: {
            code: 200,
            data: [
                {
                    value: 1,
                    label: '有来技术',
                    children: [
                        {
                            value: 2,
                            label: '研发部门'
                        },
                        {
                            value: 3,
                            label: '测试部门'
                        }
                    ]
                }
            ],
            message: 'success'
        }
    },
    {
        url: 'depts',
        method: ['POST'],
        body: {
            code: 200,
            data: [
                {
                    id: 1,
                    parentId: 0,
                    name: '有来技术',
                    code: 'YOULAI',
                    sort: 1,
                    status: 1,
                    children: [
                        {
                            id: 2,
                            parentId: 1,
                            name: '研发部门',
                            code: 'RD001',
                            sort: 1,
                            status: 1,
                            children: [],
                            createdAt: null,
                            updateTime: '2022-04-19 12:46'
                        },
                        {
                            id: 3,
                            parentId: 1,
                            name: '测试部门',
                            code: 'QA001',
                            sort: 1,
                            status: 1,
                            children: [],
                            createdAt: null,
                            updateTime: '2022-04-19 12:46'
                        }
                    ],
                    createdAt: null,
                    updateTime: null
                }
            ],
            message: 'success'
        }
    },

    // 新增部门
    {
        url: 'depts',
        method: ['POST'],
        body({ body }) {
            return {
                code: 200,
                data: null,
                message: '新增部门' + body.name + '成功'
            }
        }
    },

    // 获取部门表单数据
    {
        url: 'depts/:id/form',
        method: ['GET'],
        body: ({ params }) => {
            return {
                code: 200,
                data: deptMap[params.id],
                message: 'success'
            }
        }
    },

    // 修改部门
    {
        url: 'depts/:id',
        method: ['PUT'],
        body({ body }) {
            return {
                code: 200,
                data: null,
                message: '修改部门' + body.name + '成功'
            }
        }
    },

    // 删除部门
    {
        url: 'depts/:id',
        method: ['DELETE'],
        body({ params }) {
            return {
                code: 200,
                data: null,
                message: '删除部门' + params.id + '成功'
            }
        }
    }
])

// 部门映射表数据
const deptMap: Record<string, any> = {
    1: {
        id: 1,
        name: '有来技术',
        code: 'YOULAI',
        parentId: 0,
        status: 1,
        sort: 1
    },
    2: {
        id: 2,
        name: '研发部门',
        code: 'RD001',
        parentId: 1,
        status: 1,
        sort: 1
    },
    3: {
        id: 3,
        name: '测试部门',
        code: 'QA001',
        parentId: 1,
        status: 1,
        sort: 1
    }
}
