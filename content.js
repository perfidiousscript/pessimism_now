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
    {'quote':'Almost all of our sorrows spring out of our relations with other people. There is no more mistaken path to happiness than worldliness.','author':'Arthur Schopenhauer'},
    {'quote':'The safest way of not being very miserable is not to expect to be very happy.','author':'Arthur Schopenhauer'},
    {'quote':'To attain something desired is to discover how vain it is; and…though we live all our lives in expectation of better things, we often at the same time long regretfully for what is past. The present, on the other hand, is regarded as something quite temporary and serving only as the road to our goal. That is why most men discover when they look back on their life that they have the whole time been living ad interim, and are surprised to see that which they let go by so unregarded and unenjoyed was precisely their life, was precisely in expectation of which they lived.','author':'Arthur Schopenhauer'},
    {'quote':'A man finds himself, to his great astonishment, suddenly existing, after thousands and thousands of years of non-existence: he lives for a little while; and then, again, comes an equally long period when he must exist no more. The heart rebels against this, and feels that it cannot be true.','author':'Arthur Schopenhauer'},
    {'quote':'Man is a robot with defects.','author':'E.M. Cioran'},
    {'quote':'Utopia is the grotesque en rose, the need to associate happiness -- that is, the improbable -- with becoming, and to coerce an optimistic, aerial vision to the point where it rejoins its own source: the very cynicism it sought to combat. In short, a monstrous fantasy.','author':'E.M. Cioran'},
    {'quote':'Shame on the man who goes to his grave escorted by the miserable hopes that have kept him alive.','author':'E.M. Cioran'},
    {'quote':'Existing is plagiarism.','author':'E.M. Cioran'},
    {'quote':'Man starts over again every day, in spite of all he knows, against all he knows.','author':'E.M. Cioran'},
    {'quote':"Consciousness is nature's nightmare.",'author':'E.M. Cioran'},
    {'quote':"For you who no longer posses it, freedom is everything, for us who do, it is merely an illusion.",'author':'E.M. Cioran'},
    {'quote':"Is it possible that existence is our exile and nothingness our home?",'author':'E.M. Cioran'},
    {'quote':"A great step forward was made the day men understood that in order to torment one another more efficiently they would have to gather together, to organize themselves into a society.",'author':'E.M. Cioran'},
    {'quote':"So long as man is protected by madness, he functions and flourishes.",'author':'E.M. Cioran'},
    {'quote':"Life inspires more dread than death — it is life which is the great unknown.",'author':'E.M. Cioran'},
    {'quote':"What is pity but the vice of kindness.",'author':'E.M. Cioran'},
    {'quote':"God: a disease we imagine we are cured of because no one dies of it nowadays.",'author':'E.M. Cioran'},
    {'quote':"It's not worth the bother of killing yourself, since you always kill yourself too late.",'author':'E.M. Cioran'},
    {'quote':"Melancholy: an appetite no misery satisfies.",'author':'E.M. Cioran'},
    {'quote':"Each new generation asks – What is the meaning of life? A more fertile way of putting the question would be – Why does man need a meaning to life?",'author':'Peter Wessel Zapffe'},
    {'quote':"Man is a tragic animal. Not because of his smallness, but because he is too well endowed. Man has longings and spiritual demands that reality cannot fulfill. We have expectations of a just and moral world. Man requires meaning in a meaningless world.",'author':'Peter Wessel Zapffe'},
    {'quote':"The seed of a metaphysical or religious defeat is in us all. For the honest questioner, however, who doesn’t seek refuge in some faith or fantasy, there will never be an answer.",'author':'Peter Wessel Zapffe'},
    {'quote':"We come from an inconceivable nothingness. We stay a while in something which seems equally inconceivable, only to vanish again into the inconceivable nothingness.",'author':'Peter Wessel Zapffe'},
    {'quote':"Death is the most certain and the most uncertain event there is.",'author':'Peter Wessel Zapffe'},
    {'quote':"A coin is examined, and only after careful deliberation, given to a beggar, whereas a child is flung out into the cosmic brutality without hesitation.",'author':'Peter Wessel Zapffe'},
    {'quote':"Mankind ought to end its existence of its own will.",'author':'Peter Wessel Zapffe'},
    {'quote':"The tragedy of a species becoming unfit for life by over-evolving one ability is not confined to humankind. Thus it is thought, for instance, that certain deer in paleontological times succumbed as they acquired overly-heavy horns. The mutations must be considered blind, they work, are thrown forth, without any contact of interest with their environment. In depressive states, the mind may be seen in the image of such an antler, in all its fantastic splendour pinning its bearer to the ground.",'author':'Peter Wessel Zapffe'},
    {'quote':"The dread of being stares us in the eye, and in a deadly gush we perceive how the minds are dangling in threads of their own spinning, and that a hell is lurking underneath.",'author':'Peter Wessel Zapffe'},
    {'quote':"But as he stands before imminent death, he grasps its nature also, and the cosmic import of the step to come. His creative imagination constructs new, fearful prospects behind the curtain of death, and he sees that even there is no sanctuary found. And now he can discern the outline of his biologico-cosmic terms: He is the universe’s helpless captive, kept to fall into nameless possibilities. From this moment on, he is in a state of relentless panic.",'author':'Peter Wessel Zapffe'},
    {'quote':"Man beholds the earth, and it is breathing like a great lung; whenever it exhales, delightful life swarms from all its pores and reaches out toward the sun, but when it inhales, a moan of rupture passes through the multitude, and corpses whip the ground like bouts of hail.",'author':'Peter Wessel Zapffe'},
    {'quote':"Most people learn to save themselves by artificially limiting the content of consciousness.",'author':'Thomas Ligotti'},
    {'quote':"If truth is what you seek, then the examined life will only take you on a long ride to the limits of solitude and leave you by the side of the road with your truth and nothing else.",'author':'Thomas Ligotti'},
    {'quote':"As a survival-happy species, our successes are calculated in the number of years we have extended our lives, with the reduction of suffering being only incidental to this aim. To stay alive under almost any circumstances is a sickness with us. Nothing could be more unhealthy than to “watch one’s health” as a means of stalling death. The lengths we will go as procrastinators of that last gasp only demonstrate a morbid dread of that event. By contrast, our fear of suffering is deficient.",'author':'Thomas Ligotti'},
    {'quote':"One cringes to hear scientists cooing over the universe or any part thereof like schoolgirls over-heated by their first crush. From the studies of Krafft-Ebbing onward, we know that it is possible to become excited about anything—from shins to shoehorns. But it would be nice if just one of these gushing eggheads would step back and, as a concession to objectivity, speak the truth: THERE IS NOTHING INNATELY IMPRESSIVE ABOUT THE UNIVERSE OR ANYTHING IN IT.",'author':'Thomas Ligotti'},
    {'quote':"Within the hierarchy of fabrications that compose our lives—families, countries, gods—the self incontestably ranks highest. Just below the self is the family, which has proven itself more durable than national or ethnic affiliations, with these in turn outranking god-figures for their staying power. So any progress toward the salvation of humankind will probably begin from the bottom—when our gods have been devalued to the status of refrigerator magnets or lawn ornaments. Following the death rattle of deities, it would appear that nations or ethnic communities are next in line for the boneyard. Only after fealty to countries, gods, and families has been shucked off can we even think about coming to grips with the least endangered of fabrications—the self.",'author':'Thomas Ligotti'},
    {'quote':"Look at your body— / A painted puppet, a poor toy / Of jointed parts ready to collapse, / A diseased and suffering thing / With a head full of false imaginings.",'author':'The Dhammapada'},
    {'quote':"For optimists, human life never needs justification, no matter how much hurt piles up, because they can always tell themselves that things will get better. For pessimists, there is no amount of happiness—should such a thing as happiness even obtain for human beings except as a misconception—that can compensate us for life’s hurt. As a worst-case example, a pessimist might refer to the hurt caused by some natural or human-made cataclysm. To adduce a hedonic counterpart to the horrors that attach to such cataclysms would require a degree of ingenuity from an optimist, but it could be done. And the reason it could be done, the reason for the eternal stalemate between optimists and pessimists, is that no possible formula can be established to measure proportions and types of hurt and happiness in the world. If such a formula could be established, then either pessimists or optimists would have to give in to their adversaries.",'author':'Thomas Ligotti'},
    {'quote':"How much nonsense can we take in our lives? And is there any way we can escape it? No, there is not. We are doomed to all kinds of nonsense: the pain nonsense, the nightmare nonsense, the sweat and slave nonsense, and many other shapes and sizes of insufferable nonsense. It is brought to us on a plate, and we must eat it up or face the death nonsense.",'author':'Thomas Ligotti'},
    {'quote':"We are gene-copying bio-robots, living out here on a lonely planet in a cold and empty physical universe.",'author':'Thomas Ligotti'},
    {'quote':"So they trust in the deity of the Old Testament, an incontinent dotard who soiled Himself and the universe with his corruption, a low-budget divinity passing itself off as the genuine article. (Ask the Gnostics.) They trust in Jesus Christ, a historical cipher stitched together like Frankenstein's monster out of parts robbed from the graves of messiahs dead and buried - a savior on a stick. They trust in the virgin-pimping Allah and his Drum Major Mohammed, a prophet-come-lately  who pioneered a new genus of humbuggery for an emerging market of believers that was not being adequately served by existing religious products. They trust in anything that authenticates their importance as persons, tribes, societies, and particularly as a species that will endure in this world and perhaps in an afterworld that may be uncertain in its reality and unclear in its layout, but which states their craving for values 'not of this earth' - that depressing, meaningless place their consciousness must sidestep every day.",'author':'Thomas Ligotti'},
    {'quote':"This is the tragedy: Consciousness has forced us into the paradoxical position of striving to be unself-conscious of what we are—hunks of spoiling flesh on disintegrating bones.",'author':'Thomas Ligotti'},
    {'quote':"Perhaps the greatest strike against philosophical pessimism is that its only theme is human suffering. This is the last item on the list of our species’ obsessions and detracts from everything that matters to us, such as the Good, the Beautiful, and a Sparking Clean Toilet Bowl. For the pessimist, everything considered in isolation from human suffering or any cognition that does not have as its motive the origins, nature, and elimination of human suffering is at base recreational, whether it takes the form of conceptual probing or physical action in the world—for example, delving into game theory or traveling in outer space, respectively. And by “human suffering,” the pessimist is not thinking of particular sufferings and their relief, but of suffering itself. Remedies may be discovered for certain diseases and sociopolitical barbarities may be amended. But those are only stopgaps. Human suffering will remain insoluble as long as human beings exist. The one truly effective solution for suffering is that spoken of in Zapffe’s “Last Messiah.” It may not be a welcome solution for a stopgap world, but it would forever put an end to suffering, should we ever care to do so. The pessimist’s credo, or one of them, is that nonexistence never hurt anyone and existence hurts everyone. Although our selves may be illusory creations of consciousness, our pain is nonetheless real.",'author':'Thomas Ligotti'},
    {'quote':"The pessimist’s credo, or one of them, is that nonexistence never hurt anyone and existence hurts everyone.",'author':'Thomas Ligotti'},
    {'quote':"Nature proceeds by blunders; that is its way. It is also ours. So if we have blundered by regarding consciousness as a blunder, why make a fuss over it? Our self-removal from this planet would still be a magnificent move, a feat so luminous it would bedim the sun. What do we have to lose? No evil would attend our departure from this world, and the many evils we have known would go extinct along with us. So why put off what would be the most laudable masterstroke of our existence, and the only one?",'author':'Thomas Ligotti'},
    {'quote':"One must take into account the shocking fact that we live on a world that spins. After considering this truth, nothing should come as a surprise.",'author':'Thomas Ligotti'},
    {'quote':"Love? What is it? The most natural painkiller what there is.” You may become curious, though, about what happened to that painkiller should depression take hold and expose your love—whatever its object—as just one of the many intoxicants that muddled your consciousness of the human tragedy. You may also want to take a second look at whatever struck you as a person, place, or thing of “beauty,” a quality that lives only in the neurotransmitters of the beholder. (Aesthetics? What is it? A matter for those not depressed enough to care nothing about anything, that is, those who determine almost everything that is supposed to matter to us. Protest as you like, neither art nor an aesthetic view of life are distractions granted to everyone.) In depression, all that once seemed beautiful, or even startling and dreadful, is nothing to you. The image of a cloud-crossed moon is not in itself a purveyor of anything mysterious or mystical; it is only an ensemble of objects represented to us by our optical apparatus and perhaps processed as a memory.",'author':'Thomas Ligotti'},
    {'quote':"Every human activity is a tack for killing time.",'author':'Thomas Ligotti'},
    {'quote':"Officially there are no fates worse than death. Unofficially, there is a profusion of such fates. For some people, just living with the thought that they will die is a fate worse than death itself.",'author':'Thomas Ligotti'},
    {'quote':"To say that some kind of god might exist is to vivify its being with mystery. To define a god into existence because it meets certain criteria for godhood is to kill that god by turning it into a cheapjack idol with a publicity team of theologians behind it. This would explain why so many deities—all of them, in fact—have fallen apart or are in the process of doing so: eventually every god loses its mystery because it has become overqualified for its job. After a god’s mystery is gone, arguments for its reality begin. Logic steps in to resuscitate what has been bled of its healthful vagueness. Finally, another “living god” is consigned to the mortuary of scholars.",'author':'Thomas Ligotti'},
    {'quote':"The major part of our species seems able to undergo any trauma without significantly re-examining its household mantras, including “everything happens for a reason,” “the show must go on,” “accept the things you cannot change,” and any other adage that gets people to keep their chins up.",'author':'Thomas Ligotti'},
    {'quote':"Those who suffer intolerably learn to hide their afflictions, both necessary and unnecessary, because the world does not run on pain time but on happy time, whether or not that happiness is honestly felt or a mask for the blackest despondency.",'author':'Thomas Ligotti'},
    {'quote':"We are aberrations—beings born undead, neither one thing nor another, or two things at once … uncanny things that have nothing to do with the rest of creation, horrors that poison the world by sowing our madness everywhere we go, glutting daylight and darkness with incorporeal obscenities. From across an immeasurable divide, we brought the supernatural into all that is manifest. Like a faint haze it floats around us. We keep company with ghosts. Their graves are marked in our minds, and they will never be disinterred from the cemeteries of our remembrance. Our heartbeats are numbered, our steps counted. Even as we survive and reproduce, we know ourselves to be dying in a dark corner of infinity. Wherever we go, we know not what expects our arrival but only that it is there.",'author':'Thomas Ligotti'},
    {'quote':"To salve the pains of consciousness, some people anesthetize themselves with sunny thoughts. But not everyone can follow their lead, above all not those who sneer at the sun and everything upon which it beats down. Their only respite is in the balm of bleakness. Disdainful of the solicitations of hope, they look for sanctuary in desolate places - a scattering of ruins in a barren locale or a rubble of words in a book where someone whispers in a dry voice, 'I too am here.'",'author':'Thomas Ligotti'},
    {'quote':"As we should know by now, it is as easy to make fun of religious or scientific visionaries as it is to idolize them. Which attitude is adopted depends on whether or not they tell you what you want to hear.",'author':'Thomas Ligotti'},
    {'quote':"The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.",'author':'H.P. Lovecraft'},
    {'quote':"The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents. We live on a placid island of ignorance in the midst of black seas of the infinity, and it was not meant that we should voyage far",'author':'H.P. Lovecraft'},
    {'quote':"It is good to be a cynic — it is better to be a contented cat — and it is best not to exist at all.",'author':'H.P. Lovecraft'},
    {'quote':"I know always that I am an outsider; a stranger in this century and among those who are still men.",'author':'H.P. Lovecraft'},
    {'quote':"Contrary to what you may assume, I am not a pessimist but an indifferentist- that is, I don't make the mistake of thinking that the... cosmos... gives a damn one way or the other about the especial wants and ultimate welfare of mosquitoes, rats, lice, dogs, men, horses, pterodactyls, trees, fungi, dodos, or other forms of biological energy.",'author':'H.P. Lovecraft'},
    {'quote':"Ultimate horror often paralyses memory in a merciful way",'author':'H.P. Lovecraft'},
  ]
  var quote = ''
  var quotes_length = quotes.length
  quote_index = Math.floor(Math.random() * Math.floor(quotes_length));
  quote = quotes[quote_index]
  $('#quote').text(quote['quote'])
  $('#author').text(quote['author'])
})
