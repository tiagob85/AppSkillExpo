import { appSchema } from '@nozbe/watermelondb';

import { SkillSchema } from './skillSchema';

//Passa o vetor de schemas
export const schemas = appSchema({
    version: 2,
    tables: [SkillSchema]
});