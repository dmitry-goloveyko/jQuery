(function ($) {
    $.fn.dropdown = function (options) {
        settings = $.extend({
            sourceArray : ['This', 'Is', 'Plugin']
        }, options);

        var element = $(this);

        var showDropdownList = function() {
            $(this)
                .focusin (function () {
                    var dropdownListHtml = '';
                    for(var i = 0; i < options.sourceArray.length; i++) {
                        dropdownListHtml += '<div class="dropdown-item">' + settings.sourceArray[i] + '<div>';
                    }

                    $(this).after('<div class="dropdown" style="width:' + $(this).width() + '">' + dropdownListHtml + '</div>');
                })
                .focusout (function () {
                    $('.dropdown').remove();
                });
        };

        return this.each(showDropdownList);
    };
})(jQuery);

$('#target1').dropdown();