(function(){
  'use strict';

var regalo = document.getElementById('regalo');
  document.addEventListener('DOMContentLoaded', function(){

//Campos datos usuarios

  var nombre = document.getElementById('nombre');
  var apellido = document.getElementById('apellido');
  var email = document.getElementById('email');

//Campos pases

  var pase_dia = document.getElementById('pase_dia');
  var pase_dosdias = document.getElementById('pase_dosdias');
  var pase_completo = document.getElementById('pase_completo');

//BOTONES Y DIVS

  var calcular = document.getElementById('calcular');
  var errorDiv = document.getElementById('error');
  var botonRegistro = document.getElementById('btnRegistro');
  var resultado = document.getElementById('lista_productos');
  var suma = document.getElementById('suma_total');

//EXTRAS

  var etiquetas = document.getElementById('etiquetas');
  var camisas = document.getElementById('camisa_evento');

  calcular.addEventListener('click', calcularMontos);

  pase_dia.addEventListener('blur', mostrarDias);
  pase_dosdias.addEventListener('blur', mostrarDias);
  pase_completo.addEventListener('blur', mostrarDias);

  nombre.addEventListener ('blur', validarCampos);
  apellido.addEventListener ('blur', validarCampos);
  email.addEventListener ('blur', validarCampos);
  email.addEventListener ('blur', validarMail);

  function validarCampos(){
    if(this.value == ''){
      errorDiv.style.display= 'block';
      errorDiv.innerHTML = 'Este campo es obligatorio';
      this.style.border = '1px solid red';
      errorDiv.style.border = '1px solid red';
    }else{
      errorDiv.style.display = 'none'
      this.style.border = '1px solid #cccccc'
    }
  }
  function validarMail() {
    if(this.value.indexOf('@') > -1){
      errorDiv.style.border = '1px solid #cccccc';
    }else {
      errorDiv.style.display= 'block';
      errorDiv.innerHTML = 'Debe tener al menos un "@"';
      this.style.border = '1px solid red';
      errorDiv.style.border = '1px solid red';
    }
  }


  function calcularMontos(event){
    event.preventDefault();
      if (regalo.value ==='') {
        alert("Debes elegir un regalo");
        regalo.focus();
      }else{
        var boletosDia = parseInt(pase_dia.value, 10)||0,
            boletos2Dias = parseInt(pase_dosdias.value,10)||0,
            boletoCompleto = parseInt(pase_completo.value,10)||0,
            cantCamisas = parseInt(camisas.value,10)||0,
            cantEtiquetas = parseInt(etiquetas.value)||0;


        var totalPagar = (boletosDia * 30)+(boletos2Dias * 45)+(boletoCompleto * 50)+((cantCamisas*10)*.93)+(cantEtiquetas*2);

        var listadoProductos = [];

        if (boletosDia>=1) {
          listadoProductos.push(boletosDia + ' Pases por Día');
        }
        if (boletos2Dias>=1) {
          listadoProductos.push(boletos2Dias + ' Pases por 2 Días');
        }
        if (boletoCompleto>=1) {
          listadoProductos.push(boletoCompleto + ' Pases Completos');
        }
        if (cantCamisas>=1) {
          listadoProductos.push(cantCamisas + ' Camisas');
        }
        if (cantEtiquetas>=1) {
          listadoProductos.push(cantEtiquetas + ' Etiqueta');

        }
        lista_productos.style.display='block';
        lista_productos.innerHTML = '';
        for (var i = 0; i < listadoProductos.length; i++) {
          lista_productos.innerHTML+=listadoProductos[i]+ '<br/>';
        }
        suma.innerHTML='$ '+ totalPagar.toFixed(2);

      }
  }

  function mostrarDias(){
    var boletosDia = parseInt(pase_dia.value, 10)||0,
        boletos2Dias = parseInt(pase_dosdias.value,10)||0,
        boletoCompleto = parseInt(pase_completo.value,10)||0;

        var diasElegidos =[];

        if (boletosDia > 0) {
          diasElegidos.push('viernes');
        }
        if (boletos2Dias > 0) {
          diasElegidos.push('viernes','sabado');
        }
        if (boletoCompleto > 0) {
          diasElegidos.push('viernes','sabado','domingo');
        }

        for (var i = 0; i < diasElegidos.length; i++) {
          document.getElementById(diasElegidos[i]).style.display ='block';
        }
//    console.log(pase_dia.value);
  }





  });

})();
