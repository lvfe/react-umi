import { extend } from 'umi-request';
const codeMessage = {
    200: 'retrn success'
};
const errorHandler = (error: {response: Response}):Response => {
    const { response } = error;
    if(response && response.status){
        const errorText = codeMessage[response.status] || response.statusText;
        const {status, url} = response;
        console.error({
            message: `request error ${status}: ${url}`,
            description: errorText
        });
        
    } else if(!response){
        console.error({
            message: `request error `,
            description: 'network error'
        });
        
    }
    return response;
};
const request = extend({
    errorHandler,
    credentials: 'include'
})
export default request;