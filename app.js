const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validateForm() {
  const form = document.querySelector("#reg-form");
  let valid = true;
  let code = form["code"].value;
  let email = form["email"].value;
  let country = form["country"].value;

  if (!code) {
    document.querySelector(".code-wrapper.field").classList.add("invalid");
    valid = false;
  } else
    document.querySelector(".code-wrapper.field").classList.remove("invalid");

  if (!validateEmail(email)) {
    document.querySelector(".email-wrapper.field").classList.add("invalid");
    valid = false;
  } else
    document.querySelector(".email-wrapper.field").classList.remove("invalid");

  if (country == "0") {
    document
      .querySelector(".country-field-wrapper.field")
      .classList.add("invalid");
    valid = false;
  } else
    document
      .querySelector(".country-field-wrapper.field")
      .classList.remove("invalid");

  return valid;
}

document.querySelector(".menu").addEventListener("click", () => {
  if (document.querySelector(".menu").classList.contains("close")) {
    document.querySelector(".mobile-menu").classList.remove("open");
    document.querySelector(".menu").classList.remove("close");
  } else {
    document.querySelector(".mobile-menu").classList.add("open");
    document.querySelector(".menu").classList.add("close");
  }
});


document.querySelectorAll(".nav li").forEach(it=>{
  it.addEventListener("mouseenter", ()=>{
    it.classList.add("hover")
  })
  it.addEventListener("mouseleave", ()=>{
    setTimeout(()=>{
      it.classList.remove("hover")
    },100)
  })
})

