import { JournalEntry } from './journal.js';
import './styles.css';

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    var date = $('#date').val();
    var author = $('#author').val();
    var title = $('#title').val();
    var entry = $('#entry').val();

    var newEntry = new JournalEntry(date, author, title, entry);

    var entryData = newEntry.collectInput();

    entryData.forEach(function(item) {
      $('#output').append("<p>" + item + "</p>");
    });
    var wordCount = newEntry.wordCount();
    $('#output').append(wordCount);

    var vowels = newEntry.vowelCount();
    $('#output').append(vowels);

    var consonants = newEntry.consonantCount();
    $('#output').append(consonants);

    var teaser = newEntry.getTeaser();
    $('#output').append('<p>Teaser: ' + teaser + '</p>');
  });
});
