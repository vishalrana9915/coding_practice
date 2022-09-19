function bracket_match(bracket_string) {
    let opening=0;
    let closing=0;
    for(let i=0;i<bracket_string.length;i++){
        console.log
      if(bracket_string === '('){
        opening +=1;
      }else if(bracket_string === ')'){
        if(opening >1){
          opening -=1;
        }else{
          closing +=1;
        }
      }
      
    }

    return opening + closing;
  }

//   console.log(bracket_match('()'))
console.log(bracket_match('(()())'))
console.log(bracket_match('((())'))