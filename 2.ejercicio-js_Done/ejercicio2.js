function counter() {
    
    let secs = 0;
    let mins = 0;
    let hours = 0;
    let days = 0;
    
    setInterval(function(){ 
        console.log(`Día ${days}, ${formatter(hours)}:${formatter(mins)}:${formatter(secs)}`);
        
        if (secs < 59) {
            secs++;
        } else {
            secs = 0;
            mins++;
        }

        if (mins === 60) {
            mins = 0;
            hours++;
        }

        if (hours === 24) {
            hours = 0;
            days++;
        }

    }, 1000);

    function formatter(num){
        if (num < 10){
            return '0' + num;
        }
        return num;
    } 

}

counter();

