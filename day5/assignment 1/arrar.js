let arr = [function rangebetween(start, end) 
 
        {
      
            if (start > end) {
                var arr = new Array(start - end + 1);
                for (var i = 0; i < arr.length; i++, start--) {
                    resarrult[i] = start;
                }
                return arr;
            } 
           else 
           {
                var arr = new Array(end-start+1);
             
            for (var j = 0; j < arr.length; j++, start++) 
            {
                arr[j] = start;
            }
                  return arr;
            }
        }
        
        
    console.log(rangebetween(prompt("enter number:- "),prompt("b/w number:- ")))
];

arr.forEach((el)=>{
    console.log(el)
})
let odd = arr.filter(el=>el%2==1);
console.log(odd);

let cube = Math.pow((el=>el%2==1),3);

console.log(cube);

