/**
 * left off trying to out put score after winning game
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { emptyScheduled } from 'rxjs/internal/observable/empty';
// import { TIMEOUT } from 'dns';
// import { timeout } from 'q';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/************************************************************** */


/**
 * game class / Game object
 **/
class tastyMatch
{
  cardsArray: any;
  totalTime: any;
  timeRemaining: any;
  timer: HTMLElement;
  ticker: HTMLElement;
  cardToCheck: any;
  totalClicks: any;
  matchedCards: any[];
  busy: boolean;
  countDown: any;
  score: HTMLElement;
  time: HTMLElement;
  constructor(totalTime, cards)
  {
    // declare properties
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById('timeRamaining');
    // change this to this.flip
    this.ticker = document.getElementById('flips');
    this.score = document.getElementById('score');
    this.time = document.getElementById('time');
  }
  startGame()
  {
    // declare function properties
    this.cardToCheck = null;// selected card to check if it matches with next selected card
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.matchedCards = [];
    this.busy = true;

    // set timeout to wait before executing, delay game execution/start
    setTimeout(() =>
      {
        this.shuffleCards();
        this.countDown = this.startCountDown();
        this.busy = false;
      }, 600);
      this.hideCards();
  }

  /**
   * hideCards funtion
   * loops through cardsArray and removes classes
   **/
  hideCards()
  {
    this.cardsArray.forEach(card => 
    {
      card.classList.remove('visible');
      card.classList.remove('matched');
    });
  }

  /**
   * showCards() funtion
   * shows all cards if you lost the game
   **/

  showCards()
  {
    this.cardsArray.forEach(card => 
    {
      card.classList.add('visible');
    });
  }

  /**
   *Shuffle cards using fisher and Yates shuffle algorithm
   */
  shuffleCards()
  {
    for(let i = this.cardsArray.length - 1; i > 0; i--)
    {
      let randIndex = Math.floor(Math.random() * (i+1));
      this.cardsArray[randIndex].style.order = i;
      this.cardsArray[i].style.order = randIndex;
    }
  }

  /**
   *can flip card yes or no
   * */
  canFlipCard(card)
  {
    // check to see if you can flip card (if all three statements are flase then return true)
    return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck);
  }

  /**
   *flipCard funtion
   **/
   flipCard(card)
   {
    if(this.canFlipCard(card))
    {
      this.totalClicks++;
      //?? question again
      this.ticker.innerText = this.totalClicks;
      card.classList.add('visible');
      if(this.cardToCheck)
      {
        this.checkForCardMatch(card);
      }
      else
      {
        this.cardToCheck = card;
      }

    }
   }

   /**
    *checkForCardMatch() function
    checks if cards match and confirms that they match or not
    **/
   checkForCardMatch(card)
   {
    if(this.getCardType(card) === this.getCardType(this.cardToCheck))
    {
      this.cardMatch(card, this.cardToCheck);
    }
    else
    {
      this.cardMisMatch(card, this.cardToCheck);
    }
    this.cardToCheck = null;
   }

   /**
    * getCardType() function
    * returns the card type, which is a string based on src e.g ("./assets/icons/png/cheese.png")
    **/
   getCardType(card)
   {
    return card.getElementsByClassName('cardValue')[0].src;
   }

   /**
    * cardMatch() function
    * takes matched cards and pushes them to the matcheCards array and adds matched class
    **/
   cardMatch(card1, card2)
   {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
    card1.classList.add('matched');
    card2.classList.add('matched');
    if(this.matchedCards.length === this.cardsArray.length)
    {
      this.victory();
    }
   }

   /**
    * cardMisMatch() funtion
    **/
   cardMisMatch(card1, card2)
   {
      this.busy = true;
      setTimeout(()=>
      {
        card1.classList.remove('visible');
        card2.classList.remove('visible');
        this.busy = false;
      }, 1000);
   }

   /**
   * startCountdonw() funtion
   * starts the game countdown
   **/
  startCountDown()
  {
    return setInterval(()=>
    {
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if(this.timeRemaining === 60)
      {
        document.getElementById('timeRamaining').classList.add('tmr1');
      }
      if(this.timeRemaining === 30)
      {
        document.getElementById('timeRamaining').classList.add('tmr2');
      }
      if(this.timeRemaining === 0)
      {
        this.gameOver();
      }
    }, 1000);
  }

  /**
   * victory() function
   * displays victory widget on game completion
   **/
  victory()
  {
    document.getElementById('victoryText').classList.add('visible');
    clearInterval(this.countDown);
    this.score.innerText = '123';
    this.time.innerText = '(120 - this.timeRemaining)';
  }

   /**
   * GameOver() function
   **/
  gameOver()
  { 
    //show gameOver screen/widget
    document.getElementById('timeRamaining').classList.remove('tmr','tmr1','tmr2');
    
    // clear countdown
    clearInterval(this.countDown);
    this.showCards();
    return setInterval(()=>
    {
      this.score.innerText;
      this.time.innerText;
      document.getElementById('gameOverText').classList.add('visible');
    },150);
  }
}


/**
 * ready() function 
 **/
function ready()
{
  // grab overlays by class name and put them in an array
  let overlays = Array.from(document.getElementsByClassName('overlayText'));// put html collection into an array
  // grab cards by class name and put them in an array
  let cards = Array.from(document.getElementsByClassName('card'));
  // declare game instace
  let game = new tastyMatch(4, cards);
  
  /**
   * loop through overlays and add 'click' eventListeners
   **/ 
  overlays.forEach(overlay => 
    {
      overlay.addEventListener('click', () =>
      {
        overlay.classList.remove('visible');
        // initialize game
        document.getElementById('timeRamaining').classList.add('tmr');
        game.startGame();
      });
    });
  cards.forEach(card => 
    {
      card.addEventListener('click', () => 
      {
        // flip card
        game.flipCard(card);
      });
    });
}


/**
 * if statement calls the ready() funtion
 **/
if(document.readyState === 'loading')
{
  /**
   * call ready() funtion when document is finished loading 
   * */
  //***** ??question remove arrow funtion and ask why it gives the error
  document.addEventListener('DOMContentLoaded', () => ready());// function ready initializes the whole program
} 
else
{
  ready();
}