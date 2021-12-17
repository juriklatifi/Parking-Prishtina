function shtoDhenat(){
	var emri = prompt("Emri :" , "");
	var mbiemri = prompt("Mbiemri :" , "");
	var mosha = prompt("Mosha :" , "");
	var email = prompt("Email :" , "");

	var vargu = {emri, mbiemri, mosha, email};

	for(var i=0;i<vargu.length;i++){
		document.getElementById("emri").innerText = emri;
		document.getElementById("mbiemri").innerText = mbiemri;
		document.getElementById("mosha").innerText = mosha;
		document.getElementById("email").innerText = email;

		console.log (vargu[i]);
	}

	if(emri == ""){
		emri = prompt("Emri :" , "");
	}
	else if(mbiemri == ""){
		mbiemri = prompt("Mbiemri :" , "");
	}
	else if(mosha == ""){
		mbiemri = prompt("Mosha :" , "");
	}
	else if(email == ""){
		mbiemri = prompt("Email :" , "");
	}
}