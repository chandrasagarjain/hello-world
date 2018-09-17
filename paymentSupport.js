var mvp = document.getElementById('myViewport');
mvp.setAttribute('content','width=device-width,initial-scale=0.4,minimum-scale=0.4,maximum-scale=0.4,user-scalable=no');	mvp.setAttribute('content','width=device-width,initial-scale=0.4,minimum-scale=0.4,maximum-scale=0.4,user-scalable=no');
 var index= document.body.innerText.indexOf("Payment Confirmation Number");                                            	var indexConfirm= document.body.innerText.indexOf("Payment Confirmation Number"); 
var indexFail= document.body.innerText.indexOf("An error occurred while creating Card transaction: We are unable to process your transaction at this time.");    
 if( index !== -1 ) {	if( indexConfirm !== -1 ) {
    location.href='https://cuemedocmanager/ConfirmString/;'	    location.href='https://cuemedocmanager/ConfirmString/;'
}	}
