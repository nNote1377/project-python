function calculateScore() {
    var score = 0;
    var answers = ["a", "b", "a", "b", "a", "a", "d", "a", "b", "a"]; // Array of correct answers

    // Loop through each question
    for (var i = 1; i <= 10; i++) {
        var selectedOption = document.querySelector('input[name="q' + i + '"]:checked');
        if (selectedOption) {
            if (selectedOption.value === answers[i - 1]) {
                score++;
            }
        }
    }

    // Display the score
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Your score is: ' + score + ' out of 10';
}