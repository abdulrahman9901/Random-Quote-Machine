

let currentQuote='';
let currentAuthor='';

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {

    let r = randomInteger(255);

    let g = randomInteger(255);

    let b = randomInteger(255);

    return [r,g,b];

}

function randomHexColor() {
   let [r,g,b] = [0,0,0];
let tryCount = 0;
  do {
    if (tryCount > 1000) {
      // Give up after 1000 tries
      color = '#000000';
      break;
    }
    for (let i = 0; i < 6; i++) {
    [r,g,b] =randomRgbColor();
    }
    tryCount++;
  } while (getBrightness({r,g,b}) > 128);

    let hr = r.toString(16).padStart(2, '0');

    let hg = g.toString(16).padStart(2, '0');

    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;

}


function getBrightness(rgb) {
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}

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
  console.log("colors[color] : ",colors[color])
  var randcolor = randomHexColor();
  randcolor === "#000000" ? colors[color] : randcolor
  console.log("randcolor : ",randcolor)
   $('html body').animate(
    {
      backgroundColor: randcolor,
      color: randcolor
    },
    1000
  );
  $('#a').animate(
    {
      backgroundColor: randcolor
    },
    1000
  );
/*
setTimeout(() => {
  $('.bg-info').attr('style', `background-color: ${randcolor} !important`);
}, 700);
*/
 $('#info').animate(
    {
      backgroundColor: randcolor
    },
    1000
  );		
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
    'https://twitter.com/intent/tweet?hashtags=BQG&text=' +
      encodeURIComponent(' " ' + currentQuote + ' " '+ "%25250A" + currentAuthor)
  );
};


function toTumblr(){

  currentQuote=document.getElementById('text').innerHTML;
  currentAuthor=document.getElementById("author").innerHTML;
  if(currentAuthor== "Source Title")
    {return;}
    document.getElementById('tumblr-quote').setAttribute(
      'href',
      'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=BQG&caption=' +
        encodeURIComponent(currentAuthor) +
        '&content=' +
        encodeURIComponent(currentQuote) +
        '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
    );
  };
