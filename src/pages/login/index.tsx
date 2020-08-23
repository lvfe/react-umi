import React from 'react';
import styles from './index.less';
import {connect, Redirect} from 'umi';
import { UserModelState, ConnectProps } from '@/models/connect';
import LoginForm from './LoginForm';

interface LoginProps extends ConnectProps {
  user: UserModelState
}
const Login = ({user, location}) => {
  const {userid} = user.currentUser;
  const isLogin = !!userid;
  if(isLogin){
    const { from='/' } = location.state || {};
    return <Redirect to={from}/>
  }
  const handleSubmit = (value)=>{
    dispatch({type: 'user/login', payload: value})
  }
  return (
    <LoginForm handleSubmit={handleSubmit} />
  );
}
export default connect(({user})=>({user}))(Login);
