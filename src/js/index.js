/* Here goes your JS code */

const handleInitialLoad = event => {
  const showPopupBtn = document.querySelector("button#show-popup-form")
  showPopupBtn.addEventListener("click", togglePopupForm, false)
  const hidePopupBtn = document.querySelector("button#hide-popup-form")
  hidePopupBtn.addEventListener("click", togglePopupForm, false)
}

const togglePopupForm  = event => {
  const popup = document.querySelector("div.popup")
  popup.classList.toggle("popup-hidden")
}

window.addEventListener("DOMContentLoaded", handleInitialLoad)