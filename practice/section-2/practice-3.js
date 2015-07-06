function count_same_elements(collection) {
  var result = [];
  var nowCount = "";
  for (var i = 0; i < collection.length; i++) {
    transferredStr = transfer(collection[i]);
    if (transfered_elements[0] !== nowCount) {
      result[result.length] = {};
      result[result.length - 1].name = transferredStr[0];
      result[result.length - 1].summary = transferredStr[1];
      nowCount = transfered_elements[0];
    }
    else {
      result[result.length - 1].summary += transferredStr[1];
    }
  }
  return result;
}


function transfer(originElements) {
  var transferredStr = [];
  if (originElements.length === 1) {
    transferredStr[0] = originElements;
    transferredStr[1] = 1;
  }
  else {
    transferredStr[0] = originElements[0];
    transferredStr[1] = getNum(originElements);
  }
  return transferredStr;
}

function getNum(originElements) {
  var newElements = originElements.substr(2);
  return parseInt(newElements);
}
