/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n)
{
    //we need to handel the first 3 position (0,1,2)
    if (n===0|| n===1) 
    {
        return n
    }
    if (n===2) 
    {
        return 1
    }
    //we declare 3 variables make one of them equals the others then change variables values within for loop it's faster than recursion
    let x=0
    let y = 1
    for (let i = 2; i<=n; i++) 
    {
        let z = x+y
        x=y
        y=z
    }
    return y


}
console.log(fib(500));
