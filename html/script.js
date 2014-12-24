function pageHeightAdjust() {
	var pageHeight = window.innerHeight + "px";
		document.getElementById("contentWindow").style.height=pageHeight;
		document.getElementById("innerContentWindow").style.minHeight=pageHeight;
}

function clearInput_mbps() {
	document.getElementById('inputUpload').style.color = "black";
	document.getElementById('inputUpload').style.backgroundColor = "white";
	document.getElementById('inputUpload').value = "";
}

function blur_mbps() {
	document.getElementById('inputUpload').style.color = "#757575";
}

function update_information() {
	if (x = isNaN) {
	var x = document.getElementById('inputUpload').value;
	var z = document.getElementById('percentRedact').value;
	var kilobits = (x * "1000");
	var maxKbps = (kilobits / "100") * z;
	document.getElementById('outputKBs').value = maxKbps;
	
	
	
	} else {
	document.getElementById('inputUpload').style.backgroundColor = "red";
	document.getElementById('inputUpload').value = "Must be a Number";
	document.getElementById('inputUpload').style.color = "black";
	}
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && chatCode == 46) {
        return false;
    }
    return true;
}