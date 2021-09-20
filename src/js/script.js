// settings
const select = {
  hamburger: 'hamburger',
  pages: '.page',
  pagesWrappers: '.page-wrapper',
  nav: '.nav',
  topbar: '.topbar-wrapper',
  navLinks: '.nav-link',
};

const classNames = {
  active: {
    page: 'active-page',
  },
  nav: {
    active: 'nav-active',
  },
  topbar: {
    active:'topbar-active',
  }
};

document.querySelector('form').addEventListener('submit', function(event) {
  let isFormValidate = true;

  const emailAddressInput = event.target.querySelector('input[name="email"]'); 

  if(emailAddressInput.value.indexOf('@') < 0) {
    isFormValidate = false;
    emailAddressInput.parentElement.querySelector('.error').innerHTML = 'Błędny adres e-mail';
  }

  return !isFormValidate ? event.preventDefault() : true;
});



const app = {
  initNav: function (){
    const thisApp = this;

    thisApp.dom = [];
    thisApp.dom.navigation = document.querySelector(select.nav);
    thisApp.dom.topbar = document.querySelector(select.topbar);

    const hamburger = document.getElementById(select.hamburger);
    console.log(hamburger);

    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      thisApp.dom.navigation.classList.toggle(classNames.nav.active);
      thisApp.dom.topbar.classList.toggle(classNames.topbar.active); 
    });
  },

  // activePage: function(){
  //   const thisApp = this;

  //   thisApp.allPages = document.querySelectorAll(select.pages);
  //   thisApp.navLinks = document.querySelectorAll(select.navLinks);
  //   thisApp.pagesWrappers = document.querySelectorAll(select.pagesWrappers);

  //   console.log('thisApp.navLinks: ', thisApp.navLinks);

  //   for(let link of thisApp.navLinks) {
  //     link.addEventListener('click', function(e) {
  //       e.preventDefault();
  //       console.log('e: ', e);

  //       const linkId = e.target.id; nie mogę namierzyć id klikniętego linku, jeśli kliknę w ikonę lub napis to nie wyłapuje id 
  //       console.log('linkId: ', linkId);

  //     });
  //   }
    
    
  // },

  activeModal: function () {

    function closeModal () {
      document.getElementById('overlay').classList.remove('show');
    }

    const closeByBtn = document.querySelectorAll('.js--close-modal').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
      });
    });

    const closeByOverlay = document.querySelector('#overlay').addEventListener('click', function(e) {
      if(e.target === this) {
        closeModal();
      }
    });

    const closeByEsc = document.addEventListener('keyup', function(e) {
      if(e.keyCode === 27) {
        closeModal();
      }
    });
 
    closeByBtn;
    closeByOverlay;
    closeByEsc;
  }, 

  init: function () {
    const thisApp = this;

    thisApp.initNav();
    thisApp.activeModal();
  },
};

app.init();