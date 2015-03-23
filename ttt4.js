var turn = 0;
var imageName="";

var pictureSource;   // picture source
var destinationType; // sets the format of returned value 
var counter = 0;
document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function toggleBox(name) {
	var box = document.getElementById(name);
	if(endsWith(box.src, "blank.png")) {
		if(turn == 0) {
			box.src = "x.png";
			turn = 1;
			counter++;
		} else { 
			box.src = "o.png";
			turn = 0;
			counter++;
		}
		
		if(counter == 9) {
			navigator.vibrate(3000);
			alert('Game Over!');
			counter++;
		}
	}
	
	
}

function clearGame() {
	turn = 0;
	counter = 0;
	for(var i=1; i < 10; i++) {
		var box = document.getElementById("box" + i);
		box.src = "blank.png";
	}	

}

function changePhoto(name) {
	imageName = name;
	//alert('Changing Photo');
	// Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.DATA_URL });
}

function onFail(message) {
    alert('Failed because: ' + message);
}

function onPhotoDataSuccess(imageData) {
      // Get image handle
      //
      var smallImage = document.getElementById(imageName);

      // Unhide image elements
      //
      //smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;}