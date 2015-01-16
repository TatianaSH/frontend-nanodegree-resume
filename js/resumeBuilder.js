//$("#main").append ("Tatiana") ;
//[string].replace ([old], [new]);
//var awesomeThoughts = "I am Tatiana and I am AWESOME" ;
//var funThoughts = awesomeThoughts.replace ("AWESOME", "FUN");

//$("#main").append (funThoughts) ;
//var skills =
//["awesomeness", "programming", "teaching", "JS"] ;
//$ ("#main").append (skills);
//$ ("#main").append (skills[0]);
//$("#main"). append (skills.length);
var bio = {
    "name" : "Tatiana Shchelokova",
	"role" : "Web Developer",
	"welcomeMessage" : "The only way to determine the boundaries of the possible is to go beyond these boundaries." ,
	"contacts" : {
	"mobile" : "240-899-5234",
	"email" : "tanyacholokova@gmail.com" ,
	"github" : "TatianaSH",
	"twitter" : "@tatianash",
	"location" : "Gaithersburg"
	},
	"biopic" : "images/myphoto.jpg",
	
	"skills" : [
     "awesomeness", "smartness", "peacefull"
	]
};

var work = {
	"jobs" : [
{ "employer" : "West Siberian Metallurgical Plant",
  "title" : "engineer",
  "location" : "Novokuznetsk",
  "dates" : "1991-1997",
  "description" : "Control of the lining of metallurgical facilities, development and calculation of the lining for different objects"
},
{ "employer" : "Siberian State Indastrial University",
  "title" : "engineer",
  "location" : "Novokuznetsk",
  "dates" : "2005-2006",
  "description" : "Leadership of the students in the computer lab."
}
	]

};
var projects = {
	projects : [
	{ "title" : "Delphi",
	"dates" : "2005",
	"description" : "Training site for the study of Delphi",
	"images" : ""
	}
	]
};
var education = {
"school" :[
{
	"name": "Siberian Metallurgical Institute",
	"location" : "Novokuznetsk, Russia",
	"degree" : "BA",
	"major" : "Phisix",
	"dates" : "1986-1991",
	"url" : "http://en.wikipedia.org/wiki/Siberian_State_Industrial_University"

},
{
    "name": "Siberian State Industrial University",
	"location" : "Novokuznetsk, Russia",
	"degree" : "Professional retraining",
	"major" : "Information Systems and Programming",
	"dates" : "2005-2006",
	"url" : "http://en.wikipedia.org/wiki/Siberian_State_Industrial_University"

}],
"onlineCourses" : [
{
	"title" : "Front-End Web Developer Nanodegree",
	"school" : "UDACITY",
	"dates" : "2014-2015",
	"url" : "https://www.udacity.com/course/nd001"
}
]

};
var name = bio.name;
bio.display = function (){
   var formattedName = HTMLheaderName.replace("%data%", bio.name);
   var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomMsg);

if(bio.skills.length !== 0) {
	$("#header").append (HTMLskillsStart);
	for( var i=0; i<bio.skills.length; i++){
		var formattedSkills = HTMLskills.replace("%data%",  bio.skills[i]);
		$("#skills").append(formattedSkills);
	}

};
	for (contact in bio.contacts){
		var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);
	$("#topContacts").append(formattedContactGeneric);
	$("#footerContacts").append(formattedContactGeneric);
}
  
  
};


 bio.display();
 
function displayWork() {
for (job in work.jobs) {
	$("#workExperience").append (HTMLworkStart);
	var employer = HTMLworkEmployer.replace("%data%", work.jobs [job].employer);
	var title = HTMLworkTitle.replace("%data%", work.jobs [job].title);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs [job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs [job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs [job].description);
	$(".work-entry:last").append (employer + title + formattedDates + formattedLocation + formattedDescription);
}
}


 displayWork();

 $(document).click(function(loc) {
  // your code goes here
  console.log(loc);
  logClicks( loc.pageX, loc.pageY);
});


 
 function inName (name) {
 	var s = name.split(" ");	
 	var newName = s[0].slice (0,1).toUpperCase() + s[0].slice (1).toLowerCase() + " " + s[1].toUpperCase();
return newName;
 }
$("#main").append (internationalizeButton);

projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage)
			}
		}
	}

}
projects.display();

education.display = function () {
	for (school in education.school) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.school[school].name) +  HTMLschoolDegree.replace("%data%", education.school[school].degree);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.school[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.school[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.school[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	};
	for (course in education.onlineCourses){
		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedonlineTitlee = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedonlineTitlee +  formattedonlineSchool );
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedonlineDates);
		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedonlineURL);
	}
}
education.display();

$("#mapDiv").append(googleMap);

//$("#footerContacts").append();
//var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
//var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
//var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
//var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
//var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);