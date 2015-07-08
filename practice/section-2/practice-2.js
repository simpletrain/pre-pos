function count_same_elements(collection) {
  var result = [];
  var nowCount = "";
  for (var i = 0; i < collection.length; i++) {
    transferredStr = transfer(collection[i]);
    if (transferredStr[0] !== nowCount) {
      result[result.length] = {};
      result[result.length - 1].key = transferredStr[0];
      result[result.length - 1].count = transferredStr[1];
      nowCount = transferredStr[0];
    }
    else {
      result[result.length - 1].count += transferredStr[1];
    }
  }
  return result;
}


function transfer(originElements) {
  var transferringStr = [];
  if (originElements.length === 1) {
    transferringStr[0] = originElements;
    transferringStr[1] = 1;
  }
  else {
    transferringStr[0] = originElements[0];
    transferringStr[1] = getNumber(originElements);
  }
  return transferringStr;
}

function getNumber(unreadableString) {
  var newElements = unreadableString.substr(2);
  return parseInt(newElements);
}
