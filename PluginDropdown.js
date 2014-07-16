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
                    for (var i = 0; i < settings.sourceArray.length; i++) {
                        dropdownListHtml += '<div class="dropdown-item' + i + '"><span>' + settings.sourceArray[i] + '</span></div>';
                    }

                    $(this).after('<div class="dropdown" style="width:' + $(this).width() + 'px">' + dropdownListHtml + '</div>');

                    for (var i = 0; i < settings.sourceArray.length; i++) {
                        $('.dropdown-item' + i).click(function () {
                            var dropdownItemText = $(this).find('span').text();
                            element.val(dropdownItemText);
                            $('.dropdown').remove();
                        });
                    }
                })
        };

        $(document).mousedown(function (event) {
            if ($(event.target).closest(".dropdown").length === 0) {
                $('.dropdown').remove();
            }
        });

        return this.each(showDropdownList);
    };
})(jQuery);

$('#target1').dropdown();