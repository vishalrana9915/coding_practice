function isBalanced(s: string): string {
    // Write your code here
    let array:string[] = []
    
    s.split("").forEach((str)=>{
        if (array.length == 0){
            array.push(str)
        } else{
            if(str == ")" && array[array.length-1] == "("){
                array.pop()
            }else if(str == "}" && array[array.length-1] == "{"){
                array.pop()
            }else if(str == "]" && array[array.length-1] == "["){
                array.pop()
            }else{
                array.push(str)
            }
        } 
    })
    
    
    
    
    return array.length > 0 ? "NO" : "YES";

}
