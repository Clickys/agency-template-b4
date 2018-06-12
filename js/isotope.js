var $grid = $('.work-projects').isotope({
    // options
});
// filter items on button click
$('.work-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});