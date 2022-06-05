import { tableSchema } from '@nozbe/watermelondb';

export const SkillSchema = tableSchema({
    name: 'skills',
    columns: [
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'type',
            type: 'string',
        }
    ]
});