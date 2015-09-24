$(document).ready(function(){

//bombillo 
$("#bombillo").click(function(){
	$("#bombillo--msg").toggle("fast");
})

// boton Computador
$("#computador--btn").mouseenter(function(){
	$("#computador--msg").fadeIn(1000);
})
$("#computador--btn").mouseleave(function(){
	$("#computador--msg").fadeOut("fast");
})

// Boton partes
$("#partes--btn").mouseenter(function(){
	$("#partes--msg").fadeIn(1000);
})
$("#partes--btn").mouseleave(function(){
	$("#partes--msg").fadeOut(1000);
})

// teclado
$("#partes--btn--teclado").mouseenter(function(){
	$("#partes--msg--teclado").fadeIn();
})
$("#partes--btn--teclado").mouseleave(function(){
	$("#partes--msg--teclado").fadeOut();
})

// Monitor
$("#partes--btn--monitor").mouseenter(function(){
	$("#partes--msg--monitor").fadeIn();
})
$("#partes--btn--monitor").mouseleave(function(){
	$("#partes--msg--monitor").fadeOut();
})

// Raton
$("#partes--btn--raton").mouseenter(function(){
	$("#partes--msg--raton").fadeIn();
})
$("#partes--btn--raton").mouseleave(function(){
	$("#partes--msg--raton").fadeOut();
})

// Caja
$("#partes--btn--caja").mouseenter(function(){
	$("#partes--msg--caja").fadeIn();
})
$("#partes--btn--caja").mouseleave(function(){
	$("#partes--msg--caja").fadeOut();
})

// Uso
$("#uso--btn").mouseenter(function(){
	$("#uso--msg").fadeIn(1000);
})
$("#uso--btn").mouseleave(function(){
	$("#uso--msg").fadeOut("fast");
})

// Aplicaciones
$("#aplicaciones--btn").mouseenter(function(){
	$("#aplicaciones--msg").fadeIn(1000);
})
$("#aplicaciones--btn").mouseleave(function(){
	$("#aplicaciones--msg").fadeOut("fast");
})

// Internet
$("#internet--btn").mouseenter(function(){
	$("#internet--msg").fadeIn(1000);
})
$("#internet--btn").mouseleave(function(){
	$("#internet--msg").fadeOut("fast");
})

// orientaciones
$("#orientaciones--btn").mouseenter(function(){
	$("#orientaciones--msg").fadeIn(1000);
})
$("#orientaciones--btn").mouseleave(function(){
	$("#orientaciones--msg").fadeOut("fast");
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