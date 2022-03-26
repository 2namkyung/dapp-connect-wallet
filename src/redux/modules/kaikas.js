import { createActions, handleActions } from "redux-actions"
import { call, put, takeEvery } from "redux-saga/effects"
import KaikasService from "../../services/KaikasService"

const initialState = {
    address: '',
    isUnlocked: false,
    network: 0,
    klaytn: undefined
}

const prefix = 'wallet/kaikas'

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
const kaikas = handleActions({
    [CONNECT]: (state, action) => ({
        address: action.payload.address,
        isUnlocked: action.payload.isUnlocked,
        network: action.payload.network,
        klaytn: action.payload.klaytn
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

function* kaikasLoginSaga() {
    const state = yield call(KaikasService.connect)
    yield put(connect(state))
}

export function* kaikasSaga() {
    yield takeEvery(`${prefix}/LOGIN`, kaikasLoginSaga)
}

export default kaikas