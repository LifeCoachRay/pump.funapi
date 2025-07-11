   const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   require('dotenv').config();

   const app = express();
   const PORT = process.env.PORT || 5000;

   // Middleware
   app.use(cors());
   app.use(express.json());

   // Connect to MongoDB
   mongoose.connect(process.env.MONGODB_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true
   });

   mongoose.connection.on('connected', () => {
       console.log('Connected to MongoDB');
   });

   // Simple route
   app.get('/', (req, res) => {
       res.send('Welcome to Pump.fun API!');
   });

   app.listen(PORT, () => {
       console.log(`Server running on port ${PORT}`);
   });
