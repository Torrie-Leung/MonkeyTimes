const initState = {
  posts: [
    {id: '1', title: 'How Are Function Components Different from Classes?',body:'How do React function components differ from React classes?'},
    {id: '2', title: 'Fix Like No One’s Watching',body:'Some technical debt is in plain sight.'},
    {id: '3', title: 'Making setInterval Declarative with React Hooks',body:'If you played with React Hooks for more than a few hours, you probably ran into an intriguing problem: using setInterval just doesn’t work as you’d expect.'},
    {id: '4', title: 'Things I Don’t Know as of 2018',body:'We can admit our knowledge gaps, may or may not feel like impostors, and still have deeply valuable expertise that takes years of hard work to develop.'}
  ]
}

const rootReducer = (state = initState, action) => {
  console.log(action);
  if(action.type === 'DELETE_POST'){
    let newPosts = state.posts.filter( post => {
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer
