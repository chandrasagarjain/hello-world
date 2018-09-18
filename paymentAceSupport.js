/* For setting view mode settings */
var mvp = document.getElementById('myViewport');
mvp.setAttribute('content','viewport-fit=cover, width=device-width');
console.log("Back is " , )

/*Two URLs for invocation*/
var ACH_URL = 'https://policycenter.aceprivateriskservices.com/billing/terms_ACH_Debits.cfm';
var TNC_URL = 'https://www2.chubb.com/us-en/terms-of-use.aspx';

/*For reducing width of button on 1A page One Time Bill Payment */
if(document.getElementsByName("back")[0] &&  document.getElementsByName("back")[0].value === "Back to payment information") {
    document.getElementsByName("back")[0].value = "Back";
}

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
if (document.getElementsByName('areaCode') ) {

document.getElementsByName('areaCode')[0].value = 123;
document.getElementsByName("part1")[0].value = 123;
document.getElementsByName("part2")[0].value = 1234;
document.getElementsByName("contactInfo.email")[0].value = "sagar@gmail.com";
document.getElementsByName("emailConf")[0].value = "sagar@gmail.com";
}

index = document.body.innerText.indexOf("Payment Request Submitted");
console.log("Index is " , index);
if( index != -1 ) { 
    console.log("Found String");
    location.href='https://cuemedocmanager/fisString/;'

}
