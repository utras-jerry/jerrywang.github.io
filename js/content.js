$("#aboutBox").click(function(){
	pageIndex = 2;
	breadcrumbValue = "<span id='homeBC'>Home</span> > <span id='contentBC'>Table of Contents</span> > <span id='aboutBC'>About</span>";
	$("#content").fadeOut(delay, 'swing');
	setTimeout('$("#about").fadeIn(500, "swing")', delay);
	setTimeout('$("#breadcrumb").html(breadcrumbValue)', delay);
});
$("#resumeBox").click(function(){
	pageIndex = 3;
	breadcrumbValue = "<span id='homeBC'>Home</span> > <span id='contentBC'>Table of Contents</span> > <span id='resumeBC'>Resume</span>";
	$("#content").fadeOut(delay, 'swing');
	setTimeout('$("#resume").fadeIn(500, "swing")', delay);
	setTimeout('$("#breadcrumb").html(breadcrumbValue)', delay);
});
$("#projectsBox").click(function(){
	pageIndex = 4;
	breadcrumbValue = "<span id='homeBC'>Home</span> > <span id='contentBC'>Table of Contents</span> > <span id='projectsBC'>Projects</span>";
	$("#content").fadeOut(delay, 'swing');
	setTimeout('$("#projects").fadeIn(500, "swing")', delay);
	setTimeout('$("#breadcrumb").html(breadcrumbValue)', delay);
});
$("#contactBox").click(function(){
	pageIndex = 5;
	breadcrumbValue = "<span id='homeBC'>Home</span> > <span id='contentBC'>Table of Contents</span> > <span id='contactBC'>Contact</span>";
	$("#content").fadeOut(delay, 'swing');
	setTimeout('$("#contact").fadeIn(500, "swing")', delay);
	setTimeout('$("#breadcrumb").html(breadcrumbValue)', delay);
});