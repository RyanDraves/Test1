var count = 0;

function newEvent(link,subTitle,description) {
	editLink = link;
	split = editLink.split("");
	for (i=0;i<split.length;i++) {
		if (editLink[i] == "w" && editLink[i+1] == "a" && editLink [i+2] == "t") {
			editLink[i] = "e";
			editLink[i+1] = "m";
			editLink[i+2] = "b";
			editLink[i+3] = "e";
			editLink[i+4] = "d";
			editLink[i+5] = "/";
			editLink[i+6] = "";
			editLink[i+7] = "";
		}
	}
	editLink = split.join("");
	$("#info").append('<div class="col-sm-4 event"><div align="center"><iframe width="854" height="480 style="margin-top: 5px" src="' + editLink + '" frameborder="0" allowfullscreen></iframe></div><p>'+ subTitle + '</p><p>' + description + '</p></div>');
};

$(document).ready(function() {
	$("button").click(function(){
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
	newEvent("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "Rick Roll", "You've been rolled");
});