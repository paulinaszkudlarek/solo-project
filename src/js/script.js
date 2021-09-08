// settings
const select = {
  nav: '.nav',
  topbar: '.topbar-wrapper',
};

const classNames = {
  nav: {
    active: 'nav-active',
  },
  topbar: {
    active:'topbar-active',
  }
};


const app = {
  initNav: function (){
    const thisApp = this;

    thisApp.navigation = document.querySelector(select.nav);
    thisApp.topbar = document.querySelector(select.topbar);


    thisApp.navigation.addEventListener('click', function() {
      thisApp.navigation.classList.toggle(classNames.nav.active);
      thisApp.topbar.classList.toggle(classNames.topbar.active);
      

    });
  },

  init: function () {
    const thisApp = this;

    thisApp.initNav();
  },
};

app.init();