
    let theDayS = document.getElementById("theDayS")
    let theDayN = document.getElementById("theDayN")
    let theDayM = document.getElementById("theDayM")

    let windows = document.querySelectorAll(".window")
    let theDate = new Date()
function todayDate() {

    

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

windows.forEach(windows =>{
    const day = Number(windows.textContent)
    const today = theDate.getDate()
    const month = theDate.getMonth() 

    if (month === 10 && today < day) {
        windows.classList.add("bigger")
    } else if (month === 11 && today === day) {
        windows.classList.add("now")
    }else {
        windows.classList.add("disabled")
    }
})







    



