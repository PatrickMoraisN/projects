import { useSelector, useDispatch } from 'react-redux';

function App() {

  const name = useSelector(state => state.UsuarioReducer.name);
  const count = useSelector(state => state.ContadorReducer.count);
  const text = useSelector(state => state.ContadorReducer.text);
  const dispatch = useDispatch()

  const handlePatrick = () => dispatch({type: 'SET_NAME', payload: {name: 'Patrick'}})
  const handleCount = () => {
    dispatch({type:'INCREMENT_COUNT', payload:{count: count + 1, text: 'esse texto esta salvo'}});
  }
  return (
<>
<p>o nome eh {name}</p>
<button onClick={handlePatrick}>Mudar para Patrick</button>
<button onClick={handleCount}>{ text } + 1 : {count}</button>
</>
  );
}

export default App;
