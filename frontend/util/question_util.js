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
    export const searchAllQuestions = search => (
        console.log(search),
        $.ajax({
            url: '/api/questions',
            method: 'GET',
            data: {
                search
            }
        })
    )
    
export const deleteQuestion = question => (
    $.ajax({
        url: `/api/questions/${question.id}`,
        method: 'DELETE',
    })
   
);
export const updateQuestion = question => (
    $.ajax({
        url: `/api/questions/${question.id}`,
        method: 'PATCH',
        data: {
            question
        }
    })
);

export const recieveAllAnswersByQuestion = questionId => (
    $.ajax({
        url: `/api/questions/${questionId}/answers`,
        method: 'GET'
    })
)