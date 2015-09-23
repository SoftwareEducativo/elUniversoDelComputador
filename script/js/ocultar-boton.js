$(document).ready(function(){
//funcion que muestra algunos botones
$(".oculta").css("display", "none");
$(".oculta").css("display", "none");
$(".oculta").css("border", "0");
});

$(document).ready(function(){
//funcion que muestra algunos botones
$(".oculta").css("display", "none");

$(".oculta").css("border", "0");

$("#oculta").css("display", "none");

//fondo
$("#fondo").mouseenter(function(){
$("#carac, #cerrar-carac1").fadeOut();
$("#cerrar-sitio, #cerrar-sitio1").fadeOut(1000);
})

//bombillo 
$("#bombillo").click(function(){
	$("#bombillo--msg").toggle("fast");
})

// boton Computador
$("#computador--btn").mouseenter(function(){
	$("#computador--msg").fadeIn(1000);
	$("#partes--msg").fadeOut();
})

// Boton partes
$("#partes--btn").mouseenter(function(){
	$("#partes--msg").fadeIn(1000);
	$("#computador--msg").fadeOut();

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

$("#").mouseenter(function(){})
$("#").mouseenter(function(){})
$("#").mouseenter(function(){})

// Boton Uso

// $("#computador--btn").mouseenter(function(){
// $("#carac, #cerrar-carac1").fadeIn(1000);
// $("#cerrar-sitio, #cerrar-sitio1").fadeOut(10);
// $("#clubtranspa2, #clubes2").fadeOut(10);
// })
// $("#carac, #cerrar-carac1").click(function(){
// $("#carac, #cerrar-carac1").fadeOut(10);
// })

//aptitud
$("#rojo").click(function(){
$(".rojo").fadeIn();
$("#rojo1").fadeIn();
$("#transpa, #img2, #transpa2, #transpa3, #transpa4, #transp6").fadeIn();
$("#clubes2").fadeOut();
})
$("#rojo").mouseenter(function(){
$("#carac, #cerrar-carac1").fadeOut(1000);
$("#cerrar-sitio, #cerrar-sitio1").fadeOut(1000);
$("#clubtranspa2, #clubes2").fadeOut(10);
})
$("#transpa").mouseenter(function(){
$("#aptitud").fadeIn();
})
$("#transpa").mouseout(function(){
$("#aptitud, #aerob").fadeOut();
})
$("#transpa2").mouseenter(function(){
$("#disciplina").fadeIn();
})
$("#transpa2").mouseout(function(){
$("#disciplina, #aerob").fadeOut();
})
$("#transpa3").mouseenter(function(){
$("#entrena").fadeIn();
})
$("#transpa3").mouseout(function(){
$("#entrena, #aerob").fadeOut();
})
$("#transpa4").mouseenter(function(){
$("#ejerc").fadeIn();
})
$("#transpa4").mouseout(function(){
$("#ejerc, #aerob").fadeOut();
})
$("#img2").mouseover(function(){
$("#aerob").fadeIn();
})
$("#img2").mouseout(function(){
$("#aerob").fadeOut();
})
$("#trans").mouseout(function(){
$("#aptitud, #aerob").fadeOut();
})
$("#transp6").mouseenter(function(){
$("#ejerc3, #aerob").fadeIn();
})
$("#transp6").mouseout(function(){
$("#ejerc3, #aerob").fadeOut();
})
$("#cerrar-rojo").click(function(){
$(".rojo, #rojo1, #rojo-pregunta,#aerob").fadeOut();
})
$("#cerrar-rojo1").click(function(){
$(".rojo, #rojo1, #rojo-pregunta,#aerob").fadeOut();
})

//beneficios
$("#sitio").mouseenter(function(){
$("#cerrar-sitio, #cerrar-sitio1").fadeIn(1000);
$("#clubtranspa2, #clubes2").fadeOut(1000);
})
$("#cerrar-sitio, #cerrar-sitio1").click(function(){
$("#cerrar-sitio, #cerrar-sitio1").fadeOut(10);
})
//clubes 
$("#amarillo").click(function(){
$(".amarillo").fadeIn(1000);
$("#amarillo1, #arag, #deporanzoategui, #llaneros, #trujillanos, #portuguesa, #deportivo, #zulia,#yaracuyanos #vigia, #atleticovz, #caracas").fadeIn(10);
$("#estudiantes, #monagas, #zamora, #mineros, #cdlara, #deportivopetare").fadeIn(10);
$("#clubes2").fadeOut();
})
$("#amarillo").mouseenter(function(){
$("#carac, #cerrar-carac1").fadeOut();
$("#cerrar-sitio, #cerrar-sitio1").fadeOut(1000);
$("#clubtranspa2, #clubes2").fadeOut(10);
})
$("#arag").mouseenter(function(){
$("#araguafc").fadeIn();
})
$("#arag").mouseout(function(){
$("#araguafc").fadeOut();
})
$("#deporanzoategui").mouseenter(function(){
$("#deportivoanzoategui").fadeIn();
})
$("#deporanzoategui").mouseout(function(){
$("#deportivoanzoategui").fadeOut();
})
$("#llaneros").mouseenter(function(){
$("#llanerosfc").fadeIn();
})
$("#llaneros").mouseout(function(){
$("#llanerosfc").fadeOut();
})
$("#trujillanos").mouseenter(function(){
$("#trujillanosfc").fadeIn();
})
$("#trujillanos").mouseout(function(){
$("#trujillanosfc").fadeOut();
})
$("#portuguesa").mouseenter(function(){
$("#portuguesafc").fadeIn();
})
$("#portuguesa").mouseout(function(){
$("#portuguesafc").fadeOut();
})
$("#deportivo").mouseenter(function(){
$("#deportivotachira").fadeIn();
})
$("#deportivo").mouseout(function(){
$("#deportivotachira").fadeOut();
})
$("#zulia").mouseenter(function(){
$("#zuliafc").fadeIn();
})
$("#zulia").mouseout(function(){
$("#zuliafc").fadeOut();
})
$("#yaracuyanos").mouseenter(function(){
$("#yaracuyanosfc").fadeIn();
})
$("#yaracuyanos").mouseout(function(){
$("#yaracuyanosfc").fadeOut();
})
$("#vigia").mouseenter(function(){
$("#vigiafc").fadeIn();
})
$("#vigia").mouseout(function(){
$("#vigiafc").fadeOut();
})
$("#caracas").mouseenter(function(){
$("#caracasfc").fadeIn();
})
$("#caracas").mouseout(function(){
$("#caracasfc").fadeOut();
})
$("#atleticovz").mouseenter(function(){
$("#atleticovzla").fadeIn();
})
$("#atleticovz").mouseout(function(){
$("#atleticovzla").fadeOut();
})
$("#estudiantes").mouseenter(function(){
$("#estudiantesfc").fadeIn();
})
$("#estudiantes").mouseout(function(){
$("#estudiantesfc").fadeOut();
})
$("#monagas").mouseenter(function(){
$("#monagassc").fadeIn();
})
$("#monagas").mouseout(function(){
$("#monagassc").fadeOut();
})
$("#zamora").mouseenter(function(){
$("#zamorafc").fadeIn();
})
$("#zamora").mouseout(function(){
$("#zamorafc").fadeOut();
})
$("#mineros").mouseenter(function(){
$("#minerosfc").fadeIn();
})
$("#mineros").mouseout(function(){
$("#minerosfc").fadeOut();
})
$("#cdlara").mouseenter(function(){
$("#cdlarafc").fadeIn();
})
$("#cdlara").mouseout(function(){
$("#cdlarafc").fadeOut();
})
$("#deportivopetare").mouseenter(function(){
$("#deportivopetarefc").fadeIn();
})
$("#deportivopetare").mouseout(function(){
$("#deportivopetarefc").fadeOut();
})
$("#realesppor").mouseenter(function(){
$("#realespporfc").fadeIn();
})
$("#realesppor").mouseout(function(){
$("#realespporfc").fadeOut();
})
$("#cerrar-amarillo").click(function(){
$(".amarillo, #amarillo1, #amarillo-pregunta, #balza-pregunta, #balza, #casco, #casco-pregunta, #chaleco, #chaleco-pregunta, #cuerdas, #cuerdas-pregunta, #pala, #pala-pregunta, #pito, #pito-pregunta, #traje, #traje-pregunta").fadeOut(1000);
})
$("#cerrar-amarillo1").click(function(){
$(".amarillo, #amarillo1, #amarillo-pregunta, #balza-pregunta, #balza, #casco, #casco-pregunta, #chaleco, #chaleco-pregunta, #cuerdas, #cuerdas-pregunta, #pala, #pala-pregunta, #pito, #pito-pregunta, #traje, #traje-pregunta").fadeOut(1000);
})

//cronologia
$("#nivel").click(function(){
$(".nivel").fadeIn(1000);
$("#nivel1,#transpa10, #transpa11, #transpa12, #transpa13, #transpa14, #transpa15, #transpa16, #transpa17, #transpa18, #transpa19").fadeIn(10);
$(".amarillo, .verde, #amarillo1, #verde1,#amarillo-pregunta,#verde-pregunta").fadeOut(100);
})
$("#transpa10").mouseenter(function(){
$("#1981").fadeIn();
})
$("#transpa10").mouseout(function(){
$("#1981").fadeOut();
})
$("#transpa11").mouseenter(function(){
$("#1969").fadeIn();
})
$("#transpa11").mouseout(function(){
$("#1969").fadeOut();
})
$("#transpa12").mouseenter(function(){
$("#1965").fadeIn();
})
$("#transpa12").mouseout(function(){
$("#1965").fadeOut();
})
$("#transpa13").mouseenter(function(){
$("#1973").fadeIn();
})
$("#transpa13").mouseout(function(){
$("#1973").fadeOut();
})
$("#transpa14").mouseenter(function(){
$("#2001").fadeIn();
})
$("#transpa14").mouseout(function(){
$("#2001").fadeOut();
})
$("#transpa15").mouseenter(function(){
$("#2006").fadeIn();
})
$("#transpa15").mouseout(function(){
$("#2006").fadeOut();
})
$("#transpa16").mouseenter(function(){
$("#2002").fadeIn();
})
$("#transpa16").mouseout(function(){
$("#2002").fadeOut();
})
$("#transpa17").mouseenter(function(){
$("#2009").fadeIn();
})
$("#transpa17").mouseout(function(){
$("#2009").fadeOut();
})
$("#transpa18").mouseenter(function(){
$("#2011").fadeIn();
})
$("#transpa18").mouseout(function(){
$("#2011").fadeOut();
})
$("#transpa19").mouseenter(function(){
$("#2007").fadeIn();
})
$("#transpa19").mouseout(function(){
$("#2007").fadeOut();
})
$("#cerrar-nivel").click(function(){
$(".nivel, #nivel1").fadeOut(1000);
})
$("#cerrar-nivel1").click(function(){
$(".nivel, #nivel1").fadeOut(1000);
})
$("#nivel").mouseenter(function(){
$("#carac, #cerrar-carac1").fadeOut();
$("#cerrar-sitio, #cerrar-sitio1").fadeOut(500);
$("#clubtranspa2, #clubes2").fadeOut(10);
})
//vinotinto
$("#personaje").click(function(){
$("#cerrar-personaje").fadeIn(1000);
$("#vinotinto, #sabiasq1").fadeIn(10);
$(".amarillo, .verde, #amarillo1, #verde1,#amarillo-pregunta,#verde-pregunta").fadeOut(100);
})
$("#sabiasq1").click(function(){
$("#tranpasabiasq").fadeIn(1000);
$("#vinotinto2").fadeIn(10);
})
$("#vinotinto2, #tranpasabiasq").click(function(){
$("#tranpasabiasq, #vinotinto2").fadeOut(1000);
})
$("#vinotinto,#cerrar-personaje").click(function(){
$("#vinotinto,#cerrar-personaje,#tranpasabiasq, #vinotinto2, #sabiasq1").fadeOut(1000);
})
$("#personaje").mouseenter(function(){
$("#clubtranspa2, #clubes2").fadeOut(10);
$("#cerrar-sitio, #cerrar-sitio1").fadeOut(1000);
})
//sabias que
$("#sabias").click(function(){
$(".sabias").fadeIn(1000);
$("#sabias1, #fvf2").fadeIn(20);
$(".amarillo, .verde, #amarillo1, #verde1,#amarillo-pregunta,#verde-pregunta").fadeOut(100);
})
$("#fvf2").click(function(){
$("#fvf").fadeIn(1000);
})
$(".sabias, #sabias1").click(function(){
$(".sabias").fadeOut(1000);
$("#sabias1").fadeOut(10);
})
$("#sabias").mouseenter(function(){
$("#carac, #cerrar-carac1").fadeOut();
$("#cerrar-sitio, #cerrar-sitio1").fadeOut(1000);
$("#clubtranspa2, #clubes2").fadeOut(10);
})
//sabiasque2
$("#sabiasq").mouseenter(function(){
$(".sabias2").fadeIn(1000);
$("#sabias2a").fadeIn(20);
$(".amarillo, .verde, #amarillo1, #verde1,#amarillo-pregunta,#verde-pregunta").fadeOut(100);
$("#carac, #cerrar-carac1").fadeOut();
$("#cerrar-sitio, #cerrar-sitio1").fadeOut(1000);
$("#clubtranspa2, #clubes2").fadeOut(10);
})
$(".sabias2, #sabias2a").mouseout(function(){
$(".sabias2").fadeOut(1000);
$("#sabias2a").fadeOut(10);
})

//Reseña
$("#clubes").mouseenter(function(){
$("#clubtranspa2, #clubes2").fadeIn(1000);
$("#carac, #cerrar-carac1").fadeOut();
$("#cerrar-sitio, #cerrar-sitio1").fadeOut(10);
})
$("#clubtranspa2, #clubes2").click(function(){
$("#clubtranspa2, #clubes2").fadeOut(10);
})
});
