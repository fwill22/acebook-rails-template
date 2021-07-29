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
//= require_tree .

$(window, document, undefined).ready(function() {

  document.getElementByClassName("input").blur(function() {
    let $this = this;
    if ($this.value)
      $this.classList.add("used");
    else
      $this.classList.remove("used");
  });
  
  });


document.getElementById("tab1").on('click' , function(){
    document.getElementById("tab1").classList.add("login-shadow");
  document.getElementById("tab2").classList.remove("signup-shadow");
});

document.getElementById("tab2").on('click' , function(){
    document.getElementById("tab2").classList.add("signup-shadow");
  document.getElementById("tab1").classList.remove("login-shadow");


});