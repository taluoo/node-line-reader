"use strict";
const chai = require("chai");
// const chaiAsPromised = require("chai-as-promised");

// chai.use(chaiAsPromised);
chai.should();

const createLineReader = require('../index');

describe('index.js', () => {
    it('should export a function', () => {
        createLineReader.should.be.a('function');
    });

    describe('lineReader(file)', () => {
        it('should throw when missing file arg', () => {
            try {
                createLineReader();
            } catch (e) {
                e.message.should.include('lineReader(file) 必须指定目标文件')
            }
        });
        it('should throw when file not readable', () => {
            let linereader = createLineReader('test/tmp1.txt');
            linereader.on('error', function (err) {
                err.code.should.equal('ENOENT');
                err.message.should.include("no such file or directory, open 'test/tmp1.txt'");
            });
        });

    });
});