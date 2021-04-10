//Declaramos variables
var operandoa = "";
var operandob = "";
var operacion= "";
var fa = "";
var numero = "";
var ans= "";
var result = 0;
function init(){
	//variables
	var resultado = document.getElementById('resultado');
	var reset = document.getElementById('reset');
	var suma = document.getElementById('suma');
	var resta = document.getElementById('resta');
	var multiplicacion = document.getElementById('multiplicacion');
	var division = document.getElementById('division');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var cero = document.getElementById('cero');
	var radianes = document.getElementById('rad');
	var grados = document.getElementById('grados');
	var factorial = document.getElementById('factorial');
	var paren1 = document.getElementById("paren1");
	var paren2 = document.getElementById("paren2");
	var porcentaje = document.getElementById("porcentaje");
	var inversas = document.getElementById("inv");
	var seno = document.getElementById("sin");
	var ln = document.getElementById("ln");
	var pi = document.getElementById("pi");
	var coseno = document.getElementById("cos");
	var log = document.getElementById("log");
	var euler = document.getElementById("euler");
	var tangente = document.getElementById("tan");
	var sqrt = document.getElementById("sqrt");
	var ans = document.getElementById("ans");
	var exponencial = document.getElementById("exp");
	var elevar= document.getElementById("elevado")
	var punto= document.getElementById("punto")
	//eventos de click
	//Números
	uno.onclick = function(){
  		resultado.textContent = resultado.textContent  + "1";
  		operandoa = operandoa + "1";
  		numero = numero + "1";
	}

	dos.onclick = function(){
  		resultado.textContent = resultado.textContent  + "2";
  		operandoa = operandoa + "2";
  		numero = numero + "2";
	}
	tres.onclick = function(){
  		resultado.textContent = resultado.textContent  + "3";
  		operandoa = operandoa + "3";
  		numero = numero + "3";
	}
	cuatro.onclick = function(){
  		resultado.textContent = resultado.textContent  + "4";
  		operandoa = operandoa + "4";
  		numero = numero + "4";
	}
	cinco.onclick = function(){
  		resultado.textContent = resultado.textContent  + "5";
  		operandoa = operandoa + "5";
  		numero = numero + "5";
	}
	seis.onclick = function(){
  		resultado.textContent = resultado.textContent  + "6";
  		operandoa = operandoa + "6";
  		numero = numero + "6";
	}
	siete.onclick = function(){
  		resultado.textContent = resultado.textContent  + "7";
  		operandoa = operandoa + "7";
  		numero = numero + "7";
	}
	ocho.onclick = function(){
  		resultado.textContent = resultado.textContent  + "8";
  		operandoa = operandoa + "8";
  		numero = numero + "8";
	}
	nueve.onclick = function(){
  		resultado.textContent = resultado.textContent  + "9";
  		operandoa = operandoa + "9";
  		numero = numero + "9";
	}
	cero.onclick = function(){
  		resultado.textContent = resultado.textContent  + "0";
  		operandoa = operandoa + "0";
  		numero = numero + "0";
	}
	pi.onclick = function(){
		resultado.textContent = resultado.textContent  + "pi";
		operandoa = operandoa + "Math.PI";
		numero = numero + "Math.PI";
  }
	//Para poner en ans lo que hay en resultado
	ans.onclick = function(){
  		resultado.textContent = resultado.textContent  + "ANS";
  		ans = result.toString();
  		operandoa = operandoa + "ans";
  		numero = numero + "ans";
	}
	//para poner el punto de cifras decimales
	punto.onclick = function(){
  		resultado.textContent = resultado.textContent  + ".";
  		operandoa = operandoa + ".";
  		numero = numero + ".";
	}
	//Se llama la función resetear
	reset.onclick = function(){
  		resetear();
	}
	paren1.onclick = function(){
		resultado.textContent = resultado.textContent  + "(";
		operandoa = operandoa + "(";
		numero = numero + "(";
	}
	paren2.onclick = function(){
		resultado.textContent = resultado.textContent  + ")";
		operandoa = operandoa + ")";
		numero = numero + ")";
	}
	suma.onclick = function(){
  		resultado.textContent = resultado.textContent  + "+";
  		operandob = operandoa;
  		operandoa = operandoa + "+";
  		operacion = "+";
  		numero = "";
	}
	resta.onclick = function(){
		resultado.textContent = resultado.textContent  + "-";
		operandob = operandoa;
		operandoa = operandoa + "-";
		operacion = "-";
		numero = "";
	}
	multiplicacion.onclick = function(){
  		resultado.textContent = resultado.textContent  + "*";
  		operandob = operandoa;
  		operandoa = operandoa + "*";
  		operacion = "*";
  		numero = "";
	}
	division.onclick = function(){
		resultado.textContent = resultado.textContent  + "/";
		operandob = operandoa;
		operandoa = operandoa + "/";
		operacion = "/";
		numero = "";
	}
	factorial.onclick = function(){ 	
	if(operacion == ""){
		fa = fact(parseFloat(numero));
		resultado.textContent = resultado.textContent  + "!";
		operandoa = fa.toString();
		
	}
	else{
		operandob = eval(operandob);
		fa = fact(parseFloat(numero));
		resultado.textContent = resultado.textContent  + "!";
		fa = fa.toString();
		operandoa = operandob + operacion + fa;	
	} 
	}

	porcentaje.onclick= function(){
		resultado.textContent = resultado.textContent  + "%";
		operandoa = operandoa + "%";
	}
	seno.onclick = function(){ //(Math.PI / 180*)
	if(document.getElementById("deg").checked){
		if(seno.textContent == 'sin-1'){
	        resultado.textContent = resultado.textContent + "sin-1(";
	        operandoa = operandoa + "Math.asin((Math.PI / 180)*";
		}
		else{
	        resultado.textContent = resultado.textContent + "sin(";
	        operandoa = operandoa + "Math.sin((Math.PI / 180)*";		
		}
	}
	else{
		if(seno.textContent == 'sin-1'){
	        resultado.textContent = resultado.textContent + "sin-1(";
	        operandoa = operandoa + "Math.asin(";
		}
		else{
	        resultado.textContent = resultado.textContent + "sin(";
	        operandoa = operandoa + "Math.sin(";		
		}		
	}


		//operacion = "seno";		
	}
	coseno.onclick = function(){
	if(document.getElementById("deg").checked){	
		if(coseno.textContent == 'cos-1'){
	        resultado.textContent = resultado.textContent + "cos-1(";
	        operandoa = operandoa + "Math.acos((Math.PI / 180)*";		
		}
		else{
	        resultado.textContent = resultado.textContent + "cos(";
	        operandoa = operandoa + "Math.cos((Math.PI / 180)*";
	    }
	  }
	  else{
		if(coseno.textContent == 'cos-1'){
	        resultado.textContent = resultado.textContent + "cos-1(";
	        operandoa = operandoa + "Math.acos(";		
		}
		else{
	        resultado.textContent = resultado.textContent + "cos(";
	        operandoa = operandoa + "Math.cos(";
	    }	  	
	  }
     //operación coseno		
	}
	tangente.onclick = function(){
	if(document.getElementById("deg").checked){
		if(tangente.textContent == 'tan-1'){
	        resultado.textContent = resultado.textContent + "tan-1(";
	        operandoa = operandoa + "Math.atan((Math.PI / 180)*";		
		}
		else {
	        resultado.textContent = resultado.textContent + "tan(";
	        operandoa = operandoa + "Math.tan((Math.PI / 180)*";
	    }
	}
	else{
		if(tangente.textContent == 'tan-1'){
	        resultado.textContent = resultado.textContent + "tan-1(";
	        operandoa = operandoa + "Math.atan(";		
		}
		else {
	        resultado.textContent = resultado.textContent + "tan(";
	        operandoa = operandoa + "Math.tan(";
	    }		
	}
	}
	ln.onclick = function(){ //Math.exp(x)
	if(ln.textContent == 'e^x'){
        resultado.textContent = resultado.textContent + "e^(";
        operandoa = operandoa + "Math.exp(";		
	}
	else{
        resultado.textContent = resultado.textContent + "ln(";
        operandoa = operandoa + "Math.log(";
    }
	}
	log.onclick = function(){
	if(log.textContent == '10^x'){
        resultado.textContent = resultado.textContent + "10^(";
        operandoa = operandoa + "Math.pow(10,";		
	}
	else{		
        resultado.textContent = resultado.textContent + "log(";
        operandoa = operandoa + "Math.log10(";
	}
	}

	igual.onclick = function(){
  		    res = eval(operandoa); 
  		    result = eval(operandoa);
  		    resultado.textContent=res;            
	}
	euler.onclick = function(){
  		resultado.textContent = resultado.textContent  + "e";
  		operandoa = operandoa + "Math.E";
  		numero = numero + "Math.E";
	}
	sqrt.onclick = function(){
	if(sqrt.textContent == 'x^2'){
        resultado.textContent = resultado.textContent + "^2";
        numero_aux=numero;
        operandoa = operandob + "Math.pow(numero_aux,2)";		
	}
	else{
        resultado.textContent = resultado.textContent + "sqrt(";
        operandoa = operandoa + "Math.sqrt(";
	}
	}	
	elevar.onclick = function(){
		//operandob = operandoa;
        resultado.textContent = resultado.textContent + "^(";
        numero_aux = numero; 
        operandoa = operandob + operacion + "Math.pow(numero_aux,";
	}
	exponencial.onclick = function(){
        resultado.textContent = resultado.textContent + "EXP(";
        operandoa = operandoa + "*Math.pow(10,";
	}

	 inversas.onclick = function(){
	 	if (document.getElementById('sin').textContent == 'sin'){
				sin.innerHTML="sin-1";
				cos.innerHTML="cos-1";
				tan.innerHTML="tan-1";
				tan.innerHTML="tan-1";
				ln.innerHTML="e^x";
				log.innerHTML="10^x"
				sqrt.innerHTML="x^2"

			}
		else{
				sin.innerHTML="sin";
				cos.innerHTML="cos";
				tan.innerHTML="tan";
				ln.innerHTML="ln";
				log.innerHTML="log"
				sqrt.innerHTML="sqrt"
		}
	}



 	

}
function limpiar(){
	resultado.textContent = "";
}

function resetear(){
	resultado.textContent = "";
	operandoa = "";
	operandob = "";
	numero = "";
	fa="";
	operacion = "";
}
//funciones para operaciones


function fact(n) {
			var total = 1; 
		   	for (i=1; i<=n; i++) {
		   		total = total * i; 
			}
   			return total; 
		}
function grados (angle) {
  return angle * (Math.PI / 180);
}


