$(function() {
    $('#ejemplo').on('activate.bs.scrollspy', function () {
        $(this).scrollspy('refresh');
    })
});