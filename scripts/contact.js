let form = document.getElementById('contactUs'),
    firstName = document.getElementById('name'),
    errorName = document.getElementById('errorName');
    errorMail = document.getElementById('errorMail');
    errorPhone = document.getElementById('errorPhone')

    function check(event) {
        event.preventDefault();
        let namepattern = /^[a-zA-Z]{2,30}$/;
        if (firstName.value === '' || !firstName.value.length) {
            errorName.innerText = 'Please enter your name!';
            errorName.style.color = "#FF0000"
        }
        else if (!namepattern.test(firstName.value)) {
            errorName.innerText = 'Please enter name with letters only!';
            errorName.style.color = "#FF0000"
        }
        else {
            errorName.innerText = '';
        }
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let inputEmail = document.getElementById("email")
        if(!(inputEmail.value.match(mailformat))){
            errorMail.innerText = 'Please enter a valid Email ID!';
            errorMail.style.color = "#FF0000"
        }
        else {
            errorMail.innerText = '';
        }
        let phonenoFormat = /^\d{10}$/;
        let inputPhone = document.getElementById("phone")
        if(!(inputPhone.value.match(phonenoFormat))) {
            errorPhone.innerText = 'Please enter a valid Phone No.'
            errorPhone.style.color = "#FF0000"
        }
        else {
            errorPhone.innerText = '';
        }
        if (
            firstName.value.length > 2 &&
            namepattern.test(firstName.value) &&
            inputEmail.value.match(mailformat) &&
            inputPhone.value.match(phonenoFormat)
        ) {
            window.location.href="contactSuccess.html"
        }
    }
    
    form.addEventListener('submit', check);
