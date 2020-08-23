import {Effect, Reducer} from 'umi';
import {queryCurrent, queryDetail} from '@/services/user';
import { Toast } from 'antd-mobile';
import Icon from '@ant-design/icons/lib/components/AntdIcon';
import { Reducer } from 'react';
interface CurrentUser {
    name?: string;
    icon?: string; 
    userid?: string;
}
interface DetailUser {
    name: string;
    icon: string;
    userid: string;
    email: string;
    phone: string;
    address: string;
    signature?: string;
    title?: string;
    tags?: {
        key: string;
        label: string;
    }[];
    country: string
}

export interface UserModelState {
    currentUser: CurrentUser;
    detail: 
    |DetailUser | {
        name: string;
        icon: string
    }
}
export interface UserModelType {
    namespace: 'user';
    state: UserModelState;
    effects: {
        fetchCurrent: Effect;
        login: Effect;
        queryDetail: Effect;
    };
    reducers: {
        saveUser: Reducer<UserModelState>;
        clearUser: Reducer<UserModelState>;
    }
}
const UserModel: UserModelType = {
    namespace: 'user',
    state: {
        currentUser: {},
        detail: {
            name: '',
            icon: ''
        }
    },
    effects: {
        *fetchCurrent(_, {call, put}){
            const response = yield call(queryCurrent);
            yield put({
                type: 'saveUser',
                payload: { currentUser: {...response} }
            })
        },
        *login({payload}, {call, put}){
            const response = yield call(fakeAccoutnlogin, payload);
            if(response.status === 1) {
                yield put({
                    type: 'saveUser',
                    payload: { currentUser: {...response} }
                });
            } else {
                Toast.fail(response.msg);
            }
        },
        *queryDetail(_, {call, put}){
            const response = yield call(queryDetail);
            yield put({
                type: 'saveUser',
                payload: {detail: {...response}}
            })
        },
    },
    reducers: {
        saveUser(state, action){
            return {...state, currentUser: action.payload.currentUser};
        },
        clearUser(state, action){
            return {...action.payload};
        }
    }
}
export default UserModel;