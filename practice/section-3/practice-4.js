function create_updated_collection(collection_a, object_b) {
  var result = [];
  var now_count = "";
  for (var i = 0; i < collection_a.length; i++) {
    transfered_elements = transfer(collection_a[i]);
    if (transfered_elements[0] !== now_count) {
      result[result.length] = {};
      result[result.length - 1].key = transfered_elements[0];
      result[result.length - 1].count = transfered_elements[1];
      now_count = transfered_elements[0];
    }
    else {
      result[result.length - 1].count += transfered_elements[1];
    }
  }
  for (var x = 0; x < result.length; x++) {
    for (var y = 0; y < object_b.value.length; y++) {
      if (result[x].key === object_b.value[y]) {
        result[x].count -= parseInt(result[x].count / 3);
      }
    }
  }
  return result;
}


function transfer(origin_elements) {
  var transfered_str = [];
  if (origin_elements.length === 1) {
    transfered_str[0] = origin_elements;
    transfered_str[1] = 1;
  }
  else {
    transfered_str[0] = origin_elements[0];
    transfered_str[1] = getNum(origin_elements);
  }
  return transfered_str;
}

function getNum(origin_elements) {
  new_elements = origin_elements.substr(2);
  return parseInt(new_elements);
}
