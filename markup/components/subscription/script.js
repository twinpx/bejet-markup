!function(a){"use strict";a(function(){var b=a(".b-subscription form");a(".b-subscription").delegate(".b-subscription__send-again","click",function(c){var d=a(this).closest(".b-subscription");d.addClass("i-fadeout"),setTimeout(function(){d.removeClass("i-error").removeClass("i-success").removeClass("i-fadeout")},500),b.find("input").val(""),c.preventDefault()}),void 0===b.data("Form")&&b.form(),b.data("Form").submitForm=function(b){var c=a(b.target),d=c.data("Form"),e=c.closest(".b-subscription");d.$submitButton.hasClass("i-disabled")||!d.isValid()?b.preventDefault():(a.ajax({url:d.$elem.attr("action"),type:d.$elem.attr("method"),dataType:"json",data:d.$elem.serialize(),success:function(a){a&&a.STATUS&&"Y"===a.STATUS?(d.$elem.closest(".b-subscription").addClass("i-fadeout"),setTimeout(function(){d.$elem.closest(".b-subscription").addClass("i-success").removeClass("i-error").removeClass("i-fadeout")},500),e.find(".b-message").html(a.MESSAGE),Cookies.set("NEWS_SUBSCRIBED","Y",{expires:1,path:window.location.hostname})):a&&a.STATUS&&"E"===a.STATUS&&(d.$elem.closest(".b-subscription").addClass("i-fadeout"),setTimeout(function(){d.$elem.closest(".b-subscription").addClass("i-error").removeClass("i-success").removeClass("i-fadeout")},500),e.find(".b-message").html(a.MESSAGE))},error:function(){}}),b.preventDefault())},b.submit(b.data("Form").submitForm),a(".i-float .b-input-text").focus(function(){a(this).parent(".i-float").addClass("i-focus")}).blur(function(){var b=a(this);""===b.val()&&b.parent(".i-float").removeClass("i-focus")}).each(function(){""!==a(this).val()&&a(this).parent(".i-float").addClass("i-focus")}),a(".i-float .b-label").click(function(){var b=a(this).parent(".i-float");b.hasClass("i-focus")||b.find(".b-input-text").focus()}),Cookies.get("NEWS_SUBSCRIBED")&&a(".b-subscription").hide()})}(jQuery);