/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
let a=[6,1,5,2,-1,15,0,80,80]
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
    
    for (let i = 0; i < a.length; i++) 
    {
     for (let k = i+1; k < a.length; k++) 
        {
        let n
        if (a[k]<a[i]) 
             {
              n=a[k]   
              a[k]=a[i]
              a[i]= n     
             } 
        
        }  
    }
}
////Descending 
   bubbleSort(a)
   console.log(a);
//Ascending 
  bubbleSorta(a)
    console.log(a);
   
    
  
