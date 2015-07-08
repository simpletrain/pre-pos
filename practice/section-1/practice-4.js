function findItem(sourceArray, keyArray, i) {
  var item;
  for (var x = 0; x < keyArray.value.length; x++) {
    if (sourceArray[i].key === keyArray.value[x]) {
      item = sourceArray[i].key;
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
