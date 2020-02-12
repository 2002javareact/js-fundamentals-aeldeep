/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */

//داله الضرب !n=n*n-1*n-2*...*3*2*1
let i = 1
function factorial(sumNum) 
{
    
    if (sumNum===0) 
    {
        i= 0
    }
    
    for (; sumNum>0; sumNum--) 
    {
        i*=sumNum
        
    }
}
    factorial(10)

    console.log(i);
    
  
