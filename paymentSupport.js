
var mvp = document.getElementById('myViewport');
mvp.setAttribute('content', 'width=device-width,initial-scale=0.4,minimum-scale=0.4,maximum-scale=0.4,user-scalable=no');

/* To get the status of payment */
if (document.forms[0] && document.forms[0].action.includes("PaymentConfirmation.aspx")) {
    document.getElementById("MainContent_PaymentConfirmation1_pnlpnlEmailOrPrint").style.display = "none"; //Hides the print button 
    var index = document.body.innerText.indexOf("Payment Confirmation Number");
    if (index !== -1) {
        location.href = 'https://cuemedocmanager/paymentStatus/;' + 'Y'
    } else {
        location.href = 'https://cuemedocmanager/paymentStatus/;' + 'N'
    }

}

if (document.getElementsByName('ctl00$MainContent$PaybyCheck1$txtName1')[0]) {
    document.getElementsByName('ctl00$MainContent$PaybyCheck1$txtName1')[0].value = "sagar";
    document.getElementsByName('ctl00$MainContent$PaybyCheck1$txtABA')[0].value = "123123123";
    document.getElementsByName('ctl00$MainContent$PaybyCheck1$txtCheckingAccountNumber')[0].value = "22222222";
}
