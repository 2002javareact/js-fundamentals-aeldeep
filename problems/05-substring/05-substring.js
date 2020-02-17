/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
//n is the result


function substring(someStr, startIndex, endIndex) 
    {
        let n=''
            n=someStr.substring(startIndex, endIndex)
            return n            
    }
   // substring('nan', 0 ,2)
   try 
   {
   console.log(substring('FaceBook', 0, 3));
} catch (e) 
{
    throw ('please enter strings only')
}

