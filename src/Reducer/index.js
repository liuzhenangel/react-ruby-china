import { combineReducers } from 'redux'
import {
  TOPIC,
  TOPICS
} from '../Action'

const postsByReddit = (state={}, action) => {
  switch (action.type) {
    case TOPICS:
      return {
        ['results']: {
          type: action.type,
          topics: action.results,
        }
      }
    case TOPIC:
      return {
        ['results']: {
          type: action.type,
          topic: action.results.topic,
          replies: action.results.replies
        }
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByReddit
})

export default rootReducer
