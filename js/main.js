$(".prjDesc").hide()

$(".project").mouseover(function() {
  console.log("yo")
  // $(".prjDesc").slideUp()
  $(this).children(".prjDesc").show();
})

$(".project").mouseout(function() {
    $(".prjDesc").hide()
})


// var performance = {
// title: "Performance Platform"

// }

// $.getJSON("projects.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });



// console.log(projData.perf.tags[1])

var performance = {
	title: "performance",
	company: "gds",
	client:"govuk",
	medium:"digital",
	tags:["info","map"]
};

var mvc = {
	title: "mvc",
	company: "applied",
	client:"translink",
	medium:"print",
	tags:["info","map"]
};

var expo = {
	title: "expo",
	company: "applied",
	client:"translink",
	medium:"print",
	tags:["info","singage"]
};

console.log(expo.company)

var projects = [performance,mvc,expo]
console.log(projects)

//store selection of tag in a variable to apply!!!!!
var filterChoice = $(".filter")
// click filter perform function(thatFilter) on generic function

$(".filter").on("click", function(){
	projects.forEach(function (element, index) {
	console.log(element.title)
	if (filterChoice == "infoChoice") {

	} 
	
// { if {((element.company)=="gds") 
// 	console.log('true')
		// }
		// // $(this).show()

	// } else {
	// 	console.log('false')
	// 	// $(this".project").hide()
	// }

	})
});
		

// depending on true/false show/hide relevant project


// var tag = [info,map,sign]
$("#info").on("click",function (){
	var filterChoice = "infoChoice" 
});

$("#map").on("click",function (){
	var filterChoice = "mapChoice" 
});

$("#sign").on("click",function (){
	var filterChoice = "signChoice" 
});

$("#sign").on("click",function (){
	var filterChoice = "" 
});

//Show all projects
$("#clear").on("click", function(){
	$(".project").show();
})

///////////////IMAGE CAROUSEL//////////////////////

var heroImages = ["images/perf_big_01.jpg","images/mvc_big_01.jpg","images/mill_big_01.jpg"]
var numImages = heroImages.length;
var index = 1;


setInterval(function() {
	$("#mainImg").attr("src",heroImages[index]);
    index = (index + 1) % numImages;
}, 6000);

///////////////FILTER DROPDOWN//////////////////////

$("#filterDropdown").hide();

$("#filterContainer").on("click",function(e){
	e.preventDefault();
	if ($('#filterDropdown').is(':visible')) {
	$("#filterDropdown").slideUp();
	console.log("hello2")
} else {
	$("#filterDropdown").slideDown();
}
})


// var projData2 = [
//         {
//             "title": "performance",
//             "agency": "gds",
//             "client": "govuk",
//             "medium": "digital",
//             "tags": ["info"]
//         },
//         {
//             "title": "sprint",
//             "agency": "gds",
//             "client": "gds",
//             "medium": "print",
//             "tags": ["info","branding"]
//         },
// 		{	"title": "mvc",
//             "agency": "applied",
//             "client": "translink",
//             "medium": "print",
//             "tags": ["info","mapping"]
//         }
//     ]

// console.log(projData2.)

var heroImages = [perfImg,mvcImg,millImg]

var perfImg = {
	image:"images/perf_big_01.jpg",
	projName:"Performance Platform",
	link:"performance-platform.html"
}

var mvcImg = {
	image:"images/perf_big_01.jpg",
	projName:"Metro Vancouver Connections Map",
	link:"metro-vancouver-connections.html"
}

var millImg = {
	image:"images/mill_big_01.jpg",
	projName:"Vancouver Millennium Line",
	link:"millennium-line.html"
}

var numImages = heroImages.length;
var index = 1;


setInterval(function() {
	var thisImg = heroImages[index]
	console.log(thisImg.image)
	// $("#mainImg").attr("src",(thisImg + .image));
    index = (index + 1) % numImages;
}, 3000);