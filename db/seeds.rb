# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Question.destroy_all
User.destroy_all
user1 =  User.create({ email:"demo_user@gmail.com", first_name: "Demo", last_name: "User", password: "hunter12" })
user2 =  User.create({ email:"vader@gmail.com", first_name: "Darth", last_name: "Vader", password: "evilevil" })
user3 =  User.create({ email:"link@gmail.com", first_name: "Link", last_name: "Listen", password: "zelda69" })
user4 =  User.create({ email:"gollum@gmail.com", first_name: "Smeogol", last_name: "/Gollum", password: "Thering" })
question1 = Question.create({body: "Do you think my wife will care if I murdered many children in order to save her life? ", author_id: user2.id} )
question2 = Question.create({body: "..................", author_id: user3.id })
question3 = Question.create({body: "Do you think I may have dual-personality disorder? No of course you don't, the precious told us so! Oh good I was worried for a second ", author_id: user4.id })