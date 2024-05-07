jQuery(document).ready(function($) {
  // Header toggle
  $('.header__toggle').click(function(){
      $(this).find('i').toggleClass('fa-times');
    	$(this).next().toggleClass('active');
  });

  // Interactive hero map
  $('.hero__map-dots > div').click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
  });

  // Tabs
  $('.tabs__content > div > div').hide();
  $('.tabs__content > div > div:first').show();
  $('.tabs__nav li:first').addClass('active');
  
  $('.tabs__nav li').click(function(e) {
    // Define var
    var selectTab = $(this).find('a').attr("href");

    // Prevent default behavious
    e.preventDefault();
    $('.tabs__nav li').removeClass('active');
    $(this).addClass('active');
    $('.tabs__content > div > div').hide();

    $(selectTab).fadeIn();
  });

  // Accordion
  $('.accordion__toggle').click(function(){
    if ($(this).next().is(":visible")){
      $(this).next().hide('slow');
    }
    else{
      $('.accordion__content').hide('slow');
      $(this).next().show('slow');
    }
  });
});