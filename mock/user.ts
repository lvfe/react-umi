import { Request, Response } from 'express';

function getCurrentUserInfo(){}

export default {
    'GET /api/currentUser': {
        status: 1,
        name: 'sherry',
        icon: '',
        userid: '001'
    },
    'GET /api/users': [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
    ],
    'POST /api/login':(req:Request, res:Response) =>{
        const {password, name} = req.body;
        if(password === '123' &&name==='123') {
            res.send({
                status: 1,
                name: 'sherry',
                icon: '',
                userid: '001' 
            })
        } else {
            res.send({
                status: 0,
                msg: 'password error'
            })
        }
    },
    'POST /api/logout': {
        data: {msg: 'success'}
    }
    
}