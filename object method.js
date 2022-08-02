var Questions = [];


function addEntry ( questions , answer, option ) {
    Questions.push({
        questions,
        answer,
        option
    })
}

addEntry ('what is your name','boy', ['boy','girl']);

console.log(Questions)
console.log(Questions[0])