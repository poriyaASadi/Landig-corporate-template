const $ = document ;
let main = $.querySelector('.main')
// ========================
// let header
let toggle_icon = $.querySelector('.header-toggle-icon') ; 
let x = false ;
let header = $.querySelector('.header') ;
let ul_header_item = $.querySelector('.ul-header-item') ;
// ==================================
const item_box = $.querySelectorAll('.item-box-result');
const img = $.querySelector('.imges-box')
let Result = $.querySelector('.Result')
const box_result = $.querySelector('.box-result')
// ========================
// let video
let box_home = $.querySelector('.box-home');
let video = $.querySelector('video')
// =======================
const item_skils = $.querySelectorAll('.item-skils');
const content_text_skils = $.querySelectorAll('.content-text-skils')
// ====================
const money = $.querySelector('.money');
// ==============================\
const menuItem = $.querySelectorAll('.a-item-header');
const sectionMain = $.querySelectorAll(".main > section");

//  const for window custom
let input_reng = $.querySelector('.input-custom-reng');
let custom_sit = $.querySelector('.custom-sit');
let icon_form = $.querySelector('.icon_form')
let home_text_h1 = $.querySelector('.home-text-h1')
// header ==========<

//  scrol top 
const scroll_top = $.querySelector('.scroll_top');



// function 
toggle_icon.addEventListener('click' , function () {

   // toggle_icon.classList.toggle('header-toggle-icon-active')
    if(x){
       // ul_header_item.style.display = 'none'
        ul_header_item.style.top = '-25rem'
        main.style.filter = 'blur(0px)'
        toggle_icon.classList.remove('header-toggle-icon-active')
        x = false
    }else{
       // ul_header_item.style.display = 'flex'
        ul_header_item.style.top = '1rem'
        main.style.filter = 'blur(5px)'
        toggle_icon.classList.add('header-toggle-icon-active');
        x = true
    }
})
$.addEventListener('scroll' , function () {
    const x = document.documentElement.scrollTop
    if (x > 0) {
        header.style.boxShadow = '0px 3px 25px -11px #f17187'
    } else {
        header.style.boxShadow = 'none'
    }
})



// -------------------------------------------------------

//  video ======<
video.duration = 2

box_home.addEventListener('click' , function () {
   const dialog = $.getElementById('video-dialog');
   dialog.showModal();
   $.body.style.overflow = 'hidden';
})

$.getElementById('video-dialog').addEventListener('click' , 
function (event) {
  if (event.target.nodeName === 'DIALOG') {
    event.target.close();
    $.body.style.overflow = 'auto';
  }
})

// --------------------------------------------------------


// body   load 

let load = $.querySelector('.loader');
window.addEventListener('load' , function () {
  load.classList.add('hid')
})


//---------------------------------------------------------

box_result.style.opacity = '0'

// console.log(Result.offsetTop); // 1518

window.addEventListener('scroll' , function () {
  
    let x = Result.offsetTop
    
    if (window.scrollY >= x - 500){
        box_result.style.opacity = '1'
    }if (window.scrollY <= x - 500 ){
        box_result.style.opacity = '0'
    }
    
})

// -----------------------------------------------------------

let img_src = [
     './img/tab1.svg',
     './img/tab2.svg',
     './img/tab3.svg'   
]
//console.log(img.attributes.src);
//console.log(img.src);
item_box.forEach(function (x , index) {
  x.addEventListener('click' , function () {
    removeActiceClass('active-box');
    this.classList.add('active-box');
   img.src = img_src[index]

})
})

// ----------

function removeActiceClass (className) {
    document.querySelector(`.${className}`).classList.remove(className);
  }
// ---------------------------------------------------------

item_skils.forEach(function (item) {
  item.addEventListener('click' , function () {
    // document.querySelector('.active-li-skils').classList.remove('active-li-skils');
    // document.querySelector('.active-content-skils').classList.remove('active-content-skils');
    removeActiceClass('active-li-skils');
    removeActiceClass('active-content-skils');
    this.classList.add('active-li-skils');
    let num_1 = this.getAttribute('li-skils');
    console.log(num_1);
    $.querySelector(num_1).classList.add('active-content-skils')
  })
})

// =---------------------------------------------------------

// =------------------------------------------------------------

window.addEventListener('scroll' , function () {

 let moneyOffsetTop = money.offsetTop
 
 if (this.window.scrollY >= moneyOffsetTop - 500){
 let rowMoney = document.querySelector('.row-money');

 rowMoney.style.opacity = '1'
 rowMoney.style.top = '0'
 }
})
// =========================================================

// custom window

input_reng.addEventListener('change' , function (event) {
  let value_input_cheng = event.target.value
  
 // console.log(value_input_cheng);
  main.style.filter = 'brightness(' + event.target.value + '%)'
})


 let index_custom = true

icon_form.addEventListener('click' , function () {
if (index_custom) {
  custom_sit.style.left = '0';
  index_custom = false;
}else{
  custom_sit.style.cssText = 'left:-16.1rem';
  index_custom = true;
}
})

setInterval(function () {
  $.querySelector('.alert-usear').style.cssText = 'animation: anime 5s 1;'
} ,3000);


// ------------------- 
const input_email = $.querySelector('.input_email')
const input_form = $.querySelector('.input_form');
const btn_form = $.querySelector('.btn_form');
const form_submit = $.querySelector('form');
const input_form_password = $.querySelector('.input_form_password');
const label_password = $.querySelector('.label_password')

let global_var = false  
let regex_elm = /^([\w_.])+@\w{5}\.\w{2,3}$/g



input_form.addEventListener('keyup' , function (event) {
  this.style.borderColor = 'red'

  let num_form_elm = input_form.value  
                                                  
   let regex_if =  num_form_elm.replace(regex_elm , () => {
      input_form.style.borderColor = '#5966d6'
      global_var = true 
    console.log(global_var);
  })
})

input_form_password.addEventListener('keyup' , function (event) {
  if (event.target.value.length > 8){
    event.target.value = event.target.value.slice(0,8);
    label_password.innerHTML = 'تایید شد'
  }else if (event.target.value.length === 8) {
    label_password.innerHTML = 'تایید شد'
    input_form_password.style.borderColor = '#5966d6'
    global_var = true
  }
  else{
    label_password.innerHTML = 'پسورد باید 8 رقم باشد'
    global_var = false
  }
})

btn_form.addEventListener('click' , function (event) {
  if (global_var) {
    form_submit.addEventListener('submit' , function () {
      window.open("../usear_login.html");
    })
  }else{
    event.preventDefault()
    console.log('heloo');
  }
})

scroll_top.addEventListener('click' , function () {
 window.scrollTo({
  top: 0,
  behavior: 'smooth'
 })
})
// ---------------------
const obserwer = new IntersectionObserver(observerHandler,{
  threshold : 0.5
});

function observerHandler (all_section) {
  //console.log(all_section);
  all_section.map(section => {

    if (section.isIntersecting){
     // console.log(section);
      let sectionClassName = section.target;
      console.log(sectionClassName);
     let menuSectionItem = $.querySelector(`.a-item-header[get-item-header=${sectionClassName}]`);
     console.log(menuSectionItem);
    //  if (section.isIntersecting) {
    //      menuSectionItem.classList.add("active--menu--item");
    //  }else{
    //   menuSectionItem.classList.remove("active--menu--item");
    //  }
    } 

  })
}


sectionMain.forEach(function (section) {
  obserwer.observe(section);
});

menuItem.forEach(function (item) {
 item.addEventListener('click' ,function (event) {
    event.preventDefault();
    removeActiceClass('active--menu--item');
    item.classList.add("active--menu--item");

    let sectionClass_1 = item.getAttribute("get-item-header");
    let sectionOffset = document.querySelector(`${sectionClass_1}`).offsetTop
    console.log(sectionOffset);
    window.scrollTo({
      top: sectionOffset - 120 , 
      behavior: "smooth"
    });
 });
});
