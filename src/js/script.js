// settings
const select = {
  pages: '.page-wrapper',
  nav: '.nav',
  topbar: '.topbar-wrapper',
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


const app = {
  initNav: function (){
    const thisApp = this;

    thisApp.navigation = document.querySelector(select.nav);
    thisApp.topbar = document.querySelector(select.topbar);


    thisApp.navigation.addEventListener('click', function(e) {
      e.preventDefault();
      thisApp.navigation.classList.toggle(classNames.nav.active);
      thisApp.topbar.classList.toggle(classNames.topbar.active); 
    });
  },

  activePage: function(){
    const thisApp = this;

    thisApp.allPages = document.querySelectorAll(select.pages);

    console.log('thisApp.allPages: ', thisApp.allPages);
    
    for(let page of thisApp.allPages) {
      page.addEventListener('click', function(e) {
        e.preventDefault();
        page.classList.toggle(classNames.active.page); 
      });
    }
    
    
  },

  init: function () {
    const thisApp = this;

    thisApp.initNav();
  },
};

app.init();