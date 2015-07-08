function findExactlyItem(sourceArray, keyArray, x, i) {
  var item;
  for (var y = 0; y < keyArray[x].length; y++) {
    if (sourceArray[i] === keyArray[x][y]) {
      item = sourceArray[i];
      return item;
    }
  }
  return item;
}
function findItem(sourceArray, keyArray, i) {
  for (var x = 0; x < keyArray.length; x++) {
    var item = findExactlyItem(sourceArray, keyArray, x, i);
  }
  return item;
}
function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    var itemA = findItem(collection_a, collection_b, i);
    if (itemA) {
      result.push(itemA);
    }
  }
  return result;
}
