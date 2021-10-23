//selectors

const quotes = [
  {
    name:'A.C. Bhaktivedanta Swami Prabhupāda',
    quote:'Anyone who is steady in his determination for the advanced stage of spiritual realization and can equally tolerate the onslaughts of distress and happiness is certainly a person eligible for liberation'

  },{
    name:'Hg.Radhanath Swami Maharaj',
    quote:'Where there is no inner freedom, there is no life.'
  },{
    name:'Hg.Gaur Gopal Prabhuji',
    quote:'Live your life in such a way that those who know you but don’t know God, will come to know God because they know you'
  },{
    name:'Hg. Gaurang prabhuji',
    quote:'Four Arrows of Kamadev: 1)Harshanam – boy and girl indulging in flowery thoughts for each other 2)Roshanam – endeavoring hard to get each other 3)Shoshanam – exploiting each other 4)Maranam – killing each other.'
  },{
    name:'Maharshi Vevyas',
    quote:'This process of chanting is the best process of self-realization in this age; therefore Lord Caitanya preached it so nicely for the benefit of all humanity.'
  },
]

const button = document.querySelector('#btn');
const thoughts = document.querySelector('#goodthought');
const quoteAuthor = document.querySelector('h4');

//eventlistener
button.addEventListener('click' , displayQuote);


//function
function displayQuote(){

  let number = Math.floor(Math.random()*quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  thoughts.innerHTML = quotes[number].quote;
}