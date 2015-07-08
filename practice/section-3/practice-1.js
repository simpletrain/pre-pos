function findKey(sourceArray, keyObject, i) {
  for (var x = 0; x < keyObject.value.length; x++) {
    if (sourceArray[i].key === keyObject.value[x]) {
      return i;
    }
  }
  return -1;
}
function create_updated_collection(collection_a, object_b) {
  for (var i = 0; i < collection_a.length; i++) {
    var index = findKey(collection_a, object_b, i);
    if (index !== -1) {
      collection_a[index].count -= 1;
    }
  }
  return collection_a;
}
