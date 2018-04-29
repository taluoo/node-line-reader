const readline = require('readline');
const fs = require('fs');

/**
 * 一行行的读取文件
 * @param file 目标文件
 * @param onLine line 事件的回调，参数是每一行的内容
 */
function lineReader(file, onLine) {
    let inputStream = fs.createReadStream(file);
    inputStream.on('error', err => {
        console.log(`读取文件 ${file} 失败，请检查文件路径是否正确`);
        console.log(err);
        process.exit();
    });
    let lineReader = readline.createInterface({input: inputStream});
    lineReader.on('line', onLine)
}

module.exports = lineReader;