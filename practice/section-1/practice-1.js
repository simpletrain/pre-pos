function findItem(sourceArray, keyArray, i) {
  var item;
  for (var x = 0; x < keyArray.length; x++) {
    if (sourceArray[i] === keyArray[x]) {
      item = sourceArray[i];
      return item;
    }
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
