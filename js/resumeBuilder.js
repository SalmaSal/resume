var bio = {
    "name": "Salma Albaqmi",
    "role": "",
    "contacts": {
        "mobile": "0551115998",
        "email": "bs-4@hotmail.com",
        "github": "salmaSalem",
        "twitter": "@salooooma",
        "location": "Riyadh, Saudi Arabia"
    },
    "welcomeMessage": " HELLO I am graduated from Imam muhammad bin saud university with bachrole degree in computer sience",
    "skills": ["Team Player", " Deal with all microsoft office ", "English"],
	"biopic": "images/me.jpg"
	
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedName, formattedrole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    
    var formattedWelcom = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedWelcom, formattedBiopic);
    $("#header").append(HTMLskillsStart);
    for (var s = 0; s < bio.skills.length; s++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[s]);
        $("#skills").prepend(formattedSkill);
    }
};
var education = {
    "schools": [
    {
        "name": "imam",
        "location": "Riyadh",
        "degree": "bachrol",
        "majors": ["cs"],
        "dates": "2012",
        "url": "www.google.com"
    }, 
    {   "name": "king saud unvi",
        "location": "usa",
        "degree": "master",
        "dates": "2017",
        "majors": ["webDeveloper"],
        "url": "www.udacity.com"
    }
],
    "onlineCourses": [{
        "title": "front end developer",
        "school": "udacity",
        "dates": "2017",
        "url": "www.udacity.com"
    }]
};
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i=0 ; i<education.schools.length ; i++) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
    }

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (var online=0 ; online<education.onlineCourses.length ; online++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var formattedDatesonline = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
        $(".education-entry:last").prepend(formattedTitle, formattedSchool, formattedDatesonline, formattedUrl);
       
    }
};
var work = {
    "jobs": [{
        "employer": "* Saudi British Center",
        "title": "IT instructor",
        "location": "Riyadh",
        "dates": "2013-2015",
        "description": "traine students in computer skills course in Preparatory Year in princess norah university. "
    }, {
        "employer": "* International Company for Education & Advanced Training",
        "title": "Blackbored system Cordinator",
        "location": "Riyadh",
        "dates": "2016-2017",
        "description": "Train stuff members on how to using blackboard and deal with any problem in registration and using system. "
    }]
};
work.display = function() {
    for(var job=0 ;job<work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkEmployer.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedemployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDates, formattedLocation, formattedDescription);
    }
};
var projects = {
    "projects": [
        {
        "title": "Excel",
        "dates": "2015",
        "description": "I train student in Excel as three different level",
        "images": ["images/c1.jpg", "images/c2.jpg"]
    }, 
        {
        "title": "Black bored system cordinatior",
        "dates": "2016",
       "description": "Experience Certificate",
        "images": ["images/c3.jpg"]
        }
  ],
};
projects.display = function() {
    for (var item=0 ; item<projects.projects.length; item++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        for (var image=0; image<projects.projects[item].images.length ; image++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[item].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};
work.display();
projects.display();
//education.display();
bio.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
//$("#main").append(internationalizeButton);
//$("#mapDiv").append(googleMap);