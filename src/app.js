//import js classes
import ClassToggle from "./js/classToggle.js";

//import styles
import "./scss/index.scss";

window.onload = e => {

  //DOm Elements Variables
  const MenuButton = document.querySelector(".menu__button");
  const ThemeSelector = document.querySelector("#theme-selection");
  const Body = document.querySelector("body");

  //Required Variables
  const MenuButtonToggle = new ClassToggle(".menu__button", "menu__button--open", false);
  const MenuToggle = new ClassToggle(".menu", "menu--open", false);
  const TransitionToggle = new ClassToggle("body",".body-theme-transition");

  //derived variables and state variables
  const MY_THEMES = Body.getAttribute("data-theme-list").split(",");
  let __current_theme = ThemeSelector.value;

  console.log(Body.getAttribute("data-theme"));

  //event Handlers
  MenuButton.addEventListener("click", e => {
    MenuButtonToggle.swap();
    MenuToggle.swap();
  })

  ThemeSelector.addEventListener("change", e => {
    let clearTransitionClass
    //get newly selected theme
    __current_theme = ThemeSelector.value;
    //add transition class clear any existing timeout
    clearInterval(clearTransitionClass);
    TransitionToggle.swap();

    //set new theme to data-theme attribute
    console.log(Body.getAttribute("data-theme"));
    Body.setAttribute("data-theme", __current_theme);

    //remove transition class after delay
    clearTransitionClass = setTimeout(
      TransitionToggle.swap(),
      500
    )
  })

}