let one_hading = document.querySelector(".one_hading");
let inputOne = document.querySelector(".inputOne");
let btnOne = document.querySelector(".btnOne");
let error = document.querySelector(".error");

let Two_hading = document.querySelector(".Two_hading");
let inputTwo = document.querySelector(".inputTwo");
let btnTow = document.querySelector(".btnTow");
let error2 = document.querySelector(".error2");

let headingOne = document.querySelector(".player_one") ;
let heading_two = document.querySelector(".player_two");
let chance = document.querySelector(".chance")
let count=3;


btnOne.addEventListener("click", function(){
    
    if(inputOne.value == ""){
        error.innerHTML="Please Enter Something"

    } else if(isNaN (inputOne.value) ){
        error.innerHTML="Please Enter A Number"
    } else if (!(inputOne.value<=10 && inputOne.value>0)){
        error.innerHTML="Please enter a number 1 to 10";
    } else{
        heading_two.style.display = ("block");
        headingOne.style.display = ("none");
        chance.innerHTML =`Chance : ${count}`
    }
    
})

btnTow.addEventListener("click" ,function(){
    if(inputTwo.value == ""){
        error2.innerHTML="Please Enter Something"

    } else if(isNaN (inputTwo.value) ){
        error2.innerHTML="Please Enter A Number"
    } else if (!(inputTwo.value<=10 && inputTwo.value>0)){
        error2.innerHTML="Please enter a number 1 to 10";
    } else{
        error2.style.display=("none");

        if(count>1){
            count --
            chance.innerHTML =`Chance : ${count}`

            if(inputOne.value==inputTwo.value){
                Two_hading.innerHTML="Player Two Winner";
                Two_hading.style.color=("red")
                btnTow.style.display="none";
                inputTwo.style.display="none"
            }
        }else{
            count= 0;
            chance.innerHTML =`Chance : ${count}`
            Two_hading.innerHTML="Player One Winner";
            Two_hading.style.color=("red")
            btnTow.style.display="none";
            inputTwo.style.display="none"
        }

    }
})
