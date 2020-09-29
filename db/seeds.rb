# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Answer.destroy_all
Question.destroy_all
User.destroy_all
user1 =  User.create({ email:"demo_user@gmail.com", first_name: "Demo", last_name: "User", password: "hunter12" })
user2 =  User.create({ email:"vader@gmail.com", first_name: "Darth", last_name: "Vader", password: "evilevil" })
user3 =  User.create({ email:"link@gmail.com", first_name: "Link", last_name: "Listen", password: "zelda69" })
user4 =  User.create({ email:"gollum@gmail.com", first_name: "Smeogol", last_name: "/Gollum", password: "Thering" })
user5 =  User.create({ email:"anakin@gmail.com", first_name: "Anakin", last_name: "Skywalker", password: "goodgood" })
question1 = Question.create({body: "Do you think my wife will care if I murdered many children in order to save her life? ", author_id: user2.id} )
question2 = Question.create({body: "..................", author_id: user3.id })
question3 = Question.create({body: "Do you think I may have dual-personality disorder?", author_id: user4.id })
answer1 = Answer.create({body: "No, there is only one dominant personality", author_id: user2.id, question_id: question3.id })
answer2 = Answer.create({body: "Only the Sith deal in absolutes, of course there is fighting within yourself", author_id: user5.id, question_id: question3.id })