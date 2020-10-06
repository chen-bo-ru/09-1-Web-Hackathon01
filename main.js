var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'
let c=0;
let j;
let d=0;
// let add=0
// cells.addEventListener('click', function(){ 
 
//     document.querySelector('date').style.color='black'; 
 
// })


function change(x){
    for(j =0;j<28;j++){
        cells[j].style.background='none';
    }
    cells[x].style.background='#000000';
    // if(add>0){
    //     let newtextnode=document.createTextNode("input")
        
    // }
    c=x;
    d+=1;
}
function mouseOver(x){
    cells[x].style.background='#b0b0b0';
    if(d>0){
        cells[c].style.background='#000000';
    }
}
function mouseOut(x){
    cells[x].style.background='none';
    if(d>0){
        cells[c].style.background='#000000';
    }
}
function getInputValue(){
    var inputVal = document.getElementById("cal-input").value;
    let nowcolor =color.value
    let textnode=cells[c].childNodes[0];
    textnode.appendData("\n")
    textnode.appendData(inputVal);
    // cells[c].write(textnode.data);
    textnode.style.color=color.value;
    // =document.createTextNode(inputVal)
    // add+=1;
}





//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}