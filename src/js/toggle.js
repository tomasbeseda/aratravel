$(function() {
    $(document).on('click', '.js-toggle', function(event) {
        event.preventDefault();
        var $this = $(this);
        $target = $($this.data('toggle-target'));
        $target.slideToggle();

        if ($this.data('toggle-set') == 'accordion') {
            var $icon = $this.find('.icon');
            $icon.toggleClass('icon--plus');
            $icon.toggleClass('icon--minus');
        }
    });
});
