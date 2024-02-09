import express from "express";
import 'dotenv/config'


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = process.env.PORT || 3000;



import routes from './routes/index.js'
app.use(routes)

app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));