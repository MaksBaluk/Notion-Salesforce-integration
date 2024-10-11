import {Client} from '@notionhq/client';
import config from '../config';
import {logger} from '../logger';

const notion = new Client({auth: config.NOTION_API_KEY});

export const fetchNotionRecords = async () => {
    try {
        logger.info('Fetching records from Notion...');
        const response = await notion.databases.query({
            database_id: config.DATABASE_ID,
        });

        const records = response.results.map((page: any) => ({
            name: page.properties.Name.title[0]?.text.content,
            email: page.properties.Email.email,
            phone: page.properties.Phone.phone_number,
        }));

        logger.info(`Fetched ${records.length} records from Notion.`);
        return records;
    } catch (error) {
        logger.error('Error fetching Notion records: ' + error);
        throw error;
    }
};
