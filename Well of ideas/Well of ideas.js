// well of ideas easy version


function well(x){
    let count=0;
      for(const idea of x){
        if(idea==="good"){
    count ++;
    }
      }
      if(count>2){
    return "I smell a series!"
    }
    if(count>0){ 
    return "Publish!"}
      return "Fail!"
    }