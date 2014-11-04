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
	booklet.addPage("This is the Default Booklet", "<p>This booklet has no customisation options or styling applied to it.</p>");
	booklet.addPage("Initialising the Booklet", '<p>First, in the HTML, create a div(s) with a selector to be used. This will act as a placeholder for the booklet to be created in. Then create a BootstrapBooklet object, passing in a jQuery style selector. For example, to create a booklet on a div with ID "booklet":</p><p>var booklet = new BootstrapBooklet("#booklet");</p>');
	booklet.addPage("Adding Pages", '<p>After initialising the booklet, you can begin adding some pages by using the addPage function. This requires the page title, and body (in HTML) as parameters as the following example shows:</p><p>booklet.addPage("title", "HTML body");</p>');
	booklet.addPage("Generating a Booklet", '<p>Once your booklet is finished, you must generate it to display the booklet itself. This is done as such:</p><p>booklet.generate();</p>');
	booklet.generate();


	var booklet2 = new BootstrapBooklet("#booklet2");
	booklet2.addPage("Customisations!", "<p>This booklet has different styling an no page numbers.</p>");
	booklet2.addPage("Changing panelClasses", '<p>You can change the styling by applying different classes to the booklet, then applying the CSS styling to that class. This can be done with the following code snippet: </p><p>booklet2.panelClasses="panel-danger";</p>');
	booklet2.addPage("Removing Page Numbers", "<p>The page number labels on the contents page can be disabled by altering the Contents object as such: </p><p>booklet2.contents.showPageNumbers = false;</p>");

	booklet2.panelClasses = "panel-danger";

	booklet2.contents.showPageNumbers = false;

	booklet2.generate();


	var booklet2 = new BootstrapBooklet("#booklet3");
	booklet2.addPage("Look! No Contents page", "<p>This booklet has completed disabled the contents page. By default, the first page of the booklet will be shown on load instead.</p>");
	booklet2.addPage("Disabling the contents page", "<p>Contents can be disabled by using the following code snippet:</p><p>booklet2.contents.enabled = false;</p>");

	booklet2.panelClasses = "panel-success";

	booklet2.contents.enabled = false;

	booklet2.generate();

}