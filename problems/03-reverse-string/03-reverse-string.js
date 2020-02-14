/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

//let a='how are you?'
let st=''
function reverseStr(someStr) 
{
    
    for (let i = someStr.length; i>=0; i--)
        {
            st=st+someStr.substr(i,1)
        
        }
        return st
}
//reverseStr('how are you?')
console.log(reverseStr('how are you?'));
