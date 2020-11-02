import * as TopicAPI from '../util/topic_util';


export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';

export const receiveTopics = topics => ({
    type: RECEIVE_TOPICS,
    topics
});

export const receiveTopic = topic => ({
    type: RECEIVE_TOPIC,
    topic
});


export const createTopic = (topic) => (dispatch) => (
    TopicAPI.createTopic(topic)
    .then((topic) => (dispatch(receiveTopic(topic)))
    )     
)

export const recieveTopics = () => dispatch => (
    TopicAPI.recieveTopics()
    .then((topics) => (dispatch(receiveTopics(topics)))
    )
)

export const recieveTopic = (id) => (dispatch) => (
    TopicAPI.recieveTopic(id)
    .then((topic) => (dispatch(receiveTopic(topic)))
    )
);