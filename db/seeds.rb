# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Answer.destroy_all
Question.destroy_all
Topic.destroy_all
User.destroy_all
user1 =  User.create({ email:"demo_user@gmail.com", first_name: "Demo", last_name: "User", password: "hunter12" })
user2 =  User.create({ email:"vader@gmail.com", first_name: "Darth", last_name: "Vader", password: "evilevil" })
user3 =  User.create({ email:"link@gmail.com", first_name: "Link", last_name: "Listen", password: "zelda69" })
user4 =  User.create({ email:"gollum@gmail.com", first_name: "Smeogol", last_name: "/Gollum", password: "Thering" })
user5 =  User.create({ email:"anakin@gmail.com", first_name: "Anakin", last_name: "Skywalker", password: "goodgood" })
user6 =  User.create({ email:"scary@gmail.com", first_name: "Slender", last_name: "Man", password: "killkill" })
topic1 = Topic.create({title: "War"})
topic2 = Topic.create({title: "Random"})
topic3 = Topic.create({title: "Food"})
topic4 = Topic.create({title: "Scary"})
questionTest = Question.create({body: "What are some ways to test my code?", author_id: user1.id })
questionFirst = Question.create({body: "What are the most unknown facts on the Second World War?", author_id: user5.id,  topic_id: topic1.id })
question1 = Question.create({body: "What are some crazy things about the human body?", author_id: user3.id,  topic_id: topic2.id })
question2 = Question.create({body: "What are some mind-blowing facts about food? ", author_id: user2.id,  topic_id: topic3.id} )
question3 = Question.create({body: "What are some random facts?", author_id: user4.id,  topic_id: topic2.id })
question4 = Question.create({body: "Answer me (if you dare...)", author_id: user6.id, topic_id: topic4.id })
answerTest = Answer.create(
{body: "To start you can click the Question!", author_id: user3.id, question_id: questionTest.id })
answerTest = Answer.create(
{body: "You can also click the 3 dots to the right to edit me or even delete me!(please dont though, I like existing :) ", author_id: user1.id, question_id: questionTest.id })
AnswerFirst = Answer.create(
{body: "
Pick a card, any card. The card you pick might just save everyone’s life!
Sound strange? Well, this is a story on how packs of playing cards saved the lives of Allied WW2 soldiers too!
Bicycle cards have been around for over 130 years. It’s a beloved tool of entertainment and tool for gamblers, magicians, seniors and college students the world over.
But something new came out only in recent years. Bicycle cards were a tool to help RESCUE POWs from NAZI CAMPS.
Allied solders who were captured in prison camps were deep in enemy territory and of course far from home. But thanks to international agreements, POWs still received their Red Cross care packages, which almost always included packs of cards to pass the time. The Bicycle card company noticed that and approached the British and American Intelligence agencies with an interesting idea. Taking advantage of the upcoming Red Cross Christmas care package to come, they created a very special pack and had them delivered in those packages.
As for what made them special? If you got the cards wet, they FELL apart and revealed part of a larger MAP complete with escape routes.
If you put the cards in the right order, you had a COMPLETE map of the surrounding country. With that as a tool, 32 POWs managed to escape Nazi Germany. Another 316 escape attempts were made.
There’s presently 2 known existing packs known left to exist, one in private hands and another in the International Spy Museum. And in 2016, Bicycle created a special edition recreation of those cards in honor of the unique collaboration.
Absolutely brilliant.", 
author_id: user2.id, question_id: questionFirst.id })

answer1 = Answer.create(
 {body: "
1) Honey is made from nectar and bee vomit. Honeybee workers must visit 2 million flowers to make one pound of honey.4
2) Coconut water can be used (in emergencies) as a substitute for blood plasma.
3) A 20 oz. bottle of Coca-cola has more sugar than a large Cinnabon. i.e., You are consuming 65g of sugar = 2.43 oz = 1.77 shots.
4) Eskimos use refrigerators to stop their food from freezing.
5) People who eat spicy foods tend to live longer, according to a 2015 study.
6) A cluster of bananas is called a hand and consists of 10 to 20 bananas, which are known as fingers.
7) Dry swallowing one teaspoon of sugar can commonly cure hiccups.",
author_id: user3.id, question_id: question2.id })
answer2 = Answer.create({body: "OOOOOOOOOOOOHHHHHH YES! MY SPECIALTY!
1) In England, if you reach your 100th birthday or 60th anniversary, the Queen herself will send you a card of congratulations.
2) In 18th-century England, suicide was illegal. The punishment for attempted suicide was… death.
3) The wolverine frog is a frog so aggressive it will break its own bones and attack people with the pieces that stick out of its skin like freaking claws.", 
author_id: user5.id, question_id: question3.id })
answer3 = Answer.create({body: "
1) Coffee-drinkers are less likely to commit suicide than non-coffee-drinkers.

2) In Asia, feeding Viagra to pandas is part of the routine for panda vets.

3) If the volume on a TV is set to an uneven number, as much as 99% of all people are bothered by it.

4) Out of 3000 people who have jumped off of the Golden Gate Bridge, only 13 survived. All 13 said they regretted their decision the instant they jumped.

5) A fully ripe cranberry can be dribbled like a basketball.

6) There is only one ATM in Antarctica.

7) If a cockroach touches a human, it runs off and hides to clean itself.

8) 90% of all people admit to typing things into Google to see if they spelled them correctly.",
 author_id: user5.id, question_id: question3.id })

answer4 = Answer.create({body: "Women’s hearts are smaller than men’s, therefore beat faster.
2) The “B.O” smell isn’t actually caused by sweat. It’s caused when the bacteria feeds on the sweat.
3) Human teeth are just as strong as shark teeth.
4) Goosebumps’ primary job for our ancestors was to make hairs stand up, making them appear more threatening to predators.
5) As well as unique finger prints, we also have unique tongue prints.
6) Most people breathe out of one nostril at a time. The side we breathe out of changes every few hours.
7) A person burns more calories when they’re asleep than watching tv.",
author_id: user4.id, question_id: question1.id })