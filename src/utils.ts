
/**
 * 格式化时间
 * @param time 需要格式化的时间 
 * @param format 格式
 */
function toLocalData(date: string | Date) {

}
export function formatTime(time: string | Date, format: RegExp | string): string | void {}

/**
 * 防抖函数
 * @param method 
 * @param delay 延时时间
 */
export function debounce(method: Function, delay: number = 500) {}

/**
 * 节流函数
 * @param method 
 * @param delay 
 */
export function throttle(method: Function, delay: number = 500) {}

/**
 * 将一维列表转为树形对象
 * @param data 
 */
export function listToThree(data: any) {}

/**
 * 将树形对象转为一维列表
 * @param data 
 */
export function threeToList(data: any) {}
