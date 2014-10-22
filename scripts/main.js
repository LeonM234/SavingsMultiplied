  function getJSON(url, cb){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function(){
      cb(JSON.parse(xhr.responseText));
    };
    xhr.send();
  }

var jsonObjects;

document.addEventListener('DOMContentLoaded', function(){

  function addDiv(){
    var $divWrapper = document.querySelector(".box_wrapper");
    var $newDiv = document.createElement("div");
    addProperties($newDiv);
    $divWrapper.appendChild($newDiv);
    $newDiv.classList.add("container_box");
  }

  function addProperties(newElement){
    var $grabContainerBox = document.querySelector(".container_box");
    var $addSpan = document.createElement("span");
    // Use a for loop to loop over each array object and add properties to DOM??
    for (var i = 0; i < jsonObjects.length; i++)
      $grabContainerBox.appendChild($addSpan);
      $addSpan.innerHTML = jsonObjects[i].title;
    }
   }

 
  getJSON('https://savingsmultipliedssh.firebaseio.com/itemlist.json', function(data){
    // grab JSON data in a variable
    jsonObjects = data;

    // loop over each JSON object
    jsonObjects.forEach(function(entry){
      console.log(entry);
      // append a div
      addDiv();
      // append image to inside of div created above
        //var $newImg = document.createElement("img");
      // image info from JSON -- how to get??
      
      // append price below image
      
      // append time remaining below image
      
      // append seller below image
      
      // append title below image
      addProperties();
      // add CSS styling in other doc to these elements
    });
  });

        
        
  var loginModal = document.querySelector('.login-modal');
  var loginModalToggleAreas = document.querySelectorAll(
    '.lightbox, .login, input[value="Cancel"]'
  );

  function toggleLoginModal(){
    toggle(loginModal);
  }

  for (var i = 0; i < loginModalToggleAreas.length; i++){
    loginModalToggleAreas[i].addEventListener('click', toggleLoginModal);
  }
});

function toggle(element){
  if (element.classList) {
    element.classList.toggle('hidden');
  } else {
    var classes = element.className.split(' ');
    var classIndex;

    for (var i = 0; i < classes.length; i++) {
      if (classes[i] === 'hidden') {
        classIndex = i;
      }
    }

    if (classIndex) {
      classes.splice(classIndex, 1);
    } else {
      classes.push('hidden');
    }

    element.className = classes.join(' ');
  }
}
