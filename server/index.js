import express from 'express';
import bodyParser from 'body-parser'
import  mongoose from'mongoose';
import cors from 'cors';


// router 
import postRoutes from './routes/posts.js';

const app = express();


app.use('/posts', postRoutes);


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());




//we connect to mongodb atlas
const CONNECTION_URL = 'mongodb+srv://bram123:bram123@abram-stack.p1m5d.mongodb.net/test';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
