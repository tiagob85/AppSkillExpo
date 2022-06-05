import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

//Criando o modelo do banco.
export class SkillModel extends Model{
    static table = 'skills'

    @field('name')
    name!: string;

    @field('type')
    type!: string;

}