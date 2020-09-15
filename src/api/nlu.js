import Api from './Api';

/*
********* MVP PRODUCT ******
*/
export async function fetchMessage(message) {  
	const RESPONSES = [
	'THIS IS WORKING STATICALLY'
	];
	return RESPONSES[0];
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