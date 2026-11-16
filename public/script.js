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

    let theDayS = document.getElementById("theDayS")
    let theDayN = document.getElementById("theDayN")
    let theDayM = document.getElementById("theDayM")

    theDayN.textContent = theDateInN;
    theDayS.textContent = theDateInS;
    theDayM.textContent = theDateInM;
};

todayDate()






    




