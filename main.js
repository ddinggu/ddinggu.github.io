function geo_success(position){
    let speed =  position.coords.speed,
        heading = position.coords.heading,
        compass = document.getElementById('Compass'),
        speedoMeter = document.getElementById('SpeedoMeter');

    console.log(`회전 : ${heading}, 속도 : ${speed}`);
        
    if(heading === null) heading = 0;
    if(speed === null) speed = 0;
   
    compass.style.transform = `rotate(${heading}deg)`;
    speedoMeter.textContent = `${speed}KM/H`;
    
}

function geo_error(){
    alert('Failed Detecting Location!');
    console.error('Failed Detecting Location!');
}

const positionOptions = {
    enableHighAccuracy : true,
    timeout : Infinity,
    maximumAge : 0
}

var watching;
 watching = navigator.geolocation
                     .watchPosition( geo_success, geo_error, positionOptions );
    
function turnOnGPS(){
    if(!navigator.geolocation) {
        alert('Should accept Location setting!');
    }
    
    watching = navigator.geolocation
                    .watchPosition( geo_success, geo_error, positionOptions );
    console.log('GPS 켜진다');
}

function turnOffGPS(){
    navigator.geolocation.clearWatch(watching);
    console.log('GPS 꺼진다');
}

document.getElementById('on').onclick = function() {turnOnGPS()};
document.getElementById('off').onclick = function() {turnOffGPS()};



