import { createStore } from 'redux';
import Counter from './containers/Reducer/counter';

const store = createStore(Counter);

export default store;