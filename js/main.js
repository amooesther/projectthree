// Add an event listener to the button
const button = document.querySelector('.btn');
button.addEventListener('click', toggleDropdown);

// Toggle the dropdown menu visibility
function toggleDropdown() {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.classList.toggle('show');
}

// Hide the dropdown menu when clicking outside
window.addEventListener('click', function(event) {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  if (!event.target.matches('.btn')) {
    dropdownMenu.classList.remove('show');
  }
});

/*first slider*/
$(".slider-one").not('.slick-initialized').slick({
  autoplay:true,
  autoplaySpeed:1000,
  dots:true,
  prevArrow: '.site-slider .slider-btn .prev',
  nextArrow: '.site-slider .slider-btn .next'
});


/*second slider */
$(".slider-two").not('.slick-initialized').slick({
 
  prevArrow: '.site-slider-two .prev',
  nextArrow: '.site-slider-two .next',
  slidesToShow:5,
  slidesToScroll:1,
  autoplaySpeed:1000,
});
