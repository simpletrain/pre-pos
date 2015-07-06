function create_updated_collection(collection_a, object_b) {
  var result = [];
  var now_count = "";
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a[i] !== now_count) {
      result[result.length] = {};
      result[result.length - 1].key = collection_a[i];
      result[result.length - 1].count = 1;
      now_count = collection_a[i];
    }
    else {
      result[result.length - 1].count += 1;
    }
  }
  for (var x = 0; x < result.length; x++) {
    var index = findKey(result, object_b, x);
    if (index !== -1) {
      result[index].count -= parseInt(result[index].count / 3);
    }
  }
  return result;
}


function findKey(result, object_b, x) {
  for (var y = 0; y < object_b.value.length; y++) {
    if (result[x].key === object_b.value[y]) {
      return x;
    }
  }
  return -1;
}
