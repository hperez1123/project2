# Choose your enemies!

---

## Project Description

Choose your enemies is going to be an app that comes back with monsters and foes to help you choose your enemies in your Dungeons & Dragons adventure! I will be using an api hosted on a Django website. The link is https://api.open5e.com/monsters/

The user will input their level, or the monsters level. If they are low level, they will come back with appropriate monsters. If they feel for a TOUGH adventure, they can search for monsters leagues above their level. On home, all monsters will come flowing. Once they click on a monster, the monsters profile will appear. The info will range from the monsters bio, trivial facts, and their fight statistics.

---

## Foreseeable problems

I have a feeling I'm going to encounter problems with how huge the list will come back. My instructor, David, informed me of how there will need to be a "Next Page" button, to continue on with the list. That isn't a problem. The problem is that for each page, there will only be one monster image, and 49 other unlisted monsters that naturally do not have images. Some pages may have 1, and other pages may have 3 monsters showing.

## Possible Solutions
The first approach is to specify on the API to only return items that have images. I will need to play around with it a bit. If the linking is not so good, I will refer to Brian W. or my team of instructors to guide me on how to only make images come in from the API. I will need to use guards to do this approach.

## WireFrames
* https://i.imgur.com/2oXSJvW.jpg
* https://i.imgur.com/0FmLOOf.jpg

## Features
The site will have the components Header, Footer, Main, Input Field, Monster List and Monster Profile.

<header />
  <Input />
<Main />
  <Profile />
  <List />
<Footer />

## Link to API
https://api.open5e.com/monsters/

## MVP
I want to ensure that functionality works. The header and the footer to be set up. I will attempt to build up from mobile first afterwards.

## Post-MVP/Stretch Goals
Post-MVP is where everything will be set up. I would like to stylize the website to make the players feel at home. One functionality I definitely want to add is a neon glow CSS feature. If they want a low level enemy, the header and surrounding areas will glow a faint green, giving you the confidence and go ahead that your hero can fight and win! Be careful not to put an army together down the line. However, if the monster is extremely high level, the header will glow a strong ominous red, warning you that you will get messed up. Have a good plan with how you will kill this being.