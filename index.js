const questionsAndAnswers = [
  { 
    question:'What is Real Estate?', 
    answer1:'It is the selling of houses.',
    answer2: 'Land and any of the buildings that are built on it', 
    answer3: 'The art of gentrification',
    answer4: 'Igloos',
    answer: 'Land and any of the buildings that are built on it',
  },
  {
    question:'What is the engine for any REI business?', answer1:'The engine of any business is sales', answer2: 'It is selling at the highest price possible.', 
    answer3: 'The engine of any business is marketing.', answer4: 'It is selling at the lowest price possible.', answer: 'The engine of any business is marketing.',
  },
  {
    question:'What is the purpose of a RE website?', 
    answer1:'The purpose of a website is to find leads', answer2: 'The purpose of a website is to contact leads', 
    answer3: 'It is meant to capture leads.', answer4: 'To look professional', answer: 'It is meant to capture leads.',
  },
  {
    question:'Why is marketing essential?', 
    answer1:'Without marketing, we would have less jobs.', answer2: 'Marketing provides access to buyers', 
    answer3: 'Marketing gives investors hard money', answer4: 'Marketing is what generates all of the leads.', answer: 'Marketing is what generates all of the leads.',
  },
  {
    question:'What is a fix and flip?', 
    answer1:'It is buying a house in good condition and tearing it down for no reason.', answer2: 'A fix and flip is strategically turning a house upside down.', 
    answer3: 'It is buying a house that is in need of repair and fixing to sell it in a livable condition.', answer4: 'It means buying a house and renting it out.', answer: 'It is buying a house that is in need of repair and fixing to sell it in a livable condition.',
  },
  {
    question:`What is the main reason to buy and hold instead of selling it immediately?`, 
    answer1: 'You want to buy and hold a home if it is in an area with high appreciation.', answer2: 'You want to buy and hold if the house is super cute.', 
    answer3: 'Do not hold. Always sell.', answer4: 'Hold if it has four bedrooms.', answer: 'You want to buy and hold a home if it is in an area with high appreciation.',
  },
  {
    question:'What is MAO?', 
    answer1:'Nothing', answer2: 'The maximum allowable offer to make on a home.', 
    answer3: 'Muffins are overrated.', answer4: 'It is not this one.', answer: 'The maximum allowable offer to make on a home.',
  },
  {
    question:`What is the MAO formula?`, 
    answer1: '70%-repairs', answer2: '60%-repairs', 
    answer3: '300%-repair', answer4: '50%-repairs', answer: '70%-repairs',
  },
  {
    question:'Wholesale?', 
    answer1:'Wholesaling is selling multiple homes at once.', answer2: 'Trading a home for another.', 
    answer3: 'It is having a clearance on homes during black friday.', answer4: 'Charging an assignment fee to transfer all of the rights of a contract.', answer: 'Charging an assignment fee to transfer all of the rights of a contract.',
  },
  {
    question:'What mentality is needed to be successful in REI?  ', 
    answer1: 'Abundance mentality', answer2: 'scarce mentality', 
    answer3: 'It does not matter.', answer4: 'You do not need one.', answer: 'Abundance mentality',
  },
];

let score=0;
let i=0;
let question

//this will begin the quiz
function beginQuiz () {
  $('.startPage').on('click', '#startButton', function() {
    $('.title-page').hide();
    $('#startButton').hide();
    $('.quizQuestion').html(questionsForm());
    changeQuestion();
    console.log('check start button');
  });
}
// this will show page
function renderQuestionPage () {
  
}

//this is the html for the question form
function questionsForm () {
  //for (i=0; i < questionsAndAnswers.length; i++) {
    if (i < questionsAndAnswers.length) {
      return `<form>
      <fieldset class='js-question'>
        <legend class='question'>${questionsAndAnswers[i].question}</legend>
        <input type='radio' id='ans-1' name='Estate' value='${questionsAndAnswers[i].answer1}' checked required> 
        <label for='ans-1'>${questionsAndAnswers[i].answer1}</label> <br />
        <input type='radio' id='ans-2' name='Estate' value='${questionsAndAnswers[i].answer2}' required>
        <label for='ans-2'>${questionsAndAnswers[i].answer2}</label> <br />
        <input type='radio' id='ans-3' name='Estate' value='${questionsAndAnswers[i].answer3}' required>
        <label for='ans-3'>${questionsAndAnswers[i].answer3}</label> <br />
        <input type='radio' id='ans-4' name='Estate' value='${questionsAndAnswers[i].answer4}' required>
        <label for='ans-4'>${questionsAndAnswers[i].answer4}</label> <br />
        <input type='submit' role='button' id='submitAnswer' class='quiz-button' value='Submit' />
      </fieldset>
    </form>`;
    } else {
      restartEntireQuiz ();
    }
  //}
}//http://api.jquery.com/on/

//$( ".quizQuestion" ).on( "click", "form", function() { console.log( $( this ).text() ); });

//ths will show feedback page after submitting your answer
function renderAnswerPage () {
  $( '.quizQuestion' ).on( 'submit', function(event) {
    event.preventDefault();
    let answerChoice = $('input:checked').val();
    console.log(answerChoice);
    $('form').remove(); 
    if (answerChoice === questionsAndAnswers[i].answer) {
      $('.quizQuestion').html(generateCorrectAnswerPage());
      scoreBoard();
      changeScore();
    console.log('check next button is wired'); 
    } else {
      $('.quizQuestion').html(generateWrongAnswerPage());
      console.log('it is showing feedback for wrong answer?');
    } 
  });
}

//gets html for correct answer answerpage
function generateCorrectAnswerPage () {
    return `<div class="response">
  <h2 class= 'correct-response'>Correct!</h2>
  <button type="button" class="js-nextQuestion quiz-button" id='nextButton'>Next</button>
</div>`;
}

function generateWrongAnswerPage () {
  console.log('function to wrong answer');
  return `<div class= 'response'>
  <h2 class = 'incorrect-reponse'>The correct answer is: <br /> ${questionsAndAnswers[i].answer}</h2>
  <button type="button" class="js-nextQuestion quiz-button" id='nextButton'>Next</button>
  </div>`;
}

//takes you to next question when you are on feedback page
function nextQuestion () {
  $('.quizQuestion').on('click', '.js-nextQuestion', function () {
    console.log('next question button');
    questionNumber();
    $('.response').remove();
    $('.quizQuestion').html(questionsForm());
    changeQuestion();
  })
}

//this will keep track of question user is on
function questionNumber () {
  i+=1;
}
// will increase score by 1
function scoreBoard () {
  score+=1;
}

function changeScore () {
  $('.scoreCount').text(`Score:${score}/10`);
}

function changeQuestion () {
  if (i <= 9) {
    $('.bottom').html(`<p class= 'questionCount'> Question:${i+1}/10</p>`);
  } else {
    $('.questionCount').remove();
    $('.bottom').html(`<p class= 'questionCount'> Question:10/10</p>`);
  }
}

// this will show final page
function summaryPage () {
  console.log('done with quiz');
  return `<div class= 'last-page'>
  <h2 class = 'final-result'>Your final score is <br /> ${score}/10 <br /> But the truth is it doesn't matter where you start, as long as you get started.</h2>
  <button type='button' id='restart-test' class='quiz-button'>Finished</button>
  </div>`
  /*${generateButton({id:"startButton" class:"quiz-button" text: "Start"})}*/
}

//this will bring you to first page at any time
function restartQuizPage () {
  return `<h1 class='title-page'>Do You Have What It Takes to Be the Next Real Estate Mogul?<br /> Take the Test to Find Out</h1>
  <button type ='button' id='startButton' class='quiz-button'>Start</button>`;
}

//this restarts quiz once finished
function restartEntireQuiz () {
  $('.quizQuestion').html(summaryPage());
      $('.quizQuestion').on('click', '#restart-test', function () {
      $('.last-page').remove();
      $('.quizQuestion').html(restartQuizPage());
      score=0;
      i=0;
      $('.questionCount').remove();
      $('.scoreCount').text(`Score:${score}/10`);
      })
}

function runQuiz () {
  beginQuiz ();
  renderQuestionPage ();
  renderAnswerPage ();
  nextQuestion();
}
$(runQuiz);
