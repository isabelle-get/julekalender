function todayDate() {

    
    let theDate = new Date()
    
    let theDateInS = theDate.toLocaleDateString("no-NO", {
        weekday: "long"
    })

    let theDateInN = theDate.toLocaleDateString("no-NO", {
        day: "2-digit"
    })

    let theDayS = document.getElementById("theDayS")
    let theDayN = document.getElementById("theDayN")

    theDayN.textContent = theDateInN;
    theDayS.textContent = theDateInS;
};

todayDate()






    




