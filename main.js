let city = document.querySelector('.city');
let btnGet = document.querySelector('.getBtn');
let result = document.querySelector('.result');
let message = document.querySelector('.message');
let html;

btnGet.addEventListener('click',(event)=>{
    event.preventDefault();
     result.innerHTML='';     
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city.value}>?key=9JBCTKYFHER2NT6WXGH2VABEZ`)
    .then((response)=>{
           if (!response.ok) {
            throw new Error('Some theng wrong')
           }else{
            return response.json();
           }
    })
    .then((data)=>{
            html = `<div class="temp_box">
<div class="temp">
    <div class="image">
    <img src="images/sun+sunny+weather+icon-1320196635525068067.png" alt="" srcset="">
    </div>
    <span class="temp_number">${Math.round((data.currentConditions.temp - 32)*5/9)}</span>
</div>
<span>${data.resolvedAddress}</span>
</div>

<div class="advice">
<div id="map"></div>
<p>${data.description}</p>
</div>`;
result.insertAdjacentHTML("afterbegin",html)
var map = L.map('map').setView([data.latitude, data.longitude], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

        
    }).catch((error)=>alert(error));
    
})




