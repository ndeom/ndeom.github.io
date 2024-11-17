(function(P){
    if (
        window.location.href !== "https://www.register2park.com/register"
        && confirm("Navigate to https://www.register2park.com/register? You will need to use the bookmarklet again to continue.")
    ) {
        window.location.href = "https://www.register2park.com/register";
    }
    // get ref to document and create new body and iframe
    var doc=document, 
        body=doc.createElement('body'), 
        iframe=doc.createElement('iframe')
        timeIncrement=500;
    // set up an onload handler for any time a new page is loaded in the iframe
    iframe.onload=function(){
        var w=this.contentWindow, d=w.document;
        history.replaceState({}, doc.title=d.title, w.location.href); 
        P(w, d);
    };
    doc.body.parentNode.replaceChild(body, doc.body);
    body.parentNode.style.cssText= body.style.cssText= (
        iframe.style.cssText='width:100%;height:100%;margin:0;padding:0;border:0;'
    ) + 'overflow:hidden;';
    body.appendChild(iframe).contentWindow.location.replace(doc.URL); //works in FF
  }(function(W, D){
    if ((propertyName = D.getElementById("propertyName"))) {
        setTimeout(() => {
            propertyName.value = "St. John's West";
        }, timeIncrement);
        setTimeout(() => {
            D.getElementById("confirmProperty").click();
        }, timeIncrement * 2);
        setTimeout(() => {
            D.querySelector('button[data-property-id="22343"]').click();
        }, timeIncrement * 3);
    } else if ((vistorButton = D.getElementById("registrationTypeVisitor"))) {
        setTimeout(() => {
            vistorButton.click();
        }, timeIncrement);
        setTimeout(() => {
            D.getElementById("accessCode").value = "5343";
        }, timeIncrement * 2);
        setTimeout(() => {
            D.getElementById("propertyPassword").click();
        }, timeIncrement * 3);
        // You're finally at the form
        // Input custom info here
        setTimeout(() => {
            var apt = D.getElementById("vehicleApt").value = "2215";
            console.log("got apt input: " + apt);
            D.getElementById("vehicleMake").value = "Honda";
            D.getElementById("vehicleModel").value = "Civic";
            D.getElementById("vehicleLicensePlate").value = "KJS2375";
            D.getElementById("vehicleLicensePlateConfirm").value = "KJS2375";
        }, timeIncrement * 4);
        setTimeout(() => {
            if (confirm("Okay to submit?")) {
                D.getElementById("vehicleInformation").click();
            }
        }, timeIncrement * 5);
    }
  }));