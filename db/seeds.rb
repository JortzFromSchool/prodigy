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
Annotation.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!(:users)
ActiveRecord::Base.connection.reset_pk_sequence!(:tracks)
ActiveRecord::Base.connection.reset_pk_sequence!(:annotations)


artist1 = User.create({username: "Daft Punk"})
artist1.password = "123456"
artist1.reset_session_token!
artist1.save!

artist2 = User.create({username: "Taylor Swift"})
artist2.password = "123456"
artist2.reset_session_token!
artist2.save!

artist3 = User.create({username: "Silk Sonic"})
artist3.password = "123456"
artist3.reset_session_token!
artist3.save!

artist4 = User.create({username: "Juice WRLD"})
artist4.password = "123456"
artist4.reset_session_token!
artist4.save!

artist5 = User.create({username: "ROSALIA"})
artist5.password = "123456"
artist5.reset_session_token!
artist5.save!

red_lyrics = "[Verse 1]
I walked through the door with you, the air was cold
But something 'bout it felt like home somehow
And I left my scarf there at your sister's house
And you've still got it in your drawer, even now
Oh, your sweet disposition and my wide-eyed gaze
We're singing in the car, getting lost upstate
Autumn leaves falling down like pieces into place
And I can picture it after all these days

[Pre-Chorus]
And I know it's long gone and
That magic's not here no more
And I might be okay, but I'm not fine at all
Oh, oh, oh

[Chorus]
'Causе there we arе again on that little town street
You almost ran the red 'cause you were lookin' over at me
Wind in my hair, I was there
I remember it all too well

[Verse 2]
Photo album on the counter, your cheeks were turning red
You used to be a little kid with glasses in a twin-sized bed
And your mother's telling stories 'bout you on the tee-ball team
You tell me 'bout your past, thinking your future was me
And you were tossing me the car keys, fuck the patriarchy
Key chain on the ground, we were always skipping town
And I was thinking on the drive down, any time now
He's gonna say it's love, you never called it what it was
'Til we were dead and gone and buried
Check the pulse and come back swearing it's the same
After three months in the grave
And then you wondered where it went to as I reached for you
But all I felt was shame and you held my lifeless frame
[Pre-Chorus]
And I know it's long gone and
There was nothing else I could do
And I forget about you long enough
To forget why I needed to

[Chorus]
'Cause there we are again in the middle of the night
We're dancing 'round the kitchen in the refrigerator light
Down the stairs, I was there
I remember it all too well
And there we are again when nobody had to know
You kept me like a secret but I kept you like an oath
Sacred prayer, and we'd swear
To remember it all too well, yeah

[Bridge]
Well maybe we got lost in translation
Maybe I asked for too much
But maybe this thing was a masterpiece
'Til you tore it all up
Running scared, I was there
I remember it all too well
And you call me up again
Just to break me like a promise
So casually cruel in the name of being honest
I'm a crumpled up piece of paper lying here
'Cause I remember it all, all, all
[Verse 3]
They say all's well that ends well
But I'm in a new hell every time you double-cross my mind
You said if we had been closer in age maybe it would have been fine
And that made me want to die
The idea you had of me, who was she?
A never-needy ever lovely jewel whose shine reflects on you
Not weeping in a party bathroom
Some actress asking me what happened, you, that's what happened, you
You who charmed my dad with self-effacing jokes
Sipping coffee like you're on a late night show
But then he watched me watch the front door all night, willing you to come
And he said, 'It's supposed to be fun turning twenty-one'

[Chorus]
Time won't fly, it's like I'm paralyzed by it
I'd like to be my old self again, but I'm still trying to find it
After plaid shirt days and nights when you made me your own
Now you mail back my things and I walk home alone
But you keep my old scarf from that very first week
'Cause it reminds you of innocence and it smells like me
You can't get rid of it
'Cause you remember it all too well, yeah
'Cause there we are again when I loved you so
Back before you lost the one real thing you've ever known
[Post-Chorus]
It was rare, I was there
I remember it all too well
Wind in my hair, you were there
You remember it all
Down the stairs, you were there
You remember it all
It was rare, I was there
I remember it all too well

[Verse 4]
And I was never good at telling jokes but the punch line goes
I'll get older but your lovers stay my age
From when your Brooklyn broke my skin and bones
I'm a soldier who's returning half her weight
And did the twin flame bruise paint you blue?
Just between us, did the love affair maim you too?
'Cause in this city's barren cold, I still remember the first fall of snow
And how it glistened as it fell, I remember it all too well

[Outro]
Just between us, did the love affair maim you all too well?
Just between us, do you remember it all too well?
Just between us, I remember it (Just between us) all too well
Wind in my hair, I was there, I was there
Down the stairs, I was there, I was there
Sacred prayer, I was there, I was there
It was rare, you remember it all too well
Wind in my hair, I was there, I was there
Down the stairs, I was there, I was there
Sacred prayer, I was there, I was there
It was rare, you remember it
Wind in my hair, I was there, I was there
Down the stairs, I was there, I was there
Sacred prayer, I was there, I was there
It was rare, you remember it
Wind in my hair, I was there, I was there
Down the stairs, I was there, I was there
Sacred prayer, I was there, I was there
It was rare, you remember it"

red_description = "Widely regarded as one of Swift’s best songs, “All Too Well” sees her picking up shards of memories after a gut-wrenching breakup. She jumps through time to reflect on her best and worst memories with her ex, making the listener feel as though they were there with the couple.

Swift told Pop Dust that she began writing the song in a soundcheck for her 2011 tour in support of Speak Now. Co-writer Liz Rose explained that the song was initially 10-15 minutes long before she helped Swift pare it down, and Swift shared some of the original lyrics in a deluxe edition of her 2019 album, Lover.

Melodically, this version of “All Too Well” is more subdued than the version we hear on the album. This change is evident throughout the song. This version begins with a saccharine melody before building up to a steady drum beat, while the original is heavily backed by guitar."

red_photo = open('https://prodigybucket.s3.amazonaws.com/Red_Taylors_Version.jpg')
red_url = "https://prodigybucket.s3.amazonaws.com/Red_Taylors_Version.jpg"

red_track = Track.create({title: "All Too Well (10 Minute Version)", 
    album_url: red_url,
    artist_id: artist2.id,
    lyrics: red_lyrics,
    description: red_description,
    album_name: "Red (Taylor's Version)", 
    track_number: 30,
    views: 381300,
    genre: "Pop",
    producer_id: artist2.id})

red_track.photo.attach(io: red_photo, filename: 'Red_Taylors_Version.jpg')
red_track.save!

red_lyrics2 = "[Verse 1: Taylor Swift]
They tell you while you're young
'Girls, go out and have your fun'
Then they hunt and slay the ones who actually do it
Criticize the way you fly
When you're soaring through the sky
Shoot you down and then they sigh
And say, 'She looks like she's been through it'
Lord, what will become of me
Once I've lost my novelty?

[Chorus: Taylor Swift]
I've had too much to drink tonight
And I know it's sad but this is what I think about
And I wake up in the middle of the night
It's like I can feel time moving
How can a person know everything at eighteen
But nothing at twenty-two?
And will you still want me when I'm nothing new?

[Verse 2: Phoebe Bridgers & Taylor Swift]
How long will it be cute, all this crying in my room?
When you can't blame it on my youth
And roll your eyes with affection
And my cheeks are growing tired
From turning red and faking smiles
Are we only biding time 'til I lose your attention
And someone else lights up the room?
People love an ingénue
[Chorus: Phoebe Bridgers & Taylor Swift]
I've had too much to drink tonight
How did I go from growing up to breaking down?
And I wake up in the middle of the night
It's like I can feel time moving
How can a person know everything at eighteen
But nothing at twenty-two?
And will you still want me when I'm nothing new?

[Bridge: Taylor Swift & Phoebe Bridgers]
I know someday I'm gonna meet her
It's a fever dream
The kind of radiance you only have at seventeen
She'll know the way and then she'll say she got the map from me
I'll say I'm happy for her then I'll cry myself to sleep
Oh woah, oh woah, oh, oh

[Chorus: Taylor Swift & Phoebe Bridgers]
I've had (I've had) too much to drink tonight
But I wonder if they'll miss me once they drive me out
I wake up (Wake up) in the middle of the night
And I can feel time moving
How can a person know everything at eighteen
But nothing at twenty-two?
And will you still want me, will you still want me
Will you still want me when I'm nothing new?"

red_description2 = "Swift mentions “Nothing New” in the journals she released alongside her 2019 record Lover. In the journal, she reveals she wrote it for her 2012 record Red — she later included it on 2021’s Red (Taylor’s Version) as a “From the Vault” track.

The track was inspired by Joni Mitchell’s “A Case Of You.”"

red_photo2 = open('https://prodigybucket.s3.amazonaws.com/Red_Taylors_Version.jpg')
red_url2 = "https://prodigybucket.s3.amazonaws.com/Red_Taylors_Version.jpg"

red_track2 = Track.create({title: "Nothing New (Taylor’s Version)", 
    album_url: red_url2,
    artist_id: artist2.id,
    lyrics: red_lyrics2,
    description: red_description2,
    album_name: "Red (Taylor's Version)", 
    track_number: 23,
    views: 121500,
    genre: "Pop",
    producer_id: artist2.id})

red_track2.photo.attach(io: red_photo2, filename: 'Red_Taylors_Version.jpg')
red_track2.save!


silk_lyrics = "[Intro: Bootsy Collins]
Wait a minute, this love started out so tender and so sweet
But now she got me smokin' out the window

[Verse 1: Bruno Mars, Anderson .Paak, & Both]
Must've spent thirty five, forty five thousand up in Tiffany's (Oh, no)
Got her badass kids runnin' 'round my whole crib
Like it's Chuck E. Cheese (Woah, woah)
Put me in a jam with her ex-man in the UFC
Can't believe it (Can't believe it)
I'm in disbelief

[Pre-Chorus: Anderson .Paak & Bruno Mars]
This bitch got me payin' her rent, payin' for trips
Diamonds on her neck, diamonds on her wrist
And here I am all alone (All alone)
I'm so cold, I'm so cold
You got me out here

[Chorus: Bruno Mars & Anderson .Paak]
Smokin' out the window (Smokin' out the window)
Singin' 'How could she do this to me?'
(How could she do this to me?)
Oh, I thought that girl belonged to only me
But I was wrong
'Cause she belong to everybody, everybody
[Verse 2: Anderson .Paak]
Just the other night, she was grippin' on me tight
Screamin' 'Hercules' (Hercules, Hercules)
Got me in the club lookin' for a new love
Someone help me, please (Help me, please, help me, please)
Baby, why you doin' this? Why you doin' this to me, girl?
Not to be dramatic, but I wanna die

[Pre-Chorus: Bruno Mars]
This bitch got me payin' her rent, payin' for trips
Diamonds on her neck, diamonds on her wrist
And here I am all alone (All alone)
I'm so cold, I'm so cold
You got me out here

[Chorus: Bruno Mars & Anderson .Paak]
Smokin' out the window (Smokin' out the window of the Benzo, the Benzo)
Singin' 'How could she do this to me?' (How?)
(How could you do this to me?)
Oh, I thought that girl belonged to only me (One things fasho, one things fasho)
But I was wrong (I was wrong)
'Cause she belong to everybody, everybody (She belong to)
Yeah, she belong to everybody
That girl there, she belong to everybody

[Interlude: Anderson .Paak]
(Oh, no)
Look here, baby
I hope you found whatever it is that you need
But, I also hope that your triflin' ass is walkin' 'round bare foot in these streets
Look out
[Bridge: Bruno Mars]
Girl, it breaks my heart that you ain't right here with me
Now, I gotta give you back (Gotta give you back)
To the city, oh, you got me

[Chorus: Bruno Mars]
Smokin' out the window
Singin' 'How could she do this to me?' (How could you?)
(How could you do this, baby?)
Oh, I thought that girl belonged to only me
But I was wrong (I was wrong)
'Cause she belong to everybody, everybody (She belong)
Yeah, she belong to everybody
She belong to everybody
Ooh"

silk_description = "“Smokin Out The Window” is the third single from Silk Sonic’s debut album An Evening with Silk Sonic. The song was first teased on the duo’s Rolling Stone issue, posted in August 2021.

The song’s release date was announced in an Instagram post made by Silk Sonic on November 1, 2021, teasing the music video."

silk_photo = open('https://prodigybucket.s3.amazonaws.com/An_Evening_With_Silk_Sonic.jpg')
silk_url = "https://prodigybucket.s3.amazonaws.com/An_Evening_With_Silk_Sonic.jpg"

silk_track = Track.create({title: "Smokin Out The Window", 
    album_url: silk_url,
    artist_id: artist3.id,
    lyrics: silk_lyrics,
    description: silk_description,
    album_name: "An Evening With Silk Sonic", 
    track_number: 5,
    views: 190200,
    genre: "R&B",
    producer_id: artist3.id})

silk_track.photo.attach(io: silk_photo, filename: 'An_Evening_With_Silk_Sonic.jpg')
silk_track.save!

juice_lyrics = "[Chorus]
You can see the pain in my laugh (Yeah, yeah)
Demons comin' back from the past (Yeah, yeah)
Feelin' like I'm 'bout to relapse (Yeah, yeah)
Voices in my head (Yeah, yeah)
All I can hear them say (Yeah, yeah)
Is everyone wants me dead (Yeah, yeah)
Bitch, I'm already dead (Yeah, yeah)
I've been dead for years

[Verse 1]
I've been taking medicine again (Yeah, yeah)
Henny, mix it with the Vicodin (Yeah, yeah)
All my sufferin' (Yeah)
Is really gettin' under my skin (Yeah)
Maybe I should try to pray again (Yeah, yeah)
Try to wash away my sins (Yeah, yeah)
I know that they not my friends (Yeah, yeah)
But I'm friends with the drugs again (Yeah)

[Pre-Chorus]
Lost my heart, lost it all
So much drama, hold the applause
Shit's like a soap opera, straight downfalls
Nightmares on the cellphone, late-night calls
Lost my heart, lost it all
So much drama, hold the applause
No soap opera, straight downfalls
Listen to the nightmares call
[Chorus]
You can see the pain in my laugh (Yeah, yeah)
Demons comin' back from the past (Yeah, yeah)
Feelin' like I'm 'bout to relapse (Yeah, yeah)
Voices in my head (Yeah, yeah)
All I can hear them say (Yeah, yeah)
Is everyone wants me dead (Yeah, yeah)
Bitch, I'm already dead (Yeah, yeah)
I've been dead for years
You can see the pain in my laugh (Yeah, yeah)
Demons comin' back from the past (Yeah, yeah)
Feelin' like I'm 'bout to relapse (Yeah, yeah)
Voices in my head (Yeah, yeah)
All I can hear them say (Yeah, yeah)
Is everyone wants me dead (Yeah, yeah)
Bitch, I'm already dead (Yeah, yeah)
I've been dead for years (Yeah)

[Verse 2]
Have you ever been so alone? (Yeah, yeah)
That nobody's house feels like home (Yeah, yeah)
I've been runnin' out of drugs and hope (Yeah, yeah)
I don't even got a plug no more (Yeah, yeah)
Have you ever been so alone? (Yeah, yeah)
That you don't know what to feel no more? (Yeah, yeah)
Ain't no reachin' for the pills no more (Yeah, yeah)
One more and you're on the floor (Yeah, yeah)
I know that I didn't stand a chance (Yeah, yeah, yeah)
I don't think I'll ever live again (Yeah, yeah, yeah)
I'm only here by popular demand (Yeah, yeah, yeah)
I'm stayin' alive for the fans (Yeah, yeah, yeah)
[Pre-Chorus]
Lost my heart, lost it all
So much drama, hold the applause
No soap opera, straight downfalls
Listen to the nightmares call

[Chorus]
You can see the pain in my laugh (Yeah, yeah)
Demons comin' back from the past (Yeah, yeah)
Feelin' like I'm 'bout to relapse (Yeah, yeah)
Voices in my head (Yeah, yeah)
All I can hear them say (Yeah, yeah)
Is everyone wants me dead (Yeah, yeah)
Bitch, I'm already dead (Yeah, yeah)
I've been dead for years (Yeah, yeah)

[Outro]
You can see the pain in my laugh (In my laugh)
Demons comin' back from the past (From the past)
Feelin' like I'm 'bout to relapse (Relapse)
Voices in my head (In my head)
All I can hear them say (All I can hear them say)
Is everyone wants me dead (Is everyone wants me dead)
Bitch, I'm already dead (Bitch, I'm already dead)
I've been dead for years (I've been dead for years)"

juice_description = "“Already Dead“ serves as the first promotional single for Chicago native Juice WRLD’s upcoming posthumous project Fighting Demons. Juice touches on his heartbreak and substance abuse, noting the problems that occur when both are mixed.

The track was first previewed on Juice’s Instagram in late 2018. In March of 2021, Lil Bibby—manager of Juice’s label, Grade A Productions—tweeted a snippet of “Already Dead,” claiming:

'I will find it and it will be on the album'

Later, in July of 2021, Juice’s co-manager Peter Jideonwo confirmed that Lil Bibby had obtained the track after months of searching.

On October 26, 2021, the track would leak in its entirety, and Lil Bibby would confirm via Twitter that the track would make an official release on November 12, 2021. Thirteen days later, on November 9, the 999 CLUB Instagram would reveal the cover art and re-confirm the release date in the caption:

'Already Dead this Friday. #lljw'"

juice_photo = open('https://prodigybucket.s3.amazonaws.com/Fighting_Demons.png')
juice_url = "https://prodigybucket.s3.amazonaws.com/Fighting_Demons.png"


juice_track = Track.create({title: "Already Dead", 
    album_url: juice_url,
    artist_id: artist4.id,
    lyrics: juice_lyrics,
    description: juice_description,
    album_name: "Fighting Demons", 
    track_number: 1,
    views: 147800,
    genre: "Rap",
    producer_id: artist4.id})

juice_track.photo.attach(io: juice_photo, filename: 'Fighting_Demons.png')
juice_track.save!

rosalia_lyrics = "[Letra de 'LA FAMA' ft. The Weeknd]

[Verso 1: ROSALÍA]
Lo que pasó a ti te lo cuento, no creas que no dolió
O que me lo invento, así es que se dio
Yo tenía mi bebé, era algo bien especial
Pero me obsesioné con algo que a él le hacía mal
Miles de cancione' en mi mente y él me lo notaba
Y él tanta’ vece' que me lo decía y yo como si nada

[Coro: The Weeknd]
Es mala amante la fama, no va a quererte de verdad
Es demasia'o traicionera, y como ella viene, se te va
Sabe que será celosa, yo nunca le confiaré
Si quiere’ duerme con ella, pero nunca la vayas a casar

[Verso 2: The Weeknd]
Lo que pasó me ha dejado en vela, ya no puedo ni pensar
La sangre le hierve, siempre quiere más
Puñalaítas' da su ambición
En el pecho afilada, es lo peor

[Coro: ROSALÍA]
Es mala amante la fama y no va a quererme de verdad
Es demasia'o traicionera, y como ella viene, se me va
Yo sé que será celosa, yo nunca le confiaré
Si quiero duermo con ella, pero nunca me la voy a casar
[Puente: ROSALÍA & The Weeknd]
No hay manera
De que esta obsesión se me fuera
Se me fuera, ya desaparezca
Yo aún no he aprendío' la manera (Ah-ah-ah)
No hay manera que desaparezca (Uh-uh-uh)

[Coro: The Weeknd & ROSALÍA]
Es mala amante la fama, no va a quererte de verdad
Es demasia'o traicionera, y como ella viene, se te va (Uh-uh-uh)
Yo sé que será celosa, yo nunca le confiaré
Si quiero duermo con ella, pero nunca me la voy a casar"

rosalia_description = "“LA FAMA” es el primer sencillo del tercer álbum de la cantautora española, ROSALÍA, que lleva como título MOTOMAMI. Además, esta es la segunda colaboración entre la española y el canadiense The Weeknd, luego de éste último haber lanzado el remix de “Blinding Lights” junto a ROSALÍA.

La canción fue mostrada por primera vez al público el 12 de octubre de 2021, día en que la cantante subió una parte de la canción en su perfil oficial de TikTok.

Un poco menos de un mes después de compartirla en sus redes sociales, un cartel anunciando la colaboración con The Weeknd fue visto por las calles de Argentina.

El 8 de noviembre, ROSALÍA anunció la canción en sus redes sociales."

rosalia_photo = open('https://prodigybucket.s3.amazonaws.com/MOTOMAMI.png')
rosalia_url = "https://prodigybucket.s3.amazonaws.com/MOTOMAMI.png"


rosalia_track = Track.create({title: "LA FAMA", 
    album_url: rosalia_url,
    artist_id: artist5.id,
    lyrics: rosalia_lyrics,
    description: rosalia_description,
    album_name: "MOTOMAMI", 
    track_number: 1,
    views: 22300,
    genre: "Pop",
    producer_id: artist5.id})

rosalia_track.photo.attach(io: rosalia_photo, filename: 'MOTOMAMI.png')
rosalia_track.save!

red_lyrics3 = "[Verse 1: Taylor Swift]
3 AM and I'm still awake, I'll bet you're just fine
Fast asleep in your city that's better than mine
And the girl in your bed has a fine pedigree
And I'll bet your friends tell you she's better than me, huh

[Verse 2: Taylor Swift]
Well, I tried to fit in with your upper-crust circles
Yeah, they let me sit in back when we were in love
Oh, they sit around talkin' about the meaning of life
And the book that just saved 'em that I hadn't heard of

[Chorus: Taylor Swift & Chris Stapleton, Taylor Swift]
But now that we're done and it's over
I bet you couldn't believe
When you realized I'm harder to forget than I was to leave
And I bet you think about me

[Verse 3: Taylor Swift]
You grew up in a silver-spoon gated community
Glamorous, shiny, bright Beverly Hills
I was raised on a farm, no, it wasn't a mansion
Just livin' room dancin' and kitchen table bills

[Verse 4: Taylor Swift & Chris Stapleton]
But you know what they say, you can't help who you fall for
And you and I fell like an early spring snow
But reality crept in, you said we're too different
You laughed at my dreams, rolled your eyes at my jokes
[Chorus: Taylor Swift & Chris Stapleton, Taylor Swift]
Mr. Superior Thinkin'
Do you have all the space that you need?
I don't have to be your shrink to know that you'll never be happy
And I bet you think about me

[Post-Chorus: Taylor Swift, Taylor Swift & Chris Stapleton]
I bet you think about me, yes
I bet you think about me

[Bridge: Taylor Swift & Chris Stapleton, Taylor Swift]
Oh, block it all out
The voices so loud, sayin'
'Why did you let her go?'
Does it make you feel sad
That the love that you're lookin' for
Is the love that you had?

[Verse 5: Taylor Swift]
Now you're out in the world, searchin' for your soul
Scared not to be hip, scared to get old
Chasing make-believe status, last time you felt free
Was when none of that shit mattered 'cause you were with me

[Chorus: Taylor Swift & Chris Stapleton, Taylor Swift]
But now that we're done and it's over
I bet it's hard to believe
That it turned out I'm harder to forget than I was to leave
And, yeah, I bet you think about me
[Post-Chorus: Taylor Swift, Taylor Swift & Chris Stapleton]
I bet you think about me, yes
I bet you think about me

[Outro: Taylor Swift, Taylor Swift & Chris Stapleton]
I bet you think about me when you're out
At your cool indie music concerts every week
I bet you think about me in your house
With your organic shoes and your million-dollar couch
I bet you think about me when you say
'Oh my god, she's insane, she wrote a song about me'
I bet you think about me"

red_description3 = "“I Bet You Think About Me (Taylor’s Version) [From The Vault]” is the 26th track off of Red (Taylor’s Version), and the 5th “From the Vault” song. The song was initially teased with the Vault track video Taylor posted in hint of the vault tracks for the re-recorded album. On October 15, 2021, Taylor secretly released a message on Apple Music, which contained a spoken 31 second track, and the fully confirmed track list. Fans noticed “I Bet You Think About Me” was labeled “explicit,” leading fans to believe the snippet from the vault is this song."

red_photo3 = open('https://prodigybucket.s3.amazonaws.com/Red_Taylors_Version.jpg')
red_url3 = "https://prodigybucket.s3.amazonaws.com/Red_Taylors_Version.jpg"

red_track3 = Track.create({title: "I Bet You Think About Me (Taylor’s Version)", 
    album_url: red_url3,
    artist_id: artist2.id,
    lyrics: red_lyrics3,
    description: red_description3,
    album_name: "Red (Taylor's Version)", 
    track_number: 30,
    views: 81200,
    genre: "Pop",
    producer_id: artist2.id})

red_track3.photo.attach(io: red_photo3, filename: 'Red_Taylors_Version.jpg')
red_track3.save!


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
track1 = Track.create({title: "Daftendirekt", album_url: image_url, artist_id: artist1.id, lyrics: lyrics1, description: description1, album_name: 'Homework', track_number: 1, views: 10800, genre: "Dance", producer_id: artist1.id})

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
track2 = Track.create({title: "WDPK 83.7 FM", album_url: image_url, artist_id: artist1.id, lyrics: lyrics2, description: description2, album_name: 'Homework', track_number: 2, views: 100, genre: "Dance", producer_id: artist1.id})

lyrics3 = "[Intro]
Stop the music and go home
I repeat, stop the music and go home

[Instrumental]"
description3 = "With a catchy disco tune and weird intro, its kind of hard not to admit why the first single is popular, but then, again, listen to it some more, and you’ll find “Revolution 909” is as funky as can be, with drum staking the spotlight, and washes of synth right around the corner."
track3 = Track.create({title: "Revolution 909", album_url: image_url, artist_id: artist1.id, lyrics: lyrics3, description: description3, album_name: 'Homework', track_number: 3, views: 6900, genre: "Dance", producer_id: artist1.id})

lyrics4 = "[Instrumental]"
description4 = "“Da Funk” is the second official single released by Daft Punk in 1996 from their debut album Homework. The track is an all-instrumental piece and gained popularity over 25 years after its release, with the track featured on Just Dance 3"
track4 = Track.create({title: "Da Funk", album_url: image_url, artist_id: artist1.id, lyrics: lyrics4, description: description4, album_name: 'Homework', track_number: 4, views: 100, genre: "Dance", producer_id: artist1.id})

lyrics5 = "[Instrumental]"
description5 = "With a mix of dance, electronica, and funk, “Phoenix” brings pop to the dance floor with its ultimate catchy synths and melody. It’s a mix of fun with crazy-and-cool.

Before Daft Punk, Bangalter and Homem-Christo were part of a band named Darlin.‘ It included an additional bandmember, Laurent Brancowitz. The name of this track may be referring to the band which Brancowitz joined after Darlin’ broke up. In 2010, the two bands collaborated during a concert in Madison Square Garden."
track5 = Track.create({title: "Pheonix", album_url: image_url, artist_id: artist1.id, lyrics: lyrics5, description: description5, album_name: 'Homework', track_number: 5, views: 100, genre: "Dance", producer_id: artist1.id})

lyrics6 = "[Instrumental]"
description6 = "In addition to being the first music video Daft Punk themselves ever directed alone, the music video for “Fresh” was a direct sequel to the music video for “Da Funk,” a track appearing earlier on Homework. It follows the same protagonist and features a cameo from the director of the first film, Spike Jonze."
track6 = Track.create({title: "Fresh", album_url: image_url, artist_id: artist1.id, lyrics: lyrics6, description: description6, album_name: 'Homework', track_number: 6, views: 100, genre: "Dance", producer_id: artist1.id})

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
track7 = Track.create({title: "Around the World", album_url: image_url, artist_id: artist1.id, lyrics: lyrics7, description: description7, album_name: 'Homework', track_number: 7, views: 119200, genre: "Dance", producer_id: artist1.id})

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

annotationString1 = "Da funk back to the punk, c'mon";
annotationBody1 = "It contains the lyrics “Da Funk Back to the Punk C'mon” and is repeated throughout the whole song. It also features some little elements from “Da Funk” (also the title is featured in the lyrics as seen before).

The song gave the name to the promotional tour for Homework, in which mostly all the songs from the album were mixed."
annotation1 = Annotation.create({author_id: artist1.id, track_id: track1.id, annotation_string: annotationString1, annotation_body: annotationBody1});

annotation1.save!;

