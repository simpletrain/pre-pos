function count_same_elements(collection) {
  var result = [];
  var now_count = "";
  for(var i=0;i<collection.length;i++){
    if(collection[i]!==now_count){
      result[result.length]={};
      result[result.length-1].key=collection[i];
      result[result.length-1].count=1;
      now_count = collection[i];
    }
    else{
      result[result.length-1].count++;
    }
  }
  return result;
}
