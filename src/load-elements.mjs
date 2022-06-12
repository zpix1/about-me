import { Client } from '@notionhq/client';
import fs from 'fs';

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID

const save = async (what, where) => {
    return new Promise(resolve => fs.writeFile(where, JSON.stringify(what), 'utf8', resolve));
}

const list = async () => {
    return (await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {property: 'Date', direction: 'descending'}
        ]
    })).results.map(e => e.properties).map(
        ({Result, Team, Name}) => {
            return {
                result: Result.multi_select.map(e => e.name)[0],
                team: Team.multi_select.map(e => e.name).join(", "),
                name: Name.title[0].text.content
            }
        }
    );
}

console.log(await list());

save(await list(), 'data.json');
