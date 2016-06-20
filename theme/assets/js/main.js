mobileScreenSize = 480;

$(function () {	
	$(window).on("scroll", function(e) {
	    var wrap = $(".static-header");

	    //console.log($(this).scrollTop());

	    if ($(this).scrollTop() > 500) {
	        wrap.addClass("fix-header");
	    } else {
	        wrap.removeClass("fix-header");
	    }
	});

	if($('.file-input').length){
		$('.file-input input[type=file]').on('click', function(e) {
			e.stopPropagation();
		});

		$('.file-input').on('click', function(e) {
			$(this).parent().find('input[type=file]').click();
		});

		$('.file-input input[type=file]').on('change', function(e) {
			var fileName = $(this).val().split('/').pop().split('\\').pop();
			var fileNameHolder = $(this).parent().find('span.file-name-holder');
			if(fileNameHolder.length){
				fileNameHolder.text(fileName);
			}
			else{
				$(this).parent().append('<span class="file-name-holder">'+fileName+'</span>');
			}
		});
	}

	set_select2 = function () {
		if($(window).width() > mobileScreenSize) {
			$('select').select2({
				minimumResultsForSearch: Infinity
			});

			$("#flightFrom, #flightTo").select2({
		        maximumSelectionLength: 1,
		        multiple: true
		    });
			// $('.coffee_book_id').select2({templateResult: selectDropdownTemplate, templateSelection: selectDropdownTemplate});
			// $('.chapter_list').select2({templateResult: selectDropdownTemplate, templateSelection: selectDropdownTemplate});
			
			$.fn.modal.Constructor.prototype.enforceFocus = function() {};
		}
		else {
			$('.important-select2').select2();
		}
	};


	set_iCheck = function () {
		$('input').iCheck({
			checkboxClass: 'icheckbox_square-theme',
			radioClass: 'iradio_square-theme',
			cursor: false
		});
	};

	if(typeof $.fn.iCheck !== 'undefined'){ 
		set_iCheck();
	}

	if(typeof $.fn.select2 !== 'undefined'){ 
		set_select2();
	}

});