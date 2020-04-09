import { put, call, takeLatest } from 'redux-saga/effects'
import {callApiDemo} from '../../../utils/apis/apiUnAuth';
import * as actions from './actions'
import * as Types from './constants'

function fetchProductApi() {
    return callApiDemo(`http://dummy.restapiexample.com/api/v1/employees`, 'GET', [])
        .then(res => res)
        .catch(error => error);
}


function* fetchProduct(action) {
    try {
        let product = yield call(fetchProductApi)           
        // if (msg.success === true) {            
        yield put(actions.fetchProductSuccess(product.data.data));
        // } else {
        // yield put(actions.fetchPartnerFail(partner));
        // }

    } catch (error) {
        yield put(actions.fetchProductFail(error));
    }
}


function* watchSaga() {
    yield takeLatest(Types.FETCH_PRODUCT, fetchProduct);
}

export default watchSaga;