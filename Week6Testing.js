let expect = chai.expect;

describe('Testing functions',function(){
    describe('#compare',function(){
        it('should compare 2 values and return 1',function(){
            let a = compare(12,5);
            expect(a).to.equal(1);//return 1 because first value is larger

        });
        it('should compare 2 values and return 2',function(){
            let b = compare(5,12)
            expect(b).to.equal(2);
        })
        it('should compare 2 values and return 0',function(){
            let c = compare(12,12)
            expect(c).to.equal(0);
        })
        
    });//test the compare function

    describe('#assignCards',function(){//test the assignCards functin before the deck is shuffled
        let deck = new Deck();
        deck.assignCards();
        it('should return the 3rd card in an unshuffled deck: 4 of Hearts',function(){
            expect(deck.cards[2].value).to.equal(4);
            expect(deck.cards[2].suit).to.equal('Hearts');
            expect(deck.cards[2].cardName).to.equal('4');
        });
        it('should return the last card in an unshuffled deck: Ace of Spades',function(){

            expect(deck.cards[deck.cards.length-1].value).to.equal(14);
            expect(deck.cards[deck.cards.length-1].suit).to.equal('Spades');
            expect(deck.cards[deck.cards.length-1].cardName).to.equal('Ace');
        });
    });
});