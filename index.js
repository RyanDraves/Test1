var count = 0;

/* Old version info section
 * function newEvent(link,subTitle,description) {
 *	editLink = link;
 *	split = editLink.split("");
 *	for (i=0;i<split.length;i++) {
 *		if (split[i] == "w" && split[i+1] == "a" && split [i+2] == "t") {
 *			split[i] = "e";
 *			split[i+1] = "m";
 *			split[i+2] = "b";
 *			split[i+3] = "e";
 *			split[i+4] = "d";
 *			split[i+5] = "/";
 *			split[i+6] = "";
 *			split[i+7] = "";
 *		}
 *	}
 *	editLink = split.join("");
 *	$("#info").append('<div class="col-sm-4 event"><div align="center"><iframe width="100%" height="240" style="margin-top: 5px" src="' + editLink + '" frameborder="0" allowfullscreen></iframe></div><p>'+ subTitle + '</p><p>' + description + '</p></div>');
 * };
 */
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
	$("#testingWell").append('<div class="flex-item"><iframe width="90%" height="240" style="margin-top: 5px" src="' + editLink + '" frameborder="0" allowfullscreen></iframe><p>'+ subTitle + '</p><p>' + description + '</p>');
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
	/* Old version info section
	 * newEvent("https://www.youtube.com/watch?v=YKJ1zhEBHEY","The Lecture Series: March 20, Dr. Joe Pole","On March 20, The Science Squad will host our fifth lecture in the Lecture Series! We will be featuring Dr. Joe Pole, a practicing optometrist at the Ferris State University. Dr. Schonbaum will be discussing his experience with scleral and GP lens research!");
	 * newEvent("https://www.youtube.com/watch?v=a_RMDQyddHo","Lecture Series #4: Kelley Templin","Kelley Templin is an Environmental Health and Safety Professional with Cargill in Hersey, MI. She has over 12 years experience in Environmental Health and Safety. Kelley earned a degree in Industrial Chemistry Technology from Ferris State University. She is a licensed Medical First Responser, a member of the American Chemical Society, and a member of the American Society of Safety Engineers.");
	 * newEvent("https://www.youtube.com/watch?v=khsA4bvnsvg","Lecture Series #3: Dr. Chris Schonbaum","On February 27, The Science Squad will host our third lecture in the Lecture Series! We will be featuring Dr. Chris Schonbaum, a practicing geneticist at the University of Chicago. Dr. Schonbaum will be discussing his experience with CRISPR gene therapy!");
	 * newEvent("https://www.youtube.com/watch?v=BhPUg-YdEvE","Lecture Series #2: Mr. Paul Filio","On Feb. 20, The Science Squad will host our second lecture in the Lecture Series! We will be featuring Mr. Paul Filio, a political scientist affiliated with Northwestern University's GLL. He will be discussing the merits of history and politics as a scientific subject!");
	 * newEvent("https://www.youtube.com/watch?v=dsdlBVN3Sac", "Lecture Series #1: Dr. Anil Venkatesh", "On February 13, The Science Squad will host our first lecture in the Lecture Series! We will be featuring Dr. Anil Venkatesh, a mathematician/engineer with degrees from UPenn and Duke. Dr. Venkatesh will be discussing his research on the mathematics of music theory!");
	 */
	newEvent("https://www.youtube.com/watch?v=YKJ1zhEBHEY","The Lecture Series: March 20, Dr. Joe Pole","On March 20, The Science Squad will host our fifth lecture in the Lecture Series! We will be featuring Dr. Joe Pole, a practicing optometrist at the Ferris State University. Dr. Schonbaum will be discussing his experience with scleral and GP lens research!");
	newEvent("https://www.youtube.com/watch?v=a_RMDQyddHo","Lecture Series #4: Kelley Templin","Kelley Templin is an Environmental Health and Safety Professional with Cargill in Hersey, MI. She has over 12 years experience in Environmental Health and Safety. Kelley earned a degree in Industrial Chemistry Technology from Ferris State University. She is a licensed Medical First Responser, a member of the American Chemical Society, and a member of the American Society of Safety Engineers.");
	newEvent("https://www.youtube.com/watch?v=khsA4bvnsvg","Lecture Series #3: Dr. Chris Schonbaum","On February 27, The Science Squad will host our third lecture in the Lecture Series! We will be featuring Dr. Chris Schonbaum, a practicing geneticist at the University of Chicago. Dr. Schonbaum will be discussing his experience with CRISPR gene therapy!");
	newEvent("https://www.youtube.com/watch?v=BhPUg-YdEvE","Lecture Series #2: Mr. Paul Filio","On Feb. 20, The Science Squad will host our second lecture in the Lecture Series! We will be featuring Mr. Paul Filio, a political scientist affiliated with Northwestern University's GLL. He will be discussing the merits of history and politics as a scientific subject!");
	newEvent("https://www.youtube.com/watch?v=dsdlBVN3Sac", "Lecture Series #1: Dr. Anil Venkatesh", "On February 13, The Science Squad will host our first lecture in the Lecture Series! We will be featuring Dr. Anil Venkatesh, a mathematician/engineer with degrees from UPenn and Duke. Dr. Venkatesh will be discussing his research on the mathematics of music theory!");
});
