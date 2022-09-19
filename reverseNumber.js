/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let isNegative = false;
    if(x<0){
        isNegative = true;
    }

    let converted = Math.abs(x).toString();
    let updatedValue='';
    for(let i =0;i<converted.length;i++){
        updatedValue += converted[converted.length-1-i];
    }
    if(isNegative) { updatedValue = '-'+updatedValue}
    console.log({updatedValue, isNegative});
    return parseInt(updatedValue)
};

reverse(-123)