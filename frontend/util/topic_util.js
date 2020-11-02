

export const recieveTopics = () => (
    $.ajax({
        url: '/api/topics',
        method: 'GET',
        // data: {
        //     topics
        // }
    })
);

export const recieveTopic = topic => (
    $.ajax({
        url: `api/topics/${topic.id}`,
        method: 'GET',
    })
);


export const createTopic = topic => (
    $.ajax({
        url: '/api/topics',
        method: 'POST',
        data: { topic }
        
    })
);