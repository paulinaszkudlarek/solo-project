// settings
const select = {
  hamburger: 'hamburger',
  pages: '.page',
  pagesWrappers: '.page-wrapper',
  nav: '.nav',
  topbar: '.topbar-wrapper',
  navLinks: '.nav-link',
  modalCloseBtn: '.js--close-modal',
  profile: '.profile',
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
  },
  modal: {
    show: 'show',
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

    //function closeModal is written acc to Kodilla's instruction
    
    function closeModal () {
      document.getElementById('overlay').classList.remove(classNames.modal.show);
    }

    const closeByBtn = document.querySelectorAll(select.modalCloseBtn).forEach(function(btn) {
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

  //openModal function is written by myself; in a different way;
  openModal (modal) {
    const modals = document.querySelectorAll('#overlay > *');

    for(let item of modals) {
      item.classList.remove(classNames.modal.show);
    }

    const openOverlay = document.querySelector('#overlay').classList.add(classNames.modal.show);
    const showModal = document.querySelector(modal).classList.add(classNames.modal.show);
    
    openOverlay;
    showModal;
  },
  
  initLogIn: function () {
    const thisApp = this;

    const btnProfile = document.querySelector(select.profile);
    
    btnProfile.addEventListener('click', function (event) {
      event.preventDefault();
      thisApp.openModal('#loginModal');
    });
  },

  init: function () {
    const thisApp = this;

    thisApp.initNav();
    thisApp.activeModal();
    thisApp.initLogIn();
  },
};

app.init();