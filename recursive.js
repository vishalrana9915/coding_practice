function rev(str){
    if(str.length <=1){
        return str;
    }

    let first = str.charAt(0);
    let last = str.slice(1);

    return rev(last) + first
}


console.log(rev('abcdef'))