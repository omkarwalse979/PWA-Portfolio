import { modeBtn, shareBtn } from "./constants.js"

modeBtn.addEventListener("click", () => {
    const h = document.querySelector("html")

    if (h.hasAttribute("data-bs-theme"))
    {
      h.removeAttribute("data-bs-theme")
      modeBtn.innerHTML = `<i class="bi bi-brightness-high"></i>`
      modeBtn.classList.remove("btn-dark")     
      modeBtn.classList.add("btn-light")
      document.getElementById("txt-color").classList.add("text-light")
    }
    else
    {
      h.setAttribute("data-bs-theme", "dark")
      modeBtn.innerHTML = `<i class="bi bi-moon-stars"></i>`
      modeBtn.classList.remove("btn-light")     
      modeBtn.classList.add("btn-dark")
      document.getElementById("txt-color").classList.add("text-light")
    }
})

shareBtn.addEventListener("click", () =>
{
  if(navigator.share)
  {
    navigator.share
    ({
      title: "Awesome PWA Camera App",
      text: "Switch, Capture, Share Moments",
      url: "https://omkarwalse979.github.io/pwa-camera/"
    })
  }
})