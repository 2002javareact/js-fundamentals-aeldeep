/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
//for one word not a sentence
let a =0
function isPalindrome(someStr) 
{
       a = someStr.length 
      for (let i = 0; i <= someStr.length/2; i++) 
      {
          a--
          let n = someStr.substr(i,1)
          let k = someStr.substr(a,1)
        
        //  console.log('n is  '+n);
        //  console.log('k is  '+k);
        if (n!==k)
          {
              return false
          }
          
      }
      return true
}
console.log(isPalindrome('haah'));


//for whole sentence
function isPalindromeS(sentence)
{
    let st = sentence.split(' ').join('')
    st=st.toLowerCase()
    a = st.length 
    for (let i = 0; i <= st.length/2; i++) 
    {
        a--
        let n = st.substr(i,1)
        let k = st.substr(a,1)
      
        //console.log('n is  '+n);  
       // console.log('k is  '+k);
      if (n!==k)
        {
            return false
        }
    }
    return true
}
console.log(isPalindromeS('A Santa Lived As a Devil At NASA'));
