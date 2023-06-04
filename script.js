const factContainer = document.querySelector(".fact-container");
const factBtn = document.querySelector("#btn");

const loadCatFact = async () => {
    try{    
        const res = await fetch("https://catfact.ninja/fact");
        let data = await res.json();
        console.log(data.fact);
        // factBtn.innerText = "mkp";
        factContainer.innerText = data.fact;
    }
    catch (e){
        console.log("Error: " , e);
    }
};

factBtn.addEventListener('click' , loadCatFact);