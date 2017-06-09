'use strict';

class StringSplosion {
  constructor (str) {
    this.splosionStr = str;
  } 

  manipulate()  {
    let sploded = " ";
    let str1 = this.splosionStr;
  
    for (let i = 0; i<=str1.length; i++) {
      sploded += str1.slice(0, i);
    }
    return sploded;
  }
}

module.exports = {StringSplosion};


