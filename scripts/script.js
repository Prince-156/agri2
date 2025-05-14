
const search_btn = document.getElementById('searchBtn');
const search_input = document.getElementById('searchInput');
const cartCount = document.getElementById('count');

search_btn.addEventListener('click', function(){
search_input.style.display = "flex";
search_btn.style.backgroundColor = 'rgb(10, 172, 10)';
search_btn.style.padding = '4px';
search_btn.style.borderRadius = '4px';
search_input.style.transform = 'translateX(-10px)';
});

const navLinks = document.querySelectorAll('.navlink_item');

navLinks.forEach(navLinks => {
navLinks.addEventListener('click', () =>{
    document.querySelector('.active').classList.remove('active');
navLinks.classList.add('active');
});
});

const signBtn = document.getElementById('sign_btn');
const signPopup = document.getElementById('sign_up_modal');
const close_pop = document.getElementById('close_popup');

signBtn.addEventListener('click', function(){
signPopup.style.display = "block";
});

close_pop.addEventListener('click', function(){
signPopup.style.display = "none";
});


var i = 0;
var time = 3000;
var images = [];

images[0] = 'assets/images/homebg1.jpg';
images[1] = 'assets/images/home3.jpg';
images[2] = 'assets/images/home2.jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i  = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  document.querySelectorAll('.bottom-nav__item').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.bottom-nav__item').forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });
  