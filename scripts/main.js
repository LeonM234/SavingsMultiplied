document.addEventListener('DOMContentLoaded', function(){
  var signIn = document.querySelector('.login');
  var cancel = document.querySelector('input[value="Cancel"]');
  var lightbox = document.querySelector('.lightbox');
  var loginModal = document.querySelector('.login-modal');

  signIn.addEventListener('click', function(){
    show(loginModal);
  });


  cancel.addEventListener('click', function(){
    hide(loginModal);
  });

    
  lightbox.addEventListener('click', function(){
    hide(loginModal);
  });
});

function hide(element) {
  element.style.display = "none";
}

function show(element) {
element.style.display = "block";
}

