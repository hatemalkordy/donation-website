const mobileToggle = document.querySelector('#mobile-toggle');
const links = document.querySelector('.links');
const listOfLinks = document.querySelectorAll('.links li');

mobileToggle.addEventListener('click', function() {
    if(mobileToggle.classList.contains('active')) { 
        mobileToggle.classList.remove('active');
        links.classList.remove('active');
    } else {
        mobileToggle.classList.add('active');
        links.classList.add('active');
    }
});

listOfLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        listOfLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});