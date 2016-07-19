$("#aboutBox").click(function(){
	breadcrumbValue = "<span id='homeBC'>Home</span> > <span id='contentBC'>Table of Contents</span> > <span id='aboutBC'>About</span>";
	$("#content").fadeOut(delay, 'swing');
	setTimeout('$("#about").fadeIn(500, "swing")', delay);
	setTimeout('$("#breadcrumb").html(breadcrumbValue)', delay);
});
$("#resumeBox").click(function(){
	breadcrumbValue = "<span id='homeBC'>Home</span> > <span id='contentBC'>Table of Contents</span> > <span id='resumeBC'>Resume</span>";
	$("#content").fadeOut(delay, 'swing');
	setTimeout('$("#resume").fadeIn(500, "swing")', delay);
	setTimeout('$("#breadcrumb").html(breadcrumbValue)', delay);
});
$("#projectsBox").click(function(){
	breadcrumbValue = "<span id='homeBC'>Home</span> > <span id='contentBC'>Table of Contents</span> > <span id='projectsBC'>Projects</span>";
	$("#content").fadeOut(delay, 'swing');
	setTimeout('$("#projects").fadeIn(500, "swing")', delay);
	setTimeout('$("#breadcrumb").html(breadcrumbValue)', delay);
});
$("#contactBox").click(function(){
	breadcrumbValue = "<span id='homeBC'>Home</span> > <span id='contentBC'>Table of Contents</span> > <span id='contactBC'>Contact</span>";
	$("#content").fadeOut(delay, 'swing');
	setTimeout('$("#contact").fadeIn(500, "swing")', delay);
	setTimeout('$("#breadcrumb").html(breadcrumbValue)', delay);
});