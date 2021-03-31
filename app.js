

let currentQuote='';
let currentAuthor='';


document.getElementById('new-quote').addEventListener('click',newQuote);

document.getElementById('tweet-quote').addEventListener('click',tweet);

const url = "https://api.quotable.io/random";

function newQuote(){
	fetch(url)
.then(function(data) {
	   return data.json();
  })
  .then(function(data){    
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
  document.getElementById('tweet-quote').setAttribute(
    'href',
    'https://twitter.com/intent/tweet?text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );
};
