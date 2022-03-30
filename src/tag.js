var pos = require("pos");
var words = new pos.Lexer().lex(
  "This is some sample text. This text can contain multiple sentences."
);
var tagger = new pos.Tagger();
var taggedWords = tagger.tag(words);
console.log({ taggedWords });
for (let i in taggedWords) {
  var taggedWord = taggedWords[i];
  var word = taggedWord[0];
  var tag = taggedWord[1];
  console.log(word + " /" + tag);
}
