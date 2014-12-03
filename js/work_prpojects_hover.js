//////////////// PROJECTS HOVER //////////////////////

$(function () {

	$(".prjDesc").hide();

	$(".project").mouseover(function() {
	  console.log("yo");
	  // $(".prjDesc").slideUp()
	  $(this).children(".prjDesc").show();
	});

	$(".project").mouseout(function() {
	    $(".prjDesc").hide();
	});
});