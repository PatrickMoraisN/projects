import { combineReducers } from 'redux';
import UsuarioReducer from './UsuarioReducer';
import ContadorReducer from './ContadorReducer';

export default combineReducers({
  UsuarioReducer,
  ContadorReducer,
})