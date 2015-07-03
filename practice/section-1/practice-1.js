function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    for (var x = 0; x < collection_b.length; x++) {
      if (collection_a[i] === collection_b[x]) {
        result.push(collection_a[i]);
      }
    }
  }
  return result;
}
