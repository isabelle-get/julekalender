
    let theDayS = document.getElementById("theDayS")
    let theDayN = document.getElementById("theDayN")
    let theDayM = document.getElementById("theDayM")

    let window = document.querySelectorAll(".window")
function todayDate() {

    
    let theDate = new Date()
    
    let theDateInS = theDate.toLocaleDateString("no-NO", {
        weekday: "long"
    })

    let theDateInN = theDate.toLocaleDateString("no-NO", {
        day: "2-digit"
    })

    let theDateInM = theDate.toLocaleDateString("no-NO", {
        month: "long"
    })

    theDayN.textContent = theDateInN;
    theDayS.textContent = theDateInS;
    theDayM.textContent = theDateInM;
};

todayDate()

window.addEventListener("window", function(){
    const day = Number(window.textContent)

    if( theDayM === 11 && day < theDayN){
        window.classLIst("bigger")
    }else if(theDayM === 11 && day === theDayN){
        window.classLIst("now")
    }else {
        window.classList.add("disabled");
    }


})







    




