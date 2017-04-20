//Relevant site updating information is at the bottom of each page's html in a <script> tag.

var count = 0;

function newEvent(link,subTitle,description) {
	editLink = link;
	split = editLink.split("");
	for (i=0;i<split.length;i++) {
		if (split[i] == "w" && split[i+1] == "a" && split [i+2] == "t") {
			split[i] = "e";
			split[i+1] = "m";
			split[i+2] = "b";
			split[i+3] = "e";
			split[i+4] = "d";
			split[i+5] = "/";
			split[i+6] = "";
			split[i+7] = "";
		}
	}
	editLink = split.join("");
	$("#infoEvents").append('<div class="flex-item-Home"><iframe width="90%" height="240" style="margin-top: 5px" src="' + editLink + '" frameborder="0" allowfullscreen></iframe><p>'+ subTitle + '</p><p class="justify">' + description + '</p>');
};

function upcomingLecture(name,picture,date,description){
	$('#upcomingEvents').append('<div class="flex-item-Lecture" align="center"><h1>' + name + '</h1><img src="' + picture + '"><h2>' + date + '</h2><p class="justify">' + description + '</p></div>');
}
function pastLecture(name,picture,date,description){
	$('#pastEvents').append('<div class="flex-item-Lecture" align="center"><h1>' + name + '</h1><img src="' + picture + '"><h2>' + date + '</h2><p class="justify">' + description + '</p></div>');
}

$(document).ready(function() {
	$("#bored").click(function(){
		count += 1;
		$("#counter").html(count);
		$("#counter").css("font-size", ((count/2)+1) + "rem");
	});
	$("#counter").click(function(){
		count += 1;
		$("#counter").html(count);
		$("#counter").css("font-size", ((count/2)+1) + "rem");
	});
	$("#tee-hee").click(function(){
		count += 100;
		$("#counter").html(count);
		$("#counter").css("font-size", ((count/2)+1) + "rem");
	});
	$("#reset").click(function(){
		count = 0;
		$("#counter").html(count);
		$("#counter").css("font-size", 0);
	});
});
