var questions = ["How are Placements", "How many Canteens are there?", "Which canteen is the best", "Where can i get my id Card", "which is the mechanical department"];
var answers = {"Sai Kumar(HOD@ME)": "Placements are conducted for the 3rd and 4th year students by the college. Many companies come to the college looking for candidates.",
  "Roshan(1BM20CS130)": "Hey bro placements will come you dont worry. Just attend classes and understand whats going on and try to get internships.",
  "Naagaa(1BM20CS085)": "Yes even I had this question and when I got it it all went very smoothly. The companies that come to BMS are very reputed and look for qualities in the student",
  "Meghaa(1BM20ME089)": "Hey placements will happen for you from next year. Just attend classes and understand whats going on and try to get internships.",
  "Siri(1BM20ME148)": "Yes even I had this question and when I got it it all went very smoothly. The companies that come to BMS are very reputed and look for qualities in the student",
}
var qList = document.getElementsByClassName("ques")[0];
var rList = document.getElementsByClassName("repo")[0];

questions.forEach((item) =>{
    qList.innerHTML += "<a style=\"text-decoration:none;color: inherit;\" ><div class=\"cardQ mb-2 border\"><div class=\"card-body \"><h5 class=\"card-title\">"+item+"</h5><h6 class=\"card-subtitle\">Tags : Placements, Teachers, Seniors</h6><p class=\"card-text\">I am a 2nd year student in the ME department and wanted to know how and when the placements are conducted in our college</p><button type='button' class='btn btn-outline-success'>Approve</button><button type='button' class='btn btn-outline-danger'>Reject</button></div></div></a>";
});

Object.entries(answers).forEach(([key,val]) => {
    rList.innerHTML += "<a style=\"text-decoration:none;color: inherit;\" ><div class=\"cardQ mb-2 border\"><div class=\"card-body \"><h5 class=\"card-title\">"+key+"</h5><p class=\"card-text\">"+val+"</p><button type='button' class='btn btn-outline-success'>Keep</button><button type='button' class='btn btn-outline-danger'>Remove</button></div></div></a>";
});