import { request } from 'umi';

export async function fakeAccountLogin(params:type) {
    return request('/api/login', {
        method: 'post',
        data: params
    });
}