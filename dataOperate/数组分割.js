/*$$
 $ @Author: lxf
 $ @Date: 2023-02-16 14:46:24
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-02-16 14:48:41
 $ @FilePath: \JSTools\dataOperate\数组分割.js
 $*/
/******* 
 * @description: 把数组均分成chunkCount份
 * @param {Array} arr 要切割的数组
 * @param {number} chunkCount
 * @return {Array<Array>}
 */
const chunkArray = (arr = [], chunkCount) => {
    const chunks = [];
    while (arr.length) {
      const chunkSize = Math.ceil(arr.length / chunkCount--);
      const chunk = arr.slice(0, chunkSize);
      chunks.push(chunk);
      arr = arr.slice(chunkSize);
    };
    return chunks;
  };