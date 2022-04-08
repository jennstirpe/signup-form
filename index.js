const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const pwd = document.querySelector("#pwd");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(firstName.value === "" ) {
        firstName.classList.add("error");
        firstName.nextElementSibling.classList.add("show");
    }
    if(lastName.value === "" ) {
        lastName.classList.add("error");
        lastName.nextElementSibling.classList.add("show");
    }
    if(email.value === "") {
        email.classList.add("error");
        email.nextElementSibling.classList.add("show");
    } else if (!email.value.match(emailFormat)) {
        const errMsg = email.nextElementSibling.firstChild.nextSibling;
        errMsg.innerText = "Please enter a valid email address";
        email.classList.add("error");
        email.nextElementSibling.classList.add("show");
    }
    if (pwd.value === "" ) {
        pwd.classList.add("error");
        pwd.nextElementSibling.classList.add("show");
    }

})

console.log(email.nextElementSibling.firstChild.nextSibling.innerText);

firstName.addEventListener("focus", () => {
    if (firstName.classList.contains("error")) {
        firstName.classList.remove("error")
        firstName.nextElementSibling.classList.remove("show");
    }
})

lastName.addEventListener("focus", () => {
    if (lastName.classList.contains("error")) {
        lastName.classList.remove("error")
        lastName.nextElementSibling.classList.remove("show");
    }
})

email.addEventListener("focus", () => {
    if (email.classList.contains("error")) {
        email.classList.remove("error")
        email.nextElementSibling.classList.remove("show");
    }
})

pwd.addEventListener("focus", () => {
    if (pwd.classList.contains("error")) {
        pwd.classList.remove("error")
        pwd.nextElementSibling.classList.remove("show");
    }
})