import React, {useEffect} from 'react';
import { InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import {createForm} from 'rc-form';
export interface LoginFormProps {
    form:{
        getFieldProps: Function;
        getFieldsValue: Function;
    },
    handleSubmit:Function
}
 
const LoginForm: React.FC<LoginFormProps> = ({form, handleSubmit}) => {
    const {getFieldProps, getFieldsValue} = form;
    useEffect(()=>{}, []);
    const submit = () => {
        let fieldValues =  getFieldsValue()
        handleSubmit(fieldValues);
    }
    return ( 
        <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <InputItem 
            {...getFieldProps('name')}
            type="text"
             clear>账号</InputItem>
            <InputItem type='password' {...getFieldProps('password')} clear>密码</InputItem>
            <WhiteSpace size="lg" />
            <Button type="primary" onClick={submit}>login</Button>
        </WingBlank>);
}
 
export default createForm()(LoginForm);