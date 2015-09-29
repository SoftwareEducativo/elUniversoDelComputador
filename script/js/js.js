$(document).ready(function(){

function cerrarPartes() {
	$("#partes--msg").hide();
	$("#partes--btn--teclado").hide();
	$("#partes--btn--monitor").hide();
	$("#partes--btn--raton").hide();
	$("#partes--btn--caja").hide();
	$("#orientaciones--msg").hide();
	$("#orientaciones--btn1").hide();
	$("#orientaciones--btn2").hide();
	$("#orientaciones--btn3").hide();

}
function cerrarOrientaciones(){
	$("#orientaciones--msg").hide();
	$("#orientaciones--btn1").hide();
	$("#orientaciones--btn2").hide();
	$("#orientaciones--btn3").hide();
}
//bombillo 
$("#bombillo").click(function(){
	$("#bombillo--msg").toggle("fast");
	cerrarPartes();
})

// boton Computador
$("#computador--btn").mouseenter(function(){
	$("#computador--msg").fadeIn(1000);
	cerrarPartes();
})
$("#computador--btn").mouseleave(function(){
	$("#computador--msg").fadeOut("fast");
})

// Boton partes
$("#partes--btn").mouseenter(function(){
	$("#partes--msg").show();
	var foo = $("#partes--msg").css("display");
	// alert(foo);
	if (foo=="block"){
		$("#partes--btn--teclado").show();
		$("#partes--btn--monitor").show();
		$("#partes--btn--raton").show();
		$("#partes--btn--caja").show();
	}
	cerrarOrientaciones();
})

// teclado
$("#partes--btn--teclado").mouseenter(function(){
	$("#partes--msg--teclado").show();
})
$("#partes--btn--teclado").mouseleave(function(){
	$("#partes--msg--teclado").hide();
})

// Monitor
$("#partes--btn--monitor").mouseenter(function(){
	$("#partes--msg--monitor").show();
})
$("#partes--btn--monitor").mouseleave(function(){
	$("#partes--msg--monitor").hide();
})

// Raton
$("#partes--btn--raton").mouseenter(function(){
	$("#partes--msg--raton").show();
})
$("#partes--btn--raton").mouseleave(function(){
	$("#partes--msg--raton").hide();
})

// Caja
$("#partes--btn--caja").mouseenter(function(){
	$("#partes--msg--caja").show();
})
$("#partes--btn--caja").mouseleave(function(){
	$("#partes--msg--caja").hide();
})

// Uso
$("#uso--btn").mouseenter(function(){
	$("#uso--msg").fadeIn(1000);
	cerrarPartes();
})
$("#uso--btn").mouseleave(function(){
	$("#uso--msg").fadeOut("fast");
})

// Aplicaciones
$("#aplicaciones--btn").mouseenter(function(){
	$("#aplicaciones--msg").fadeIn(1000);
	cerrarPartes();
})
$("#aplicaciones--btn").mouseleave(function(){
	$("#aplicaciones--msg").fadeOut("fast");
})

// Internet
$("#internet--btn").mouseenter(function(){
	$("#internet--msg").fadeIn(1000);
	cerrarPartes();
})
$("#internet--btn").mouseleave(function(){
	$("#internet--msg").fadeOut("fast");
})

// orientaciones
$("#orientaciones--btn").mouseenter(function(){
	$("#orientaciones--msg").fadeIn(1000);
	var foo = $("#orientaciones--msg").css("display");
	// alert(foo);
	if (foo=="block"){
		$("#orientaciones--btn1").show();
		$("#orientaciones--btn2").show();
		$("#orientaciones--btn3").show();
	}
})

// Orientaciones
$("#orientaciones--btn1").mouseenter(function(){
	$("#orientaciones--btn1--msg").fadeIn(1000);
})
$("#orientaciones--btn1").mouseleave(function(){
	$("#orientaciones--btn1--msg").fadeOut("fast");
})
$("#orientaciones--btn2").mouseenter(function(){
	$("#orientaciones--btn2--msg").fadeIn(1000);
})
$("#orientaciones--btn2").mouseleave(function(){
	$("#orientaciones--btn2--msg").fadeOut("fast");
})
$("#orientaciones--btn3").mouseenter(function(){
	$("#orientaciones--btn3--msg").fadeIn(1000);
})
$("#orientaciones--btn3").mouseleave(function(){
	$("#orientaciones--btn3--msg").fadeOut("fast");
})

});