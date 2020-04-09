import * as Types from './constants';

// fetch product
export const fetchProduct = () => {
    return {
        type : Types.FETCH_PRODUCT
    }
}

export const fetchProductSuccess = (listProduct) => {
    return {
        type : Types.FETCH_PRODUCT_SUCCESS,
        listProduct
    }
}

export const fetchProductFail = (msg) => {
    return {
        type : Types.FETCH_PRODUCT_FAIL,
        msg
    }
}
