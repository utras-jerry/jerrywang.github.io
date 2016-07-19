$("#aboutBox").one('click', function(){
	breadcrumbValue += " > About";
	$("#content").fadeOut(delay, 'swing');
	setTimeout('$("#about").fadeIn(500, "swing")', delay);
	setTimeout('$("#breadcrumb").html(breadcrumbValue)', delay);
});
$("#resumeBox").one('click', function(){
	breadcrumbValue += " > Resume";
	$("#content").fadeOut(delay, 'swing');
	setTimeout('$("#resume").fadeIn(500, "swing")', delay);
	setTimeout('$("#breadcrumb").html(breadcrumbValue)', delay);
});
$("#projectsBox").one('click', function(){
	breadcrumbValue += " > Projects";
	$("#content").fadeOut(delay, 'swing');
	setTimeout('$("#projects").fadeIn(500, "swing")', delay);
	setTimeout('$("#breadcrumb").html(breadcrumbValue)', delay);
});
$("#contactBox").one('click', function(){
	breadcrumbValue += " > Contact";
	$("#content").fadeOut(delay, 'swing');
	setTimeout('$("#contact").fadeIn(500, "swing")', delay);
	setTimeout('$("#breadcrumb").html(breadcrumbValue)', delay);
});