function count_same_elements(collection) {
  var result = [];
  var now_count = "";
  for(var i=0;i<collection.length;i++){
    if(collection[i]!==now_count&&collection[i].length==1){
      result[result.length]={};
      result[result.length-1].key=collection[i];
      result[result.length-1].count=1;
      now_count = collection[i];
    }
    else if(collection[i].length==1){
      result[result.length-1].count++;
    }
    else if(collection[i][0]===now_count){
      result[result.length-1].count+=collection[i][2];
    }
    else{
      result[result.length]={};
      result[result.length-1].key=collection[i][0];
      result[result.length-1].count=parseInt((collection[i][2]));
      now_count = collection[i][0];
    }
  }
  return result;
}
