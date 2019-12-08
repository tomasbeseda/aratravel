$(document).ready(function(){

    var highestBox = 0;

    // Select and loop the container element of the elements you want to equalise
    $('.js-match').each(function(){

        var $this = $(this);
        var matchHeight = $this.height();

        // If this box is higher than the cached highest then store it
        if (matchHeight > highestBox) {
            highestBox = matchHeight;
        }

    });

    // Set the height of all those children to whichever was highest
    $('.js-match').height(highestBox);

});
