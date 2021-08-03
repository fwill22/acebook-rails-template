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
//= require rails-ujs
//= require jquery3
//= require_tree .

  // --------------- Dark Mode ----------------

  document.addEventListener("DOMContentLoaded", () => {

  //   let toggleSwitch = document.querySelector(".toggle-input")
  //   let myLocalStorage = window.localStorage
  //   let userSwitch = toggleSwitch.unchecked
  //   let userColourMode = myLocalStorage.getItem("class")

    

  //   document.documentElement.setAttribute("class", userColourMode)
    
  //   if (userColourMode === "dark") {
  //     userSwitch != true
  //   }

  //   toggleSwitch.addEventListener("change", () => {
  //     if (toggleSwitch.checked === true) {
  //       document.documentElement.setAttribute("class", "dark")
  //       myLocalStorage.setItem("class", "dark")
  //       logoMode()
  //     } else {
  //       document.documentElement.setAttribute("class", "light")
  //       myLocalStorage.setItem("class", "light")
  //     } 

  //   })
  //   function toggleLogo() {
  //     document.getElementByClassName(".icon-wrap").classList.toggle("active");
  //     document.getElementByClassName(".bar").classList.toggle("dark");
  //   };
  //   function logoMode() { document.getElementByClassName("mask").onClick( toggleLogo()
  //   )}
    
    let icon = document.getElementsByClassName("mask")
    let iconChange = icon.getElementByClassName("icon-wrap")
    let barChange = icon.getElementByClassName("body, .bar")

    document.addEventListener("click", function() {
      iconChange.classList.toggle("active")
      barChange.classList.toggle("dark")
    })
   })

  // ------JQuery for dark mode feature ---------
  //  $( ".mask" ).click(function() {
  //   $( ".icon-wrap" ).toggleClass('active');
  //   $('body, .bar').toggleClass('dark');
  // });
  // --------------- jQuery for log in/register modal -------------
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