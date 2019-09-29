const STORE = [
    {
        question: "What is Naruto’s favorite food?",
        options: ["Ramen", "Potato Chips", "Barbecue", "Salad"],
        image: "img/favorite_food.png",
        alt_tag: "small restaurant building",
        correctAnswer: "Ramen",
        lastQ: false
    },
    {
        question: "What is the name of the nine-tailed demon fox that is sealed inside of Naruto?",
        options: ["Shukaku", "Son Gokū", "Kurama", "Isobu"],
        image: "img/greybox.png",
        alt_tag: "nine tailed demon fox",
        correctAnswer: "Kurama",
        lastQ: false
    },
    {
        question: "Who was Naruto’s father?",
        options: ["Kakashi Hatake", "Jiraiya Sensei", "Madara Uchiha", "Minato Namikaze"],
        image: "img/greybox.png",
        alt_tag: "nine tailed demon fox",
        correctAnswer: "Minato Namikaze",
        lastQ: false
    },
    {
        question: "What is the name of the Fifth Hokage?",
        options: ["Lady Tsunade", "Kushina Uzumaki", "Kaguya Ōtsutsuki", "Sakura Haruno"],
        image: "img/greybox.png",
        alt_tag: "nine tailed demon fox",
        correctAnswer: "Lady Tsunade",
        lastQ: false
    },
    {
        question: "Who is Naruto’s best friend and rival?",
        options: ["Orochimaru", "Sasuke Uchiha", "Killer Bee", "Rock Lee"],
        image: "img/greybox.png",
        alt_tag: "nine tailed demon fox",
        correctAnswer: "Sasuke Uchiha",
        lastQ: true
    }
];


function clickToStart() {
    // This function will be responsible for when users click the "start quiz" button
    $("#start_button").on("click", (function (){
        event.preventDefault();
         // hide the start screen
        $("#start").addClass("invisible");
        console.log("clickToStart ran");
        newQuestion();
    }));
}

function evaluateState(){ 

}

function newQuestion(i){ 
    totalCorrect = 0;
    totalQuestions = STORE.length;

    for (i = 0; i < STORE.length; i++) {
        index = i;
        currentQuestion = i + 1;
        console.log(`total of i = ${i}`);
        console.log("pulling in question");
        // add question screen
        $('#question').html(`
            <h4 id="questionNumber" class="question_number" >Question ${currentQuestion} of ${totalQuestions}</h4>
            <h1 id="questionTitle" class="question_title">${STORE[i].question}</h1>
            <img src="${STORE[i].image}" alt="${STORE[i].alt_tag}" class="small_img center">
                    <div id="options" class="radio_container center">
                    <ul>
                            <li>
                                <input type="radio" name='option' value="${STORE[i].options[0]}">
                                <label for="option_1">${STORE[i].options[0]}</label>
                            </li>
                            <li>
                                <input type="radio" name='option' value="${STORE[i].options[1]}">
                                <label for="option_2">${STORE[i].options[1]}</label>
                            </li>
                            <li>
                                <input type="radio" name='option' value="${STORE[i].options[2]}">
                                <label for="option_3">${STORE[i].options[2]}</label>
                            </li>
                            <li>
                                <input type="radio" name='option' value="${STORE[i].options[3]}">
                                <label for="option_4">${STORE[i].options[3]}</label>
                            </li> 
                        </ul>
                    </div>
                    <button id="submit" class="button center">Submit</button>
                    <h5>You have ${totalCorrect} out of ${totalQuestions} questions correct.</h5>
         `);

         getRadioSelection();

        // when clicking submit button, if the selected radio button value is equal to correct answer, run correctAnswer function, else run incorrectAnswer function
         $("#submit").on("click", (function (){
            event.preventDefault();
            console.log(`${radioValue} is the submitted answer!`);
            
            if (radioValue === STORE[index].correctAnswer){
                correctAns();
            } else {
                incorrectAns();
            }
         }));     
/*
         if (i > STORE.length){
             break;
         }
         showResults();
    } */

    }

}


function getRadioSelection (){
     // get radio button selection
     $("input[type='radio']").click(function(){
        radioValue = $("input[name='option']:checked").val();
    });
} 

function correctAns(){
    console.log("ran correctAnswer");
    $(`#question`).empty();
    totalCorrect += 1;
     $(`#correct`).html(`<h4 class="question_number">Question ${currentQuestion} of ${totalQuestions}</h4>
        <h1 class="question_title">Correct!</h1>
        <img src="img/greybox.png" alt="alt tag" class="small_img center">
        <p class="explanation">This is an explanation paragraph.</p>
        <button id="nextQ" class="button center">Next Question</button>
        <h5 class="current_score" >Current score is ${totalCorrect} out of ${totalQuestions}.</h5>
        `);
    nextQuestion();      
}

function incorrectAns(){
    console.log("ran incorrect answer");
    $(`#question`).empty();
    $(`#incorrect`).html(`<h4 class="question_number">Question ${currentQuestion} of ${totalQuestions}</h4>
    <h1 class="question_title">Nope!</h1>
    <img src="img/greybox.png" alt="alt tag" class="small_img center">
        <p class="explanation">This is an explanation paragraph.</p>
        <button class="button center">Next Question</button>
        <h5 class="current_score" >Current score is ${totalCorrect} out of ${totalQuestions}.</h5>
    `);
    nextQuestion();
}

function nextQuestion() {
    // This function will be responsible for when users click the "next question" button
    $(`#nextQ`).on('click', function(){
        event.preventDefault();
        console.log("ran nextQuestion");
        $(`#correct`).empty();
        $(`#incorrect`).empty();
        newQuestion();
    });
    
}

function showResults(){    
    // This function will be responsible for showing users the results page
    $(`#results`).html(`
    <h1 class="question_title">Results</h1>
                <img src="img/greybox.png" alt="alt tag" class="img center">
                <p class="explanation">Your final score is X out of 5.</p>
                <button id="restart" class="button center">Start Over</button>

    `);
}

function restartQuiz() {
    // This function will be responsible for when users click the "restart quiz" button
    $(`#restart`).on('click', function(){
        console.log("ran restart");
    });

}


// when the page loads, call `renderQuiz`
$(clickToStart);