getQRCode();

function getQRCode(){
	img='';
	chrome.tabs.query({currentWindow: true, active: true}, function (tab){
		url = tab[0].url;
		img = '<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=333333&size=150x150&data='+url+'">';
		displayQRCode(img);
	})

	
}

function displayQRCode(img){
	document.getElementById('qr-code-img').innerHTML= img;
}