export function JournalEntry(date, author, title, entry) {
  this.date = date;
  this.author = author;
  this.title = title;
  this.entry = entry;
}

JournalEntry.prototype.collectInput = function() {
  var output = [ this.date, this.author,  this.title, this.entry ];
  return output;
}

JournalEntry.prototype.wordCount = function() {
  var thisEntry = this.entry;
  return thisEntry.split(' ').length;
}

JournalEntry.prototype.vowelCount = function() {
  var thisEntry = this.entry;
  var vowels = thisEntry.match(/[aeiou]/gi);
  return vowels.length;
}

JournalEntry.prototype.consonantCount = function() {
  var thisEntry = this.entry;
  var consonants = thisEntry.match(/[^aeiou,.?! ]/gi);
  return consonants.length;
}

JournalEntry.prototype.getTeaser = function() {
  // var wordCount = this.entry.wordCount();
  var punctuation = this.entry.match(/[.!?]/);
  var firstSentence = this.entry.slice(0, (this.entry.indexOf(punctuation)+1));

  var firstSentenceArray = firstSentence.split(' ');
  if (firstSentenceArray.length <= 8) {
    return firstSentenceArray.join(' ');
  } else {
    return firstSentenceArray.slice(0, 8).join(' ') + " . . . ";
  }
}
