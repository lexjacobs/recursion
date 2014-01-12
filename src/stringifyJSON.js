// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function(obj) {
  var newStr;
  var newStr2;
  if (obj !== null && Array.isArray(obj) === false && typeof obj === 'object' && Object.keys(obj).length !== 0) {
    newStr = ["{"];
    var ObjectKeysObj = Object.keys(obj);

    for (var i = 0; i < ObjectKeysObj.length; i++) {
      if (ObjectKeysObj[i] === undefined || typeof ObjectKeysObj[i] === 'function' || obj[ObjectKeysObj[i]] === undefined || typeof obj[ObjectKeysObj[i]] === 'function') {
        continue;
      } else {
        newStr.push('\"');
        newStr.push(ObjectKeysObj[i]);
        newStr.push('\"');
      }
      newStr.push(":");
      if (Array.isArray(obj[ObjectKeysObj[i]]) === true) {
        newStr.push(stringifyJSON(obj[ObjectKeysObj[i]]));
      }
      if (Array.isArray(obj[ObjectKeysObj[i]]) === false && obj[ObjectKeysObj[i]] !== null && typeof obj[ObjectKeysObj[i]] == 'object') {
        newStr.push(stringifyJSON(obj[ObjectKeysObj[i]]));
      }
      if (typeof obj[ObjectKeysObj[i]] === 'number') {
        newStr.push(obj[ObjectKeysObj[i]]);
      }
      if (obj[ObjectKeysObj[i]] === null) {
        newStr.push('null');
      }
      if (typeof obj[ObjectKeysObj[i]] === 'boolean') {
        newStr.push(obj[ObjectKeysObj[i]]);
      }
      if (typeof obj[ObjectKeysObj[i]] === 'string') {
        newStr.push('\"');
        newStr.push(obj[ObjectKeysObj[i]]);
        newStr.push('\"');
      }
      if (i < ObjectKeysObj.length - 1) {
        newStr.push(",");
      }
    }
    newStr.push("}");
    return newStr.join("");
  }
  if (obj === null) {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  }
  if (typeof obj === 'number') {
    return '' + obj;
  }
  if (typeof obj === 'boolean') {
    return '' + obj;
  }
  if (Array.isArray(obj) === true && obj.length !== 0) {
    newStr = [];
    for (var i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'number') {
        newStr.push(obj[i]);
      } else {
        newStr.push(stringifyJSON(obj[i]));
      }
    }
    newStr2 = ["["];
    newStr2.push(newStr);
    newStr2.push("]");
    return newStr2.join("");
  }
  if (Array.isArray(obj) === true && obj.length === 0) {
    newStr = ["[", "]"];
    return newStr.join("");
  }
  if (typeof obj === 'object' && Object.keys(obj).length === 0) {
    newStr = ["{", "}"];
    return newStr.join("");
  }
};