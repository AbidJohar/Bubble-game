var timer =60;
var rnint = 0;
var score = 0;

function bubblemaker(){

var store = " ";
for(var i = 0; i<150; i++){
  rn= Math.floor(Math.random()*10);
    store  += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#lowerdev").innerHTML = store;
}

function Timer(){

  var timeint = setInterval(function(){
    if(timer>0 ){
    timer--;
    document.querySelector("#timer").innerHTML= timer;
    } else{
        clearInterval(timeint);
        document.querySelector("#lowerdev").innerHTML = "<h1>End Game</h1>";
    }
  },1000)
     

}

function newhit(){
 rnint = Math.floor(Math.random()*10);
document.querySelector("#hitter").textContent = rnint;
}

function increasescore(){
  
     score += 10;
 document.querySelector("#score").textContent = score;
  
 }
function decreasescore(){
  
     score -= 10;
 document.querySelector("#score").textContent = score;
  
 }
 

 document.querySelector("#lowerdev").addEventListener("click", function(detail) {
    var bubblenum = Number(detail.target.textContent);
    if(rnint === bubblenum){
       bubblemaker();
       increasescore();
       newhit();
       }  else{
            decreasescore();
       }

    }
);

     

Timer();
bubblemaker();
newhit();
 



