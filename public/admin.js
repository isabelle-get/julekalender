
let valg = document.getElementById("valg");
valg.addEventListener("change", function(){

    
    let big = document.getElementById("big");

    let skrevetSvar = document.getElementById("skrevetSvar");
    let flervalg = document.getElementById("flervalg");

    big.replaceChildren();

    
    if(valg.value === "skrevetSvar"){
        // big.appendChild(skrevetSvar)
        skrevetSvar.style.display = "block";
        flervalg.style.display = "none";
        
    }else if (valg.value === "flervalg"){
        // big.appendChild(flervalg)
        flervalg.style.display = "block";
        skrevetSvar.style.display = "none";
    };

});