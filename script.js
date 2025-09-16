const api_url = "https://api.allorigins.win/get?url=https://zenquotes.io/api/random";

const quote = document.querySelector("#quote-display");
const quoteAuthor = document.querySelector("#author");
async function getQuote(url) {
    const response = await fetch(url + "&timestamp=" + Date.now());
    const data = await response.json();
    console.log(data);
    quote.innerHTML = JSON.parse(data.contents)[0].q;
    quoteAuthor.innerHTML = "- " + JSON.parse(data.contents)[0].a;
}
getQuote(api_url);


// this is not working now
function shareOnFacebook(quote, author) {
   const shareText = `${quote} ${author}`;
  const url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareText);

  window.open(url, "_blank");
};

document.querySelector("#facebook").addEventListener("click", function() {
    shareOnFacebook(quote.innerText, quoteAuthor.innerText);
});



