import Airtable from "airtable";

// Authenticate
Airtable.configure({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
});

// Initialize a base
const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

// Reference a table
const eventsTable = base(process.env.NEXT_PUBLIC_AIRTABLE_EVENTS_TABLE_NAME);
const actsTable = base(process.env.NEXT_PUBLIC_AIRTABLE_ACTS_TABLE_NAME);

export { eventsTable, actsTable };
