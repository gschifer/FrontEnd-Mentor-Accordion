var arrow = document.getElementsByClassName("arrow");
var item  = document.getElementsByClassName("item");
var panel = document.getElementsByClassName("panel");

for (let i = 0; i < arrow.length; i++) {
    item[i].onclick = () => {
        
        if (item[i].classList[1] === "active") {
            resetAccordion();
            return
        }

        resetAccordion();
        
        item[i].classList.toggle("active");
        arrow[i].style.transform = "rotate(180deg)";
        panel[i].style.display   = "block";
        
    }
}


function resetAccordion() {
    //Reset all panels to display none
    for (element of panel){
        element.style.display = "none";
    }
    
    //Set all arrows towards up
    for (element of arrow) {
        element.style.transform = "rotate(0deg)";
    }

    //Remove the class "active" from all items 
    for (element of item) {
        element.classList.remove("active");
    }

}


// for (let i = 0; i < arrow.length; i++) {
//     arrow[i].onclick = () => {
   
//         if (panel[i].style.display === "block") {
//             panel[i].style.display = "none";
//             item[i].classList.toggle("active");
//             arrow[i].style.transform = "rotate(0deg)";
            
//             return
//         } 

        

//         arrow[i].style.transform = "rotate(180deg)";
//         panel[i].style.display = "block";
//         item[i].classList.toggle("active")
        
//     }
// }