export function getDecks(exDec) {
    const decks = [
        {
            name: 'Deck 0',
            questions: [
              {
                questiontxt: 'how are you',
                answer: 'great'
              },
              {
                 questiontxt: 'what are you',
                  answer: 'person'
              }
            ]
            ,
            
         },
          {
            name: 'Deck 1',
            questions: [
              {
                questiontxt: '1+1',
                answer: '2'
              },
            
            ]
            ,
            
         },
     ]    
    
    return typeof exDec === 'undefined'
    ? decks
    : decks[exDec]
}