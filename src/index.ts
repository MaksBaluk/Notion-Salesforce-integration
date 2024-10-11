import express from 'express';
import routes from "./routes/index";
import config from "./config";


const PORT: number = config.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/api", routes)
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
