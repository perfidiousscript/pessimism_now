$( document ).ready(function() {
  // {'quote':'','author':''},
  var quotes = [
    {'quote':'The person who writes for fools is always sure of a large audience.','author':'Arthur Schopenhauer'},
    {'quote':'It is difficult to find happiness within oneself, but it is impossible to find it anywhere else.','author':'Arthur Schopenhauer'},
    {'quote':'Every miserable fool who has nothing at all of which he can be proud, adopts as a last resource pride in the nation to which he belongs; he is ready and happy to defend all its faults and follies tooth and nail, thus reimbursing himself for his own inferiority.','author':'Arthur Schopenhauer'},
    {'quote':'Life is a constant process of dying.','author':'Arthur Schopenhauer'},
    {'quote':'It would be better if there were nothing. Since there is more pain than pleasure on earth, every satisfaction is only transitory, creating new desires and new distresses, and the agony of the devoured animal is always far greater than the pleasure of the devourer.','author':'Arthur Schopenhauer'},
    {'quote':'Hope is the confusion of the desire for a thing with its probability.','author':'Arthur Schopenhauer'},
    {'quote':'We can regard our life as a uselessly disturbing episode in the blissful repose of nothingness.','author':'Arthur Schopenhauer'},
    {'quote':'If children were brought into the world by an act of pure reason alone, would the human race continue to exist? Would not a man rather have so much sympathy with the coming generation as to spare it the burden of existence, or at any rate not take it upon himself to impose that burden upon it in cold blood?','author':'Arthur Schopenhauer'},
    {'quote':'Life swings like a pendulum backward and forward between pain and boredom.','author':'Arthur Schopenhauer'},
    {'quote':'The life of every individual, viewed as a whole and in general, and when only its most significant features are emphasized, is really a tragedy; but gone through in detail it has the character of a comedy.','author':'Arthur Schopenhauer'},
    {'quote':'The shortness of life, so often lamented, may be the best thing about it.','author':'Arthur Schopenhauer'},
    {'quote':'Human life must be some kind of mistake. The truth of this will be sufficiently obvious if we only remember that man is a compound of needs and necessities hard to satisfy; and that even when they are satisfied, all he obtains is a state of painlessness, where nothing remains to him but abandonment to boredom. This is direct proof that existence has no real value in itself; for what is boredom but the feeling of the emptiness of life? If life—the craving for which is the very essence of our being—were possessed of any positive intrinsic value, there would be no such thing as boredom at all: mere existence would satisfy us in itself, and we should want for nothing.','author':'Arthur Schopenhauer'},
    {'quote':"Pleasure is never as pleasant as we expected it to be and pain is always more painful. The pain in the world always outweighs the pleasure. If you don't believe it, compare the respective feelings of two animals, one of which is eating the other.",'author':'Arthur Schopenhauer'},
    {'quote':'The safest way of not being very miserable is not to expect to be very happy.','author':'Arthur Schopenhauer'},
  ]
  var quote = ''
  var quotes_length = quotes.length
  quote_index = Math.floor(Math.random() * Math.floor(quotes_length));
  quote = quotes[quote_index]
  $('#quote').text(quote['quote'])
  $('#author').text(quote['author'])
})
