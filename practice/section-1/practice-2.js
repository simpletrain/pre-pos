function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    for (var x = 0; x < collection_b.length; x++) {
      for (var y = 0; y < collection_b[x].length; y++) {
        if (collection_a[i] === collection_b[x][y]) {
          result.push(collection_a[i]);
        }
      }
    }
  }
  return result;
}
