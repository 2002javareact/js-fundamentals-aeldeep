/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) 
{
    if (index >= someArr.length)
    {
        return 'out of range'
    }
    else
    {
    let n = someArr.splice (index,1)
     
      return someArr
    }
}
console.log(spliceElement (['aaaa','sssss','ddddd','ffffff','gggggg','hhhhhh','bbbbbb','vvvvvv'],7));

/*console.log('This is The Array after removing the element '+`\n` +
spliceElement (['aaaa','sssss','ddddd','ffffff','gggggg','hhhhhh','bbbbbb','vvvvvv'],1));*/
