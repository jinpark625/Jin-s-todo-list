const body = document.querySelector('body');
const quote = document.querySelector('.quote');

const QUOTE_NUMBER = 5;

function writeQuote(quoteNumber){
    // const image = new Image();
    // image.src = `img/${imgNumber + 1}.png`;
    // image.classList.add('bgImage');
    // body.appendChild(image);
    const first = `Slow and steady win the race.<br/><br/>"Aesop"`
    const second = `You should set goals beyond your reach so you always have something to live for.<br/><br/>"Ted Turner"`
    const third = `A goal is not always meant to be reached, it often serves simply as something to aim at.<br/><br/>"Bruce Lee"`
    const fourth = `If the plan doesn’t work, change the plan, but never the goal.<br/><br/>"Unknown"`
    const fifth = `Vision without action is dayream. Action without vision is nightmare.<br/><br/>"Unknown"`

    if(quoteNumber == 0){
        quote.innerHTML = first;
    }else if(quoteNumber == 1){
        quote.innerHTML = second;
    }else if(quoteNumber == 2){
        quote.innerHTML = third;
    }else if(quoteNumber == 3){
        quote.innerHTML = fourth;
    }else if(quoteNumber == 4){
        quote.innerHTML = fifth;
    }
}

function genRandom(){
    const number = Math.floor(Math.random() * QUOTE_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    writeQuote(randomNumber);
}

init();