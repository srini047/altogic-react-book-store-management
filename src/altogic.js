import { createClient } from 'altogic';

let envURL = process.env.REACT_APP_ALTOGIC_ENV_URL
let clientKey = process.env.REACT_APP_ALTOGIC_CLIENT_KEY

const altogic = createClient(envURL, clientKey);

export default altogic;
