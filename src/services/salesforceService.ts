import jsforce from 'jsforce';
import config from '../config';
import {logger} from '../logger';

const conn = new jsforce.Connection({
    loginUrl: config.SALESFORCE_LOGIN_URL,
});

const loginToSalesforce = async () => {
    try {
        logger.info('Logging in to Salesforce...');
        await conn.login(
            config.SALESFORCE_USERNAME,
            config.SALESFORCE_PASSWORD + config.SALESFORCE_TOKEN
        );
        logger.info('Logged in to Salesforce successfully.');
    } catch (error) {
        logger.error('Error logging into Salesforce: ' + error);
        throw error;
    }
};

export const addRecordToSalesforce = async (record: any) => {
    try {
        await loginToSalesforce();
        logger.info(`Adding record to Salesforce: ${JSON.stringify(record)}`);
        const result = await conn.sobject('Contact').create(record);
        logger.info('Record added to Salesforce successfully.');
        return result;
    } catch (error) {
        logger.error('Error adding record to Salesforce: ' + error);
        throw error;
    }
};
