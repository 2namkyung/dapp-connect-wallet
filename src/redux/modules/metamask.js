import { createActions, handleActions } from "redux-actions"
import { call, put, takeEvery } from "redux-saga/effects"
import MetamaskService from "../../services/MetamaskService"

const initialState = {
    address: '',
    isUnlocked: false,
    network: 0,
    ethereum: undefined
}

const prefix = 'wallet/metamask'

// 액션 타입
export const CONNECT = `${prefix}/CONNECT`
export const LOCK = `${prefix}/LOCK`
export const NOT_INSTALLED = `${prefix}/NOT_INSTALLED`

// 액션 생성 함수
export const { connect, lock, notInstalled } = createActions(
    'CONNECT',
    'LOCK',
    'NOT_INSTALLED',
    { prefix }
)

// reducer
const metamask = handleActions({
    [CONNECT]: (state, action) => ({
        address: action.payload.address,
        isUnlocked: action.payload.isUnlocked,
        network: action.payload.network,
        ethereum: action.payload.ethereum
    }),

    [LOCK]: () => ({
        ...initialState
    }),

    [NOT_INSTALLED]: () => ({
        ...initialState
    })
}, initialState)

// saga
export const { login } = createActions('LOGIN', { prefix })

function* metamaskLoginSaga() {
    const state = yield call(MetamaskService.connect)
    yield put(connect(state))
}

export function* metamaskSaga() {
    yield takeEvery(`${prefix}/LOGIN`, metamaskLoginSaga)
}

export default metamask