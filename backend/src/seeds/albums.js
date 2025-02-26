import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import { config } from "dotenv";

config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // Clear existing data
    await Album.deleteMany({});
    await Song.deleteMany({});

    // First, create all songs
    const createdSongs = await Song.insertMany([
      {
        title: "Turn It Up",
        artist: "PinkPantheress",
        imageUrl: "/cover-images/turnitup.jpg",
        audioUrl: "/songs/PinkPantheress-TurnItUp.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 147, // 2:27
      },
      {
        title: "Eat Sleep Slay Repeat",
        artist: "horsegiirL",
        imageUrl: "/cover-images/vip.jpg",
        audioUrl: "/songs/Horsegiirl-EatSleepSlayRepeat.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 149, // 2:29
      },
      {
        title: "Bovine Excision",
        artist: "Samia",
        imageUrl: "/cover-images/bovineexcision.jpg",
        audioUrl: "/songs/Samia-BovineExcision.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 173, // 2:53
      },
      {
        title: "Strangers",
        artist: "Ethel Cain",
        imageUrl: "/cover-images/preachersdaughter.png",
        audioUrl: "/songs/Strangers-EthelCain.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 344, // 5:44
      },
      {
        title: "Telephone",
        artist: "Lady Gaga",
        imageUrl: "/cover-images/thefamemonster.png",
        audioUrl: "/songs/LadyGaga-Telephone.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 220, // 3:40
      },
      {
        title: "Break The Ice",
        artist: "Britney Spears",
        imageUrl: "/cover-images/blackout.png",
        audioUrl: "/songs/BritneySpears-BreakTheIce.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 193, // 3:13
      },
      {
        title: "Papi Bones",
        artist: "FKA Twigs",
        imageUrl: "/cover-images/caprisongs.jpeg",
        audioUrl: "/songs/FKATwigs-PapiBones.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 220, // 3:40
      },
      {
        title: "Fade Into You",
        artist: "Mazzy Star",
        imageUrl: "/cover-images/sotonightthatimightsee.jpg",
        audioUrl: "/songs/MazzyStar-FadeIntoYou.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 261, // 4:21
      },
      {
        title: "Labios Mordidos",
        artist: "Kali Uchis",
        imageUrl: "/cover-images/orquideas.png",
        audioUrl: "/songs/KaliUchis-LabiosMordidos.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 195, // 3:15
      },
      {
        title: "DESPECHA",
        artist: "Rosalia",
        imageUrl: "/cover-images/motomami.jpg",
        audioUrl: "/songs/ROSALIA-DESPECHA.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 159, // 2:39
      },
      {
        title: "Paper Bag",
        artist: "Fiona Apple",
        imageUrl: "/cover-images/whenthepawn.jpg",
        audioUrl: "/songs/FionaApple-PaperBag.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 219, // 3:39
      },
      {
        title: "Heavy Metal Heart",
        artist: "Sky Ferreira",
        imageUrl: "/cover-images/nighttimemytime.jpg",
        audioUrl: "/songs/SkyFerreira-HeavyMetalHeart.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 256, // 4:16
      },
      {
        title: "Paris, Texas",
        artist: "Lana Del Rey",
        imageUrl: "/cover-images/dyktatuob.png",
        audioUrl: "/songs/LanaDelRey-ParisTexas.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 206, // 3:26
      },
      {
        title: "Impossible",
        artist: "Clairo",
        imageUrl: "/cover-images/immunity.png",
        audioUrl: "/songs/Clairo-Impossible.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 230, // 3:50
      },
      {
        title: "Mood Ring",
        artist: "Lorde",
        imageUrl: "/cover-images/solarpower.png",
        audioUrl: "/songs/Lorde-MoodRing.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 225, // 3:45
      },
      {
        title: "Angels In Tibet",
        artist: "Amaarae",
        imageUrl: "/cover-images/fountainbaby.jpg",
        audioUrl: "/songs/Amaarae-AngelsInTibet.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 142, // 2:22
      },
      {
        title: "God's Chariots",
        artist: "Oklou",
        imageUrl: "/cover-images/galore.jpg",
        audioUrl: "/songs/Oklou-God'sChariots.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 183, // 3:03
      },
      {
        title: "MAGICIAN",
        artist: "Lexie Liu",
        imageUrl: "/cover-images/thehappystar.jpg",
        audioUrl: "/songs/LexieLiu-MAGICIAN.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 212, // 3:32
      },
    ]);

    // Create albums with references to song IDs
    const albums = [
      {
        title: "Urban Nights",
        artist: "Various Artists",
        imageUrl: "/albums/boytoy2.jpg",
        releaseYear: 2024,
        songs: createdSongs.slice(0, 5).map((song) => song._id),
      },
      {
        title: "Coastal Dreaming",
        artist: "Various Artists",
        imageUrl: "/albums/titanicrising.png",
        releaseYear: 2024,
        songs: createdSongs.slice(5, 10).map((song) => song._id),
      },
      {
        title: "Midnight Sessions",
        artist: "Various Artists",
        imageUrl: "/albums/heavenknows.jpg",
        releaseYear: 2024,
        songs: createdSongs.slice(10, 14).map((song) => song._id),
      },
      {
        title: "Eastern Dreams",
        artist: "Various Artists",
        imageUrl: "/albums/galore.jpg",
        releaseYear: 2024,
        songs: createdSongs.slice(14, 18).map((song) => song._id),
      },
    ];

    // Insert all albums
    const createdAlbums = await Album.insertMany(albums);

    // Update songs with their album references
    for (let i = 0; i < createdAlbums.length; i++) {
      const album = createdAlbums[i];
      const albumSongs = albums[i].songs;

      await Song.updateMany(
        { _id: { $in: albumSongs } },
        { albumId: album._id }
      );
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
