export const askQuestion = question => (
    $.ajax({
        url: '/api/questions',
        method: 'POST',
        data: { question }
    })
)

export const recieveQuestion = questionId => (
    $.ajax({
        url: `/api/questions/${questionId}`,
        method: 'GET'
    })
)

export const recieveAllQuestions = () => (
    $.ajax({
        url: '/api/questions',
        method: 'GET'
    })
)