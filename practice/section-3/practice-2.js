function findKey(sourceObject, keyObject) {
  for (var x = 0; x < keyObject.value.length; x++) {
    if (sourceObject.key === keyObject.value[x]) {
      return 0;
    }
  }
  return -1;
}

function create_updated_collection(collection_a, object_b) {
  for (var i = 0; i < collection_a.length; i++) {
    var index = findKey(collection_a[i], object_b);
    if (index !== -1) {
      collection_a[i].count -= parseInt(collection_a[i].count / 3);
    }
  }
  return collection_a;
}
