var _bookletCounter = 0;

function BootstrapBooklet(container) {
	this.id = _bookletCounter;
	_bookletCounter++;

	this.container = container;
	this.contents = new Contents();
	this.pages = [];
	this.pagination = new Pagination();
	this.panelClasses = "panel-info";
	this.addPage = addPage;
	function addPage(title, bodyHtml) {
		this.pages.push(new Page(title, bodyHtml));
	}

	this.setPages = setPages;
	function setPages(pages) {
		this.pages = pages;
	}

	this.generate = generate;
	function generate() {
		var _this = this;
		var html = "";
		html += _this.contents.generate(_this.id, _this.pages, _this.panelClasses);
		_this.pages.forEach(function (page){
			html += page.generate(_this.id, _this.panelClasses);
		});
		html += _this.pagination.generate(_this.id, _this.contents.enabled, _this.pages);

		$(container).html(html);

		$(".booklet-pagination-div-"+_this.id).css("text-align", "center");
		$(".booklet-page-"+_this.id).css("display", "none");
		$(".booklet-contents-"+_this.id).css("display", "block");

		$(".booklet-button-"+_this.id).click(function (event){
		if($($(event.target).attr("data-target")).css("display") !== "block") {
			$(".booklet-page-"+_this.id).slideUp();
			$($(event.target).attr("data-target")).slideDown();

			$(".booklet-pagination-item-"+_this.id).removeClass("active");
			$(".booklet-pagination-item-"+_this.id).each(function (index) {
				if ($(this).attr("data-page") === $(event.target).attr("data-page")) {
					$(this).addClass("active");		
				}
			});
		}
	});
	}
}

function Contents() {
	this.enabled = true;
	this.showPageNumbers = true;

	this.generate = generate;
	function generate(bookletId, pages, panelClasses) {
		var html = "";
		var _this = this;
		if(_this.enabled) {
			html += '<div class="booklet-contents-'+bookletId+' booklet-page-'+bookletId+' panel ' + panelClasses + '"><div class="panel-heading">Contents</div><div class="panel-body"><ul class="list-group">';
			var pageNumber = 2;
			pages.forEach(function (page){
				html += '<li class="list-group-item">';
				if (_this.showPageNumbers) {
					html += '<span class="badge">p.' + pageNumber + '</span>';
				}
				html += '<a class="booklet-button-'+bookletId+'" href="javascript:void(0)" data-target="#' + page.title.replace(/ /g, "-").replace(/"/g, "-").replace(/,/g, "-").replace(/'/g, "-") + '-'+bookletId+'" data-page="' + pageNumber + '">' + page.title + '</a></li>';
				pageNumber++
			});
			html += '</ul></div></div>';
		}
		return html;
	}
}

function Page(title, bodyHtml) {
	this.title = title;
	this.bodyHtml = bodyHtml;

	this.generate = generate;
	function generate(bookletId, panelClasses) {
		var html = "";
		html += '<div id="' + this.title.replace(/ /g, "-").replace(/"/g, "-").replace(/,/g, "-").replace(/'/g, "-") + '-'+bookletId+'" class="panel booklet-page-'+bookletId+' ' + panelClasses + '"><div class="panel-heading">' + this.title + '</div>';
        html += '<div class="panel-body">'+this.bodyHtml+'</div></div>';
		return html;
	}
}

function Pagination() {
	this.generate = generate;
	function generate(bookletId, contentsEnabled, pages) {
		var html = "";
		html += '<div class="booklet-pagination-div-'+bookletId+'"><ul class="booklet-pagination-list-'+bookletId+' pagination">';
		var pageNumber = 1;
		if(contentsEnabled) {
			html += '<li class="booklet-pagination-item-'+bookletId+' active" data-page="1"><a class="booklet-button-'+bookletId+'" href="javascript:void(0)" data-target=".booklet-contents-'+bookletId+'" data-page="1">Contents</a></li>';
		}

		pages.forEach(function (page){
			if(!contentsEnabled){
				pageNumber = 2;
				html+= '<li class="booklet-pagination-item-'+bookletId+' active" data-page="' + pageNumber + '"><a class="booklet-button-'+bookletId+'" href="javascript:void(0)" data-target="#' + page.title.replace(/ /g, "-").replace(/"/g, "-").replace(/,/g, "-").replace(/'/g, "-") + '-'+bookletId+'" data=page="' + pageNumber + '">' + page.title + '</a></li>';				
			} else {
				pageNumber++;
				html+= '<li class="booklet-pagination-item-'+bookletId+'" data-page="' + pageNumber + '"><a class="booklet-button-'+bookletId+'" href="javascript:void(0)" data-target="#' + page.title.replace(/ /g, "-").replace(/"/g, "-").replace(/,/g, "-").replace(/'/g, "-") + '-'+bookletId+'" data-page="' + pageNumber + '">' + page.title + '</a></li>';				
			}
		});                      
		html += '</ul></div>';
		return html;
	}
}