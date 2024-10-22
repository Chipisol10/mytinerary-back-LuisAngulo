import "dotenv/config.js"
import '../../config/database.js'
import City from '../City.js'


const cities = [
    { 
      name: 'New York', 
      photo: 'https://media.istockphoto.com/id/1454217037/es/foto/estatua-de-la-libertad-y-horizonte-de-la-ciudad-de-nueva-york-con-el-distrito-financiero-de.webp?a=1&b=1&s=612x612&w=0&k=20&c=4pbxsG8hWCH8F6MHREDzs5iHNt3_PFZD8MTVvJogJVQ=', 
      country: 'United States',
      description: 'New York is known for its iconic landmarks like the Statue of Liberty and Times Square.',
      continent: 'North America', 
      currency: 'USD' 
    },
    { 
      name: 'Paris', 
      photo: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D', 
      country: 'France',
      description: 'Paris, the City of Light, is famous for its art, fashion, and the Eiffel Tower.',
      continent: 'Europe', 
      currency: 'EUR' 
    },
    { 
      name: 'Tokyo', 
      photo: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D', 
      country: 'Japan',
      description: 'Tokyo is a bustling metropolis blending traditional and modern architecture, famous for its cuisine and technology.',
      continent: 'Asia', 
      currency: 'JPY' 
    },
    { 
      name: 'Berlin', 
      photo: 'https://images.unsplash.com/photo-1546726747-421c6d69c929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlcmxpbnxlbnwwfHwwfHx8MA%3D%3D', 
      country: 'Germany',
      description: 'Berlin is rich in history and culture, known for its art scene and the Berlin Wall.',
      continent: 'Europe', 
      currency: 'EUR' 
    },
    { 
      name: 'London', 
      photo: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fExvbmRvbnxlbnwwfHwwfHx8MA%3D%3D', 
      country: 'United Kingdom',
      description: 'London is known for its historic landmarks like Big Ben, Buckingham Palace, and the British Museum.',
      continent: 'Europe', 
      currency: 'GBP' 
    },
    { 
      name: 'Sydney', 
      photo: 'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN5ZG5leXxlbnwwfHwwfHx8MA%3D%3D', 
      country: 'Australia',
      description: 'Sydney is famous for its Opera House, stunning harbor, and beaches.',
      continent: 'Oceania', 
      currency: 'AUD' 
    },
    { 
      name: 'Rome', 
      photo: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Um9tYXxlbnwwfHwwfHx8MA%3D%3D', 
      country: 'Italy',
      description: 'Rome, the capital of Italy, is known for its ancient history, including the Colosseum and Vatican City.',
      continent: 'Europe', 
      currency: 'EUR' 
    },
    { 
      name: 'Barcelona', 
      photo: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmFyY2Vsb25hfGVufDB8fDB8fHww', 
      country: 'Spain',
      description: 'Barcelona is known for its art and architecture, including the famous Sagrada Familia.',
      continent: 'Europe', 
      currency: 'EUR' 
    },
    { 
      name: 'Dubai', 
      photo: 'https://images.unsplash.com/photo-1489516408517-0c0a15662682?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RHViYWl8ZW58MHx8MHx8fDA%3D', 
      country: 'United Arab Emirates',
      description: 'Dubai is a global city known for its ultramodern architecture and luxury shopping.',
      continent: 'Asia', 
      currency: 'AED' 
    },
    { 
      name: 'Hong Kong', 
      photo: 'https://images.unsplash.com/photo-1604712312066-9b9433023576?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG9uZyUyMGtvbmd8ZW58MHx8MHx8fDA%3D', 
      country: 'Hong Kong',
      description: 'Hong Kong is a major global financial hub known for its skyline and deep natural harbor.',
      continent: 'Asia', 
      currency: 'HKD' 
    },
    { 
      name: 'Los Angeles', 
      photo: 'https://images.unsplash.com/photo-1518416177092-ec985e4d6c14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TG9zJTIwYW5nZWxlc3xlbnwwfHwwfHx8MA%3D%3D', 
      country: 'United States',
      description: 'Los Angeles is the entertainment capital of the world, home to Hollywood and famous beaches.',
      continent: 'North America', 
      currency: 'USD' 
    },
    { 
      name: 'Toronto', 
      photo: 'https://images.unsplash.com/photo-1507992781348-310259076fe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VG9yb250b3xlbnwwfHwwfHx8MA%3D%3D', 
      country: 'Canada',
      description: 'Toronto is a diverse city known for its skyline, which includes the CN Tower.',
      continent: 'North America', 
      currency: 'CAD' 
    },
    { 
      name: 'Buenos Aires', 
      photo: 'https://images.unsplash.com/photo-1679417302631-7a8998864de6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1ZW5vcyUyMGFpcmVzfGVufDB8fDB8fHww', 
      country: 'Argentina',
      description: 'Buenos Aires is known for its European-style architecture and rich cultural life, including tango music and dance.',
      continent: 'South America', 
      currency: 'ARS' 
    },
    { 
      name: 'Merida', 
      photo: 'https://media.istockphoto.com/id/517701302/es/foto/bol%C3%ADvar-y-monta%C3%B1a-picos-de-humboldt-en-m%C3%A9rida-estado-los-los-andes-venezuela.webp?a=1&b=1&s=612x612&w=0&k=20&c=vmqXY86syk1-8H5tFfWal2sjT7qzmZ0Iqy1wGJrYiSI=', 
      country: 'Venezuela',
      description: 'Mérida is known for its stunning Andean landscapes and outdoor activities like hiking and mountaineering.',
      continent: 'South America', 
      currency: 'VES' 
    },
    { 
      name: 'Bogota', 
      photo: 'https://images.unsplash.com/photo-1568632234165-47bb34c35708?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvZ290YXxlbnwwfHwwfHx8MA%3D%3D', 
      country: 'Colombia',
      description: 'Bogotá is the capital of Colombia, known for its high-altitude setting and cultural vibrancy.',
      continent: 'South America', 
      currency: 'COP' 
    }
  ];
  
  City.insertMany(cities)