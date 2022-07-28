
let icon =document.getElementById("icon");
	icon.onclick = function(){
		if (theme.getAttribute("href") == "light.css") {
			theme.href = "dark.css";
			icon.src="sun.png";
		  } else {
			theme.href = "light.css";  
			icon.src="moon.png";
		}
		
	}
  
  
function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

function getOutput(){
	return document.getElementById("output-value").innerText;
}

function printOutput(num){
	document.getElementById("output-value").innerText=num;
}

let operator = document.getElementsByClassName("operator");
for(let i=0; i<operator.length; i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			let output =getOutput();
			output = output.substring(0,output.length-1);
			printOutput(output);
		}
		else{
			let output = getOutput();
			let history = getHistory();
			if(output==""&& history!=""){
				if(isNaN(history[history.length-1])){
					history=history.substring(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				history=history+output;
				if(this.id=="="){
					let result = eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
	});
}
let number = document.getElementsByClassName("number");
for(let i=0; i<number.length; i++){
	number[i].addEventListener('click',function(){
		let output = getOutput();
		if(output!=NaN){
		output=output+this.id;
		printOutput(output);
		}
	})

}
