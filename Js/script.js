$(document).ready(function() {
    $('#MobileBtn').on('click', function () {
        $('#MobileMenu').toggleClass('active');
        $('#MobileBtn').find('i').toggleClass('fa-x');
    });
});