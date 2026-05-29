import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import {  } from '../modules/stock/models/product.model';
dotenv.config();
const allEntities = [];

const AppDataSource = new DataSource({
 type: 'postgres',
 url : process.env.DB_HOST,
 ssl: true,
 extra:{
    ssl: { rejectUnauthorized: false},
 },
synchronize:true,
logging: false,
entities: allEntities,
});

export async function syncDatabase() {
    try{
        console.log('Conectando ao Supabase para sincronizar esquema...'),
        await AppDataSource.initialize();
        console.log('Banco de dados sincronizado com sucesso!');
    }catch (error) {
        console.error('Erro ao sincronizar o banco de dados', error);
    }
}