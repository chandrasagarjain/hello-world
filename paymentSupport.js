var mvp = document.getElementById('myViewport');
mvp.setAttribute('content','width=device-width,initial-scale=0.4,minimum-scale=0.4,maximum-scale=0.4,user-scalable=no');

var index= document.body.innerText.indexOf("Payment Confirmation Number");                                            
console.log("index is :: outside 1 1 1 " , index);
if( index === -1 ) {
    console.log("index is :: inside ::::  href change " , index);
    location.href='https://cuemedocmanager/ConfirmString/;'
}

