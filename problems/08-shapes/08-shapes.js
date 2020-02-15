/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) 
{
  let x= character //the character
  let count = height-2  //the counter belong to substring in the lower for loop #Diamond
  //to accept only the ODD number
 if (height%2===0)
  {
    throw  (`Please Change The Number to an ODD Number`)
  }
  
  switch (shape) {
    case "Triangle":
       for (let i=0; i < height; i++) 
      {
        console.log(x);
        x=x+character
      }
      break;
      case "Square":
        for (let i=1; i < height; i++) 
        {
          x=x+character
        }
        for(let k = 0; k< height;k++)
        {
        console.log(x);
        }
      break;
      case "Diamond":
        height=(height-1)/2
        let y='' // to center the shape
        for (let q = 0 ; q<=height;q++)
        {
          y=y+' '
        }
        let c=height
        let i = 0
        for (; i < height; i++) 
            {
              y=y.substr(0,c)
              console.log(y+x);
              c--
              x=x+character+character
            }
            console.log(x);
            
            let z = height
            let o=''
           for (; z >=0; z--) 
            {
              o=o+' '
              x=x.substr(1,count)
              console.log(o+x);   
              count=count-2
            }
      
  break;
    default:
      console.log(`This Shape (${shape}) dosen't Exist please Enter
      (Triangle , Square, Diamond)`);
      
      break;
  }
  

 
  return shape
}

//console.log(printShape("Triangle",5,'*'));
//console.log(printShape("Square",5,'*'));
//console.log(printShape("Diamond",5,'*'));
//console.log(printShape("xxx",5,'*'));
