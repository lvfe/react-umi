import React, { useEffect } from 'react';
import styles from './index.less';

const User = ({dispatch}) => {
  useEffect(() => {
    // dispatch

    dispatch({ type: 'user/queryDetail' });
  }, []);
  const {name, icon} = user.detail;
  return (
    <div>
      <Headers name={name} icon={icon}/>
    </div>
  );
}
export default connect(({user})=>({user}))(User)