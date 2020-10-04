//Hamburger starts here

const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.navigation')
const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active')
}

hamburger.addEventListener('click', handleClick);

//-------


//Slider starts here
var slider_content = document.getElementById('box');

// contain images in an array
var image = ['slideshow1','slideshow2', 'slideshow3'];

var i = image.length;


// function for next slide 

function nextImage(){
  if (i<image.length) {
      i= i+1;
  }else{
      i = 1;
  }
    slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
}


// function for prev slide

function prevImage(){

  if (i<image.length+1 && i>1) {
      i= i-1;
  }else{
      i = image.length;
  }
    slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

}

// script for auto image slider

setInterval(nextImage , 4000);




// slideshow 2


//Slider starts here
var slider_content = document.getElementById('box2');

// contain images in an array
var image = ['slideshow1','slideshow2', 'slideshow3'];

var i = image.length;


// function for next slide 

function nextImage(){
  if (i<image.length) {
      i= i+1;
  }else{
      i = 1;
  }
    slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
}


// function for prev slide

function prevImage(){

  if (i<image.length+1 && i>1) {
      i= i-1;
  }else{
      i = image.length;
  }
    slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

}

// script for auto image slider

setInterval(nextImage , 4000);