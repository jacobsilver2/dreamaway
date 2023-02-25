// const Airtable = require("airtable");
import Airtable from "airtable";

// Authenticate
Airtable.configure({
  // apiKey: "keyY11TcpoTR646Fh",
  apiKey: process.env.AIRTABLE_API_KEY,
});

// Initialize a base
const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

// Reference a table
const eventsTable = base(process.env.AIRTABLE_EVENTS_TABLE_NAME);

export { eventsTable };
