// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function(obj) {
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
    var newStr = [];
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
    var newStr = ["[", "]"];
    return newStr.join("");
  }
  if (typeof obj === 'object' && Object.keys(obj).length === 0) {
    var newStr = ["{", "}"];
    return newStr.join("");
  }
  if (typeof obj === 'object' && Object.keys(obj).length !== 0) {
    var newStr = ["{"];
    for (var i = 0; i < Object.keys(obj).length; i++) {
      if (typeof obj[i] === 'boolean') {
        newStr.push(obj);
      }
      if (typeof obj[i] === 'number' || typeof obj[i] === 'string') {
        newStr.push('\"');
        newStr.push(Object.keys(obj[i]));
        newStr.push(":");
        newStr.push(obj[i][Object.keys(obj[i])]);
        newStr.push('\"');
      } else {
        newStr.push(stringifyJSON(obj[i]));
      }
    }
    newStr.push["}"];
    newStr2 = ["["];
    newStr2.push(newStr);
    newStr2.push("]");
    return newStr2.join("");
  }

};