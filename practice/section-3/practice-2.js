function create_updated_collection(collection_a, object_b) {
  for(var i=0;i<collection_a.length;i++){
    for(var x=0;x<object_b.value.length;x++){
      if(collection_a[i].key===object_b.value[x]){
        collection_a[i].count-=parseInt(collection_a[i].count/3);
      }
    }
  }
  return collection_a;
}
