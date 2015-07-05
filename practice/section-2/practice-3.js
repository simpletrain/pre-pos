function count_same_elements(collection) {
  var result = [];
  var now_count = "";
  for (var i = 0; i < collection.length; i++) {
    transfered_elements = transfer(collection[i]);
    if (transfered_elements[0] !== now_count) {
      result[result.length] = {};
      result[result.length - 1].name = transfered_elements[0];
      result[result.length - 1].summary = transfered_elements[1];
      now_count = transfered_elements[0];
    }
    else {
      result[result.length - 1].summary += transfered_elements[1];
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
