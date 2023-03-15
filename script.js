if (window.location.pathname === "/Index.html"||window.location.pathname === "/"){
let div=document.createElement("div")
div.setAttribute("class","container");
let p=document.createElement("div");
p.setAttribute("class","row");
p.classList.add("row" ,"m-3")
div.append(p);

fetch("https://restcountries.com/v2/all").then((data)=> data.json()).then((response)=>{
    Countries(response);
}).catch((error)=> console.log(error));

function Countries(response){
    response.forEach(({name,callingCodes,capital,region,flag,latlng})=>{
        let countrycode=callingCodes[0];
        if(latlng == undefined){
            latlng=[0,0];
        }
        let lattitude=latlng[0];
        let longitude=latlng[1];
        p.innerHTML+=`<div class="col-lg-4 col-sm-12">
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <h3 class="card-title">${name}</h3>
             <img src="${flag}" class="card-img-top">
             <div class="card-body">
             <h6 class="card-title">Capital: ${capital}</h6>
             <h6 class="card-title">Region: ${region}</h6>
             <h6 class="card-title">Country Code: ${countrycode}</h6>
             <h6 class="card-title">lattitude: ${lattitude}</h6>
             <h6 class="card-title">longitute: ${longitude}</h6>
            <center><a href="https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=e0232249485d1dbd1970497de93c30de" class="btn btn-primary" target="_blank">Check for Weather</a> </center>
             </div>
           </div>
              </div>`
        document.body.append(p);
        // console.log(name,countrycode,capital,region,flag,lattitude,longitude);
        // <a href="https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=e0232249485d1dbd1970497de93c30de" class="btn btn-primary" target="_blank">Click for Weather</a> 
    });
}
} 

// function Weathernavigate(lattitude,longitude){
//     //    console.log(lattitude,longitude);
//        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lattitude+"&lon="+longitude+"&appid=e0232249485d1dbd1970497de93c30de").then((data)=> data.json()).then((res)=>{
//         console.log(lattitude,longitude);
//     }).catch((error)=> console.log(error));


// }
