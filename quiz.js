function clickToStart() {
    // naming a few global variables for use in multiple functions
    questionIndex = 0;
    totalCorrect = 0;
    totalQuestions = STORE.length;
    // This function will be responsible for when users click the "start quiz" button
    $("#start_button").on("click", (function (){
        event.preventDefault();
         // hide the start screen
        $("#start").addClass("invisible");
        console.log("clickToStart ran");

        evaluateState();
    }));
}

function evaluateState(){ 
    if (questionIndex === 0){
        newQuestion(0);
    } else if (questionIndex === 1){
        newQuestion(1);
    } else if (questionIndex === 2){
        newQuestion(2);
    } else if (questionIndex === 3){
        newQuestion(3);
    } else if (questionIndex === 4){
        newQuestion(4);
    } else {
        showResults();
    }
}

function newQuestion(i){ 
        currentQuestion = i + 1;
        index = i;
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
       //  questionIndex += 1;
    

}


function getRadioSelection (){
     // get radio button selection
     $("input[type='radio']").click(function(){
        radioValue = $("input[name='option']:checked").val();
    });
} 

function correctAns(){
    // this screen is visible to the use if they submitted the correct answer
    console.log("ran correctAnswer");
    $(`#question`).empty();
    totalCorrect += 1;
     $(`#correct`).html(`<h4 class="question_number">Question ${currentQuestion} of ${totalQuestions}</h4>
        <h1 class="question_title">Correct!</h1>
        <img src="${STORE[questionIndex].correctImage}" alt="${STORE[questionIndex].correct_alt}" class="small_img center">
        <p class="explanation">${STORE[questionIndex].explanation}</p>
        <button id="nextQ" class="button center">Next</button>
        <h5 class="current_score" >Current score is ${totalCorrect} out of ${totalQuestions}.</h5>
        `);
    questionIndex += 1;
    nextQuestion();      
}

function incorrectAns(){
    // this screen is visible to the use if they submitted the incorrect answer
    console.log("ran incorrect answer");
    $(`#question`).empty();
    $(`#incorrect`).html(`<h4 class="question_number">Question ${currentQuestion} of ${totalQuestions}</h4>
    <h1 class="question_title">Nope!</h1>
    <img src="${STORE[questionIndex].correctImage}" alt="${STORE[questionIndex].correct_alt}" class="small_img center">
        <p class="explanation">The correct answer is ${STORE[questionIndex].correctAnswer}. ${STORE[questionIndex].explanation}</p>
        <button id="nextQ" class="button center">Next</button>
        <h5 class="current_score" >Current score is ${totalCorrect} out of ${totalQuestions}.</h5>
    `);
    questionIndex += 1;
    nextQuestion();
}

function nextQuestion() {
    // This function will be responsible for when users click the "next question" button
    $(`#nextQ`).on('click', function(){
        event.preventDefault();
        console.log("ran nextQuestion");
        $(`#correct`).empty();
        $(`#incorrect`).empty();
        evaluateState();
    });
    
}

function showResults(){    
    // This function will be responsible for showing users the results page
    $(`#results`).html(`
    <h1 class="question_title">Your Results</h1>
    <img src="img/results.jpg" alt="naruto pointing" class="img center">
    <p class="explanation">Your final score is ${totalCorrect} out of ${totalQuestions}.</p>
    <button id="restart" class="button center">Start Over</button>
    `);
}

// when the page loads, call `clickToStart`
$(clickToStart);