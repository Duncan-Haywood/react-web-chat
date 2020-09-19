import Api from './Api';

/*
********* MVP PRODUCT ******
*/
export async function fetchMessage(message) {  
	/*
    input: 
    {
        context: message[0].context,
        input: {
            text: message[0].message
        }

    output:
    */
    const RESPONSES = [
	{context: "undefined", text: 'THIS IS WORKING STATICALLY'}
	];
    let response = RESPONSES[0];
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