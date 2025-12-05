/*Funcion para navegacion eentre paginas*/
/*function navigateTo(pageId) {
    /*Ocultar las secciones*/
   /* const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    /*Mostrar la seccion seleccionada*/
    /*const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);  /*Ir arriba*/
  /*  }
/*}

/*Funcion Menu movil*/
/*function toogleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

/*Logica carrusel automatico*/
/*let currentSlide = 0 ;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function moveCarousel(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length)
        currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
}

/*Autoplay del carrusel cada 5 segundos */
/*setInterval(() => {
    moveCarousel(1);
}, 5000);

/*Logica tabs fornmulario (registro/login*/
/*function toggleForm(type) {
    const formRegistro = document.getElementById('form-registro');
    const formLogin = document.getElementById('form-login');
    const tabRegistro = document.getElementById('tab-registro');
    const tabLogin = document.getElementById('tab-login');
    
    if (type === 'registro') {
        formRegistro.classList.remove('hidden');
        formLogin.classList.add('hidden');

        tabRegistro.classList.add('text-pink-600' , 'border-b-2' , 'border-pink-600');

        tabRegistro.classList.remove('text-gray-500');

        tabLogin.classList.remove('text-pink-600', 'border-b-2', 'border-pink-600');

        tabLogin.classList.add('text-gray-500');
    } else {
        formRegistro.classList.add('hidden');
        formLogin.classList.remove('hidden');

        tabLogin.classList.add('text-pink-600', 'border-b-2', 'border-pink-600');
        tabLogin.classList.remove('text-gray-500');
         
        tabRegistro.classList.remove('text-pink-600', 'border-b-2', 'border-pink-600');
        tabRegistro.classList.add('text-gray-500');
    }
}*/
document.addEventListener('DOMContentLoaded', ()=> {
    /*LOGICA DEL MENU MOVIL*/
    /*const btnMenu = document.querySelector('button[onclick="toggleMobileMenu()"]');*/
    const btnMenu = document.querySelector('.fa-bars').parentElement;
    const mobileMenu = document.getElementById('mobile-menu');

    if(btnMenu && mobileMenu) {
        btnMenu.removeAttribute('onclick');
        btnMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    //logica del carrusel
    //const slides = document.querySelectorAll('.carousel-item');
    //if (slides.length > 0){
      //  let currentSlide = 0;
        //const prevBtn = document.getElementById('prevBtn');
      //  const nextBtn = document.getElementById('nextBtn');
       // let autoPlayInterval;

        //function showSlide(index) {

          //  slides.forEach(slide => {
            //    slide.classList.remove('active');
              //  slide.computedStyleMap.display = 'none';
            //});

            //slides[index].classList.add('active');
            //slides[index].style.display = 'block';
        //}
        /*function moveCarousel(direction) {
            currentSlide += direction;
            if (currentSlide <= slides.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = slides.length - 1;
            showSlide(currentSlide);
        }

        /*Funcion para reiniciar el reloj automatico si el usuario toca un boton */
       /* function resetTimer() {
            clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(() => moveCarousel(1), 4000);
        }

        //Inicializacion
        showSlide(0);
        autoPlayInterval = setInterval(() => moveCarousel(1), 4000);
        
        //event listener para botones
        //if (prevBtn) prevBtn.addEventListener('click', () => moveCarousel(-1));
        //if (nextBtn) nextBtn.addEventListener('click', () => moveCarousel(1));
        //if (prevBtn) {
          //  prevBtn.addEventListener('click', (e) => {
            //    e.preventDefault();
              //  moveCarousel(-1);
                //resetTimer();
         //   });
        //}

         //if (nextBtn) {
           // nextBtn.addEventListener('click', (e) => {
             //   e.preventDefault();
               // moveCarousel(1);
                //resetTimer();
            //});
        //}

        //autoplay cada 4 segundos
       // setInterval(() => {
         //   moveCarousel(1);
        //}, 4000);
    }*/

        //logica tabs solo en contacto
        const tabRegistro = document.getElementById('tab-registro');
        if (tabRegistro) {
            const tabLogin = document.getElementById('tab-login');
            const formRegistro = document.getElementById('form-registro');
            const formLogin = document.getElementById('form-login');

            tabRegistro.addEventListener('click', () => {
                formRegistro.classList.remove('hidden');
                formLogin.classList.add('hidden');

                tabRegistro.classList.add('text-pink-600', 'border-b-2', 'border-pink-600');
                tabRegistro.classList.remove('text-gray-500');

                tabLogin.classList.remove('text-pink-600', 'border-b-2', 'border-pink-600');
                tabLogin.classList.add('text-gray-500');
            });

            tabLogin.addEventListener('click', () => {
                formRegistro.classList.add('hidden');
                formLogin.classList.remove('hidden');

                tabLogin.classList.add('text-pink-600', 'border-b-2', 'border-pink-600');
                tabLogin.classList.remove('text-gray-500');
                
                tabRegistro.classList.remove('text-pink-600', 'border-b-2', 'border-pink-600');
                tabRegistro.classList.add('text-gray-500');
            });
        }

});
