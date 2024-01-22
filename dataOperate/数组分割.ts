/*$$
 $ @Author: lxf
 $ @Date: 2023-02-16 14:46:24
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-08-03 16:39:56
 $ @FilePath: \JSTools\dataOperate\数组分割.js
 $*/
/*******
 * @description: 把数组均分成chunkCount份
 * @param {Array} arr 要切割的数组
 * @param {number} chunkCount
 * @return {Array<Array>}
 */
const chunkArrayForGroup = (arr: Array<any>, chunkCount: number) => {
  const chunks: any[] = [];
  while (arr.length) {
    const chunkSize = Math.ceil(arr.length / chunkCount--);
    const chunk = arr.slice(0, chunkSize);
    chunks.push(chunk);
    arr = arr.slice(chunkSize);
  }
  return chunks;
};
/*******
 * @description: 把数组分成len个一组
 * @param {Array} arr 要切割的数组
 * @param {number} chunkCount
 * @return {Array<Array>}
 */
function chunkArrayForLength(arr: Array<any>, len: number) {
  var newArr: any[] = [];
  for (var i = 0; i < arr.length; i += len) {
    newArr.push(arr.slice(i, i + len));
  }
  return newArr;
}
