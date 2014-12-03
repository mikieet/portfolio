//////////////// heroImageCarousel //////////////////////

$(function () {



	var heroImages = [perfImg,mvcImg,millImg];

	var perfImg = {
		image:"images/perf_big_01.jpg",
		projName:"Performance Platform",
		thing:"Measuring government services",
		link:"performance-platform.html"
	};

	var mvcImg = {
		image:"images/mvc_big_01.jpg",
		projName:"Metro Vancouver Connections",
		thing:"Mapping transit for Vancouver",
		link:"metro-vancouver-connections.html"
	};

	var millImg = {
		image:"images/mill_big_01.jpg",
		projName:"Vancouver Millennium Line",
		thing:"Wayfinding for Vancouvers Skytrain",
		link:"millennium-line.html"
	};

	var numImages = heroImages.length;
	var index = 1;

setInterval(function() {
	var heroImages = [perfImg,mvcImg,millImg];

	// for(var w = 0; w < heroImages.length; w++){
		index = (index + 1) % numImages;
		console.log(heroImages[index].image);
	 	$("#mainImg").attr("src",heroImages[index].image)
	 	$("#projectName").html(heroImages[index].projName)
	 	$("#projectThing").html(heroImages[index].thing)
	 	$("#projectLink").attr("src",heroImages[index].thing)

}, 6000);
});