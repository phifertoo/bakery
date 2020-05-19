//toggles the open class to the hamburger-menu class

//shorthand for jquery $(document).ready() which calls the function when the page loads

$(function () {
  $(".hamburger-menu").on("click", function () {
    $(".toggle").toggleClass("open");
    $(".nav-list").toggleClass("open");
  });
  AOS.init({
    easing: "ease",
    duration: 1000,
  });
});
