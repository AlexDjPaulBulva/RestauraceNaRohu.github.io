const header = document.querySelector("header");




window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr= ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
});

sr.reveal ('.home-text',{delay:300});
sr.reveal ('.home-img',{delay: 400});
sr.reveal ('.container',{delay: 400});

sr.reveal ('.about-img',{});
sr.reveal ('about-text',{delay:300});

sr.reveal ('.middle-text',{});
sr.reveal ('.row-btn,.menu',{delay:300});

sr.reveal ('.review-content,.contact');




const accordionItemHeaders = document.querySelectorAll(".faq-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
     
    
     const currentlyActiveAccordionItemHeader = document.querySelector(".faq-item-header.active");
     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
       currentlyActiveAccordionItemHeader.classList.toggle("active");
       currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
     }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});