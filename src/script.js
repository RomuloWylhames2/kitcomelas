// CARROSSEL IRÁ MUDAR DE IMAGENS
$(document).ready(() => {
    // MENU
    $(".navbar__menu-btn").on("click", function () {
        $(".navbar__links").toggleClass("active");
        $(this).find("i").toggleClass("fa-bars");
        $(this).find("i").toggleClass("fa-times");
    });


    // CAROUSEL
    const slickOptions = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>;'
    }
    $('.slider').slick(slickOptions);

    // AQUI AQUI RECEBE OS EMAILS DAS PESSOAS INTERESSADAS
    $('.footer__form-button').on('click', () => {
        const email = $('#email').valueOf();
        Email.send({
            Host : "smtp.yourisp.com", // AQUI O CORRETO SERIA CRIAR NO SERVIDOR!
            Username : "username",    // AQUI O CORRETO SERIA CRIAR NO SERVIDOR!
            Password : "password",   // AQUI O CORRETO SERIA CRIAR NO SERVIDOR!
            To : 'kitcomelas.vera@yahoo.com',
            From : email,
            Subject : "Por favor me fale mais sobre kit com elas",
            Body : `Olá, gostaria de mais informações sobre vocês. 
            Meu email é ${email}.
            
            Obrigado!
            `,
        }).then(
          message => alert(message)
        );
    });
  });



// AQUI ALTERA A COR DO CABEÇALHO / Navbar NA ROLAGEM
const nav = document.querySelector('.navbar');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 50){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active');
    }
}

// GALERYA

const gM = document.querySelector(".galeria-modal");
const iGM = document.querySelector(".galeria-modal img");

function fecharGaleria(){
    gM.style.visibility = "hidden";
    iGM.style.transform = "scale(0)";
}

function abrirGaleria(src){
    gM.style.visibility = "visible";
    iGM.style.transform = "scale(1)";
    iGM.src = src
}