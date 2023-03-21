/* SARAHI TEJADA
Tarot Reader
*/

const majorArcana = {
    0: {name: 'The Fool', desc: 'You are encouraged to embrace all that lies ahead of you without worry.'},
    1: {name: 'The Magician', desc: 'You already have everything you need to move forward.'},
    2: {name: 'The High Priestess', desc: 'All the answers you are looking for are within. Trust your intuition.'},
    3: {name: 'The Empress', desc: 'Gentle and loving. Assume the role of the caretaker whether it is for yourself or others.'},
    4: {name: 'The Emperor', desc: 'A serious, discipline attitude is needed at this time. Assume the role of the leader.'},
    5: {name: 'The Hierophant', desc: 'You are encouraged to follow the rules. Find a spiritual perspective.'},
    6: {name: 'The Lovers', desc: 'You are confronted with a situation and you have to make a decision. Consider all the possible consequences of your choices.'},
    7: {name: 'The Chariot', desc: 'Upcoming victory! You are slowly but surely getting to where you want to be.'},
    8: {name: 'Strength', desc: 'You are strong enough to handle whatever you are facing. You will come out of this situation even stronger.'},
    9: {name: 'The Hermit', desc: 'Be still and listen. You are encouraged to take some time alone to reflect.'},
    10: {name: 'Wheel of Fortune', desc: 'Nothing is permanent, sometimes you are on top and sometimes you are in the bottom. Appreciate what this moment is bringing you.'},
    11: {name: 'Justice', desc: 'Make sure you are acting fairly in all your interactions with other people.'},
    12: {name: 'The Hanged Man', desc: 'Release what no longer serves you so that you can continue to move with your life.'},
    13: {name: 'Death', desc: 'Do not be afraid of this card. It represents change and that for new things to come some must stay in the past.'},
    14: {name: 'Temperance', desc: 'Peace and patience are key. Take things as they come and be flexible.'},
    15: {name: 'The Devil', desc: 'You might feel trapped or stuck. Remember: you can unlock your own destiny.'},
    16: {name: 'The Tower', desc: 'Something is falling apart and all you can do is let it happen. The most weak parts of your life must be torn apart so that something sturdy and strong can be built.'},
    17: {name: 'The Star', desc: 'Be optimistic, there is still hope and faith. The universe has your back!'},
    18: {name: 'The Moon', desc: 'The card of the unseen. Not everything that you see or hear is the absolute truth. Watch things come up to the surface.'},
    19: {name: 'The Sun', desc: 'You are moving in the right direction. Good things are coming your way.'},
    20: {name: 'Judgement', desc: 'Your past and future come together to review what you have done until now. You are called to review these things to ensure you are on the path that you want to be in.'},
    21: {name: 'The World', desc: 'Full circle. This is a card of completion. Thanks to a situation you now have a greater understanding of who you are and you are ready for the next phase of your journey.'}
};

const getCard = () => {
    return Math.floor(Math.random() * 22);
};

const populateSpread = () => {
    let spreadArray = [];
    while(spreadArray.length < 3){
        let tempNumber = getCard();
        if(spreadArray.indexOf(tempNumber) < 0){
            spreadArray.push(tempNumber);
        }
    }
    return spreadArray;
};

const spreadInterpretation = (name='soul') => {
    let i = 0;
    const spreadType = ['Situation', 'Action', 'Outcome'];
    console.log(`Hello, ${name}. Today is your lucky day.\n Take a look at your fortune, this is what the tarot has to say:\n`);
    return populateSpread().forEach(card => {
        console.log(`${spreadType[i].toUpperCase()} - ${majorArcana[card]['name']}: \n ${majorArcana[card]['desc']}\n`);
        i++;
    });
};

spreadInterpretation('Nobody');