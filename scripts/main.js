document.querySelector('img').onclick = function(){
    var imgSrc = document.querySelector('img').getAttribute('src');
    
    if(imgSrc === 'images/mozilla.png'){
       document.querySelector('img').setAttribute('src', 'images/firefox2.png')
       }
    else{
        document.querySelector('img').setAttribute('src', 'images/mozilla.png');
    }
}

function setusername(){
    var name = prompt("Please enter your name: ");
    localStorage.setItem('name', name);
    heading.textContent = 'Mozilla is cool, ' + name;
}

var button = document.querySelector('button');
var heading = document.querySelector('h1');

button.onclick = function() {
    setusername();
}

if(!localStorage.getItem('name')){
    setusername();
   }
else{
    heading.textContent = 'Mozilla is cool, ' + localStorage.getItem('name'); 
}