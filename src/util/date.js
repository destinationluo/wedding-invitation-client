/**
 * Created by brickspert on 2016/12/22.
 */

export function getFullDate() {
    var date = new Date;
    var day = date.getDate();
    if (day < 10) {
        return '0' + day;
    }
    return day;
}

export function getWeek() {
    var weeks = ["日", "一", "二", "三", "四", "五", "六"];
    var date = new Date;
    var weekNum = date.getDay();
    return '星期' + weeks[weekNum];
}