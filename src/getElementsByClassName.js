// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className) {
  var result = [];

  var walkDom = function(node, target) {
    for (var i = 0; i < node.childNodes.length; i++) {
      if (node.childNodes[i].classList) {
        for (var j = 0; j < node.childNodes[i].classList.length; j++) {
          if (node.childNodes[i].classList[j] === target) {
            result.push(node.childNodes[i]);
          }
        }
      }
      if (node.childNodes[i].childNodes) {
        walkDom(node.childNodes[i], target);
      }
    }
    return result;
  };
  return walkDom(document.body, className);
};
