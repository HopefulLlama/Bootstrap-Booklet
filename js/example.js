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
	booklet.addPage("This is the default booklet", "<p>Some test data</p>");
	booklet.addPage("with no customisation of styling or options", "<p>Some more test data</p>");
	booklet.generate();


	var booklet2 = new BootstrapBooklet("#booklet2");
	booklet2.addPage("This booklet", "<p>De ja vu</p>");
	booklet2.addPage("has different styling", "<p>Rendezvous</p>");
	booklet2.addPage("and no page numbers on contents", "<p>Et tu?</p>");

	booklet2.panelClasses = "panel-danger";

	booklet2.contents.showPageNumbers = false;

	booklet2.generate();


	var booklet2 = new BootstrapBooklet("#booklet3");
	booklet2.addPage("Look! No Contents page", "<p>123</p>");
	booklet2.addPage("on this booklet.", "<p>ABC</p>");
	booklet2.addPage("Contents are stupid anyway.", "<p>Got to be</p>");

	booklet2.panelClasses = "panel-success";

	booklet2.contents.enabled = false;

	booklet2.generate();

}