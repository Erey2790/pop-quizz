var quizQuestions = [
    {
        question: "commonly used data types do not include",
        answers: [
            {text: "strings", correct: false },
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false},
        ]

    },
    {
        question: "the condition in an if/else statement is enclosed with",
        answers: [
            {text: "quotes", correct: false },
            {text: "curly brackets", correct: false},
            {text: "parenthesis", correct: true},
            {text: "square brackets", correct: false},
        ]
    },
    {
        question: "arrays in javascript can be used to store",
        answers: [
            {text: "numbers and strings", correct: false },
            {text: "other arrays", correct: false},
            {text: "booleans", correct: true},
            {text: "all the above", correct: false},
        ]
    },
    {
        question: "string values must be enclosed within___ when being assigned to variables.",
        answers: [
            {text: "commas", correct: false },
            {text: "curly brackets", correct: false},
            {text: "quotes", correct: true},
            {text: "parenthesis", correct: false},
        ]
    },
    {
        question: "a very useful tool used during development and debugging for printing content to the debugger is ",
        answers: [
            {text: "js", correct: false },
            {text: "terminal bash", correct: false},
            {text: "for loops", correct: true},
            {text: "console log", correct: false},
        ]
    },
];

var timer = document.getElementsByClassName("time-remaining");
var start = document.getElementsByClassName("start-btn");