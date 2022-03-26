import {all} from 'redux-saga/effects'
import { kaikasSaga } from './kaikas'
import { metamaskSaga } from './metamask'

export default function* rootSaga(){
    yield all([kaikasSaga(), metamaskSaga()])
}