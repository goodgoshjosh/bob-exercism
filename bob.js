/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 /*   switch(message){
        case (message.toUpperCase() === message):
            return  "Whoa, chill out." 
        case (message.endsWith('?')):
            return "Sure."    
        default:
            return "Whatever."
    
    } */

export const hey = (message) => {
    message = message.trim()
    const question = message.endsWith('?')
    const yelling = message.toUpperCase() === message
    const empty = message === ""
    const letters = message.match(/[a-z]/i)
    let result;

    if (empty)
    result = "Fine. Be that way!"
    else if (yelling && question && letters)
    result = 'Calm down, I know what I\'m doing!'
    else if(question)
        result = "Sure."
    else if (yelling && letters)
        result = "Whoa, chill out!"
    else 
        result = "Whatever."
    return  result
};
