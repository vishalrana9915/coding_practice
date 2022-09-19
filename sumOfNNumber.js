function sumOfNumber(N,i=0){
    console.log({N,i})
    if(i == N){
        return N;
    }else{
        
        return i + sumOfNumber(N,i = i+1);
    }
}

console.log(sumOfNumber(6))