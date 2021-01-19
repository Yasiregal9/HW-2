

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("swap").style.visibility = "hidden";
    document.getElementById("swappedScreen").style.display = "none";
    document.getElementById("start").addEventListener("click", LoopintoArray, false) 
    document.getElementById("swap").addEventListener("click", swapLetters, false) 

});

let arr1 = [];

function LoopintoArray()
{
    for(let i=0;i<3;i++)
    {
        arr1[i]=(prompt("Enter words: "));
        let anotherLi = document.createElement("li");
        anotherLi.appendChild(document.createTextNode(arr1[i]));
        document.getElementById("firstUl").appendChild(anotherLi);
    }
    document.getElementById("swap").style.visibility = "visible";
    document.getElementById("start").style.visibility = "hidden";



}

function swapLetters()
{
    document.getElementById("swappedScreen").style.display = "block";
    document.getElementById("normalScreen").style.display = "none";

    let secondArray = arr1.map(function(oneWord) {       
     return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);
     });

    for(let i=0;i<3;i++)
    {
        let anotherLi = document.createElement("li");
        anotherLi.appendChild(document.createTextNode(secondArray[i]));
        document.getElementById("secondUl").appendChild(anotherLi);
    }
}



    