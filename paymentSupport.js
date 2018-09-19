var mvp = document.getElementById('myViewport');
mvp.setAttribute('content', 'width=device-width,initial-scale=0.4,minimum-scale=0.4,maximum-scale=0.4,user-scalable=no');

/* To get the status of payment */
var index = document.body.innerText.indexOf("Payment Confirmation Number");

    if (index !== -1) {
        location.href = 'https://cuemedocmanager/paymentStatus/;' 
    }
    else {
        location.href = 'https://cuemedocmanager/paymentStatus/;' 
    }

    if(document.getElementsByName('ctl00$MainContent$PaybyCheck1$txtName1')[0]) { 
    document.getElementsByName('ctl00$MainContent$PaybyCheck1$txtName1')[0].value = "sagar" ;
    document.getElementsByName('ctl00$MainContent$PaybyCheck1$txtABA')[0].value = "123123123" ;
    document.getElementsByName('ctl00$MainContent$PaybyCheck1$txtCheckingAccountNumber')[0].value = "22222222"; 
}

