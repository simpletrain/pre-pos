function create_updated_collection(collection_a, object_b) {
  for(var i=0;i<collection_a.length;i++){
    for(var x=0;x<object_b.value.length;x++){
      if(collection_a[i].key===object_b.value[x]){
        collection_a[i].count--;
      }
    }
  }
  return collection_a;
}
