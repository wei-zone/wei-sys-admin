import request from '@/utils/request'

const STATS_BASE_URL = '/v1/admin/stats'

class StatsAPI {
    /**
     * 获取访问趋势
     *
     * @param queryParams
     * @returns
     */
    static getVisitTrend(queryParams: VisitTrendQuery) {
        return request<any, VisitTrendVO>({
            url: `${STATS_BASE_URL}/trend`,
            method: 'get',
            params: queryParams
        })
    }

    /**
     * 获取访问趋势
     *
     * @param queryParams
     * @returns
     */
    static getVisitStats() {
        return request<any, VisitStatsVO[]>({
            url: `${STATS_BASE_URL}/visit`,
            method: 'get'
        })
    }
}

export default StatsAPI

/**  访问趋势视图对象 */
export interface VisitTrendVO {
    /** 日期列表 */
    dates: string[]
    /** 浏览量(PV) */
    pvList: number[]
    /** 访客数(UV) */
    uvList: number[]
    /** IP数 */
    ipList: number[]
}

/** 访问趋势查询参数 */
export interface VisitTrendQuery {
    /** 开始日期 */
    startDate: string
    /** 结束日期 */
    endDate: string
}

/**  访问统计 */
export interface VisitStatsVO {
    /** 标题 */
    title: string
    /** 类型 */
    type: 'pv' | 'uv' | 'ip'

    /** 今日访问量 */
    todayCount: number
    /** 总访问量 */
    totalCount: number
    /** 同比增长率（相对于昨天同一时间段的增长率） */
    growthRate: number

    totalCountOutput: number
}
