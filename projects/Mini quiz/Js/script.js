//Write a function for the mini quiz so that when the Confirm button is clicked a point is given for each right answer. There is only one right answer per question
//The score should be displayed in a div with the id "score"
//Each right answer is 1 point. 
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the form submission
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission behavior

        let score = 0;
        let question1 = document.getElementsByName("question1");
        let question2 = document.getElementsByName("question2");
        let question3 = document.getElementsByName("question3");
        let question4 = document.getElementsByName("question4");
        let question5 = document.getElementsByName("question5");
        let scoreDiv = document.getElementById("score");

        if (question1[0].checked) {
            score++;
        }
        if (question2[0].checked) {
            score++;
        }
        if (question3[0].checked) {
            score++;
        }
        if (question4[0].checked) {
            score++;
        }
        if (question5[0].checked) {
            score++;
        }

        scoreDiv.innerHTML = `Your score is ${score}`;
    });
});