import 'dotenv/config.js';
import '../../config/database.js';
import User from '../User.js';


const users = [
    {
      name: "Alfonzo Davis",
      lastname:"Perez Diaz",
      email: "Alfonzo100@gmail.com",
      password: "Alfonzo100",
      url:"https://i.pravatar.cc/150?img=12",
      country: 'United States'
    },

    {
        name: "Ricardo Arjona",
        lastname:"Andrade Calderon",
        email: "Alfonzo10@gmail.com",
        password: "Alfonzo101",
        url:"https://i.pravatar.cc/150?img=12",
        country: 'United States'
      },
]


User.insertMany(users)