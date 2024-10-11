import dotenv from 'dotenv';
import path from "path";

dotenv.config({path: path.resolve(__dirname, '../.env')}); // Вказуємо абсолютний шлях


interface Config {
    PORT: number;
    NOTION_API_KEY: string;
    DATABASE_ID: string;
    SALESFORCE_API_KEY: string;
    SALESFORCE_LOGIN_URL: string;
    SALESFORCE_USERNAME: string;
    SALESFORCE_PASSWORD: string;
    SALESFORCE_TOKEN: string;
}

const config: Config = {
    PORT: Number(process.env.PORT) || 5000,
    NOTION_API_KEY: process.env.NOTION_API_KEY || '',
    DATABASE_ID: process.env.DATABASE_ID || '',
    SALESFORCE_API_KEY: process.env.SALESFORCE_API_KEY || '',
    SALESFORCE_LOGIN_URL: process.env.SALESFORCE_LOGIN_URL || '',
    SALESFORCE_USERNAME: process.env.SALESFORCE_USERNAME || '',
    SALESFORCE_PASSWORD: process.env.SALESFORCE_PASSWORD || '',
    SALESFORCE_TOKEN: process.env.SALESFORCE_TOKEN || ''
};

export default config;
