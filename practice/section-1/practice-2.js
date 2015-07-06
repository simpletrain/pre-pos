function findExactlyItem(collection_b, x, collection_a, i) {
  var item;
  for (var y = 0; y < collection_b[x].length; y++) {
    if (collection_a[i] === collection_b[x][y]) {
      item = collection_a[i];
      return item;
    }
  }
  return item;
}
function findItem(collection_b, collection_a, i) {
  for (var x = 0; x < collection_b.length; x++) {
    var item = findExactlyItem(collection_b, x, collection_a, i);
  }
  return item;
}
function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    var itemA = findItem(collection_b, collection_a, i);
    if (itemA) {
      result.push(itemA);
    }
  }
  return result;
}
