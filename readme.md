Read file line by line

## THIS PROJECT IS 【INACTIVE】
This project is not maintained anymore. Please use alternative.

## Install

```
npm install @taluoo/node-line-reader --save
```

## Usage

```
const createLineReader = require('@taluoo/node-line-reader');

let lineReader = createLineReader('log.txt');

lineReader.on('error', err => {
    console.log(err);
});

lineReader.on('end', () => {
    console.log('end')
});

lineReader.on('close', () => {
    console.log('close')
});

lineReader.on('line', line => {
    console.log(line)
});

```

## TODO

