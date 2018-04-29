const readline = require('readline');
const fs = require('fs');

/**
 * 一行行的读取文件
 * @param file 目标文件
 * @return {*} 返回的 lineReader 继承自 EventEmitter，可以监听 error, line, close, end 事件
 */
function createLineReader(file) {
    if (!file) {
        throw new Error('lineReader(file) 必须指定目标文件');
    }
    let inputStream = fs.createReadStream(file);
    let lineReader = readline.createInterface({input: inputStream});
    inputStream.on('error', err => {
        console.log(`读取文件 ${file} 失败，请检查文件路径是否正确`);
        lineReader.emit('error', err);
    });
    inputStream.on('end', () => {
        lineReader.emit('end');
    });
    return lineReader;
}

module.exports = createLineReader;