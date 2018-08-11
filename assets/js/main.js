//Testy mctest
function display() {
   alert("Hello World!");
}

//Sticky navbar
// When the user scrolls the page, execute myFunction 
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar-alex-mcdonald");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Email stuff
function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.getElementById('status-name').innerHTML = "Name cannot be empty";
        return false;
    }
    else {
        document.getElementById('status-name').innerHTML = "";
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.getElementById('status-email').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('status-email').innerHTML = "Email format invalid";
            return false;
        }
        else {
        document.getElementById('status-email').innerHTML = "";
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.getElementById('status-subject').innerHTML = "Subject cannot be empty";
        return false;
    }
    else {
        document.getElementById('status-subject').innerHTML = "";
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.getElementById('status-message').innerHTML = "Message cannot be empty";
        return false;
    }
    else {
        document.getElementById('status-message').innerHTML = "";
    }
    document.getElementById('status').innerHTML = "Sending...";
    document.getElementById('contact-form').submit();
}