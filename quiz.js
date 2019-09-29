const STORE = [
    {
        question: "What is Naruto’s favorite food?",
        options: ["Ramen", "Potato Chips", "Barbecue", "Salad"],
        correctAnswer: "Ramen"
    },
    {
        question: "What is the name of the nine-tailed demon fox that is sealed inside of Naruto?",
        options: ["Shukaku", "Son Gokū", "Kurama", "Isobu"],
        correctAnswer: "Kurama"
    },
    {
        question: "Who was Naruto’s father?",
        options: ["Kakashi Hatake", "Jiraiya Sensei", "Madara Uchiha", "Minato Namikaze"],
        correctAnswer: "Minato Namikaze"
    },
    {
        question: "What is the name of the Fifth Hokage?",
        options: ["Lady Tsunade", "Kushina Uzumaki", "Kaguya Ōtsutsuki", "Sakura Haruno"],
        correctAnswer: "Lady Tsunade"
    },
    {
        question: "Who is Naruto’s best friend and rival?",
        options: ["Orochimaru", "Sasuke Uchiha", "Killer Bee", "Rock Lee"],
        correctAnswer: "Sasuke Uchiha"
    }
];

function renderCurrentScreen(){
    // This function will be responsible for rendering the current screen in the DOM
    console.log("renderCurrentScreen ran");
}

function clickToStart() {
    // This function will be responsible for when users click the "start quiz" button
    $("#start_button").on("click", (function (){
        event.preventDefault();
         // hide the start screen
        $("#start").addClass("invisible");
          // show the question screen
        $("#question").removeClass("invisible");
        console.log("clickToStart ran");
        newQuestion();
    }));
}



function newQuestion(){
    let questionIndex = 0;
    let currentQuestion = questionIndex +1;

    // do for each answer and index in function
    // add question text into questionTitle id
$("#questionTitle").append(STORE[questionIndex].question);
    // add options into radio button labels
    $("label[for=option_1]").html(STORE[questionIndex].options[0]);
    $("label[for=option_2]").html(STORE[questionIndex].options[1]);
    $("label[for=option_3]").html(STORE[questionIndex].options[2]);
    $("label[for=option_4]").html(STORE[questionIndex].options[3]);

    // update the current question counter
    let currentQuestionSentence = `Question ${currentQuestion} out of 5`;

    $("#questionNumber").append(currentQuestionSentence);
    console.log("newQuestion ran");
}


function caclulateCurrentScore() {
    // This function will be responsible for calculating the user's current score
    let currentScore = 0;
    let currenctScoreSentence = `Your current score is ${currentScore} out of 5`;
    $("#score").append(currenctScoreSentence);

}

/*
function submitAnswer() {
    // This function will be responsible for when users submit their answer
    let selectedAnswer = "Ramen";
    $("#submit").on("click", (function (){
        //if answer is true, show correct slide
        if (selectedAnswer === STORE[0].correctAnswer){
            $("#question").addClass("invisible");
            $("#correct").removeClass("invisible");
        } else {

        }
        // if answer is false, show incorrect slide
   
}
*/ 

function nextQuestion() {
    // This function will be responsible for when users click the "next question" button
}

function restartQuiz() {
    // This function will be responsible for when users click the "restart quiz" button
}

function renderQuiz() {
 // This function will be the callback when the page loads
 // activates individual functions that handle button and radio clicks
    renderCurrentScreen();
    clickToStart();
    caclulateCurrentScore();
    nextQuestion();
    restartQuiz();
}

// when the page loads, call `renderQuiz`
$(renderQuiz);