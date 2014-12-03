$(function () {
// 	//////////////// PROJECTS HOVER //////////////////////

// 	$(".prjDesc").hide();

// 	$(".project").mouseover(function() {
// 	  console.log("yo");
// 	  // $(".prjDesc").slideUp()
// 	  $(this).children(".prjDesc").show();
// 	});

// 	$(".project").mouseout(function() {
// 	    $(".prjDesc").hide();
// 	});

	///////////////////////////////////////////////////////

	// var performance = {
	// title: "Performance Platform"

	// }

	// $.getJSON("projects.json", function(json) {
	//     console.log(json); // this will show the info it in firebug console
	// });



	// console.log(projData.perf.tags[1])

	/////////////////////// PROJECTS FILTER ///////////////////////////

	//Store of project data as objects

	var performance = {
		title: "performance",
		agency: "gds",
		client:"govuk",
		medium:"digital",
		tags:["info","info"]
	};

	var mvc = {
		title: "mvc",
		agency: "applied",
		client:"translink",
		medium:"print",
		tags:["info","info","maps"]
	};

	var millennium = {
		title: "millennium",
		agency: "applied",
		client:"translink",
		medium:"print",
		tags:["info","signage"]
	};

	var qeop = {
		title: "qeop",
		agency: "applied",
		client:"lldc",
		medium:"print",
		tags:["maps","signage"]
	};

	var genmaps = {
		title: "genmaps",
		agency: "applied",
		client:"various",
		medium:"print",
		tags:["info","maps"]
	};
	
	var heathrow = {
		title: "heathrow",
		agency: "applied",
		client:"heathrow",
		medium:["print", "digital"],
		tags:["info","maps"]
	};
	
	var mxBus = {
		title: "mxBus",
		agency: "applied",
		client:"metrolinx",
		medium:"print",
		tags:["info","maps"]
	};
	
	var mxMap = {
		title: "mxMap",
		agency: "applied",
		client:"metrolinx",
		medium:"print",
		tags:["maps"]
	};
	
	var sprint = {
		title: "sprint",
		agency: "gdsAgency",
		client:"gds",
		medium:"print",
		tags:["branding"]
	};
	
	var cov = {
		title: "cov",
		agency: "applied",
		client:"CoV",
		medium:"print",
		tags:["maps","branding"]
	};

		var cycle = {
		title: "cycle",
		agency: "personal",
		client:"personal",
		medium:"print",
		tags:["signage","maps"]
	};
	
	var stP = {
		title: "stP",
		agency: "personal",
		client:"personal",
		medium:["print","digital"],
		tags:["branding"]
	};
	
	
	//Array of project objects
	var projArray = [performance,mvc,millennium,qeop,genmaps,heathrow,mxBus,mxMap,sprint,cov,cycle,stP,];



	//Select filterChoice
	//AGENCY
	$("#gdsAgency").click(function (){
		var filterChoice = "gds";
		// var filterType = "agency";
		filterList(filterChoice);
		
	});
	
	$("#applied").click(function (){
		var filterChoice = "gds";
		// var filterType = "agency";
		filterList(filterChoice);	
	});

	$("#personal").click(function (){
		var filterChoice = "gds";
		// var filterType = "agency";
		filterList(filterChoice);
		
	});

	//SPECIALISMS
	$("#infoDes").click(function (){
		var filterChoice = "info";
		// var filterType = "tags";
		filterList(filterChoice);
	});

	$("#sign").click(function (){
		var filterChoice = "signage"; 
		// var filterType = "tags";
		filterList(filterChoice);
	});

	$("#maps").click(function (){
		var filterChoice = "maps";
		// var filterType = "tags";
		filterList(filterChoice);

	});

	$("#brand").click(function (){
		var filterChoice = "branding";
		// var filterType = "tags";
		filterList(filterChoice);

	});

	//MEDIUM
	$("#gdsAgency").click(function (){
		var filterChoice = "gds";
		// var filterType = "agency";
		filterList(filterChoice);
		
	});
	
	$("#applied").click(function (){
		var filterChoice = "gds";
		// var filterType = "agency";
		filterList(filterChoice);	
	});


	function filterList (filterChoice) {
		for (var x = 0; x < projArray.length; x++) {
			for (var y = 0; y < projArray[x].tags.length; y++) {
				if (projArray[x].tags[y] !== filterChoice) {
					console.log('.' + projArray[x].tags[y]);
					$('.' + projArray[x].title).hide()
					console.log($('.' + projArray[x].title).hide());
				} else {
					$('.' + projArray[x].title).show();
				}
			}
		}

	}

//////////////CLEAR FILTER//////////////////

$("#clearFilter").click(function(){
	console.log('clear')
	$(".project").show();
})

	// $("#brand").click(function (){
	// 	var filterChoice = "brand" ;
	// });

	//cycle through array to see if filterChoice matches object data

	// function includedInArray() {
	// 	if (parse.(mvc.tags[1]) == "filterChoice") {
	// 		console.log("true")
	// 	} else {
	// 		console.log(mvc.tags[1])
	// 	}
	// }



	//Show all projects
	// $("#clear").on("click", function(){
	// 	$(".project").show();
	// });

	//store selection of tag in a variable to apply!!!!!
	// var filterChoice = $(".filter")
	// // click filter perform function(thatFilter) on generic function

	// $(".filter").on("click", function(){
	// 	projects.forEach(function (element, index) {
	// 	console.log(element.title)
	// 	if (filterChoice == "infoChoice") {

	// } 
		
	// { if {((element.company)=="gds") 
	// 	console.log('true')
			// }
			// // $(this).show()

		// } else {
		// 	console.log('false')
		// 	// $(this".project").hide()
		// }

	// 	})
	// });
			

	// depending on true/false show/hide relevant project


	// var tag = [info,map,sign]



	///////////////FILTER DROPDOWN//////////////////////

	$("#filterDropdown").hide();
	$("#clearFilter").hide();

	$("#filterContainer").on("click",function(e){
		e.preventDefault();
		if ($('#filterDropdown').is(':visible')) {
		$("#filterDropdown").slideUp();
		$("#clearFilter").hide();
		console.log("hello2");
	} else {
		$("#filterDropdown").slideDown();
		$("#clearFilter").show();

	}
	});

	///////////////IMAGE CAROUSEL//////////////////////


// 	var heroImages = [perfImg,mvcImg,millImg];

// 	var perfImg = {
// 		image:"images/perf_big_01.jpg",
// 		projName:"Performance Platform",
// 		thing:"Measuring government services",
// 		link:"performance-platform.html"
// 	};

// 	var mvcImg = {
// 		image:"images/mvc_big_01.jpg",
// 		projName:"Metro Vancouver Connections",
// 		thing:"Mapping transit for Vancouver",
// 		link:"metro-vancouver-connections.html"
// 	};

// 	var millImg = {
// 		image:"images/mill_big_01.jpg",
// 		projName:"Vancouver Millennium Line",
// 		thing:"Wayfinding for Vancouvers Skytrain",
// 		link:"millennium-line.html"
// 	};

// 	var numImages = heroImages.length;
// 	var index = 1;

// setInterval(function() {
// 	var heroImages = [perfImg,mvcImg,millImg];

// 	// for(var w = 0; w < heroImages.length; w++){
// 		index = (index + 1) % numImages;
// 		console.log(heroImages[index].image);
// 	 	$("#mainImg").attr("src",heroImages[index].image)
// 	 	$("#projectName").html(heroImages[index].projName)
// 	 	$("#projectThing").html(heroImages[index].thing)
// 	 	$("#projectLink").attr("src",heroImages[index].thing)

// }, 6000);

//////////////////////////////////////////////////////////

	// var heroImages = ["images/perf_big_01.jpg","images/mvc_big_01.jpg","images/mill_big_01.jpg"]
	// var numImages = heroImages.length;
	// var index = 1;


	// setInterval(function() {
	// 	$("#mainImg").attr("src",heroImages[index]);
	//     index = (index + 1) % numImages;
	// }, 3000);

	// $(heroImages).forEach(console.log(this.image)) 

	// (var w = 0; w < heroImages.length; w++){
	// 	console.log(heroImages[w])
	// 	}



// function filterList (filterChoice) {
// 		for (var x = 0; x < projects.length; x++) {
// 			for (var y = 0; y < projects[x].tags.length; y++) {
// 				if (projects[x].tags[y] !== filterChoice) {
// 					console.log('.' + projects[x].tags[y]);
// 					$('.' + projects[x].tags[y]).hide();
// 				} else {
// 					$('.' + projects[x].tags[y]).show();
// 				}
// 			}
// 		}
// 	}

	// setInterval(function() {
	// 	var thisImg = (heroImages[index]);	
	// 	$("#mainImg").attr("src",(heroImages[index]));
	//    	index = (index + 1) % numImages;
	// }, 3000);


});