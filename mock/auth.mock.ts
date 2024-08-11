import { defineMock } from './base'

export default defineMock([
    {
        url: 'auth/captcha',
        method: ['GET'],
        body: {
            code: 200,
            data: {
                captchaKey: '534b8ef2b0a24121bec76391ddd159f9',
                captchaBase64:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAkCAIAAADNSmkJAAAFKUlEQVR4Xu2ZXUwcVRiGV70wMWo08V5NvPXCrDbFaGpMaZW2hqQxaoiJTRsaMBCNSYtpa2JTKiFSelFa+Q/QZcMWqEhBlh+htbEpZhMrBQrlJ0hBywLLyrJ0WZbje3bqOvPNLHPWrDvdOE9ONmfe78zkzMs335wzWJhJQrBQweS/wTQ6QWgYHdoIOcecOe05O+t2WkutO+p2ZF3Ksg/YV9ZW6FATYajR3nveg60H9327r3O8c35lHgp+r05dPdJzBL73TPSQ8SaCKIxGLsPlop+K0JHrEkPuoT31e5qGmmjARACF0agYyGVNlyVm/pzZXrN9fHGcBkz0UBid+31u93i3XFFT80vN8cvHqWqih8Lo1NpUqS5vwh3vnd223VQ10UNh9NbyrcFQUK6oCawHUipSqGqiB83oBf+CXFGDMp1mS6OqiR4Ko7FexkpOrqhpHGw82nOUqiZ6KIzGrkRuorW0dJMmOy+hOCfYGzb2RBFv6HRO0gEJw/U7y+pgL1bwmTxexN6sZ31TdEwEhdG+gA+7EqyXpUO1uZH20cWL8hMTRt1N9tBXzCJrOIRoCPJpSO2RAp4HmtCdIfZ+2JWgEBN9LbR28seTGU0Zue1tMLp+YIAMSADzfvbkKX4/eb28j4YODiGin3heqmIlLja5hAUCu+nmGY3JWKvpMAlqNGgebsauBOvlqSX+JEx7p7EbTLen53XlzfmWUioqXikrc68Y8N2juJ/fyVsNChGHEE//rBANYWaZz+TRQqpLaBgNsPfDrgSpbS21YtV87IdjrlkX9JZbt5DOma2t9ITo5F+5glN22WwL/n+yDv00mw06orKxOqQ5+J04hhViwzAXETIcJDVm8uxZqktoGx2Nj9t43Wgaul/ERQiGQvtbWnDWgZYW9CXlQFjZ/7ciyHNn+Z2MexTimIeLz59TiIln0M1e+IbPpOAaDUnEYPTi6iqKxpbycs/qKo1tCslfKcffPn9enuMiPPY1vxO/ckeFQ4h46cdGqUWoidE/y54q5tPY5WDrGzQqIXot4BgchEE57e00IMCw2/1qZSVO/7SjA78o9INzcxsbrL+fnTnDDh9mmZn8F30oG1Hm+nABv5mQMopDS/h1HxtqTzWbABMe9sxpPoe9zezeOo1GELqWhPS8t46M0IAYHbdvR1aHbaOjbjfLz2eFhez6dba4yAfgF30o0BFVE8+Mjh/wFxPI+I5mAEHU6Ls+38vhTFwOBGhMDF8gkFpbC5ffsdv/uBs6dIj19dExEtARVXv9YNbop8NFY3aZ6gRRo+tu3IBHnzmdNCBMXldXJKPfL74WzWUJRE+coDUknqsOdZXQbAJYwluVTbOZI3Qt8GFzMwxyjo3RgBiN4fr+elXVpZGRLWXl6PdOTtJBSlBDUK/lnIrjOlrtqWYTQDJaF6FrTXu9sOa1ysrVoM5HVE1GFxZQcyJ/p+xzv6K/rbr6N6+XDpUBl0tKFIrbz78qWB6YnWFMCBld4XLBms+7df75ook/GNzb0GCV7U1Qfz9p64TyQWNjYD3qe9rj4SMJtQP3MyjSDPzWIRHPjH7X4YAvfXoPuyZf9Pbi3PcuXIh4mp3NllYC6XY79C+jl2o8PBipxjnBttn4MgMNnWgfcRJGPI2OL8hTj3LloIlmRicvBhiNykvecpqoa3RSY4DRcLAwyicuOepVR1JjgNFYHWONHL04czTX0UmNAUYD7Pr+xc4wqTHGaBb2OtZvHUmNYUazcA2J6etdUmOk0f8rTKMTxF91RG0D1SwYGwAAAABJRU5ErkJggg=='
            },
            message: 'success'
        }
    },

    {
        url: 'auth/login',
        method: ['POST'],
        body: {
            code: 200,
            data: {
                accessToken:
                    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjE2YWJkNTlkOTAxNzQwZDliYmI3ZjczODBhZDkyNzNhIiwidXNlcklkIjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiZGVwdElkIjoxLCJkYXRhU2NvcGUiOjEsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwiZXhwIjoxNjkxMTAzMzgyfQ.P4cuIfmPepl3HuguhMS7NXn5a7IUPpsLbmtA_rHOhHk',
                tokenType: 'Bearer',
                refreshToken: null,
                expires: null
            },
            message: 'success'
        }
    },

    {
        url: 'auth/logout',
        method: ['POST'],
        body: {
            code: 200,
            data: {},
            message: 'string'
        }
    },
    {
        url: 'auth/me',
        method: ['GET'],
        body: {
            code: 200,
            data: {
                userId: 2,
                nickname: '系统管理员',
                username: 'admin',
                avatar: 'https://oss.youlai.tech/youlai-boot/2023/05/16/811270ef31f548af9cffc026dfc3777b.gif',
                roles: ['ROOT'],
                perms: [
                    'sys:menu:delete',
                    'sys:dept:edit',
                    'sys:dict_type:add',
                    'sys:dict:edit',
                    'sys:dict:delete',
                    'sys:dict_type:edit',
                    'sys:menu:add',
                    'sys:user:add',
                    'sys:role:edit',
                    'sys:dept:delete',
                    'sys:user:edit',
                    'sys:user:delete',
                    'sys:user:password:reset',
                    'sys:dept:add',
                    'sys:role:delete',
                    'sys:dict_type:delete',
                    'sys:menu:edit',
                    'sys:dict:add',
                    'sys:role:add',
                    'sys:user:query',
                    'sys:user:export'
                ],
                routes: [
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
                ]
            },
            message: 'success'
        }
    }
])
