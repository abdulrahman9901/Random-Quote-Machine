

let currentQuote='';
let currentAuthor='';

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#113F21',
  '#287268',
  '#73A857'
];

document.getElementById('new-quote').addEventListener('click',newQuote);

document.getElementById('tweet-quote').addEventListener('click',tweet);

document.getElementById('tumblr-quote').addEventListener('click',toTumblr);


const url = "https://api.quotable.io/random";

function newQuote(){
	fetch(url)
.then(function(data) {
	   return data.json();
  })
  .then(function(data){    
  var color = Math.floor(Math.random() * colors.length);
  console.log(colors[color])
  $('html body').animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  );
  $('.button').animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );

  setTimeout($('.bg-info').attr('style', `background-color: ${colors[color]} !important`)
  , 1000)

	document.getElementById('text').innerHTML = data.content;
  document.getElementById("author").innerHTML = "- " + data.author;
 })
.catch(function(err) {
  console.log(err); 
  });

};

function tweet(){

currentQuote=document.getElementById('text').innerHTML;
currentAuthor=document.getElementById("author").innerHTML;
if(currentAuthor== "Source Title")
{return;}
  document.getElementById('tweet-quote').setAttribute(
    'href',
    'https://twitter.com/intent/tweet?hashtags=ABA_Quotes_Generator&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );
};


function toTumblr(){

  currentQuote=document.getElementById('text').innerHTML;
  currentAuthor=document.getElementById("author").innerHTML;
  if(currentAuthor== "Source Title")
    {return;}
    document.getElementById('tumblr-quote').setAttribute(
      'href',
      'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=ABA_Quotes_Generator&caption=' +
        encodeURIComponent(currentAuthor) +
        '&content=' +
        encodeURIComponent(currentQuote) +
        '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
    );
  };