import { defineMock } from './base'

export default defineMock([
    {
        url: 'menus/routes',
        method: ['GET'],
        body: {
            code: 200,
            data: [
                {
                    path: '/system',
                    component: 'Layout',
                    redirect: '/system/user',
                    name: '/system',
                    meta: {
                        title: '系统管理',
                        icon: 'system',
                        hidden: false,
                        alwaysShow: false,
                        params: null
                    },
                    children: [
                        {
                            path: 'user',
                            component: 'system/user/index',
                            name: 'User',
                            meta: {
                                title: '用户管理',
                                icon: 'el-icon-User',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: null
                            }
                        },
                        {
                            path: 'role',
                            component: 'system/role/index',
                            name: 'Role',
                            meta: {
                                title: '角色管理',
                                icon: 'role',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: null
                            }
                        },
                        {
                            path: 'menu',
                            component: 'system/menu/index',
                            name: 'Menu',
                            meta: {
                                title: '菜单管理',
                                icon: 'menu',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: null
                            }
                        },
                        {
                            path: 'dept',
                            component: 'system/dept/index',
                            name: 'Dept',
                            meta: {
                                title: '部门管理',
                                icon: 'tree',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: null
                            }
                        },
                        {
                            path: 'dict',
                            component: 'system/dict/index',
                            name: 'Dict',
                            meta: {
                                title: '字典管理',
                                icon: 'dict',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: null
                            }
                        }
                    ]
                },
                {
                    path: '/api',
                    component: 'Layout',
                    name: '/api',
                    meta: {
                        title: '接口文档',
                        icon: 'api',
                        hidden: false,
                        alwaysShow: true,
                        params: null
                    },
                    children: [
                        {
                            path: 'apifox',
                            component: 'demo/api/apifox',
                            name: 'Apifox',
                            meta: {
                                title: 'Apifox',
                                icon: 'api',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: null
                            }
                        }
                    ]
                },
                {
                    path: '/doc',
                    component: 'Layout',
                    redirect: 'https://juejin.cn/post/7228990409909108793',
                    name: '/doc',
                    meta: {
                        title: '平台文档',
                        icon: 'document',
                        hidden: false,
                        alwaysShow: false,
                        params: null
                    },
                    children: [
                        {
                            path: 'internal-doc',
                            component: 'demo/internal-doc',
                            name: 'InternalDoc',
                            meta: {
                                title: '平台文档(内嵌)',
                                icon: 'document',
                                hidden: false,
                                alwaysShow: false,
                                params: null
                            }
                        },
                        {
                            path: 'https://juejin.cn/post/7228990409909108793',
                            name: 'Https://juejin.cn/post/7228990409909108793',
                            meta: {
                                title: '平台文档(外链)',
                                icon: 'el-icon-Link',
                                hidden: false,
                                alwaysShow: false,
                                params: null
                            }
                        }
                    ]
                },
                {
                    path: '/multi-level',
                    component: 'Layout',
                    name: '/multiLevel',
                    meta: {
                        title: '多级菜单',
                        icon: 'cascader',
                        hidden: false,
                        alwaysShow: true,
                        params: null
                    },
                    children: [
                        {
                            path: 'multi-level1',
                            component: 'demo/multi-level/level1',
                            name: 'MultiLevel1',
                            meta: {
                                title: '菜单一级',
                                icon: '',
                                hidden: false,
                                alwaysShow: true,
                                params: null
                            },
                            children: [
                                {
                                    path: 'multi-level2',
                                    component: 'demo/multi-level/children/level2',
                                    name: 'MultiLevel2',
                                    meta: {
                                        title: '菜单二级',
                                        icon: '',
                                        hidden: false,
                                        alwaysShow: false,
                                        params: null
                                    },
                                    children: [
                                        {
                                            path: 'multi-level3-1',
                                            component: 'demo/multi-level/children/children/level3-1',
                                            name: 'MultiLevel31',
                                            meta: {
                                                title: '菜单三级-1',
                                                icon: '',
                                                hidden: false,
                                                keepAlive: true,
                                                alwaysShow: false,
                                                params: null
                                            }
                                        },
                                        {
                                            path: 'multi-level3-2',
                                            component: 'demo/multi-level/children/children/level3-2',
                                            name: 'MultiLevel32',
                                            meta: {
                                                title: '菜单三级-2',
                                                icon: '',
                                                hidden: false,
                                                keepAlive: true,
                                                alwaysShow: false,
                                                params: null
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    path: '/component',
                    component: 'Layout',
                    name: '/component',
                    meta: {
                        title: '组件封装',
                        icon: 'menu',
                        hidden: false,
                        alwaysShow: false,
                        params: null
                    },
                    children: [
                        {
                            path: 'curd',
                            component: 'demo/curd/index',
                            name: 'Curd',
                            meta: {
                                title: '增删改查',
                                icon: '',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: null
                            }
                        },
                        {
                            path: 'table-select',
                            component: 'demo/table-select/index',
                            name: 'TableSelect',
                            meta: {
                                title: '列表选择器',
                                icon: '',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: null
                            }
                        },
                        {
                            path: 'wang-editor',
                            component: 'demo/wang-editor',
                            name: 'WangEditor',
                            meta: {
                                title: '富文本编辑器',
                                icon: '',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: null
                            }
                        },
                        {
                            path: 'upload',
                            component: 'demo/upload',
                            name: 'Upload',
                            meta: {
                                title: '图片上传',
                                icon: '',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: null
                            }
                        },
                        {
                            path: 'icon-selector',
                            component: 'demo/icon-selector',
                            name: 'IconSelector',
                            meta: {
                                title: '图标选择器',
                                icon: '',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: null
                            }
                        },
                        {
                            path: 'dict-demo',
                            component: 'demo/dict',
                            name: 'DictDemo',
                            meta: {
                                title: '字典组件',
                                icon: '',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: null
                            }
                        }
                    ]
                },
                {
                    path: '/route-param',
                    component: 'Layout',
                    name: '/routeParam',
                    meta: {
                        title: '路由参数',
                        icon: 'el-icon-ElementPlus',
                        hidden: false,
                        alwaysShow: true,
                        params: null
                    },
                    children: [
                        {
                            path: 'route-param-type1',
                            component: 'demo/route-param',
                            name: 'RouteParamType1',
                            meta: {
                                title: '参数(type=1)',
                                icon: 'el-icon-Star',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: {
                                    type: '1'
                                }
                            }
                        },
                        {
                            path: 'route-param-type2',
                            component: 'demo/route-param',
                            name: 'RouteParamType2',
                            meta: {
                                title: '参数(type=2)',
                                icon: 'el-icon-StarFilled',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: {
                                    type: '2'
                                }
                            }
                        }
                    ]
                },
                {
                    path: '/function',
                    component: 'Layout',
                    name: '/function',
                    meta: {
                        title: '功能演示',
                        icon: 'menu',
                        hidden: false,
                        alwaysShow: false,
                        params: null
                    },
                    children: [
                        {
                            path: 'icon-demo',
                            component: 'demo/icons',
                            name: 'IconDemo',
                            meta: {
                                title: 'Icons',
                                icon: 'el-icon-Notification',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: null
                            }
                        },
                        {
                            path: '/function/websocket',
                            component: 'demo/websocket',
                            name: '/function/websocket',
                            meta: {
                                title: 'Websocket',
                                icon: '',
                                hidden: false,
                                keepAlive: true,
                                alwaysShow: false,
                                params: null
                            }
                        },
                        {
                            path: 'other/:id',
                            component: 'demo/other',
                            name: 'Other/:id',
                            meta: {
                                title: '敬请期待...',
                                icon: '',
                                hidden: false,
                                alwaysShow: false,
                                params: null
                            }
                        }
                    ]
                }
            ],
            message: '一切ok'
        }
    },

    {
        url: 'menus',
        method: ['GET'],
        body: {
            code: 200,
            data: [
                {
                    id: 1,
                    parentId: 0,
                    name: '系统管理',
                    type: 'CATALOG',
                    routeName: '',
                    routePath: '/system',
                    component: 'Layout',
                    sort: 1,
                    visible: 1,
                    icon: 'system',
                    redirect: '/system/user',
                    perm: null,
                    children: [
                        {
                            id: 2,
                            parentId: 1,
                            name: '用户管理',
                            type: 'MENU',
                            routeName: 'User',
                            routePath: 'user',
                            component: 'system/user/index',
                            sort: 1,
                            visible: 1,
                            icon: 'el-icon-User',
                            redirect: null,
                            perm: null,
                            children: [
                                {
                                    id: 105,
                                    parentId: 2,
                                    name: '用户查询',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 0,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:user:query',
                                    children: []
                                },
                                {
                                    id: 31,
                                    parentId: 2,
                                    name: '用户新增',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 1,
                                    visible: 1,
                                    icon: '',
                                    redirect: '',
                                    perm: 'sys:user:add',
                                    children: []
                                },
                                {
                                    id: 32,
                                    parentId: 2,
                                    name: '用户编辑',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 2,
                                    visible: 1,
                                    icon: '',
                                    redirect: '',
                                    perm: 'sys:user:edit',
                                    children: []
                                },
                                {
                                    id: 33,
                                    parentId: 2,
                                    name: '用户删除',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 3,
                                    visible: 1,
                                    icon: '',
                                    redirect: '',
                                    perm: 'sys:user:delete',
                                    children: []
                                },
                                {
                                    id: 88,
                                    parentId: 2,
                                    name: '重置密码',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 4,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:user:password:reset',
                                    children: []
                                },
                                {
                                    id: 106,
                                    parentId: 2,
                                    name: '用户导入',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 5,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:user:import',
                                    children: []
                                },
                                {
                                    id: 107,
                                    parentId: 2,
                                    name: '用户导出',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 6,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:user:export',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 3,
                            parentId: 1,
                            name: '角色管理',
                            type: 'MENU',
                            routeName: 'Role',
                            routePath: 'role',
                            component: 'system/role/index',
                            sort: 2,
                            visible: 1,
                            icon: 'role',
                            redirect: null,
                            perm: null,
                            children: [
                                {
                                    id: 70,
                                    parentId: 3,
                                    name: '角色新增',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 1,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:role:add',
                                    children: []
                                },
                                {
                                    id: 71,
                                    parentId: 3,
                                    name: '角色编辑',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 2,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:role:edit',
                                    children: []
                                },
                                {
                                    id: 72,
                                    parentId: 3,
                                    name: '角色删除',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 3,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:role:delete',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 4,
                            parentId: 1,
                            name: '菜单管理',
                            type: 'MENU',
                            routeName: 'Menu',
                            routePath: 'menu',
                            component: 'system/menu/index',
                            sort: 3,
                            visible: 1,
                            icon: 'menu',
                            redirect: null,
                            perm: null,
                            children: [
                                {
                                    id: 73,
                                    parentId: 4,
                                    name: '菜单新增',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 1,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:menu:add',
                                    children: []
                                },
                                {
                                    id: 75,
                                    parentId: 4,
                                    name: '菜单删除',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 3,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:menu:delete',
                                    children: []
                                },
                                {
                                    id: 74,
                                    parentId: 4,
                                    name: '菜单编辑',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 3,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:menu:edit',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 5,
                            parentId: 1,
                            name: '部门管理',
                            type: 'MENU',
                            routeName: 'Dept',
                            routePath: 'dept',
                            component: 'system/dept/index',
                            sort: 4,
                            visible: 1,
                            icon: 'tree',
                            redirect: null,
                            perm: null,
                            children: [
                                {
                                    id: 76,
                                    parentId: 5,
                                    name: '部门新增',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 1,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:dept:add',
                                    children: []
                                },
                                {
                                    id: 77,
                                    parentId: 5,
                                    name: '部门编辑',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 2,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:dept:edit',
                                    children: []
                                },
                                {
                                    id: 78,
                                    parentId: 5,
                                    name: '部门删除',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 3,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:dept:delete',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 6,
                            parentId: 1,
                            name: '字典管理',
                            type: 'MENU',
                            routeName: 'Dict',
                            routePath: 'dict',
                            component: 'system/dict/index',
                            sort: 5,
                            visible: 1,
                            icon: 'dict',
                            redirect: null,
                            perm: null,
                            children: [
                                {
                                    id: 79,
                                    parentId: 6,
                                    name: '字典类型新增',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 1,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:dict_type:add',
                                    children: []
                                },
                                {
                                    id: 81,
                                    parentId: 6,
                                    name: '字典类型编辑',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 2,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:dict_type:edit',
                                    children: []
                                },
                                {
                                    id: 84,
                                    parentId: 6,
                                    name: '字典类型删除',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 3,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:dict_type:delete',
                                    children: []
                                },
                                {
                                    id: 85,
                                    parentId: 6,
                                    name: '字典数据新增',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 4,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:dict:add',
                                    children: []
                                },
                                {
                                    id: 86,
                                    parentId: 6,
                                    name: '字典数据编辑',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 5,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:dict:edit',
                                    children: []
                                },
                                {
                                    id: 87,
                                    parentId: 6,
                                    name: '字典数据删除',
                                    type: 'BUTTON',
                                    routeName: null,
                                    routePath: '',
                                    component: null,
                                    sort: 6,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: 'sys:dict:delete',
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 40,
                    parentId: 0,
                    name: '接口文档',
                    type: 'CATALOG',
                    routeName: null,
                    routePath: '/api',
                    component: 'Layout',
                    sort: 7,
                    visible: 1,
                    icon: 'api',
                    redirect: '',
                    perm: null,
                    children: [
                        {
                            id: 41,
                            parentId: 40,
                            name: 'Apifox',
                            type: 'MENU',
                            routeName: null,
                            routePath: 'apifox',
                            component: 'demo/api/apifox',
                            sort: 1,
                            visible: 1,
                            icon: 'api',
                            redirect: '',
                            perm: null,
                            children: []
                        }
                    ]
                },
                {
                    id: 26,
                    parentId: 0,
                    name: '平台文档',
                    type: 'CATALOG',
                    routeName: null,
                    routePath: '/doc',
                    component: 'Layout',
                    sort: 8,
                    visible: 1,
                    icon: 'document',
                    redirect: 'https://juejin.cn/post/7228990409909108793',
                    perm: null,
                    children: [
                        {
                            id: 102,
                            parentId: 26,
                            name: '平台文档(内嵌)',
                            type: 'EXTLINK',
                            routeName: null,
                            routePath: 'internal-doc',
                            component: 'demo/internal-doc',
                            sort: 1,
                            visible: 1,
                            icon: 'document',
                            redirect: '',
                            perm: null,
                            children: []
                        },
                        {
                            id: 30,
                            parentId: 26,
                            name: '平台文档(外链)',
                            type: 'EXTLINK',
                            routeName: null,
                            routePath: 'https://juejin.cn/post/7228990409909108793',
                            component: '',
                            sort: 2,
                            visible: 1,
                            icon: 'link',
                            redirect: '',
                            perm: null,
                            children: []
                        }
                    ]
                },
                {
                    id: 20,
                    parentId: 0,
                    name: '多级菜单',
                    type: 'CATALOG',
                    routeName: null,
                    routePath: '/multi-level',
                    component: 'Layout',
                    sort: 9,
                    visible: 1,
                    icon: 'cascader',
                    redirect: '',
                    perm: null,
                    children: [
                        {
                            id: 21,
                            parentId: 20,
                            name: '菜单一级',
                            type: 'MENU',
                            routeName: null,
                            routePath: 'multi-level1',
                            component: 'demo/multi-level/level1',
                            sort: 1,
                            visible: 1,
                            icon: '',
                            redirect: '',
                            perm: null,
                            children: [
                                {
                                    id: 22,
                                    parentId: 21,
                                    name: '菜单二级',
                                    type: 'MENU',
                                    routeName: null,
                                    routePath: 'multi-level2',
                                    component: 'demo/multi-level/children/level2',
                                    sort: 1,
                                    visible: 1,
                                    icon: '',
                                    redirect: null,
                                    perm: null,
                                    children: [
                                        {
                                            id: 23,
                                            parentId: 22,
                                            name: '菜单三级-1',
                                            type: 'MENU',
                                            routeName: null,
                                            routePath: 'multi-level3-1',
                                            component: 'demo/multi-level/children/children/level3-1',
                                            sort: 1,
                                            visible: 1,
                                            icon: '',
                                            redirect: '',
                                            perm: null,
                                            children: []
                                        },
                                        {
                                            id: 24,
                                            parentId: 22,
                                            name: '菜单三级-2',
                                            type: 'MENU',
                                            routeName: null,
                                            routePath: 'multi-level3-2',
                                            component: 'demo/multi-level/children/children/level3-2',
                                            sort: 2,
                                            visible: 1,
                                            icon: '',
                                            redirect: '',
                                            perm: null,
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 36,
                    parentId: 0,
                    name: '组件封装',
                    type: 'CATALOG',
                    routeName: null,
                    routePath: '/component',
                    component: 'Layout',
                    sort: 10,
                    visible: 1,
                    icon: 'menu',
                    redirect: '',
                    perm: null,
                    children: [
                        {
                            id: 108,
                            parentId: 36,
                            name: '增删改查',
                            type: 'MENU',
                            routeName: null,
                            routePath: 'curd',
                            component: 'demo/curd/index',
                            sort: 0,
                            visible: 1,
                            icon: '',
                            redirect: '',
                            perm: null,
                            children: []
                        },
                        {
                            id: 109,
                            parentId: 36,
                            name: '列表选择器',
                            type: 'MENU',
                            routeName: null,
                            routePath: 'table-select',
                            component: 'demo/table-select/index',
                            sort: 1,
                            visible: 1,
                            icon: '',
                            redirect: '',
                            perm: null,
                            children: []
                        },
                        {
                            id: 37,
                            parentId: 36,
                            name: '富文本编辑器',
                            type: 'MENU',
                            routeName: null,
                            routePath: 'wang-editor',
                            component: 'demo/wang-editor',
                            sort: 2,
                            visible: 1,
                            icon: '',
                            redirect: '',
                            perm: null,
                            children: []
                        },
                        {
                            id: 38,
                            parentId: 36,
                            name: '图片上传',
                            type: 'MENU',
                            routeName: null,
                            routePath: 'upload',
                            component: 'demo/upload',
                            sort: 3,
                            visible: 1,
                            icon: '',
                            redirect: '',
                            perm: null,
                            children: []
                        },
                        {
                            id: 95,
                            parentId: 36,
                            name: '字典组件',
                            type: 'MENU',
                            routeName: null,
                            routePath: 'dict-demo',
                            component: 'demo/dict',
                            sort: 4,
                            visible: 1,
                            icon: '',
                            redirect: '',
                            perm: null,
                            children: []
                        },
                        {
                            id: 39,
                            parentId: 36,
                            name: '图标选择器',
                            type: 'MENU',
                            routeName: null,
                            routePath: 'icon-selector',
                            component: 'demo/icon-selector',
                            sort: 4,
                            visible: 1,
                            icon: '',
                            redirect: '',
                            perm: null,
                            children: []
                        }
                    ]
                },
                {
                    id: 110,
                    parentId: 0,
                    name: '路由参数',
                    type: 'CATALOG',
                    routeName: null,
                    routePath: '/route-param',
                    component: 'Layout',
                    sort: 11,
                    visible: 1,
                    icon: 'el-icon-ElementPlus',
                    redirect: null,
                    perm: null,
                    children: [
                        {
                            id: 111,
                            parentId: 110,
                            name: '参数(type=1)',
                            type: 'MENU',
                            routeName: null,
                            routePath: 'route-param-type1',
                            component: 'demo/route-param',
                            sort: 1,
                            visible: 1,
                            icon: 'el-icon-Star',
                            redirect: null,
                            perm: null,
                            children: []
                        },
                        {
                            id: 112,
                            parentId: 110,
                            name: '参数(type=2)',
                            type: 'MENU',
                            routeName: null,
                            routePath: 'route-param-type2',
                            component: 'demo/route-param',
                            sort: 2,
                            visible: 1,
                            icon: 'el-icon-StarFilled',
                            redirect: null,
                            perm: null,
                            children: []
                        }
                    ]
                },
                {
                    id: 89,
                    parentId: 0,
                    name: '功能演示',
                    type: 'CATALOG',
                    routeName: null,
                    routePath: '/function',
                    component: 'Layout',
                    sort: 12,
                    visible: 1,
                    icon: 'menu',
                    redirect: '',
                    perm: null,
                    children: [
                        {
                            id: 97,
                            parentId: 89,
                            name: 'Icons',
                            type: 'MENU',
                            routeName: null,
                            routePath: 'icon-demo',
                            component: 'demo/icons',
                            sort: 2,
                            visible: 1,
                            icon: 'el-icon-Notification',
                            redirect: '',
                            perm: null,
                            children: []
                        },
                        {
                            id: 90,
                            parentId: 89,
                            name: 'Websocket',
                            type: 'MENU',
                            routeName: null,
                            routePath: '/function/websocket',
                            component: 'demo/websocket',
                            sort: 3,
                            visible: 1,
                            icon: '',
                            redirect: '',
                            perm: null,
                            children: []
                        },
                        {
                            id: 91,
                            parentId: 89,
                            name: '敬请期待...',
                            type: 'CATALOG',
                            routeName: null,
                            routePath: 'other/:id',
                            component: 'demo/other',
                            sort: 4,
                            visible: 1,
                            icon: '',
                            redirect: '',
                            perm: null,
                            children: []
                        }
                    ]
                }
            ],
            message: '一切ok'
        }
    },

    {
        url: 'menus/options',
        method: ['GET'],
        body: {
            code: 200,
            data: [
                {
                    value: 1,
                    label: '系统管理',
                    children: [
                        {
                            value: 2,
                            label: '用户管理',
                            children: [
                                {
                                    value: 105,
                                    label: '用户查询'
                                },
                                {
                                    value: 31,
                                    label: '用户新增'
                                },
                                {
                                    value: 32,
                                    label: '用户编辑'
                                },
                                {
                                    value: 33,
                                    label: '用户删除'
                                },
                                {
                                    value: 88,
                                    label: '重置密码'
                                },
                                {
                                    value: 106,
                                    label: '用户导入'
                                },
                                {
                                    value: 107,
                                    label: '用户导出'
                                }
                            ]
                        },
                        {
                            value: 3,
                            label: '角色管理',
                            children: [
                                {
                                    value: 70,
                                    label: '角色新增'
                                },
                                {
                                    value: 71,
                                    label: '角色编辑'
                                },
                                {
                                    value: 72,
                                    label: '角色删除'
                                }
                            ]
                        },
                        {
                            value: 4,
                            label: '菜单管理',
                            children: [
                                {
                                    value: 73,
                                    label: '菜单新增'
                                },
                                {
                                    value: 75,
                                    label: '菜单删除'
                                },
                                {
                                    value: 74,
                                    label: '菜单编辑'
                                }
                            ]
                        },
                        {
                            value: 5,
                            label: '部门管理',
                            children: [
                                {
                                    value: 76,
                                    label: '部门新增'
                                },
                                {
                                    value: 77,
                                    label: '部门编辑'
                                },
                                {
                                    value: 78,
                                    label: '部门删除'
                                }
                            ]
                        },
                        {
                            value: 6,
                            label: '字典管理',
                            children: [
                                {
                                    value: 79,
                                    label: '字典类型新增'
                                },
                                {
                                    value: 81,
                                    label: '字典类型编辑'
                                },
                                {
                                    value: 84,
                                    label: '字典类型删除'
                                },
                                {
                                    value: 85,
                                    label: '字典数据新增'
                                },
                                {
                                    value: 86,
                                    label: '字典数据编辑'
                                },
                                {
                                    value: 87,
                                    label: '字典数据删除'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 40,
                    label: '接口文档',
                    children: [
                        {
                            value: 41,
                            label: 'Apifox'
                        }
                    ]
                },
                {
                    value: 26,
                    label: '平台文档',
                    children: [
                        {
                            value: 102,
                            label: '平台文档(内嵌)'
                        },
                        {
                            value: 30,
                            label: '平台文档(外链)'
                        }
                    ]
                },
                {
                    value: 20,
                    label: '多级菜单',
                    children: [
                        {
                            value: 21,
                            label: '菜单一级',
                            children: [
                                {
                                    value: 22,
                                    label: '菜单二级',
                                    children: [
                                        {
                                            value: 23,
                                            label: '菜单三级-1'
                                        },
                                        {
                                            value: 24,
                                            label: '菜单三级-2'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 36,
                    label: '组件封装',
                    children: [
                        {
                            value: 108,
                            label: '增删改查'
                        },
                        {
                            value: 109,
                            label: '列表选择器'
                        },
                        {
                            value: 37,
                            label: '富文本编辑器'
                        },
                        {
                            value: 38,
                            label: '图片上传'
                        },
                        {
                            value: 95,
                            label: '字典组件'
                        },
                        {
                            value: 39,
                            label: '图标选择器'
                        }
                    ]
                },
                {
                    value: 110,
                    label: '路由参数',
                    children: [
                        {
                            value: 111,
                            label: '参数(type=1)'
                        },
                        {
                            value: 112,
                            label: '参数(type=2)'
                        }
                    ]
                },
                {
                    value: 89,
                    label: '功能演示',
                    children: [
                        {
                            value: 97,
                            label: 'Icons'
                        },
                        {
                            value: 90,
                            label: 'Websocket'
                        },
                        {
                            value: 91,
                            label: '敬请期待...'
                        }
                    ]
                }
            ],
            message: '一切ok'
        }
    },

    // 新增菜单
    {
        url: 'menus',
        method: ['POST'],
        body({ body }) {
            return {
                code: 200,
                data: null,
                message: '新增菜单' + body.name + '成功'
            }
        }
    },

    // 获取菜单表单数据
    {
        url: 'menus/:id/form',
        method: ['GET'],
        body: ({ params }) => {
            return {
                code: 200,
                data: menuMap[params.id],
                message: '一切ok'
            }
        }
    },

    // 修改菜单
    {
        url: 'menus/:id',
        method: ['PUT'],
        body({ body }) {
            return {
                code: 200,
                data: null,
                message: '修改菜单' + body.name + '成功'
            }
        }
    },

    // 删除菜单
    {
        url: 'menus/:id',
        method: ['DELETE'],
        body({ params }) {
            return {
                code: 200,
                data: null,
                message: '删除菜单' + params.id + '成功'
            }
        }
    }
])

// 菜单映射表数据
const menuMap: Record<string, any> = {
    1: {
        id: 1,
        parentId: 0,
        name: '系统管理',
        type: 'CATALOG',
        routeName: '',
        routePath: '/system',
        component: 'Layout',
        perm: null,
        visible: 1,
        sort: 1,
        icon: 'system',
        redirect: '/system/user',
        keepAlive: null,
        alwaysShow: null,
        params: null
    },
    2: {
        id: 2,
        parentId: 1,
        name: '用户管理',
        type: 'MENU',
        routeName: 'User',
        routePath: 'user',
        component: 'system/user/index',
        perm: null,
        visible: 1,
        sort: 1,
        icon: 'user',
        redirect: null,
        keepAlive: 1,
        alwaysShow: null
    },
    3: {
        id: 3,
        parentId: 1,
        name: '角色管理',
        type: 'MENU',
        routeName: 'Role',
        routePath: 'role',
        component: 'system/role/index',
        perm: null,
        visible: 1,
        sort: 2,
        icon: 'role',
        redirect: null,
        keepAlive: 1,
        alwaysShow: null
    },
    4: {
        id: 4,
        parentId: 1,
        name: '菜单管理',
        type: 'MENU',
        routeName: 'Menu',
        routePath: 'menu',
        component: 'system/menu/index',
        perm: null,
        visible: 1,
        sort: 3,
        icon: 'menu',
        redirect: null,
        keepAlive: 1,
        alwaysShow: null
    },
    5: {
        id: 5,
        parentId: 1,
        name: '部门管理',
        type: 'MENU',
        routeName: 'Dept',
        routePath: 'dept',
        component: 'system/dept/index',
        perm: null,
        visible: 1,
        sort: 4,
        icon: 'tree',
        redirect: null,
        keepAlive: 1,
        alwaysShow: null
    },
    6: {
        id: 6,
        parentId: 1,
        name: '字典管理',
        type: 'MENU',
        routeName: 'Dict',
        routePath: 'dict',
        component: 'system/dict/index',
        perm: null,
        visible: 1,
        sort: 5,
        icon: 'dict',
        redirect: null,
        keepAlive: 1,
        alwaysShow: null
    }
}
