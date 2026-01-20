let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");

increaseBtn.addEventListener("click", function (){
    count++;
    countDisplay.textContent = count;
});