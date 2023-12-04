import { Client, Account } from 'appwrite';

const client = new Client();

const PROJECT_ID = '656e34cc3f8da2a6614e';
const ENDPOINT = 'https://cloud.appwrite.io/v1';

client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

export const account = new Account(client);