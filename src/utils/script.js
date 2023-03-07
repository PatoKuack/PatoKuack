const maxWithPhone = 1024;
const bodyId = document.getElementById('body'),
      toggle = document.getElementById('menu-toggle'),
      nav = document.getElementById('menu-navigator'),
      banner =  document.getElementById('banner'),
      // main =  document.getElementById('card'),
      // footer =  document.getElementById('footer'),
      profileImage = document.getElementById('banner-container-img'),
      bannerBalloon = document.getElementById('banner-balloon'),
      bannerBalloonText = document.getElementById('banner-balloon-text'),
      hardskillsConteinerIcons = document.getElementById('hardskills-content__icons'),
      techBalloonText = Array.from(document.querySelectorAll('.hardskills-tech__icon')),
      settings = document.getElementById('menu-settings'),
      settingsOptions = document.getElementById('menu-settings-options'),
      switchIdiom = document.getElementById('switch-idioms'),
      containerSwitchIdiom = document.getElementById('switch-idioms-container'),
      switchLD = document.getElementById('switch-lightdark'),
      containerSwitchLD = document.getElementById('switch-lightdark-container'),
      switchLDAnimate = document.getElementById('switch-lightdark-moonsun');



function confirmClass(element, classElement) {
  let confirmation = false;
  if(element) {
    const objClases = element.classList;
    const arrayClasses = Object.values(objClases);
    confirmation = arrayClasses.includes(classElement);
  }
  return (confirmation);
}
function resizeRemoveClass(element, classElement) {
  //Si se redimeciona la pantalla, se eliminarán las clases especificadas.
  window.addEventListener('resize', () => {
    if (visualViewport.width >= maxWithPhone) {
      element.classList.remove(classElement);
    }
  });
}
/* function removeClass(item, classItem){
  const itemClassObj = item.classList;
  const itemClassArray = Object.entries(itemClassObj);
  itemClassArray.forEach(e => {
    if(e[1] === classItem){
      item.classList.remove(classItem);
    }
  });
} */



const showMenu = () => {
  // Si existe el menú hamburguesa y el navegador, entonces...
  if (toggle && nav) {
    //Si se hace clic en el boton hamburguesa, se colocarán las clases "show" y "active".
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      toggle.classList.toggle('active');
    });
    
    resizeRemoveClass(nav, "show");
    resizeRemoveClass(toggle, "active");
  }
}
const showSettings = () => {
  // Si existe el menú de herramientas y sus opciones, entonces...
  if (settings && settingsOptions) {
    //Si se hace clic en el botón de herramientas, se colocarán las clases "show" y "active".
    settings.addEventListener('click', () => {
      settings.classList.toggle('active');
      settingsOptions.classList.toggle('show');
    });
    resizeRemoveClass(settingsOptions, "show");
    resizeRemoveClass(settings, "active");
  }
}

const showProfileImage = () => {
  if(profileImage) {
    profileImage.addEventListener('click', () => {
      profileImage.classList.toggle('imageShow');
      banner.classList.toggle('imageShow');
      /* let existShowClass = confirmClass(profileImage, "imageShow");
      if(existShowClass){
        window.addEventListener('scroll', () => {
          profileImage.classList.remove('imageShow');
          banner.classList.remove('imageShow');
        });
      } */
      resizeRemoveClass(profileImage, "imageShow");
      resizeRemoveClass(banner, "imageShow");
    });
  }
}

const showTechBalloons = () => {
  // Si existe la sección har-skills y sus iconos, entonces...
  if(hardskillsConteinerIcons && techBalloonText) {
    //se crearán sus globitos
    techBalloonText.map(setBalloon => {
      let techDescription = document.createElement('div');
      techDescription.classList.add('balloon-description');
      getChildrenAlt = setBalloon.children[0].alt;
      techDescription.textContent = `${getChildrenAlt}`;
      setBalloon.insertBefore(techDescription, setBalloon.children[0]);
    });
  
    //Si se hace clic en la sección hard-skills, se colocarán las clases "show" en cada icono de la sección.
    hardskillsConteinerIcons.addEventListener('click', () => {
      techBalloonText.map(showBalloon => {
        showBalloon.classList.toggle('show');
      });
    });
  }
}

const removeGreatBalloon = () => {
  // window.addEventListener('load', () => {
  //   bannerBalloon.classList.add("showgreat");
  //   bannerBalloonText.classList.add("showgreat");
    bannerBalloonText.addEventListener('animationend', () => {
      bannerBalloon.classList.remove("showgreat");
      bannerBalloonText.classList.remove("showgreat");
    });
  // });
}

const changeIdiom = () => {
  let textSpanish = Array.from(document.querySelectorAll('.text-spanish'));
  let textEnglish = Array.from(document.querySelectorAll('.text-english'));
  
  /* Guardando el tema en el navegador del usuario */
  let savingPreferenceIdiom = localStorage.getItem('language');
  let languagePref;

  //cuando se acabe de cargar la ventana...
  window.addEventListener('load', () => {
    //si el item "language" del localStorage  es "spanish", entonces...
    if(savingPreferenceIdiom === 'spanish'){
      //el switch tendrá el valor false y aparecerán los textos en ingles y se ocultarán los de español.
      switchIdiom.checked = false;
      textSpanish.map(changeDisplayEn => changeDisplayEn.style.display = "inherit");
      textEnglish.map(changeDisplayEs => changeDisplayEs.style.display = "none");
    //si el item "language" del localStorage  es "english", entonces...
    }else if(savingPreferenceIdiom === 'english'){
      //el switch tendrá el valor true y aparecerán los textos en español y se ocultarán los de ingles.
      switchIdiom.checked = true;
      textSpanish.map(changeDisplayEn => changeDisplayEn.style.display = "none");
      textEnglish.map(changeDisplayEs => changeDisplayEs.style.display = "inherit");
    }
  });
  
  /* --------------------------------------------- */

  //cuando el switch cambie de valor, entonces...
  switchIdiom.addEventListener('change', () => {
    //si el valor del switch es falso, aparecerán los textos en ingles y se ocultarán los de español.
    if(switchIdiom.checked == false){
      textSpanish.map(changeDisplayEn => changeDisplayEn.style.display = "inherit");
      textEnglish.map(changeDisplayEs => changeDisplayEs.style.display = "none");
      /* Guardando el tema en el navegador del usuario */
      languagePref = 'spanish';
      /* --------------------------------------------- */
    //si el valor del switch es verdadero, aparecerán los textos en español y se ocultarán los de ingles.
    }else{
      textSpanish.map(changeDisplayEn => changeDisplayEn.style.display = "none");
      textEnglish.map(changeDisplayEs => changeDisplayEs.style.display = "inherit");
      /* Guardando el tema en el navegador del usuario */
      languagePref = 'english';
      /* --------------------------------------------- */
    }
    
      /* Guardando el tema en el navegador del usuario */
      localStorage.setItem('language', languagePref);
      /* --------------------------------------------- */
  });
}

const lightDarkScheme = () => {
  window.addEventListener('load', () => {
    
    if((getComputedStyle(bodyId).color == "rgb(240, 248, 255)") || (getComputedStyle(bodyId).color == "#f0f8ff")){
      switchLD.checked = false;
    }else{
      switchLD.checked = true;
    }

  });
  
  containerSwitchLD.addEventListener('click', () => {
    let className3 = switchLDAnimate.classList[1];
    let classNumber3 = switchLDAnimate.classList.length;
    const schemeState = window.matchMedia("(prefers-color-scheme)").matches;
    if(classNumber3==2 && className3=="scaling"){
        switchLDAnimate.classList.remove('scaling');
    }
    switchLDAnimate.classList.add('scaling');
    switchLDAnimate.addEventListener('animationend', () => {
      switchLDAnimate.classList.remove('scaling');
    });
  });

  /* Guardando el tema en el navegador del usuario */
  let savingPreferenceTheme = localStorage.getItem('theme');
  let themePref;

  if(savingPreferenceTheme === 'dark'){
    bodyId.classList.toggle('dark-theme');
  }else if(savingPreferenceTheme === 'light'){
    bodyId.classList.toggle('light-theme');
  }
  /* --------------------------------------------- */

  switchLD.addEventListener('change', () => {
    if(switchLD.checked == true){
      // if(schemeState){
        bodyId.classList.add('light-theme');
      // }else{
        bodyId.classList.remove('dark-theme');
      // }
      /* Guardando el tema en el navegador del usuario */
      themePref = 'light';
      /* --------------------------------------------- */
    }else{
      // if(schemeState){
        bodyId.classList.add('dark-theme');
      // }else{
        bodyId.classList.remove('light-theme');
      // }
      /* Guardando el tema en el navegador del usuario */
      themePref = 'dark';
      /* --------------------------------------------- */
    }
    /* Guardando el tema en el navegador del usuario */
    localStorage.setItem('theme', themePref);
    /* --------------------------------------------- */
  });
}

const removeClassesClickOut = () => {
  if (toggle && nav && settings && settingsOptions && profileImage && hardskillsConteinerIcons && techBalloonText) {
    //Si se da clic fuera del menú, se eliminará la clase "show" y "active".
    bodyId.addEventListener('click', (event) => {
      let existShowNav = confirmClass(nav, "show");
      if(existShowNav){
        //si el clic no es en el elemeto nav o toggle y tampoco es en algún elemento que tenga como padre nav o toggle, entonces...
        if(event.target!==nav && event.target.offsetParent!==nav && event.target!==toggle && event.target.offsetParent!==toggle) {
          nav.classList.remove('show');
          toggle.classList.remove('active');
        }
      }

      let existShowSett = confirmClass(settingsOptions, "show");
      if(existShowSett){
        //si el clic no es en el elemeto settings u options y tampoco es en algún elemento que tenga como padre settings u options, entonces...
        if(
          event.target!==settingsOptions && 
          event.target.offsetParent!==settingsOptions && 
          event.target!==settings &&
          event.target.offsetParent!==containerSwitchIdiom &&
          event.target.offsetParent!==switchIdiom &&
          event.target.offsetParent!==containerSwitchLD
        ) {
          settingsOptions.classList.remove('show');
          settings.classList.remove('active');
        }
      }

      let existShowImg = confirmClass(profileImage, "imageShow");
      if(existShowImg){
        //si el clic no es en el elemeto settings u options y tampoco es en algún elemento que tenga como padre settings u options, entonces...
        if(event.target!==profileImage && event.target.offsetParent!==profileImage && event.target!==banner && event.target.offsetParent!==banner) {
          profileImage.classList.remove('imageShow');
          banner.classList.remove('imageShow');
        }
      }

      //si el clic no es en la sección hard-skills y tampoco es en algún elemento que tenga como padre hard-skills, entonces...
      if(event.target!==hardskillsConteinerIcons && event.target.offsetParent!==hardskillsConteinerIcons) {
        techBalloonText.map(showBalloon => {
          showBalloon.classList.remove('show');
        });
      }
    });
  }
}



showMenu();
showSettings();
showProfileImage();
removeGreatBalloon();
showTechBalloons();
changeIdiom();
lightDarkScheme();

removeClassesClickOut();