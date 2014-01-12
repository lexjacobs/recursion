// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function(obj) {
  var newStr;
  var newStr2;
  if (obj !== null && Array.isArray(obj) === false && typeof obj === 'object' && Object.keys(obj).length !== 0) {
    newStr = ["{"];
    var oKobj = Object.keys(obj);

    for (var i = 0; i < oKobj.length; i++) {
      if (oKobj[i] === undefined || typeof oKobj[i] === 'function' || obj[oKobj[i]] === undefined || typeof obj[oKobj[i]] === 'function') {
        continue;
      } else {
        newStr.push('\"');
        newStr.push(oKobj[i]);
        newStr.push('\"');
      }
      newStr.push(":");
      if (Array.isArray(obj[oKobj[i]]) === true) {
        newStr.push(stringifyJSON(obj[oKobj[i]]));
      }
      if (Array.isArray(obj[oKobj[i]]) === false && obj[oKobj[i]] !== null && typeof obj[oKobj[i]] == 'object') {
        newStr.push(stringifyJSON(obj[oKobj[i]]));
      }
      if (typeof obj[oKobj[i]] === 'number') {
        newStr.push(obj[oKobj[i]]);
      }
      if (obj[oKobj[i]] === null) {
        newStr.push('null');
      }
      if (typeof obj[oKobj[i]] === 'boolean') {
        newStr.push(obj[oKobj[i]]);
      }
      if (typeof obj[oKobj[i]] === 'string') {
        newStr.push('\"');
        newStr.push(obj[oKobj[i]]);
        newStr.push('\"');
      }
      if (i < oKobj.length - 1) {
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