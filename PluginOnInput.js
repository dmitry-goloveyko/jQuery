(function ($) {
    $.fn.dropdown = function (options) {
        options = $.extend({
            sourceArray : ['This', 'Is', 'Plugin']
        }, options);

        var element = $(this);

        var showDropdownList = function() {
            $(this).focusin(function () {
                var DropdownListHTML = '';
                for(var i = 0; i < options.sourceArray.length; i++) {
                    DropdownListHTML += '<div class="dropdown-item">' + options.sourceArray[i] + '<div>';
                }

                $('#target1').after('<div class="dropdown" style="width:' + $('#target1').width() + '">' + DropdownListHTML + '</div>');
            })
                .focusout(function () {
                    $('.dropdown').remove();
                });
        };

        return this.each(showDropdownList());
    };
})(jQuery);

$('#target1').dropdown();