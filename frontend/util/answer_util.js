export const recieveAllByQuestion = questionId => (
    $.ajax({
        url: `/api/questions/${questionId}/answers`,
        method: 'GET'
    })
)

export const writeAnswer = answer => (
    $.ajax({
        url: '/api/answers',
        method: 'POST',
        data: { answer }
    })
)


export const recieveAnswer = answerId => (
    $.ajax({
        url: `/api/answers/${answerId}`,
        method: 'GET'
    })
)

export const recieveAllAnswers = () => (
    $.ajax({
        url: '/api/answers',
        method: 'GET'
    })
)


export const deleteAnswer = answer=> (
    $.ajax({
        url: `/api/answers/${answer.id}`,
        method: 'DELETE'
    })
    )
    
    export const updateAnswer = (answer) => (
        $.ajax({
            url: `/api/answers/${answer.id}`,
            method: 'PATCH',
            data: { answer }
        })
    )



