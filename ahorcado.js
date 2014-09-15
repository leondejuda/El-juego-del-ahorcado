var palabra = ["Mara", "Pemex", "Sarai", "Petrolio", "Sylvia", "Reclutar", "Nayeli", 
"Cuantica", "Cecilia", "Roto", "Brenda", "Estadiaticas"];
var elegida = elegirPalabra(0, 11);
var palabraFinal = palabra[elegida];
var l, espacio;
function elegirPalabra (minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var fondo = {
 	imagenURL: "fondo.png",
  	imagenOK: false
};


var poste = {
 	imagenURL: "poste.png",
 	imagenOK: false
};

var cabeza = {
 	imagenURL: "cabeza-normal.png",
 	imagenOK: false,
 	x: 200,
 	y: 15
};

var torso = {
 	imagenURL: "torso.png",
 	imagenOK: false,
 	x: 210,
 	y: 164
};

var brazos = {
 	imagenURL: "brazos.png",
 	imagenOK: false,
 	x: 193,
 	y: 171
};

var piernas = {
 	imagenURL: "piernas.png",
 	imagenOK: false,
 	x: 192,
 	y: 235
};

var ojos = {
 	imagenURL: "cabeza-x.png",
 	imagenOK: false,
 	x: 200,
 	y: 15
};

var hombre;
var intentos = 0;
var maximo = 5;
var vivo = true;
//Declaración de la clase Ahorcado
var Ahorcado = function (con)
{
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	vivo = true;

	this.dibujar();
}
function figura()
{
	if(fondo.imagenOK)
	{
		contexto.drawImage(fondo.imagen, 0, 0);
	}

	if(poste.imagenOK)
	{
		contexto.drawImage(poste.imagen, 55, 0);
	}
	if(this.intentos > 0)
	{
		//intetnos = 1 ---> carita
		contexto.drawImage(cabeza.imagen, cabeza.x, cabeza.y);

		if(this.intentos > 1)
		{
		//intetnos =  ---> cuerpo
			contexto.drawImage(torso.imagen, torso.x, torso.y);

			if(this.intentos > 2)
			{
				//intetnos = 1 ---> brazos
				contexto.drawImage(brazos.imagen, brazos.x, brazos.y);
				if(this.intentos > 3)
				{
					//intetnos = 1 ---> piernas
					contexto.drawImage(piernas.imagen, piernas.x, piernas.y);
					if(this.intentos > 4)
					{
						//intetnos = 1 ---> ojos
						contexto.drawImage(ojos.imagen, ojos.x, ojos.y);
					}		
				}
			}
		}
	}
}


Ahorcado.prototype.dibujar = function ()
{
	var dibujo = this.contexto;

//Dibujar el poste
	// dibujo.beginPath();
	// dibujo.moveTo(150,100);
	// dibujo.lineTo(150,50);
	// dibujo.lineTo(400,50);
	// dibujo.lineTo(400,350);
	// dibujo.lineWidth = 12;
	// dibujo.strokeStyle = "brown";
	// dibujo.stroke();
	// dibujo.closePath();

	// if(this.intentos > 0)
	// {
	// 	//intetnos = 1 ---> carita
	// 	dibujo.beginPath();
	// 	dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
	// 	dibujo.strokeStyle = "peru";
	// 	dibujo.lineWidth = 7;
	// 	dibujo.stroke();
	// 	dibujo.closePath();

	// 	if(this.intentos > 1)
	// 	{
	// 	//intetnos =  ---> cuerpo
	// 	dibujo.beginPath();
	// 	dibujo.moveTo(150, 180);
	// 	dibujo.lineTo(150, 250);	
	// 	dibujo.strokeStyle = "peru";
	// 	dibujo.lineWidth = 5;
	// 	dibujo.stroke();
	// 	dibujo.closePath();

	// 		if(this.intentos > 2)
	// 		{
	// 		//intetnos = 1 ---> brazos
	// 		dibujo.beginPath();
	// 		dibujo.moveTo(120, 220);
	// 		dibujo.lineTo(150, 180);
	// 		dibujo.lineTo(180, 220);	
	// 		dibujo.strokeStyle = "peru";
	// 		dibujo.lineWidth = 5;
	// 		dibujo.stroke();
	// 		dibujo.closePath();
	// 		if(this.intentos > 3)
	// 			{
	// 			//intetnos = 1 ---> piernas
	// 			dibujo.beginPath();
	// 			dibujo.moveTo(120, 290);
	// 			dibujo.lineTo(150, 250);
	// 			dibujo.lineTo(180, 290);	
	// 			dibujo.strokeStyle = "peru";
	// 			dibujo.lineWidth = 5;
	// 			dibujo.stroke();
	// 			dibujo.closePath();
	// 			if(this.intentos > 4)
	// 				{
	// 				//intetnos = 1 ---> ojos
	// 				dibujo.beginPath();
	// 				dibujo.moveTo(130, 130);
	// 				dibujo.lineTo(140, 140);
	// 				dibujo.moveTo(130, 140);
	// 				dibujo.lineTo(140, 130);
	// 				dibujo.moveTo(160, 130);
	// 				dibujo.lineTo(170, 140);
	// 				dibujo.moveTo(160, 140);
	// 				dibujo.lineTo(170, 130);
	// 				dibujo.strokeStyle = "peru";
	// 				dibujo.lineWidth = 3;
	// 				dibujo.stroke();
	// 				dibujo.closePath();
	// 				}
	// 			}
	// 		}

	// 	}
	// }	
}
function confirmarFondo()
{
	fondo.imagenOK = true;
	figura();
}
function confirmarPoste()
{
	poste.imagenOK = true;
	figura();
}

function confirmarCabeza()
{
	cabeza.imagenOK = true;
	figura();
}

function confirmarTorso()
{
	torso.imagenOK = true;
	figura();
}

function confirmarBrazos()
{
	brazos.imagenOK = true;
	figura();
}

function confirmarPiernas()
{
	piernas.imagenOK = true;
	figura();
}

function confirmarOjos()
{
	ojos.imagenOK = true;
	figura();
}


Ahorcado.prototype.trazar = function ()
{
	intentos ++;
	if(intentos >= maximo)
	{
			vivo = false;
			alert("¡Estás muerto! \nLa palabra era: " + palabraFinal + "\nPara jugar una nueva partida pulse F5.");
	}
	figura();
}

function iniciar () 
{
	enfocar();
	l = document.getElementById("letra");
	var b = document.getElementById("boton");
	var canvas = document.getElementById("c");
	canvas.width = 500;
	canvas.height = 400;
	contexto = canvas.getContext("2d");

        fondo.imagen = new Image();
        fondo.imagen.src = fondo.imagenURL;
        fondo.imagen.onload = confirmarFondo;

        poste.imagen = new Image();
        poste.imagen.src = poste.imagenURL;
        poste.imagen.onload = confirmarPoste;

        cabeza.imagen = new Image();
        cabeza.imagen.src = cabeza.imagenURL;
        cabeza.imagen.onload = confirmarCabeza;

        torso.imagen = new Image();
        torso.imagen.src = torso.imagenURL;
        torso.imagen.onload = confirmarTorso;

        brazos.imagen = new Image();
        brazos.imagen.src = brazos.imagenURL;
        brazos.imagen.onload = confirmarBrazos;

        piernas.imagen = new Image();
        piernas.imagen.src = piernas.imagenURL;
        piernas.imagen.onload = confirmarPiernas;

        ojos.imagen = new Image();
        ojos.imagen.src = ojos.imagenURL;
        ojos.imagen.onload = confirmarOjos;


	palabraFinal = palabraFinal.toUpperCase();

	document.addEventListener("keydown", teclado);

	b.addEventListener("click", agregarLetra);

	espacio = new Array(palabraFinal.length);

	hombre = new Ahorcado(contexto);

	mostrarPista(espacio);
}

function teclado(datos)
{
	var codigo = datos.keyCode;

	if(codigo == 13)
	{
		agregarLetra();
	}
}

function agregarLetra()
{
	var letra = l.value;
	l.value = "";
	enfocar();
	mostrarPalabra(palabraFinal, hombre, letra);
}
function mostrarPalabra(palabraFinal, ahorcado, letra)
{
	letra = letra.toUpperCase();
	var encontrado = false;
	var p;
	//Si sí lo encuentra
	for(p in palabraFinal)
	{
		if(letra == palabraFinal[p])
		{
			espacio[p] = letra;
			encontrado = true;
		}
	}
	mostrarPista(espacio);
	// Si no lo encuentra
	if(!encontrado)
	{
		ahorcado.trazar();
	}

	//Taree mostrar la palabra entera si estás muerto.
}

function enfocar()
{
	document.getElementById("letra").focus();
}
function mostrarPista()
{
	var pista = document.getElementById("pista");
	var texto = "";
	var i; 
	var g = 0;
	var largo = espacio.length;

	for(i=0; i<largo; i++)
	{
		if(espacio[i] != undefined)
		{
			texto = texto + espacio[i] + " ";
			g++;
		}
		else
		{
			texto += "_ ";
		}
	}
	if(vivo)
	{
	  if (g == largo)
		{
			alert("¡Has ganado!\nLa palabra era " + palabraFinal + "\nPara jugar otra partida pulsa F5.");
		}
	}
 	pista.innerText = texto;
}


