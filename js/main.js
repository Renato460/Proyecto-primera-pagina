(function() {
  'use strict';

  var regalo = document.getElementById('regalo');


  document.addEventListener('DOMContentLoaded', function() {



    //Campos datos usuarios

    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    //Campos pases

    var paseDia = document.getElementById('pase_dia');
    var paseDosdias = document.getElementById('pase_dosdias');
    var paseCompleto = document.getElementById('pase_completo');

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

    paseDia.addEventListener('blur', mostrarDias);
    paseDosdias.addEventListener('blur', mostrarDias);
    paseCompleto.addEventListener('blur', mostrarDias);

    nombre.addEventListener('blur', validarCampos);
    apellido.addEventListener('blur', validarCampos);
    email.addEventListener('blur', validarCampos);
    email.addEventListener('blur', validarMail);

    function validarCampos() {
      if (this.value == '') {
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = 'Este campo es obligatorio';
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
      } else {
        errorDiv.style.display = 'none';
        this.style.border = '1px solid #cccccc';
      }
    }

    function validarMail() {
      if (this.value.indexOf('@') > -1) {
        errorDiv.style.border = '1px solid #cccccc';
      } else {
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = 'Debe tener al menos un "@"';
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
      }
    }

    function calcularMontos(event) {
      event.preventDefault();
      if (regalo.value === '') {
        alert('Debes elegir un regalo');
        regalo.focus();
      } else {
        var boletosDia = parseInt(paseDia.value, 10) || 0;
        var boletos2Dias = parseInt(paseDosdias.value, 10) || 0;
        var boletoCompleto = parseInt(paseCompleto.value, 10) || 0;
        var cantCamisas = parseInt(camisas.value, 10) || 0;
        var cantEtiquetas = parseInt(etiquetas.value) || 0;

        var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * 0.93) + (cantEtiquetas * 2);

        var listadoProductos = [];

        if (boletosDia >= 1) {
          listadoProductos.push(boletosDia + ' Pases por Día');
        }

        if (boletos2Dias >= 1) {
          listadoProductos.push(boletos2Dias + ' Pases por 2 Días');
        }

        if (boletoCompleto >= 1) {
          listadoProductos.push(boletoCompleto + ' Pases Completos');
        }

        if (cantCamisas >= 1) {
          listadoProductos.push(cantCamisas + ' Camisas');
        }

        if (cantEtiquetas >= 1) {
          listadoProductos.push(cantEtiquetas + ' Etiqueta');

        }

        lista_productos.style.display = 'block';
        lista_productos.innerHTML = '';
        for (var i = 0; i < listadoProductos.length; i++) {
          lista_productos.innerHTML += listadoProductos[i] + '<br/>';
        }

        suma.innerHTML = '$ ' + totalPagar.toFixed(2);

      }
    }

    function mostrarDias() {
      var boletosDia = parseInt(paseDia.value, 10) || 0;
      var boletos2Dias = parseInt(paseDosdias.value, 10) || 0;
      var boletoCompleto = parseInt(paseCompleto.value, 10) || 0;

      var diasElegidos = [];

      if (boletosDia > 0) {
        diasElegidos.push('viernes');
      }

      if (boletos2Dias > 0) {
        diasElegidos.push('viernes', 'sabado');
      }

      if (boletoCompleto > 0) {
        diasElegidos.push('viernes', 'sabado', 'domingo');
      }

      for (var i = 0; i < diasElegidos.length; i++) {
        document.getElementById(diasElegidos[i]).style.display = 'block';
      }

      //    console.log(pase_dia.value);
    }

  });

  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([37.41, 8.82]),
      zoom: 4,
    }),
  });

})();


$(function() {

  //LITERING

  $('.nombre-sitio').lettering();

  //PROGRAMAD E Conferencias
  $('div.ocultar').hide();
  $('.programa-evento .info-curso:first').show();
  $('.menu-programa a:first').addClass('activo');
  $('.menu-programa a').on('click', function() {
    $('.menu-programa a').removeClass('activo');
    $(this).addClass('activo');
    $('.ocultar').hide();
    var enlace = $(this).attr('href');
    //console.log(enlace);
    $(enlace).fadeIn(1000);
    return false;
  });

  //ANIMACIONES PARA LOS NUMEROS

  $('.resumen-evento li:nth-child(1) p').animateNumber({number :6}, 1200);
  $('.resumen-evento li:nth-child(2) p').animateNumber({number :15}, 1200);
  $('.resumen-evento li:nth-child(3) p').animateNumber({number :3}, 1500);
  $('.resumen-evento li:nth-child(4) p').animateNumber({number :9}, 1500);

  //ANIMACIONES DE CUENTA regresiva

  $('.cuenta-regresiva').countdown('2030/12/10 09:00:00', function(event){
    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));
  });
});
