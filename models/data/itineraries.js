import "dotenv/config.js"
import '../../config/database.js'
import Itinerary from '../Itinerary.js'


const itineraries = [
    {
        name: "Alice Johnson",
        photo: "https://i.pravatar.cc/150?img=9",
        price: 2,
        duration: "4 hours",
        likes: "0",
        hashtags: ["#NYC", "#Skyline", "#CityViews"],
        city: "6716f8a0a0706d2100376f1f"
      },
      {
        name: "John Smith",
        photo: "https://i.pravatar.cc/150?img=12",
        price: 3,
        duration: "3 hours",
        likes: "0",
        hashtags: ["#NYC", "#CentralPark", "#Tour"],
        city: "6716f8a0a0706d2100376f1f"
      },
      {
        name: "Emma Brown",
        photo: "https://i.pravatar.cc/150?img=1",
        price: 5,
        duration: "2.5 hours",
        likes: "0",
        hashtags: ["#NYC", "#Broadway", "#TimesSquare"],
        city: "6716f8a0a0706d2100376f1f"
      },
      {
        name: "Carlos Martínez",
        photo: "https://i.pravatar.cc/150?img=7",
        price: 5,
        duration: "3 hours",
        likes: "0",
        hashtags: ["#Paris", "#Eiffel", "#Louvre"],
        city: "6716f8a0a0706d2100376f20"
      },
      {
        name: "Marie Dubois",
        photo: "https://i.pravatar.cc/150?img=24",
        price: 3,
        duration: "5 hours",
        likes: "0",
        hashtags: ["#Paris", "#Montmartre", "#Seine"],
        city: "6716f8a0a0706d2100376f20"
      },
      {
        name: "Luc Picard",
        photo: "https://i.pravatar.cc/150?img=66",
        price: 5,
        duration: "4 hours",
        likes: "0",
        hashtags: ["#Paris", "#NotreDame", "#History"],
        city: "6716f8a0a0706d2100376f20"
      },
      {
        name: "Sakura Yamamoto",
        photo: "https://i.pravatar.cc/150?img=65",
        price: 1,
        duration: "5 hours",
        likes: "0",
        hashtags: ["#Tokyo", "#Temple", "#Shibuya"],
        city: "6716f8a0a0706d2100376f21"
      },
      {
        name: "Taro Tanaka",
        photo: "https://i.pravatar.cc/150?img=57",
        price: 3,
        duration: "3.5 hours",
        likes: "0",
        hashtags: ["#Tokyo", "#Akihabara", "#Tech"],
        city: "6716f8a0a0706d2100376f21"
      },
      {
        name: "Miki Sato",
        photo: "https://i.pravatar.cc/150?img=51",
        price: 5,
        duration: "6 hours",
        likes: "0",
        hashtags: ["#Tokyo", "#Sakura", "#Asakusa"],
        city: "6716f8a0a0706d2100376f21"
      },
      {
        name: "Hans Müller",
        photo: "https://i.pravatar.cc/150?img=8",
        price: 3,
        duration: "4 hours",
        likes: "0",
        hashtags: ["#Berlin", "#Wall", "#History"],
        city: "6716f8a0a0706d2100376f22"
      },
      {
        name: "Lara Schmidt",
        photo: "https://i.pravatar.cc/150?img=32",
        price: 5,
        duration: "3 hours",
        likes: "0",
        hashtags: ["#Berlin", "#MuseumIsland", "#Art"],
        city: "6716f8a0a0706d2100376f22"
      },
      {
        name: "Fritz Lang",
        photo: "https://i.pravatar.cc/150?img=62",
        price: 2,
        duration: "4.5 hours",
        likes: "0",
        hashtags: ["#Berlin", "#BrandenburgGate", "#CityWalk"],
        city: "6716f8a0a0706d2100376f22"
      },

      {
        name: "James Parker",
        photo: "https://i.pravatar.cc/150?img=63",
        price: 3,
        duration: "4 hours",
        likes: "0",
        hashtags: ["#London", "#BigBen", "#Thames"],
        city: "6716f8a0a0706d2100376f23"
      },
      {
        name: "Emily Clark",
        photo: "https://i.pravatar.cc/150?img=9",
        price: 4,
        duration: "5 hours",
        likes: "0",
        hashtags: ["#London", "#TowerBridge", "#CityTour"],
        city: "6716f8a0a0706d2100376f23"
      },
      {
        name: "Oliver Thompson",
        photo: "https://i.pravatar.cc/150?img=60",
        price: 5,
        duration: "3 hours",
        likes: "0",
        hashtags: ["#London", "#BuckinghamPalace", "#Park"],
        city: "6716f8a0a0706d2100376f23"
      },
      {
        name: "Liam Wilson",
        photo: "https://i.pravatar.cc/150?img=10",
        price: 4,
        duration: "3 hours",
        likes: "0",
        hashtags: ["#Sydney", "#OperaHouse", "#Harbor"],
        city: "6716f8a0a0706d2100376f24"
      },
      {
        name: "Ava Taylor",
        photo: "https://i.pravatar.cc/150?img=16",
        price: 2,
        duration: "4.5 hours",
        likes: "0",
        hashtags: ["#Sydney", "#BondiBeach", "#Surf"],
        city: "6716f8a0a0706d2100376f24"
      },
      {
        name: "Noah Brown",
        photo: "https://i.pravatar.cc/150?img=59",
        price: 3,
        duration: "3.5 hours",
        likes: "0",
        hashtags: ["#Sydney", "#BridgeClimb", "#Adventure"],
        city: "6716f8a0a0706d2100376f24"
      },
      {
        name: "Marco Rossi",
        photo: "https://i.pravatar.cc/150?img=58",
        price: 4,
        duration: "5 hours",
        likes: "0",
        hashtags: ["#Rome", "#Colosseum", "#History"],
        city: "6716f8a0a0706d2100376f25"
      },
      {
        name: "Giulia Bianchi",
        photo: "https://i.pravatar.cc/150?img=17",
        price: 5,
        duration: "6 hours",
        likes: "0",
        hashtags: ["#Rome", "#Vatican", "#Museums"],
        city: "6716f8a0a0706d2100376f25"
      },
      {
        name: "Luigi Verdi",
        photo: "https://i.pravatar.cc/150?img=56",
        price: 3,
        duration: "4 hours",
        likes: "0",
        hashtags: ["#Rome", "#Pantheon", "#CityWalk"],
        city: "6716f8a0a0706d2100376f25"
      },
   
  

  {
          name: "Juan Perez",
          photo: "https://i.pravatar.cc/150?img=55",
          price: 2,
          duration: "3 hours",
          likes: "0",
          hashtags: ["#BuenosAires", "#Tango", "#Culture"],
          city: "6716f8a0a0706d2100376f2b"
        },
        {
          name: "Sofia Martinez",
          photo: "https://i.pravatar.cc/150?img=19",
          price: 5,
          duration: "4 hours",
          likes: "0",
          hashtags: ["#BuenosAires", "#Recoleta", "#History"],
          city: "6716f8a0a0706d2100376f2b"
        },
        {
          name: "Carlos Rodriguez",
          photo: "https://i.pravatar.cc/150?img=50",
          price: 1,
          duration: "3.5 hours",
          likes: "0",
          hashtags: ["#BuenosAires", "#LaBoca", "#Football"],
          city: "6716f8a0a0706d2100376f2b"
        },
        
        {
          name: "Luis Ramirez",
          photo: "https://i.pravatar.cc/150?img=68",
          price: 5,
          duration: "2.5 hours",
          likes: "0",
          hashtags: ["#Merida", "#Teleferico", "#Andes"],
          city: "6716f8a0a0706d2100376f2c"
        },
        {
          name: "Ana Gonzalez",
          photo: "https://i.pravatar.cc/150?img=23",
          price: 2,
          duration: "3 hours",
          likes: "0",
          hashtags: ["#Merida", "#Nature", "#Mountains"],
          city: "6716f8a0a0706d2100376f2c"
        },
        {
          name: "Miguel Fernandez",
          photo: "https://i.pravatar.cc/150?img=12",
          price: 4,
          duration: "4 hours",
          likes: "0",
          hashtags: ["#Merida", "#CulturalTour", "#Landscapes"],
          city: "6716f8a0a0706d2100376f2c"
        },
     
        {
          name: "Camila Torres",
          photo: "https://i.pravatar.cc/150?img=27",
          price: 3,
          duration: "3 hours",
          likes: "0",
          hashtags: ["#Bogota", "#Monserrate", "#Views"],
          city: "6716f8a0a0706d2100376f2d"
        },
        {
          name: "Alejandro Rios",
          photo: "https://i.pravatar.cc/150?img=15",
          price: 5,
          duration: "3.5 hours",
          likes: "0",
          hashtags: ["#Bogota", "#GoldMuseum", "#History"],
          city: "6716f8a0a0706d2100376f2d"
        },
        {
          name: "Laura Jimenez",
          photo: "https://i.pravatar.cc/150?img=29",
          price: 1,
          duration: "4.5 hours",
          likes: "0",
          hashtags: ["#Bogota", "#StreetArt", "#Culture"],
          city: "6716f8a0a0706d2100376f2d"
        }
      
      
]
  
  Itinerary.insertMany(itineraries)