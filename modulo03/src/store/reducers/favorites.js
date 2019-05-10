const INITIAL_STATE = []

export default function favorites (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return [
        ...state,
        {
          id: Math.random(),
          // name: action.payload.text,
          name: 'facebook/react',
          description:
            'Laborum do quis veniam eu nulla ut pariatur deserunt sit eu.',
          url: 'http://github.com/facebook/react'
        }
      ]
    // case 'REMOVE_TODO_REQUEST':
    //   return state.filter(todo => todo.id !== action.payload.id)
    default:
      return state
  }
}
