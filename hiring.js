window.onload = function () {
    document.getElementById('hiringvalidate').onclick = validate;
};

function validate() {
    let name = document.querySelector('#name');
    if (name.value == '') {
        name.nextElementSibling.innerHTML = 'name cannot be blank';
        return false;
    }
    let age = document.querySelector('#age');
    if (age.value == '') {
        age.nextElementSibling.innerHTML = 'age cannot be blank';
        return false;
    }
    
    let email = document.querySelector('#email');
    if (email.value == '') {
        email.nextElementSibling.innerHTML = 'email cannot be blank';
        return false;
    }
    
    let education = document.querySelector('#education');
    if (education.value == '') {
        education.nextElementSibling.innerHTML = 'education cannot be blank';
        return false;
    }
    let message = document.querySelector('#message');
    if (message.value == '') {
        message.nextElementSibling.innerHTML = 'message cannot be blank';
        return false;
    }

}