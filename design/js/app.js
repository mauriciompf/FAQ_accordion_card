const details = document.querySelectorAll("details");
const questions = document.querySelectorAll("summary");

details.forEach(question => {

	question.addEventListener("click", event => {
	
        const currentQuestion = event.currentTarget;
		details.forEach(otherQuestion => {
			if (otherQuestion != currentQuestion) {
				otherQuestion.open = false;
			}
		})

	})
})