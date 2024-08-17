import { defineMock } from './base'

export default defineMock([
    {
        url: 'stats/trend',
        method: ['GET'],
        body: {
            code: 200,
            data: {
                dates: [
                    '2024-06-30',
                    '2024-07-01',
                    '2024-07-02',
                    '2024-07-03',
                    '2024-07-04',
                    '2024-07-05',
                    '2024-07-06',
                    '2024-07-07'
                ],
                pvList: [1751, 5168, 4882, 5301, 4721, 4885, 1901, 1003],
                uvList: null,
                ipList: [207, 566, 565, 631, 579, 496, 222, 152]
            },
            message: 'success'
        }
    },

    {
        url: 'stats/visit',
        method: ['GET'],
        body: {
            code: 200,
            data: [
                {
                    type: 'pv',
                    title: '浏览量',
                    todayCount: 1003,
                    totalCount: 36193,
                    growthRate: -0.35,
                    granularityLabel: '日'
                },
                {
                    type: 'uv',
                    title: '访客数',
                    todayCount: 100,
                    totalCount: 2000,
                    growthRate: 0,
                    granularityLabel: '日'
                },
                {
                    type: 'ip',
                    title: 'IP数',
                    todayCount: 152,
                    totalCount: 3234,
                    growthRate: -0.2,
                    granularityLabel: '日'
                }
            ],
            message: 'success'
        }
    }
])
