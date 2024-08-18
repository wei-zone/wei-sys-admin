/**
 * Check if an element has a class
 * @param {HTMLElement} ele
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele: HTMLElement, cls: string) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * Add class to element
 * @param {HTMLElement} ele
 * @param {string} cls
 */
export function addClass(ele: HTMLElement, cls: string) {
    if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * Remove class from element
 * @param {HTMLElement} ele
 * @param {string} cls
 */
export function removeClass(ele: HTMLElement, cls: string) {
    if (hasClass(ele, cls)) {
        const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
        ele.className = ele.className.replace(reg, ' ')
    }
}

/**
 * 判断是否是外部链接
 *
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
    const isExternal = /^(https?:|http?:|mailto:|tel:)/.test(path)
    return isExternal
}

export const appInfo = () => {
    // app info
    console.log(
        `%c APP_VERSION %c ${import.meta.env.APP_NAME} %c`,
        'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
        `background:#e6a23c; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
        'background:transparent'
    )
    console.log(
        `%c APP_BUILD_TIME %c ${import.meta.env.APP_BUILD_TIME} %c`,
        'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
        `background:#409eff; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
        'background:transparent'
    )
    console.log(
        `%c APP_VERSION %c ${import.meta.env.APP_VERSION} %c`,
        'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
        `background:#67c23a; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
        'background:transparent'
    )
    console.groupEnd()

    // 线上版本判断
    // const APP_VERSION = import.meta.env.APP_VERSION
    // const onlineVersion = String(Math.random())
    // if (APP_VERSION != onlineVersion) {
    //     console.log('APP_VERSION', APP_VERSION)
    // }
}
