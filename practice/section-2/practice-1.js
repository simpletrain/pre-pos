function count_same_elements(collection) {
  var result = [];
  var nowCount = "";
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] !== nowCount) {
      result[result.length] = {};
      result[result.length - 1].key = collection[i];
      result[result.length - 1].count = 1;
      nowCount = collection[i];
    } else {
      result[result.length - 1].count += 1;
    }
  }
  return result;
}
