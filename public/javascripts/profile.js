var questions = ["How are Placements", "How many Canteens are there?", "Which canteen is the best", "Where can i get my id Card", "which is the mechanical department"];
var asked = document.getElementById("home")
var answered = document.getElementById("profile")
let q2 = questions
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

questions.forEach((item)=>{
    asked.innerHTML += "<a href='/question/"+item+"' style='text-decoration: none; color: black;'><div class='card' style='width: 700px;padding: 10px; border-radius: 5px;'><h5>"+item+"</h5></div></a>"
})

q2.forEach((item)=>{
    answered.innerHTML += "<a href='/question/"+item+"' style='text-decoration: none; color: black;'><div class='card' style='width: 700px;padding: 10px; border-radius: 5px;'><h5>"+item+"</h5></div></a>"
})