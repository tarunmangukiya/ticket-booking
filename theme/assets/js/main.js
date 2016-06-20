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
			$('select:not(.no-select2)').select2({
				minimumResultsForSearch: Infinity
			});

			$("#flightFrom, #flightTo").select2({
		        maximumSelectionLength: 1,
		        multiple: true
		    });

		    $("#flightFrom").next().find('.select2-selection').addClass('ti').addClass('ti-flight-up');
		    $("#flightTo").next().find('.select2-selection').addClass('ti').addClass('ti-flight-down');
			// $('.coffee_book_id').select2({templateResult: selectDropdownTemplate, templateSelection: selectDropdownTemplate});
			// $('.chapter_list').select2({templateResult: selectDropdownTemplate, templateSelection: selectDropdownTemplate});
			
			$.fn.modal.Constructor.prototype.enforceFocus = function() {};
		}
		else {
			$('.important-select2').select2();
		}
	};

	set_datepicker = function () {
		if($(window).width() > mobileScreenSize) {
			$(".datepicker").datepicker();

			$("#dateFrom").datepicker({
				minDate: new Date(),
		    	numberOfMonths: 3,
		    	onSelect: function(dateText) {
				    $("#dateTo").datepicker('option', 'minDate', dateText);
				}
		    });

		    $("#dateTo").datepicker({
				minDate: new Date(),
		    	numberOfMonths: 3
		    });
		}
		else {
			$(".datepicker, #dateFrom, #dateTo").attr('type', 'date');
		}
	};

	set_iCheck = function () {
		$('input').iCheck({
			checkboxClass: 'icheckbox_square-theme',
			radioClass: 'iradio_square-theme',
			cursor: false
		});
	};

	set_multiselect = function () {
		$('.multiselect').multiselect({
			buttonContainer: '<div class="multiselect-div" />',
			buttonClass: 'multiselect-button',
			includeSelectAllOption: true,
			selectAllText: 'All'
		});
	};

	if(typeof $.fn.iCheck !== 'undefined'){ 
		set_iCheck();
	}

	if(typeof $.fn.select2 !== 'undefined'){ 
		set_select2();
	}

	if(typeof $.fn.multiselect !== 'undefined'){ 
		set_multiselect();
	}

	if(typeof $.fn.datepicker !== 'undefined'){ 
		set_datepicker();
	}


});