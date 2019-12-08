$(function() {
    $(document).on('click', '.js-update', function(event) {
        event.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var $target = $($this.attr('data-update-target'));

        $.get(url, function(data) {
            $target.html(data);
        });
    });
});
