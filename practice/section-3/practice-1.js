function findKey(object_b, collection_a, i) {
  for (var x = 0; x < object_b.value.length; x++) {
    if (collection_a[i].key === object_b.value[x]) {
      return i;
    }
  }
  return -1;
}
function create_updated_collection(collection_a, object_b) {
  for (var i = 0; i < collection_a.length; i++) {
    var index = findKey(object_b, collection_a, i);
    if (index !== -1) {
      collection_a[index].count -= 1;
    }
  }
  return collection_a;
}
