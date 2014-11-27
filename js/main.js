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

