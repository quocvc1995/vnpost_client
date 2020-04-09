import { combineReducers } from 'redux';
import product from '../pages/admin/DemoProductPage/reducers';
const appReducers = combineReducers({
    product
});

export default appReducers;