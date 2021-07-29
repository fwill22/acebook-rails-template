// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require_tree .

  // document.addEventListener("DOMContentLoaded", function(){

  //   function classToggle() {
  //     this.classList.toggle('tab1');
  //     this.classList.toggle('tab2');
  //   }

  //   document.querySelector('#form_tabs').addEventListener('click', classToggle);

  //   document.querySelector('.input').blur(function () {
  //     let input = document.querySelector(this)
  //     if (input.value) {
  //       input.classList.add('used')
  //     } else {
  //       input.removeClass('used')
  //     }
  //   })

  //   document.getElementById("tab1").addEventListener('click', function(){
  //     document.getElementById("tab1").classList.add("login-shadow")
  //     document.getElementById("tab2").classList.remove("signup-shadow")
  //   })

  //   document.getElementById("tab2").addEventListener("click", function(){
  //     document.getElementById("tab2").classList.add("signup-shadow")
  //     document.getElementById("tab1").classList.remove("login-shadow")
  //   })

    
  // })

  $(window, document, undefined).ready(function() {

    $('.input').blur(function() {
      var $this = $(this);
      if ($this.val())
        $this.addClass('used');
      else
        $this.removeClass('used');
    });
    
    });
  
  
  $('#tab1').on('click' , function(){
      $('#tab1').addClass('login-shadow');
     $('#tab2').removeClass('signup-shadow');
  });
  
  $('#tab2').on('click' , function(){
      $('#tab2').addClass('signup-shadow');
     $('#tab1').removeClass('login-shadow');
  
  
  });