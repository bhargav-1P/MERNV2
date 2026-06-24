let countDisplay=document.getElementById('counter');
let increaseBtn=document.getElementById('increase');
let decreseBtn=document.getElementById('decrease');
let resetBtn=document.getElementById('reset');
let toggleBtn=document.getElementById('theme-toggle');

let count=0;
increaseBtn.addEventListener('click',function(){
    count++;
    updateDisplay();
})
decreseBtn.addEventListener('click',function(){
    count--;
    updateDisplay();
})
resetBtn.addEventListener('click',function(){
    count=0;
    updateDisplay();
})
toggleBtn.addEventListener('click',function(){
    document.body.classList.toggle("dark");
});
function updateDisplay(){
    countDisplay.textContent= count;
    if(count>0){
        countDisplay.style.color="green";
    }else if(count<0){
        countDisplay.style.color="red";
    }else{
        countDisplay.style.color="black";
    }
}