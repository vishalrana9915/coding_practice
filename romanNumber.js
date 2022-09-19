/**
* roman , roman number to convert to number
*/
const convertRomanToNumber = (roman)=>{
    if(roman === 'I'){
        return 1;
    }else if(roman === 'V'){
        return 5;
    }else if(roman === 'X'){
        return 10;
    }else if(roman === 'L'){
        return 50;
    }else if(roman === 'C'){
        return 100;
    }else if(roman === 'D'){
        return 500;
    }else if(roman === 'M'){
        return 1000;
    }
    
}


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    console.log({s});
    let convertToArray = s.split("");
    let number=0;
    for(let i=0;i<convertToArray.length;){
        let currentNumber = convertToArray[i];
        let nextNumber  = convertToArray[i+1];
        let combined = currentNumber + nextNumber;
        console.log({currentNumber,nextNumber,combined,i})
        if(combined === 'IV'){
            number += 4;
            i = i+2;
        } else if(combined === 'IX'){
            number += 9;
            i = i+2;
        } else if(combined === 'XL'){
            number += 40;
            i = i+2;
        } else if(combined === 'XC'){
            number += 90;
            i = i+2;
        } else if(combined === 'CD'){
            number += 400;
            i = i+2;
        } else if(combined === 'CM'){
            number += 900;
            i = i+2;
        }else{
            // single roman
            number += convertRomanToNumber(currentNumber);
            console.log("Convert number ==>",{number})
            i++;
        }
    }
    console.log({number});
    return number;
};

console.log(romanToInt("LVIII"))