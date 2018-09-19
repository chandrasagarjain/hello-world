/* For setting view mode settings */
var mvp = document.getElementById('myViewport');
mvp.setAttribute('content','viewport-fit=cover, width=device-width');

/*Two URLs for invocation*/
var ACH_URL = 'https://policycenter.aceprivateriskservices.com/billing/terms_ACH_Debits.cfm';
var TNC_URL = 'https://www2.chubb.com/us-en/terms-of-use.aspx';

/*For reducing width of button on 1A page One Time Bill Payment */
if(document.getElementsByName("back")[0] &&  document.getElementsByName("back")[0].value === "Back to payment information") {
    document.getElementsByName("back")[0].value = "Back";
}

// /* For changing print message */ 
// if(document.getElementsByClassName('form-style-text')[2]) { 
// document.getElementsByClassName('form-style-text')[2].innerHTML = "Please refer to the Reference ID when communicating with us regarding this transaction.";
// }

if(document.wizForm.action && document.wizForm.action.value === "PaymentMethodBank") {
/* For reducing horizontal scroll on Contact Info */
        document.getElementsByName('areaCode')[0].size="5";
        document.getElementsByName('part1')[0].size="5";
        document.getElementsByName('part2')[0].size="7";

        document.getElementsByName('contactInfo.email')[0].size="30";
        document.getElementsByName('emailConf')[0].size="30";
}

/*For adding ACH FAQ Display Window */
    if(document.wizForm.action && document.wizForm.action.value === "ConfirmBank") {
                    var c = document.createElement('input');
                    c.name='button3';
                    c.type='button';
                    c.value='View ACH Terms';
                    c.setAttribute("style","font-size: 2rem !important;width: auto;padding: 10px !important;margin-right: 40px;	border-bottom: thin solid #8B4500;border-right: thin solid #8B4500;border-top: thin solid #8B4500;border-left: thin solid #8B4500;font-weight: bold;background-color: #996633;color: #FFFFFF;margin: 2px");
                    document.getElementsByClassName('actionbutton')[0].parentElement.appendChild(c);
                    c.addEventListener("click",function(){location.href='https://cuemedocmanager/AceACH/;' + ACH_URL},false);
    }
/* For adding ACH TnC Display Window */        
    else if(document.wizForm.action && document.wizForm.action.value === "SubmitPayment") {
                    var d = document.createElement('input');
                    d.name='button4';
                    d.type='button';
                    d.value='View Terms';
                    d.setAttribute("style","font-size: 2rem !important;width: auto;padding: 10px !important;margin-right: 40px;	border-bottom: thin solid #8B4500;border-right: thin solid #8B4500;border-top: thin solid #8B4500;border-left: thin solid #8B4500;font-weight: bold;background-color: #996633;color: #FFFFFF;margin: 2px");
                    document.getElementsByClassName('actionbutton')[0].parentElement.appendChild(d);
                    d.addEventListener("click",function(){location.href='https://cuemedocmanager/AceTNC/;' + TNC_URL});
    }
if (document.getElementsByName('areaCode')[0] ) {

document.getElementsByName('areaCode')[0].value = 123;
document.getElementsByName("part1")[0].value = 123;
document.getElementsByName("part2")[0].value = 1234;
document.getElementsByName("contactInfo.email")[0].value = "sagar@gmail.com";
document.getElementsByName("emailConf")[0].value = "sagar@gmail.com";
}

if(document.getElementsByName('paymentMethodInfo.bankInfo.holderName')[0]) {

    document.getElementsByName('paymentMethodInfo.bankInfo.holderName')[0].value = "sagar";
    document.getElementsByName('paymentMethodInfo.bankInfo.transitNumber')[0].value = "072403004" ;
    document.getElementsByName('paymentMethodInfo.bankInfo.fiAccountNumber')[0].value= 856667;
}
if( document.getElementsByName('paymentMethodInfo.cardInfo.cardNumber')[0]) { 
    document.getElementsByName('paymentMethodInfo.cardInfo.cardNumber')[0].value = 4111111111111111;
    document.getElementsByName('paymentMethodInfo.cardInfo.cvv2')[0].value=123
    document.getElementsByName('paymentMethodInfo.cardInfo.nameOnCard')[0].value = "sagar";
    document.getElementsByName('billingInfo.firstName')[0].value = "sagar";
    document.getElementsByName('billingInfo.middleInitial')[0].value = "S";
    document.getElementsByName('billingInfo.lastName')[0].value = "jain";
    document.getElementsByName('billingInfo.address.line1')[0].value = "INDIA";
    document.getElementsByName('billingInfo.address.line2')[0].value = "BANGALORE";
    document.getElementsByName('billingInfo.address.city')[0].value = "BANGALORE";
    document.getElementsByName('billingInfo.address.zip')[0].value = "75093"
    
} 
// if (document.wizForm.action.value == "ClearBean") { 
index = document.body.innerText.indexOf("Payment Request Submitted");
if( index != -1 ) { 
    console.log(":::::::::Found String");
    location.href='https://cuemedocmanager/paymentStatus/;' + 'Y'

} else { console.log("::::::::::::::::DID NOT  String");
location.href='https://cuemedocmanager/paymentStatus/;' + 'N'
        }

// }
