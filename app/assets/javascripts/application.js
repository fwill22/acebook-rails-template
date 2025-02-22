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

// --------------- Dark Mode for storing the mode users currently set ----------------

document.addEventListener('DOMContentLoaded', () => {
  let toggleMode = document.querySelector(".mask")
  let myLocalStorage = window.localStorage
  let sun = document.querySelector(".icon-wrap")
  let moon = document.querySelector(".icon-wrap-moon")
  let body = document.querySelector('body')
  let bar = document.querySelector('.bar')
  let userColourMode = myLocalStorage.getItem("class")

  document.documentElement.setAttribute("class", userColourMode)
    if (moon.classList === "active"){
            userColorMode = "dark"
    } 
  toggleMode.addEventListener("click", () => {
    sun.classList.toggle('active')
    moon.classList.toggle('active')
    body.classList.toggle('dark')
    bar.classList.toggle('dark')
    if (sun.classList.contains("active")) {
        myLocalStorage.setItem("class", "light")
    } else {
        myLocalStorage.setItem("class", "dark")
    }
  })
})

// --------------- jQuery for log in/register modal -------------
$(window, document, undefined).ready(function () {
  $('.input').blur(function () {
    var $this = $(this)
    if ($this.val()) $this.addClass('used')
    else $this.removeClass('used')
  })

  $('#confirmsignup').on('click', async function (e) {
    e.preventDefault()

    // const avatarInput = $('#avatarInput').val()
    const nameInput = $('#nameInput').val()
    const emailInput =  $('#emailInput').val()
    const dobInput = $("#dobInput").val()
    const passwordInput = $('#passwordInput').val()
    const confirmPassInput = $('#confirmPassInput').val()

    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'dataType': 'json'
      },
      body: JSON.stringify({
        // avatar: avatarInput,
        name: nameInput,
        email: emailInput,
        dob: dobInput,
        password: passwordInput,
        password_confirmation: confirmPassInput,
        authenticity_token: window._token

      }),
    })
// DEBUGGING: viewing the params
    let stringified = JSON.stringify(response);
    let parsedObj = JSON.parse(stringified);
 
    console.log(parsedObj);
    

// render json response (create user action)
   const json = await response.json()
    //  console.log(response.text) 
   if(json.success) {
    //  do something
     $('#tab1').click();

   } /* else {
    // render: { 
      // error: "Please create an account"
    } 
  }*/
   
  })
})

$('#tab1').on('click', function () {
  $('#tab1').addClass('login-shadow')
  $('#tab2').removeClass('signup-shadow')
  // login
})

$('#tab2').on('click', function () {
  $('#tab2').addClass('signup-shadow')
  $('#tab1').removeClass('login-shadow')
  // signup
})
