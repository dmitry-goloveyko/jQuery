(function ($) {
    $.fn.spinner = function (options) {
        options = $.extend({
        }, options);

        var div = $(this);

        var initializeButtons = function(){
            var spinnerButtonsDiv = '<div style="width: 30px; height: "' + div.height() + '">' +
                                        '<button style="width: 30px; height: ' + div.height()/2 +'">a</button>' +
                                        '<button style="width: 30px; height: ' + div.height()/2 +'">a</button>' +
                                    '</div>';
               $(document).ready(function() {
                   div.after(spinnerButtonsDiv);
               });
        };

        var spinnerButtonUp = function() {
        };

        return this.each(spinnerButtonUp(), initializeButtons());
    };
})(jQuery);

$('#target2').spinner();