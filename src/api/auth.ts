import request from '@/utils/request'
import type { UserInfo } from './user'

const AUTH_BASE_URL = '/v1/admin/auth'

class AuthAPI {
    /** 登录 接口*/
    static login(data: LoginData) {
        return request<any, LoginResult>({
            url: `${AUTH_BASE_URL}/login`,
            method: 'post',
            data
        })
    }

    /** 注销 接口*/
    static logout() {
        return request({
            url: `${AUTH_BASE_URL}/logout`,
            method: 'post'
        })
    }

    /** 获取验证码 接口*/
    static getCaptcha() {
        return request<any, CaptchaResult>({
            url: `${AUTH_BASE_URL}/captcha`,
            method: 'get'
        })
    }
    /**
     * 获取当前登录用户信息
     *
     * @returns 登录用户昵称、头像信息，包括角色和权限
     */
    static getInfo() {
        return request<any, UserInfo>({
            url: `${AUTH_BASE_URL}/me`,
            method: 'get'
        })
    }
}

export default AuthAPI

/** 登录请求参数 */
export interface LoginData {
    /** 用户名 */
    username: string
    /** 密码 */
    password: string
    /** 验证码缓存key */
    captchaKey: string
    /** 验证码 */
    captchaCode: string
}

/** 登录响应 */
export interface LoginResult {
    /** 访问token */
    accessToken?: string
    /** 过期时间(单位：毫秒) */
    expires?: number
    /** 刷新token */
    refreshToken?: string
    /** token 类型 */
    tokenType?: string
}

/** 验证码响应 */
export interface CaptchaResult {
    /** 验证码缓存key */
    captchaKey: string
    /** 验证码图片Base64字符串 */
    captchaBase64: string
}
