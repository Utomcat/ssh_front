
class Utils {
  /**
   * 工具类-判断传入数据是否为空
   *
   * @param {*} data 入参,需要验证的数据
   * @returns {boolean} 如果是 null | '' | undefined 则返回 true; 否则返回 false;
   */
  static isNull(data) {
    return data === null || data === '' || data === undefined
  }

  /**
   * 显示时间
   *
   * @returns {string} 返回当前时间,格式为 2022-05-22 17:24:24
   */
  static getShowSecTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (month <= 9) {
      month = this.fillingZero(month + 1);
    }

    if (hours <= 9){
      hours =  this.fillingZero(hours);
    }

    if (minutes <= 9){
      minutes =  this.fillingZero(minutes);
    }
    if (seconds <= 9){
      seconds =  this.fillingZero(seconds);
    }

    return '当前时间 ' + year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
  }

  /**
   * 在所需数据前用一个 0 填充使其在原有位数上加一位,主要用于类似小时数由 1 ==> 01 格式
   *
   * @param data 需要填充的数据
   * @returns {string} 返回填充好的字符串
   */
  static fillingZero(data) {
    return '0' + data;
  }

}


export default Utils
