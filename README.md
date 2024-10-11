# Notion to Salesforce Sync

## Installation

1. Clone the repository.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file with your Notion and Salesforce API keys:
    ```
    PORT=5000
    NOTION_TOKEN=your_notion_token
    NOTION_DATABASE_ID=your_notion_database_id
    SALESFORCE_LOGIN_URL=your_salesforce_login_url
    SALESFORCE_USERNAME=your_salesforce_username
    SALESFORCE_PASSWORD=your_salesforce_password
    SALESFORCE_TOKEN=your_salesforce_api_token
    ```
4. Build the app:
    ```bash
    npm run build
    ```
5. Start the server:
    ```bash
    npm start
    ```

## Usage

The API syncs records from Notion to Salesforce using the `/sync-records` endpoint.

### Endpoints
- `GET /sync-records`: Syncs records from Notion to Salesforce.

### Logging

Logs are generated using `winston` and can be used for debugging or understanding the flow of operations.

## Notes

- Ensure that your Notion database and Salesforce credentials are properly set in the `.env` file.
- The sync process automatically restarts from where it left off in case of failure.
