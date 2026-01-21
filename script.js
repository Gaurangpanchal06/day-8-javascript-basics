let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");

function updateCount(newValue){
    count = newValue;
    countDisplay.textContent = count;
}

increaseBtn.addEventListener("click", function(){
    updateCount(count + 1);
    /*count = count + 1;*/
    /*countDisplay.textContent = count;*/
});

resetBtn.addEventListener("click", function(){
    updateCount(0);
    /*count = 0;*/
    /*countDisplay.textContent = count;*/
});

decreaseBtn.addEventListener("click", function(){
    updateCount(count - 1);
    /*count = count - 1;*/
    /*countDisplay.textContent = count;*/
});
