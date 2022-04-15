

//Side-bar

let menu = document.getElementById('burger-menu');
let sidebar = document.getElementById('sidebar');
menu.addEventListener('click',() => {
    if('hidden' == sidebar.style.visibility){
        sidebar.style.visibility='visible';
        sidebar.style.width="100%"
    }else{
        sidebar.style.visibility='hidden';
        sidebar.style.width="0%"
    }
})

//Language-changer

let iconlanguage = document.getElementById('language');
let languagechg = document.getElementById('language-changer');

iconlanguage.addEventListener('click', (e) => {
    e.stopPropagation();
    if(languagechg.style.display == 'none'){
        languagechg.style.display="block";
    }
    else{
        languagechg.style.display="none";
    }
})

document.body.addEventListener('click',(e)=>{
    e.stopPropagation();
    languagechg.style.display="none";
})


//search

let lmenu = document.getElementById('searchicon');
let cnav = document.getElementById('cnav');

    lmenu.addEventListener('click',()=>{

        if(cnav.style.display == 'block'){
            cnav.style.display = 'none';
        }
        else{
            cnav.style.display='block';
        }

})


let searchbar = document.getElementById('search');
let sidemenu = document.getElementById('searchicon');

sidemenu.addEventListener('click',()=>{

    if(searchbar.style.display == 'none'){
        searchbar.style.display = 'block'; 
    }
    else{
        searchbar.style.display = 'none';
    }
})

let sicon = document.getElementById('sicon');

sicon.addEventListener('click',()=>{
    if(cnav.style.display == 'block'){
        cnav.style.display = 'none';
        searchbar.style.display = 'block'; 
    }
    else{
        cnav.style.display='block';
        searchbar.style.display = 'none';
    }
})


//Filter

let filtericon = document.getElementById('sidemenu');
let filter = document.getElementById('filterbar');

filtericon.addEventListener('click',()=>{
    if(filter.style.display == 'none'){
        filter.style.display = 'block';
    }
    else{
        filter.style.display = 'none';
    }
})



let alarm = document.getElementById('alarm');

function Alarm(){
    alarm.style.display = 'block';
    let ok = document.getElementById('ok');
    let dh = document.getElementById('dh');
    ok.addEventListener('click',(e)=>{
        e.preventDefault();
            alarm.style.display = 'none';
    })
    dh.addEventListener('click',(e)=>{
        e.preventDefault();
        alarm.style.display='none';
    })
    
}


//Alarm
setTimeout(Alarm,2000);


//Slayder
$('.your-class').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //Tab Menu
let buttons = document.querySelectorAll('.tab-links button');
let content = document.querySelectorAll('.tab-content div');

for(let btn of buttons){

    btn.addEventListener('click',function() {

        let active = document.querySelector('.active');

        active.classList.remove('active');
        this.classList.add('active');

        let map = this.getAttribute('data-map');

        for(let div of content){

            if(div.getAttribute('data-map') === map){
                div.classList.remove('d-none');
            }
            else{
                div.classList.add('d-none');
            }
        }
        
    })
}