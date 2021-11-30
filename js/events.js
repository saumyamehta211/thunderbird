let heading1 = document.querySelector("#heading1");
let heading2 = document.querySelector("#heading2");

let heading1Index = 0;
let heading2Index = 0;

function toggleHeading1(){
    if(heading1Index % 2 == 0){
        heading1.getElementsByClassName("arrow")[0].classList.remove("right");
        heading1.getElementsByClassName("arrow")[0].classList.add("down");
    
        document.getElementById("event1").style.display="none";
        document.getElementById("event2").style.display="none";
        document.getElementById("event3").style.display="none";
    }else{
        heading1.getElementsByClassName("arrow")[0].classList.remove("down");
        heading1.getElementsByClassName("arrow")[0].classList.add("right");
    
        document.getElementById("event1").style.display="block";
        document.getElementById("event2").style.display="block";
        document.getElementById("event3").style.display="block";
    }
    heading1Index++;
}

function toggleHeading2(){
    if(heading2Index % 2 == 0){
        heading2.getElementsByClassName("arrow")[0].classList.remove("right");
        heading2.getElementsByClassName("arrow")[0].classList.add("down");
    
        document.getElementById("event4").style.display="none";
        document.getElementById("event5").style.display="none";
    }else{
        heading2.getElementsByClassName("arrow")[0].classList.remove("down");
        heading2.getElementsByClassName("arrow")[0].classList.add("right");
    
        document.getElementById("event4").style.display="block";
        document.getElementById("event5").style.display="block";
    }
    heading2Index++;
}