var mvp = document.getElementById('myViewport');
mvp.setAttribute('content','width=device-width,initial-scale=0.4,minimum-scale=0.4,maximum-scale=0.4,user-scalable=no');


var index= document.body.innerText.indexOf("Payment Confirmation Number");                                            
console.log("index is :: " , index);
if( index === -1 ) {
    //set the global variable
    console.log("Window object is ", window);
 
    if(window.sendCUEMEevent) { 
        sendCUEMEevent('onload', 'ConfirmString', "123");
        console.log("sent an event ");
    }
    
}


