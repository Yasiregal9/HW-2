// document.addEventListener("DOMContentLoaded", function (event) {

//     document.getElementById("button1").addEventListener("click", function () {

//         document.getElementById("textbox1").value = "success";
//     });
// });

let startBtn = document.querySelector("#start");
let swapBtn = document.querySelector("#swap");


startBtn.addEventListener("click",LoopintoArray,false);

for(i=0;i<3;i++)
{
    swapBtn.addEventListener("click",swappedletters(arr[i]),false);    
}

let secondArray = arr.map(
   
    function swappedletters(oneWord)
 {      
    return oneWord.charAt(oneWord.length-1)+oneWord.substring(1,oneWord.length-1)+oneWord.charAt(0);    
 }
);

function LoopintoArray()
{
    for(let i=0;i<3;i++)
    {
        arr.push(prompt("Enter words: "));
    }

    // for(1=0;i<3;i++)
    // {
    //     console.log(secondArray[i]);
    // }
}



    