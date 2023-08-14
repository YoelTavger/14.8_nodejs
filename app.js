console.log("\n");
const { count } = require("console");
const fs = require("fs");
const _ = require("lodash");

fs.readFile("./data.txt", "utf-8", function (err, data) {
  if (err) throw err;

  //מדפיס את כל הטקסט
  function printData(data) {
    console.log(data);
  }
  printData(data);
  console.log("\n");

  //תדפיס את מספר המילים
  function wordsCounter(data) {
    let count = 1;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === " " && data[i - 1] !== " ") {
        count++;
      }
    }
    return count;
  }
  console.log(wordsCounter(data));
  console.log("\n");

  //תדפיס את הטקסט ברוורס

  function toSplit(data) {
    const wordsArray = _.split(data, " ");
    return wordsArray;
  }
  function toReverseArray(arr) {
    const reverseArray = _.reverse(arr);
    return reverseArray;
  }
  function toString(arr) {
    const toString = _.join(arr, " ");
    return toString;
  }
  function toReverseString(data) {
    const split = toSplit(data);
    const reverse = toReverseArray(split);
    const resolve = toString(reverse);
    return resolve;
  }
  console.log(toReverseString(data));
  console.log("\n");

  //תדפיס את המילים ללא כפילויות
  function toUniq(arr) {
    const uniqArray = _.uniq(arr);
    return uniqArray;
  }

  function uniqWords(data) {
    const split = toSplit(data);
    const uniqArray = toUniq(split);
    const backToString = toString(uniqArray);
    return backToString;
  }
  console.log(uniqWords(data));
  console.log("\n");

  //תדפיס את מספר המילים הייחודיות
  function counterUniqWords(data) {
    const stringUniq = uniqWords(data);
    const count = wordsCounter(stringUniq);
    return count;
  }
  console.log(counterUniqWords(data));
  console.log("\n");

  //תדפיס את המילים ללא כפילויות באותיות גדולות
  function toUpperCase(data) {
    const uppercase = _.upperCase(data);
    return uppercase;
  }
  function toUniqUpperCase(data) {
    const stringUniq = uniqWords(data);
    const uniqUppercase = toUpperCase(stringUniq);
    return uniqUppercase;
  }
  console.log(toUniqUpperCase(data));
  console.log("\n");

  //תדפיס את המילים ללא כפילויות שגדולות מחמש תווים
  function contUniqWordsLongerFive(data) {
    const uniq = uniqWords(data);
    const split = toSplit(uniq);
    let count = 0;
    for (i = 0; i < split.length; i++) {
      let countWord = 0;
      for (j = 0; j < split[i].length; j++) {
        countWord++;
      }
      if (countWord > 5) {
        count++;
      }
    }
    return count;
  }
  console.log(contUniqWordsLongerFive(data));
  console.log("\n");
});
