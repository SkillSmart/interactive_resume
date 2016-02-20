/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Defining the information to my profile Biography

var skills = [
	"Behavioral Analysis",
	"Data Analytics in R",
	"Computational Statistics",
	"Python 2.7",
	"HTML 5", 
	"CSS 3",
	"Javascript",
	"jQuery",
	"Machine Learning Libraries in Python and R",
]

var bio = {
	"name": "Frank Fichtenmueller",
	"role": "Webdeveloper",
	"contacts": {
		"mobile": "0699-190-39013",
		"email": "frank.fichtenmueller@outlook.com",
		"github": "ffichtenmueller",
		"twitter": "@ffichtenmueller",
		"location": "Vienna, Austria" 
	},
	"welcomeMsg": "Developing interactive workflows on the web to make use of \
	data driven Decissionmaking in the Field of HR",
	"skills": skills,
	"bioPic": "" 
}

var work = {
	"jobs": [{
		"employer": "SMART Recruiting Technologies GmbH",
		"title": "COO - Founder",
		"location": "Vienna, Austria",
		"dates": "Sep.2015 - current",
		"description": "laksdjflk sd flksjd f aslkjflsadk f lakjsdl fkjasf lkj laskjdsf lkj lkajsdlf jlakjd sf \
		alkj lakjsd lfkja lskdjfl kj alksjdl fkjldsfj alsdj \
		alijlakjdflakj l alkjlk djflasdkjf ldsakfj lakjsdf lkajsdf laksdjf!"
	},
	{
		"employer": "APC Personnel Concepts GmbH",
		"title": "HR Consultant for IT & Pharma",
		"location":"Vienna, Austria",
		"dates":"May.2015 - Sep.2015",
		"description":"I was involved in redesigning the workflow for \
		Candidate Research and Diagnostic Procedures at APC."
	},
	{
		"employer": "KOMIT GmbH",
		"title": "HR Consultant for IT & Pharma",
		"location":"Vienna, Austria",
		"dates":"May.2015 - Sep.2015",
		"description":"I was working with disabled people."
	},
	{
		"employer": "Somebody else GmbH",
		"title": "HR Consultant for IT & Pharma",
		"location":"Vienna, Austria",
		"dates":"May.2015 - Sep.2015",
		"description":"I was involved in redesigning the workflow for \
		Candidate Research and Diagnostic Procedures at APC."
	}]
}

var projects = {
	"works":[{
		"title": "Portfolio Page",
		"dates": "Feb 2016",
		"description": 
		"A portfolio page following basic HTML5 and CSS3 guidlines for the use \
		in the Front-End Nanodegree Program at Udacity ",
		"images": ["https://my.vetmatrixbase.com/clients/12679/images/Gorgeous_puppies.jpg"]
	},
	{
		"title": "Interactive Resume",
		"dates": "Feb 2016",
		"description": "First interactive web project applying fundamental Javascript \
		to present updatable Resume to be incorporated in my professional webpage",
		"images": []
	},
	{
		"title": "1",
		"dates": "",
		"description": "",
		"images": [""]
	},
	{
		"title": "2",
		"dates": "",
		"description": "",
		"images": []
	},
	{
		"title": "3",
		"dates": "",
		"description": "",
		"images": []
	}]
}

var education = {
	"schools": [{
		"name": "Distance University of Hagen",
		"city": "Hagen, Germany",
		"degree": "BSc",
		"major": "Industrial and Organizational Psychology",
		"graduationYear": 2014
	}, {

		"name": "Distance University of Hagen",
		"city": "Hagen, Germany",
		"degree": "BSc",
		"major": "Industrial and Organizational Psychology"
	}],
	"onlineCourses": [{
		"courseTitle": "Front-end Development Nanodegree (Title)",
		"school": "Udacity.com (school)",
		"duration_planned": "6 - 8 month",
		"duration_actual": "2 month",
		"graduationYear": 2016,
		"courseDescr": "A in depth ",
		"courseContent": [
			"HTML5", "CSS3", "Javascript", "jQuery", "JSON",
			"Bootstrap Framework"
		],
		"courseProjects": [
			"Portfolio Homepage",
			"Interactive Resume",
			"Reviewed online Game 'Frogger'",
			"Neighborhood Map"
		],
		"courseURL": "",
		"certificateURL": ""
	}, {
		"courseTitle": "Machine Learning Engineering Nanodegree",
		"school": "Udacity.com",
		"duration_planned": "10 - 12 month",
		"duration_actual": "10 month",
		"graduationYear": 2016,
		"courseDescr": "",
		"courseContent": [
			"Python 2.7", "Scikit Learn", "Numpy", "Pandas", "jQuery", "JSON",
			"Bootstrap Framework"
		],
		"courseProjects": [
			"Portfolio Homepage",
			"Interactive Resume",
			"Reviewed online Game 'Frogger'",
			"Neighborhood Map"
		],
		"courseURL": "",
		"certificateURL": ""
	}, {
		"courseTitle": "Introduction to Programming with Python",
		"school": "Udacity.com",
		"duration_planned": "4 weeks",
		"duration_actual": "1 week",
		"graduationYear": 2015,
		"courseDescr": "Basic Syntax and use of Python 2.7",
		"courseContent": [
			"Python 2.7", "Datatypes", "Flow-Control"
		],
		"courseProjects": [],
		"courseURL": "",
		"certificateURL": ""
	}]
}

/* Setting the display properties for the infórmation sections*/

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);	
}

work.display = function() {
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
		$(".work-entry:last").append(formattedWorkDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
		$(".work-entry:last").append(formattedDescription);
		}
}

education.display = function() {
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
}

projects.display = function() {
	for(work in projects.works){
		$("#projects").append(HTMLprojectStart);

		var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.works[work].title);
		$(".project-entry:last").append(formattedProjTitle);

		var formattedProjDates = HTMLprojectDates.replace("%data%", projects.works[work].dates);
		$(".project-entry:last").append(formattedProjDates);

		var formattedProjDescrpt = HTMLprojectDescription.replace("%data%", projects.works[work].description);
		$(".project-entry:last").append(formattedProjDescrpt);

		if(projects.works[work].images.length > 0) {
			for (image in projects.works[work].images) {
				var formattedProjImage = HTMLprojectImage.replace("%data%", projects.works[work].images[image]);
				$(".project-entry:last").append(formattedProjImage);
			}	
		}
	}
}



/* Setting my basic information */

var formattedEmail = HTMLemail.replace("%data%", bio.name);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

bio.display();
work.display();
projects.display();
education.display();







for(course in education.onlineCourses){
	$('#online_courses').append(HTMLonlineStart);

	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].courseTitle);
	$('.online-entry:last').append(formattedOnlineTitle);

	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school); 
	$('.online-entry:last').append(formattedOnlineTitle);

	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].duration_actual);
	$('.online-entry:last').append(formattedOnlineDates);

	var formattedOnlineImage = HTMLonlineURL.replace("%data%", education.onlineCourses[course].ImageURL);
	$('.online-entry:last').append(formattedOnlineImage);

	var formattedOnlineDescrpt = HTMLonlineDescription.replace("%data%", education.onlineCourses[course].courseDescr);
	$('.online-entry:last').append(formattedOnlineDescrpt);

	var formattedOnlineCertif = HTMLonlineCertificate.replace("%data%", education.onlineCourses[course].certificateURL);
	$('.online-entry:last').append(formattedOnlineCertif);
}


// appending the information to the page


