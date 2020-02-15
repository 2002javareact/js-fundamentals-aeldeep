/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
let a=[6,1,5,80,-1,15,0,80,2]
let b=[6,1,5,80,-1,15,0,80,2]
//Descending  
function bubbleSort(numArray) 
{//مصفوفتين بيقارن الاكبر وبيعينه فى متغير مؤقت  2for loops
    //use two For loop to resort the array
    for (let i = 0; i < a.length; i++) 
    {
     for (let k = i+1; k < a.length; k++) 
        {
        let n
        if (a[k]>a[i]) 
             {
              n=a[k]   
              a[k]=a[i]
              a[i]= n     
             } 
        }  
    }
}
//Ascending 
function bubbleSorta(numArray) 
{
    
    for (let i = 0; i < b.length; i++) 
    {
     for (let k = i+1; k < b.length; k++) 
        {
        let n
        if (b[k]<b[i]) 
             {
              n=b[k]   
              b[k]=b[i]
              b[i]= n     
             } 
        
        }  
    }
}
////Descending 
   bubbleSort(a)
   console.log(a);
//Ascending 
  bubbleSorta(b)
    console.log(b);
    
   
    
  
