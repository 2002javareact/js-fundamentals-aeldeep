/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
//n is the result
let n=''
try 
{
function substring(someStr, startIndex, endIndex) 
    {

            n=someStr.substring(startIndex, endIndex)
            return n            
      
    }
    substring(nan, 0 ,3)
} catch (e) 
{
    throw ('please enter strings only')
}
console.log(n);
