var htmlCssQuiz = [
    {
        que: "What does HTML stand for?",
        ans1: "Hyper Text Markup Language",
        ans2: "High Text Machine Language",
        ans3: "Hyperlink and Text Markup Language",
        ans4: "Home Tool Markup Language",
        anskey: "Hyper Text Markup Language"
    },
    {
        que: "Which HTML tag is used to define an internal style sheet?",
        ans1: "&lt;script&gt;",
        ans2: "&lt;style&gt;",
        ans3: "&lt;css&gt;",
        ans4: "&lt;link&gt;",
        anskey: "&lt;style&gt;"
    },
    {
        que: "What is the correct HTML element for the largest heading?",
        ans1: "&lt;h1&gt",
        ans2: "&lt;heading&gt",
        ans3: "&lt;h6&gt",
        ans4: "&lt;head&gt",
        anskey: "&lt;h1&gt"
    },
    {
        que: "Which property is used in CSS to change the background color?",
        ans1: "background-color",
        ans2: "bgcolor",
        ans3: "color",
        ans4: "background",
        anskey: "background-color"
    },
    {
        que: "Which is the correct syntax for adding a comment in CSS?",
        ans1: "// This is a comment",
        ans2: "/* This is a comment */",
        ans3: "&lt;!-- This is a comment --&gt;",
        ans4: "' This is a comment",
        anskey: "/* This is a comment */"
    },
    {
        que: "Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
        ans1: "alt",
        ans2: "src",
        ans3: "title",
        ans4: "href",
        anskey: "alt"
    },
    {
        que: "Which CSS property is used to change the text color of an element?",
        ans1: "text-color",
        ans2: "color",
        ans3: "font-color",
        ans4: "background-color",
        anskey: "color"
    },
    {
        que: "How do you make a list that lists the items with bullets in HTML?",
        ans1: "&lt;list&gt",
        ans2: "&lt;ol&gt",
        ans3: "&lt;ul&gt",
        ans4: "&lt;dl&gt",
        anskey: "&lt;ul&gt"
    },
    {
        que: "Which CSS property controls the text size?",
        ans1: "font-style",
        ans2: "text-style",
        ans3: "font-size",
        ans4: "text-size",
        anskey: "font-size"
    },
    {
        que: "How can you open a link in a new tab or window in HTML?",
        ans1: "target='_self'",
        ans2: "target='_blank'",
        ans3: "target='_new'",
        ans4: "target='_parent'",
        anskey: "target='_blank'"
    },
    {
        que: "Which HTML tag is used to create a table?",
        ans1: "&lt;table&gt",
        ans2: "&lt;tr&gt",
        ans3: "&lt;td&gt",
        ans4: "&lt;tab&gt",
        anskey: "&lt;table&gt"
    },
    {
        que: "Which HTML attribute is used to define inline styles?",
        ans1: "class",
        ans2: "style",
        ans3: "id",
        ans4: "styles",
        anskey: "style"
    },
    {
        que: "What is the correct CSS syntax to make all paragraphs bold?",
        ans1: "p {font-weight: bold;}",
        ans2: "&lt;p style='font-weight: bold';&gt",
        ans3: "p {text-size: bold;}",
        ans4: "&lt;p style='text-size: bold;'&gt",
        anskey: "p {font-weight: bold;}"
    },
    {
        que: "Which HTML tag is used to define a hyperlink?",
        ans1: "&lt;a&gt",
        ans2: "&lt;link&gt",
        ans3: "&lt;href&gt",
        ans4: "&lt;hyperlink&gt",
        anskey: "&lt;a&gt"
    },
    {
        que: "How do you apply a class in HTML?",
        ans1: "class='classname'",
        ans2: "style='classname'",
        ans3: "id='classname'",
        ans4: "apply='classname'",
        anskey: "class='classname'"
    }
];

// *************Render Question *******************

var question = document.getElementById('question')
var opt1 = document.getElementById('textOpt1')
var opt2 = document.getElementById('textOpt2')
var opt3 = document.getElementById('textOpt3')
var opt4 = document.getElementById('textOpt4')
var ans = document.getElementsByClassName('answer1')
var btn = document.getElementById('next')
var inp1 = document.getElementById('ans1')
var inp2 = document.getElementById('ans2')
var inp3 = document.getElementById('ans3')
var inp4 = document.getElementById('ans4')

opt1.style.cursor = 'pointer'
opt2.style.cursor = 'pointer'
opt3.style.cursor = 'pointer'
opt4.style.cursor = 'pointer'

var queCount = 0
var score = 0

function htmlcss() {
    var getQuestion = htmlCssQuiz[queCount]
    question.innerHTML = getQuestion.que
    opt1.innerHTML = getQuestion.ans1
    opt2.innerHTML = getQuestion.ans2
    opt3.innerHTML = getQuestion.ans3
    opt4.innerHTML = getQuestion.ans4
    inp1.value = getQuestion.ans1
    inp2.value = getQuestion.ans2
    inp3.value = getQuestion.ans3
    inp4.value = getQuestion.ans4
}
window.onload = htmlcss()

function next() {
    for (var i = 0; i < ans.length; i++) {
        if (ans[i].checked) {
            console.log(ans[i].value)
            if (ans[i].value === htmlCssQuiz[queCount].anskey) {
                score++
            }
        }
    }
    console.log(score)
    queCount++

    //Next Question
    if (queCount < htmlCssQuiz.length) {
        htmlcss()
        unSelect()

    } else {

        document.getElementById('quizWindow').style.display = 'none';
        document.getElementById('resultWindow').style.display = 'block';

        var totalQue = document.getElementById('totalQue');
        var correctQue = document.getElementById('correctQue');
        totalQue.innerText = htmlCssQuiz.length;
        correctQue.innerText = score;
        var per = document.getElementById('per');
        var CalculatePer = (score / htmlCssQuiz.length) * 100;
        per.innerText = Math.round(CalculatePer) + "%";

        var resultData = {
            totalQuestions: htmlCssQuiz.length,
            correctQuestions: score,
            percentage: (score / htmlCssQuiz.length) * 100
        };

        localStorage.setItem('quizResults', JSON.stringify(resultData));

        if (CalculatePer < 70) {
            var msg = document.getElementById('result')
            var dial = document.getElementById('dial')
            msg.innerText = 'Better Luck Next Time ! You Failed'
            msg.style.color = 'red'
            dial.style.borderColor = 'red'
        } else {
            var msg = document.getElementById('result')
            var dial = document.getElementById('dial')
            msg.innerText = 'Congratulations ! You Passed'
            msg.style.color = 'green'
            dial.style.borderColor = 'green'
        }
    }
}

function unSelect() {
    for (var i = 0; i < ans.length; i++) {
        ans[i].checked = false
    }
}

function back() {
    window.location.href = '../welcome.html'
}

//********* */ Already Attemted ************

function checkQuizAttempt() {
    var storedData = JSON.parse(localStorage.getItem('quizResults'));

    if (storedData) {
        document.getElementById('quizWindow').style.display = 'none';
        document.getElementById('resultWindow').style.display = 'block';

        document.getElementById('name2').innerText = `Attempted !`;
        document.getElementById('totalQue').innerText = storedData.totalQuestions;
        document.getElementById('correctQue').innerText = storedData.correctQuestions;

        var per = document.getElementById('per');
        per.innerText = Math.round(storedData.percentage) + "%";

        var msg = document.getElementById('result');
        var dial = document.getElementById('dial');

        if (storedData.percentage < 70) {
            msg.innerText = 'Better Luck Next Time! You Failed';
            msg.style.color = 'red';
            dial.style.borderColor = 'red';
        } else {
            msg.innerText = 'Congratulations! You Passed';
            msg.style.color = 'green';
            dial.style.borderColor = 'green';
        }
    } else {
        document.getElementById('quizWindow').style.display = 'block';
        document.getElementById('resultWindow').style.display = 'none';
    }
}

window.onload = checkQuizAttempt;

//*********** */ Restart Quiz *********************

function restartQuiz() {
    localStorage.removeItem('quizResults');
    document.getElementById('resultWindow').style.display = 'none'; 
    document.getElementById('quizWindow').style.display = 'block';
}



