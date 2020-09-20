import Api from './Api';
import * as LC from '../utils/lifeCoachStatic.js'

/*
********* MVP PRODUCT ******
*/
export async function fetchMessage(message) {  
	/*
    params :: 
    {
        context: message[0].context,
        input: {
            text: message[0].message
        }

    returns ::
    {context: '', text: ''}
    */
    // setTimeout(()=>console.log('waiting in setTimeout in fetchMessage function'), 3000);
    let response = LC.lifeCoachResponse(message);
	return response
}	

/*
****** BELOW FOR A REAL API ******
* 

export async function fetchMessage(message) {
    try {
        const res = await Api.post('/web/receive', message);
        return res.data;       
    } catch (err) {
        throw err
    }
}
*/