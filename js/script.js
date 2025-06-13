const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const learning = {};
learning.topic = "JS";
learning.learningGoals = [
  "Build JS Programs",
  "Learn Python",
  "Understand AI",
  "Have fun programming",
];

learning.category = "Front End Development";

learning.topicImportance = "High";

console.log(learning);

learning.topic = "JavaScript";

learning.learningGoals.splice(1, 1);

console.log(learning);

topicElement.innerText = `I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");

courtElement.innerText = `I have learning ${learning.learnGoals.length} learning goals.`;
courtElement.classList.remove("hide");
