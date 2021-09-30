$(function() {

    // items to show
    var increment = 3;
  
    var startFilter = 0;
    var endFilter = increment;
  
    // item selector
    var $this = $('.box_item');
  
    var elementLength = $this.find('div').length;
    $('.listLength').text(elementLength);
  
    // show/hide the Load More button
    if (elementLength > 2) {
      $('.buttonToogle').show();
    }
  
    $('.box_item .box_items').slice(startFilter, endFilter).addClass('shown');
    $('.shownLength').text(endFilter);
    $('.box_item .box_items').not('.shown').hide();
    $('.buttonToogle .showMore').on('click', function() {
      if (elementLength > endFilter) {
        startFilter += increment;
        endFilter += increment;
        $('.box_item .box_items').slice(startFilter, endFilter).not('.shown').addClass('shown').toggle(500);
        $('.shownLength').text((endFilter > elementLength) ? elementLength : endFilter);
        if (elementLength <= endFilter) {
            $(this).remove();
        }
      }
    });
  
  });