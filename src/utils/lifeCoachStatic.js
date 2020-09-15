import nanoid from 'nanoid';

//This normalize is from Watson Assistant Version >= 2019-02-01
export function lifeCoachToChat(response) {
	return {
		from: 'bot',
		type: 'text',
		message: response.output.generic.msg.text,
		sentAt: new Date(),
		id: nanoid()	
	}
}

export function chatToLifeCoach(message) {
	return {
		context: message[0].context,
		input: {
			text: message[0].message
		}
	}
}