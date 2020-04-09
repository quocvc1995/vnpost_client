import ProductSaga from '../pages/admin/DemoProductPage/sagas';
import { fork } from 'redux-saga/effects'

export default function* IndexSaga () {  
  yield fork(ProductSaga);
}