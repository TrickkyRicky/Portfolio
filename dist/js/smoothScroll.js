$(document).ready(function () {
	let scrollLink = $(".scroll");

	// smoothness
	scrollLink.click(function (e) {
		e.preventDefault();
		$("body,html").animate(
			{
				scrollTop: $(this.hash).offset().top,
			},
			1200
		);
	});
});

