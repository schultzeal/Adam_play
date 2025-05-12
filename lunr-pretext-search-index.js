var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-ratesofchange",
  "level": "1",
  "url": "sec-section-ratesofchange.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Here we talk about how we  really  love pretext. Sine is written .     first one      second one    First exercise here  Second exercise here   "
},
{
  "id": "exercises-play-1",
  "level": "2",
  "url": "sec-section-ratesofchange.html#exercises-play-1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  first one   "
},
{
  "id": "exercises-play-2",
  "level": "2",
  "url": "sec-section-ratesofchange.html#exercises-play-2",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "  second one   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
