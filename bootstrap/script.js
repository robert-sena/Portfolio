class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this); 
  }

  animateLinks() {
    this.navLinks.forEach((link) => {
      //Verifica se em cada link ele possui a propriedade animation na DOM
      //Se existe, esvazia. Se não existe, adiciona.
      link.style.animation ? (link.style.animation = "") : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s') 

    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if(this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav",
  ".nav li",
  
);
mobileNavbar.init();

// Carrosel das skills

new Swiper('.swiper', {
loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// Efeito das vagas

const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-header');
        body.classList.toggle('active');
    })
})

// Cria uma função e por ela inicializa a biblioteca EmailJS usando o ID da conta 
(function() {
  emailjs.init("hgT1o6ZXwh-lZ6VZW"); //
})();

window.onload = function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); //Previne o recarregamento da página

    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      title: document.getElementById("title").value
    };

    emailjs.send("service_m1tx2ps", "template_ftn9fia", templateParams)
    .then(function(response) {
      alert("E-mail enviado com sucesso!");
      console.log("Sucesso!", response);
    }, function(error) {
      alert("Falha no envio do e-mail. Olhe a console para mais detalhes.");
      console.error("Erro...", error);
    });
  });
};