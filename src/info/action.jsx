import {ALL_TOPICS} from "./actionType"

 const allTopics = (Data) => {
    return {
        type: ALL_TOPICS,
        payload: Data,
    };
};

export { allTopics }
