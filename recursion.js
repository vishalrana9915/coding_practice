function printNos(N,i=1){
    //code here
    console.log(i)
    if(i == N){
        return;
    }else{
        return printNos(N, i+1)
    }
}

printNos(9)