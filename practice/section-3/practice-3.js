function create_updated_collection(collection_a, object_b) {
  var result = [];
  var now_count = "";
  for(var i=0;i<collection_a.length;i++){
    if(collection_a[i]!==now_count){
      result[result.length]={};
      result[result.length-1].key=collection_a[i];
      result[result.length-1].count=1;
      now_count = collection_a[i];
    }
    else{
      result[result.length-1].count++;
    }
  }
  for(var x=0;x<result.length;x++){
    for(var y=0;y<object_b.value.length;y++){
      if(result[x].key===object_b.value[y]){
        result[x].count-=parseInt(result[x].count/3);
      }
    }
  }
  return result;
}
