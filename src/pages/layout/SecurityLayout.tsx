import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectState, ConnectProps } from '@/models/connect';
import { Redirect } from 'umi';
interface SecurityLayoutProps extends ConnectProps {}
 const SecurityLayout:React.FC<SecurityLayoutProps> =({
     user,
     children, 
     location
 }) => {
    const {userid} = user.currentUser;
    const isLogin = !!userid;
    if(!isLogin){
        return (<Redirect to={{pathname: '/login', state: {form: location.pathname}}}/>)
    }
    return children;
};

export default connect(({user}: ConnectState)=>({user}))(SecurityLayout)
