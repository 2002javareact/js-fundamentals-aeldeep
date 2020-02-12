/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

let a='how are you?'
let st=''
function reverseStr(someStr) 
{
    
    for (let i = a.length; i>=0; i--)
        {
            st=st+a.substr(i,1)
        
        }
        return st
}
reverseStr(a)
console.log(st);
