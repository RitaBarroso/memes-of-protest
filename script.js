
$(document).ready(function() {
	var minimize = $(".minimize");
	var expand = $(".expand");

	minimize.on("click", function(event) {
		var target = $(event.currentTarget),
			window_parent = target
				.parent()
				.parent()
				.parent(),
			window_text = window_parent.find(".window-text");

		// minimize icon é escondido
		target.addClass("hidden");
		// window text é escondido
		window_text.addClass("hidden");
		// expand icon aparece
		target.siblings().removeClass("hidden");
	});

	expand.on("click", function(event) {
		var target = $(event.currentTarget),
			window_parent = target
				.parent()
				.parent()
				.parent(),
			window_text = window_parent.find(".window-text");

		//expand icon é escondido
		target.addClass("hidden");
		//window text aparece
		window_text.removeClass("hidden");
		//minimize icon aparece
		target.siblings().removeClass("hidden");
	});

	/* como isto precisa de ids para funcionar,
	 vamos entrar num loop para poder alcançar todas
	 as windows e estas tornarem-se draggable
  */

	$( function() {
		$( ".draggable" ).draggable();
	} );

	$(".stackable").on("click", function() {
		$(".stackable").css("z-index", 0);
		$(this).css("z-index", 1);
		});
			
});
