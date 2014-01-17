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
      if (node.childNodes[i].classList !== undefined) {
        for (var j = 0; j < node.childNodes[i].classList.length; j++) {
          if (node.childNodes[i].classList[j] === target) {
            result.push(node.childNodes[i]);
            if (node.childNodes[i].childNodes.length !== undefined) {
              return walkDom(node.childNodes[i], target);
            }
          }
        }
      }
    }
    return result;
  };

  return walkDom(document.body, className);


};

// the version above is working just fine, but what the function calls
// isn't recursable for this purpose.
// like the function below, the recursive function works by calling a 
// function ON a SET of data. below, it's the array of arrays of arrays.
// above, the SET of data should be the .childNodes of whatever is called in.
// that way, the .childNodes of the .childNodes can be recursively scanned
// for the existance of the className.


// var testList = [1,2,3,[1,2,[6,7,[11,12,13,14],8],3],4,5];
// var results = [];
// var recurser = function(set){
//   for (var i = 0; i < set.length; i++) {
//     if (Array.isArray(set[i])){
//       results.push(set[i]);
//       return recurser(set[i]);
//     }
//   }
//   return results;
// };
// console.log(recurser(testList));

// var getElementsByClassName = function(className) {
//   var result = [];
//   for (var i = 0; i < document.body.childNodes.length; i++) {
//     if (document.body.childNodes[i].classList !== undefined) {
//       var resultList = document.body.childNodes[i].classList;
//       for (var j = 0; j < resultList.length; j++) {
//         if (resultList[j] === className) {
//           console.log(resultList[j]);
//           result.push(resultList[j]);
//           return(result);
//         }
//       }
//     }
//   }
// };

// var getElementsByClassName = function(className) {
//   var result = [];
//   var $expectedNodes = $(".targetClassName");
//   result.push($expectedNodes);
//   // console.log(result);
//   console.log(_.toArray(result[0]));
// };