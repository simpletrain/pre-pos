function collect_same_elements(collection_a, object_b) {
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    for (var x = 0; x < object_b.value.length; x++) {
      if (collection_a[i] === object_b.value[x]) {
        result.push(collection_a[i]);
      }
    }
  }
  return result;
}
