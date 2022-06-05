import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { schemas } from './schemas';
import { SkillModel } from './model/SkillModel';


//Conexão do adapter
const adapter = new SQLiteAdapter({
    schema: schemas
})

//Conectando o banco de dados e tabelas.
export const database = new Database({
    adapter,
    modelClasses: [SkillModel]
})