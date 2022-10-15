# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "date"
require "httparty"
require "json"


headers = {
    'X-RapidAPI-Key': '3ed1edac75msh81f11fc43b0737cp1be71ajsna6bb9d07f1a6',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
}

i = 0
while i <= 10 do
response = HTTParty.get("https://anime-db.p.rapidapi.com/anime/by-ranking/1", :headers => headers)

Anime.create(name: response["title"],
 description: response["synopsis"],
 score: response["ranking"],
 episodes: response["episodes"],
 status: response["status"]
])
i += 1
end
a = Anime.create(
    name: "Fullmetal Alchemist: Brotherhood",
    description: "Alchemists are knowledgeable and naturally talented individuals who can manipulate and modify matter due to their art. Yet despite the wide range of possibilities, alchemy is not as all-powerful as most would believe. Human transmutation is strictly forbidden, and whoever attempts it risks severe consequences. Even so, siblings Edward and Alphonse Elric decide to ignore this great taboo and bring their mother back to life. Unfortunately, not only do they fail in resurrecting her, they also pay an extremely high price for their arrogance: Edward loses his left leg and Alphonse his entire body. Furthermore, Edward also gives up his right arm in order to seal his brother's soul into a suit of armor.

        Years later, the young alchemists travel across the country looking for the Philosopher's Stone, in the hopes of recovering their old bodies with its power. However, their quest for the fated stone also leads them to unravel far darker secrets than they could ever imagine.
        "    ,
    episodes: 64,
    status: "completed",
    last_update: Date.new(2010,7,4),
    author: "Hiromu Arakawa",
    artist: "Hiromu Arakawa",
)

m = Manga.create(
    name: "Fullmetal Alchemist: Brotherhood",
    description: "Alchemists are knowledgeable and naturally talented individuals who can manipulate and modify matter due to their art. Yet despite the wide range of possibilities, alchemy is not as all-powerful as most would believe. Human transmutation is strictly forbidden, and whoever attempts it risks severe consequences. Even so, siblings Edward and Alphonse Elric decide to ignore this great taboo and bring their mother back to life. Unfortunately, not only do they fail in resurrecting her, they also pay an extremely high price for their arrogance: Edward loses his left leg and Alphonse his entire body. Furthermore, Edward also gives up his right arm in order to seal his brother's soul into a suit of armor.

        Years later, the young alchemists travel across the country looking for the Philosopher's Stone, in the hopes of recovering their old bodies with its power. However, their quest for the fated stone also leads them to unravel far darker secrets than they could ever imagine.
        ",
    chapters: 116,
    status: "completed",
    last_update: Date.new(2010,9,4),
    author: "Hiromu Arakawa",
    artist: "Hiromu Arakawa",

)