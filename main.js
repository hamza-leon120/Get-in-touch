let send = document.querySelector(".button")
send.addEventListener("click", function () {
    let infos = {
        last: document.getElementById("last-name").value,
        first: document.getElementById("firsr-name").value,
        number: document.getElementById("number").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    const ServiceId = "service_efh779a"
    const templateId = "template_16upl3j"
    if (infos.last === "" || infos.first === "" || infos.number === "" || infos.email === "" || infos.message === "") {
        window.alert("you need to fill all the form before send it")
    } else if (!infos.email.includes("@gmail.com") &&
        !infos.email.includes("@yahoo.com") &&
        !infos.email.includes("@outlook.com") &&
        !infos.email.includes("@hotmail.com") &&
        !infos.email.includes("@icloud.com") &&
        !infos.email.includes("@protonmail.com") &&
        !infos.email.includes("@aol.com") &&
        !infos.email.includes("@live.com") &&
        !infos.email.includes("@mail.com") &&
        !infos.email.includes("@msn.com")) {
        window.alert("please enter a valid email address")
    }else if (infos.number[0] !== "0" || infos.number.length !== 10 || isNaN(Number(infos.number))) {
        window.alert("please enter a valid phone Number")
    } else {
        emailjs.send(ServiceId, templateId, infos).then(function () {
            document.getElementById("last-name").value = ""
            document.getElementById("firsr-name").value = ""
            document.getElementById("number").value = ""
            document.getElementById("email").value = ""
            document.getElementById("message").value = ""
        })
    }
})
