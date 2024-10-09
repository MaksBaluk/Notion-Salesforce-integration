import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

const app = express();
const PORT: number = Number(process.env.PORT) || 5000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Notion-Salesforce Integration API');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
