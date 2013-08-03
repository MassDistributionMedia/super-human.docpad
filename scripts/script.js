(function() {
  $(function() {
    $("#hack-wiki, #hello-world_wiki, #donate-home-popover, #help-home-popover, #blog-title").popover();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 77) {
        $(".close-header").removeClass('hide').addClass('block');
      } else {
        $(".close-header").removeClass('block').addClass('hide');
      }
      if ($(this).scrollTop() === 0) {
        return $(".navbar").css("display", 'block');
      }
    });
    $('#site_info-popo, #mdm-popo').popover();
    return $(".close-header").click(function() {
      return $(".navbar").toggle();
    });
  });

}).call(this);
