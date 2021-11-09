require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Track.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!(:users)
ActiveRecord::Base.connection.reset_pk_sequence!(:tracks)


artist1 = User.create({username: "Daft Punk"})
artist1.password = "123456"
artist1.reset_session_token!
artist1.save!

discovery1 = open('https://prodigybucket.s3.amazonaws.com/Daft_Punk_Discovery.jpg')
discovery2 = open('https://prodigybucket.s3.amazonaws.com/Daft_Punk_Discovery.jpg')
discovery3 = open('https://prodigybucket.s3.amazonaws.com/Daft_Punk_Discovery.jpg')
discovery4 = open('https://prodigybucket.s3.amazonaws.com/Daft_Punk_Discovery.jpg')
discovery5 = open('https://prodigybucket.s3.amazonaws.com/Daft_Punk_Discovery.jpg')
discovery6 = open('https://prodigybucket.s3.amazonaws.com/Daft_Punk_Discovery.jpg')
discovery7 = open('https://prodigybucket.s3.amazonaws.com/Daft_Punk_Discovery.jpg')

image_url = "https://prodigybucket.s3.amazonaws.com/Daft_Punk_Discovery.jpg"

lyrics1 = "[Refrain]
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon
Da funk back to the punk, c'mon"
description1 = "“Daftendirekt” is the opening to Daft Punk’s debut album Homework. The track is built around a repeated vocal loop over the beat from the band’s own “Da Funk” with additional rhythmic samples from Mason Vaughn & Crew’s roller-boogie classic “Bounce, Rock, Skate, Roll”; it’s a fitting opener as it was a piece created by Daft Punk to open their live shows. In fact, the album version of “Daftendirekt” uses elements from a live recording from their November 11, 1995 performance in Ghent, Belgium. (It also explains the name: “Daft en direct” translates to “Daft live.”)"
track1 = Track.create({title: "Daftendirekt", album_url: image_url, artist_id: artist1.id, lyrics: lyrics1, description: description1, album_id: 1, track_number: 1, views: 10800, genre: "Dance", producer_id: artist1.id})

lyrics2 = "Musique
Musique
Musique
Musique
Musique
Musique
Musique
Musique
Musique

WDPK 83.7
The sound of tomorrow
The music of today
Brings you exclusively Daft Punk's Homework"
description2 = "A loveable homage to the radio stations of the west."
track2 = Track.create({title: "WDPK 83.7 FM", album_url: image_url, artist_id: artist1.id, lyrics: lyrics2, description: description2, album_id: 1, track_number: 2, views: 100, genre: "Dance", producer_id: artist1.id})

lyrics3 = "[Intro]
Stop the music and go home
I repeat, stop the music and go home

[Instrumental]"
description3 = "With a catchy disco tune and weird intro, its kind of hard not to admit why the first single is popular, but then, again, listen to it some more, and you’ll find “Revolution 909” is as funky as can be, with drum staking the spotlight, and washes of synth right around the corner."
track3 = Track.create({title: "Revolution 909", album_url: image_url, artist_id: artist1.id, lyrics: lyrics3, description: description3, album_id: 1, track_number: 3, views: 6900, genre: "Dance", producer_id: artist1.id})

lyrics4 = "[Instrumental]"
description4 = "“Da Funk” is the second official single released by Daft Punk in 1996 from their debut album Homework. The track is an all-instrumental piece and gained popularity over 25 years after its release, with the track featured on Just Dance 3"
track4 = Track.create({title: "Da Funk", album_url: image_url, artist_id: artist1.id, lyrics: lyrics4, description: description4, album_id: 1, track_number: 4, views: 100, genre: "Dance", producer_id: artist1.id})

lyrics5 = "[Instrumental]"
description5 = "With a mix of dance, electronica, and funk, “Phoenix” brings pop to the dance floor with its ultimate catchy synths and melody. It’s a mix of fun with crazy-and-cool.

Before Daft Punk, Bangalter and Homem-Christo were part of a band named Darlin.‘ It included an additional bandmember, Laurent Brancowitz. The name of this track may be referring to the band which Brancowitz joined after Darlin’ broke up. In 2010, the two bands collaborated during a concert in Madison Square Garden."
track5 = Track.create({title: "Pheonix", album_url: image_url, artist_id: artist1.id, lyrics: lyrics5, description: description5, album_id: 1, track_number: 5, views: 100, genre: "Dance", producer_id: artist1.id})

lyrics6 = "[Instrumental]"
description6 = "In addition to being the first music video Daft Punk themselves ever directed alone, the music video for “Fresh” was a direct sequel to the music video for “Da Funk,” a track appearing earlier on Homework. It follows the same protagonist and features a cameo from the director of the first film, Spike Jonze."
track6 = Track.create({title: "Fresh", album_url: image_url, artist_id: artist1.id, lyrics: lyrics6, description: description6, album_id: 1, track_number: 6, views: 100, genre: "Dance", producer_id: artist1.id})

lyrics7 = "[Refrain]
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world"
description7 = "The track is a perfect example of Daft Punk’s sound at it’s most accessible: a post-disco boogie bassline, a minimalist sprinkling of synthetic keyboard melody and a single, naggingly insistent hook. While the vocal performs that role on “Around the World,” elsewhere the same effect is achieved using a wide variety of sounds."
track7 = Track.create({title: "Around the World", album_url: image_url, artist_id: artist1.id, lyrics: lyrics7, description: description7, album_id: 1, track_number: 7, views: 119200, genre: "Dance", producer_id: artist1.id})

track1.photo.attach(io: discovery1, filename: 'Daft_Punk_Discovery.jpg')
track2.photo.attach(io: discovery2, filename: 'Daft_Punk_Discovery.jpg')
track3.photo.attach(io: discovery3, filename: 'Daft_Punk_Discovery.jpg')
track4.photo.attach(io: discovery4, filename: 'Daft_Punk_Discovery.jpg')
track5.photo.attach(io: discovery5, filename: 'Daft_Punk_Discovery.jpg')
track6.photo.attach(io: discovery6, filename: 'Daft_Punk_Discovery.jpg')
track7.photo.attach(io: discovery7, filename: 'Daft_Punk_Discovery.jpg')

track1.save!
track2.save!
track3.save!
track4.save!
track5.save!
track6.save!
track7.save!

