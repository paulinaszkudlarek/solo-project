// settings
const select = {
  nav: '.nav',
};

const classNames = {
  nav: {
    active: 'nav-active',
  },
};


const app = {
  initNav: function (){
    const thisApp = this;

    thisApp.navigation = document.querySelector(select.nav);
    console.log(thisApp.navigation);

    thisApp.navigation.addEventListener('click', function() {
      thisApp.navigation.classList.toggle(classNames.nav.active);  
    });
  },

  init: function () {
    const thisApp = this;

    thisApp.initNav();
  },
};

app.init();