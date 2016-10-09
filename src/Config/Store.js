const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function store(state = initialState, action) {
  return [
    {
      id: 1,
      completed: false,
      text: action.text
    },
    ...state
  ]
}
