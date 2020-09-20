import nanoid from 'nanoid';


//This normalize is from Watson Assistant Version >= 2019-02-01
export function lifeCoachToChat(response) {
	let chatResponse = [{
		from: 'bot',
		type: 'text',
		message: response.text,
		sentAt: new Date(),
		id: nanoid()	
	}]
	return chatResponse
}

export function chatToLifeCoach(message) {
	let LCInput = {
		context: message[0].context,
		input: {
			text: message[0].message
		}
	}
	return LCInput
}

/*
* logic below
*/
export const JOURNAL_QUESTIONS = [
"What is something that went well in your day today?", 
"What is something you can do today to bring yourself joy?", 
"What are you grateful for today?", 
"What is something beautiful you saw today? ", 
"What is something you can do today to bring yourself joy?", 
"What made you smile today? ", 
"How can you give love to your inner child today?", 
"In your day-to-day activities what is one activity during which you can practice smiling?", 
"What act of kindness can you give to someone right now?", 
"If your belly were a person, what would it say to you right now? ", 
"If you had unlimited resources and time what is something big you can do for someone? You can be creative here.",
"What would make today worthwhile?",
"What is your daily affirmation for yourself today?",
"What is is something you did today that you can improve upon tomorrow?",
"What is a big career impact you would like to have on the world?",
"What is a spiritual goal of yours?",
"For whom can you do an act of service today?",
"What is a dream act of service for you to give somebody?",
"What would the rules be if you created rules for your entire life?",
"What piece of advice would you give yourself?",
"What words would you like to live by?",
"When you are in pain, what is the kindest thing you can do for yourself?",
"What would you do if you loved yourself unconditionally?",
"What is enough for you?",
"If your belly is a person, what does it say?",
"What are the questions to which you urgently need answers?",
"What can you learn about to help you live a more fulfilling life?",
"What words do you need to hear?",
"What don't you want to write about?",
"Who are you now?",
"What experiences would have the most positive impact on your life?",
"Who do you spend the most time with? What is their impact on you?",
"Who do you admire? What do you admire in them?",
"What is one of the most painful experiences of your life? What have you learned from this experience?",
"What would you do if you didn't need to consider money or the opinions of others?",
"What do you do that brings you suffering? How can you improve this?",
"How do you spend your time? How do you spend your money?",
"What is your ideal budger using percentages? ie. 10% dance, 10% dining, ...",
"What is a book you wish someone would write?",
"Define the following: Success. Wisdom. Love. Faith. Truth. Courage. Joy. Happiness.",
"Who would you like to be? What would you like to do? How would you like to feel in these roles?",
"Imagine the life you wish to live. How does this feel? What are you doing?",
"What can you do better tomorrow if you live today again exactly?",
"If your throat is a person, what does it say?",
"What feels important to you right now?",
"How can you give love to the child that you are?",
"What are your intentions for the rest of the day?",
"Who is your highest self?",
"What act of kindness have you recently given to another person?",
"What act of kindness have you recently given to yourself?",
"What would the rules be if you created the rules for humanity?",
"Who is a role model of yours? What qualities do you admire in them?",
"What are you grateful for?",
"What are you looking forward to?",
"What made you smile today?", 
"What made you laugh today?",
"What made today a good day?",
"What made today awesome?",
"What was the best thing that happened to you today?",
"What's something kind someone did for you today?",
"What made today special?"
]

export const RESPONSE_FORM = {context: "undefined", text: ''};


export function lifeCoachResponse(message){
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
    let randomQuestion = getRandomQuestion();
    let response = RESPONSE_FORM;
    response.text = randomQuestion;
    return response
}

export function getRandomQuestion(){
	let questionListIndex = Math.floor( Math.random() * JOURNAL_QUESTIONS.length);
	let randomQuestion = JOURNAL_QUESTIONS[ questionListIndex ];
	return randomQuestion;
}



/*
the last of the below is the introductory message shown.
*/
export const INTRO_TEXT = "Welcome! I feel blessed to meet you. Thank you so much for joining me! <3 My name is Ami which is French for \"friend\". Whatever answers you come up with are completely valid, and I'm grateful to you for anything you would like to share. I'm really looking forward to getting to know you better. :)"
export const INTRO_RESPONSE = {...RESPONSE_FORM, text: INTRO_TEXT}
export const INTRO_MESSAGE = lifeCoachToChat( INTRO_RESPONSE )
