// script.js

const selectCountry = document.getElementById('country');

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            const option = document.createElement('option');
            option.text = country.name.common;
            option.value = country.name.common;
            selectCountry.add(option);
        });
    })
    .catch(error => {
        console.error('Error fetching country data:', error);
    });

function checkOnlyOne(checkbox) {
    var checkboxes = document.getElementsByName('gender');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
