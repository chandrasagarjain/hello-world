var mvp = document.getElementById('myViewport');
mvp.setAttribute('content','width=device-width,initial-scale=0.4,minimum-scale=0.4,maximum-scale=0.4,user-scalable=no');

console.log("Script is running ::::::::::::::::::::::");
console.log(":::::::::::::Body is " , document.body.innerText);
window.onload = "loadFunction()";

function loadFunction() { 
    Console.log(":Window is loaded succesfully ::::::");
    console.log("The nody is after loading is ::::::" , document.body.innerText);
    if ( document.body.innerText.indexOf("Success message")) // Put the actual success message here 
    {   console.log("Found the success message ");
    } else { 
        console.log("Did not find the success message , wait for user to proceed to following page before confirmation");
        //unset global variable 

    }
}
