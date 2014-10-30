$(window).load(setUpHelp);

function setUpHelp() {
	$("#pagination-div").css("text-align", "center");
	$(".helpPanel").css("display", "none");
	$("#contents").css("display", "block");

	$(".helpPanelButton").click(function (event){
		if($($(event.target).attr("data-target")).css("display") !== "block") {
			$(".helpPanel").slideUp();
			$($(event.target).attr("data-target")).slideDown();

			$(".helpPanelItem").removeClass("active");
			$(".helpPanelItem").each(function (index) {
				if ($(this).attr("data-page") === $(event.target).attr("data-page")) {
					$(this).addClass("active");		
				}
			});
		}
	});

	var booklet = new BootstrapBooklet("#booklet");
	booklet.addPage("A", "<p>Some test data</p>");
	booklet.addPage("1234-abv", "<p>Some more test data</p>");
	booklet.generate();

	var booklet2 = new BootstrapBooklet("#booklet2");
	booklet2.addPage('"Booklet 2, Page 1"', "<p>De ja vu</p>");
	booklet2.addPage("'Booklet 2, Page 2'", "<p>Rendezvous</p>");
	booklet2.generate();
}