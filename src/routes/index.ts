import {Router, Request, Response} from 'express';
import {fetchNotionRecords} from '../services/notionService';
import {addRecordToSalesforce} from '../services/salesforceService';
import {logger} from '../logger';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Test endpoint')
})


// @ts-ignore
router.get('/sync-records', async (req: Request, res: Response) => {
    try {
        logger.info('Starting record sync from Notion to Salesforce...');
        const notionRecords = await fetchNotionRecords();

        if (!notionRecords || notionRecords.length === 0) {
            logger.warn('No records found in Notion.');
            return res.status(404).json({message: 'No records found in Notion.'});
        }

        const syncedRecords = [];
        for (const record of notionRecords) {
            const mappedRecord = mapNotionToSalesforce(record);
            const result = await addRecordToSalesforce(mappedRecord);
            syncedRecords.push(result);
        }

        logger.info('Records successfully synced with Salesforce.');
        res.status(200).json({
            message: 'Records successfully synced with Salesforce!',
            syncedRecords,
        });
    } catch (error) {
        logger.error('Error syncing records: ' + error);
        res.status(500).json({message: 'Error syncing records', error});
    }
});

export default router;

function mapNotionToSalesforce(notionRecord: any) {
    return {
        LastName: notionRecord.name || 'Unknown',
        Email: notionRecord.email || '',
        Phone: notionRecord.phone || '',
    };
}
