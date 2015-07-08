function create_updated_collection(collection_a, object_b) {
  var result = [];
  var nowCount = "";
  for (var i = 0; i < collection_a.length; i++) {
    var transferredStr = transfer(collection_a[i]);
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
  for (var x = 0; x < result.length; x++) {
    var index = findKey(result, object_b, x);
    if (index !== -1) {
      result[index].count -= parseInt(result[index].count / 3);
    }
  }
  return result;
}

function findKey(sourceArray, keyObject, x) {
  for (var y = 0; y < keyObject.value.length; y++) {
    if (sourceArray[x].key === keyObject.value[y]) {
      return x;
    }
  }
  return -1;
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
