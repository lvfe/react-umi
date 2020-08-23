import React, {useEffect} from 'react';
import ButtonNav from '../../components/ButtonNav';
import { connect } from 'umi';
import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';
interface BasicLayoutProps extends ConnectProps{
    user: UserModelState
}
interface BasicLayoutProps {}
const BasicLayout:React.FC<BasicLayoutProps> = props =>{
    const {children, location, dispatch, user} = props;
    const { pathname } = location;
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    useEffect(() => {
        //获取用户
        if(dispatch){
            dispatch({
                type: 'user/fetchCurrent'
            })
        }
     }, [])
    return (<div>
        <article>{children}</article>
        <footer>
            <ButtonNav pathname={pathname} />
        </footer>
    </div>);
}
export default connect(({ user }:ConnectState)=>({user}))(BasicLayout);
