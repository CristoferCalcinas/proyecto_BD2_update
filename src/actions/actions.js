'use server';
import { Client } from 'pg'
import { cookies } from 'next/headers';
// import { revalidatePath } from 'next/cache';

// Se envia una query desde el textarea, esta funcion la procesa y se retorna el resultado
export const ProcessDatabaseQuery = async (query) => {
    const cookieStore = cookies();
    const userName = cookieStore.get('userName')?.value ?? 'postgres';
    const password = cookieStore.get('password')?.value ?? '8066';

    const db_user = new Client({
        user: userName,
        host: 'localhost',
        database: 'restaurante', // restaurante
        password: password,
        port: 4321,
    });
    try {
        db_user.connect();
        const queryResponse = await db_user.query(query);
        db_user.end();
        return queryResponse.rows;
    } catch (error) {
        console.log(error);
    }
    // revalidatePath('/');
};

// Ejecuta una query para retornar las tablas dentro de la base de datos
export const WatchDatabaseTables = async () => {
    const cookieStore = cookies();
    const userName = cookieStore.get('userName')?.value ?? 'postgres';
    const password = cookieStore.get('password')?.value ?? '8066';

    const db_user = new Client({
        user: userName,
        host: 'localhost',
        database: 'restaurante', // restaurante
        password: password,
        port: 4321,
    });
    try {
        db_user.connect();
        const query = `
        SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname = 'public';
        `;
        const queryResponse = await db_user.query(query);
        db_user.end();
        return queryResponse.rows;
    } catch (error) {
        console.log(error);
    }
    // revalidatePath('/');
}

// Ejecuta una query de tipo SELECT para retornar la informacion de una tabla
export const WatchTableData = async (tableName) => {
    const cookieStore = cookies();
    const userName = cookieStore.get('userName')?.value ?? 'postgres';
    const password = cookieStore.get('password')?.value ?? '8066';

    const db_user = new Client({
        user: userName,
        host: 'localhost',
        database: 'restaurante', // restaurante
        password: password,
        port: 4321,
    });
    try {
        db_user.connect();
        const query = `
        SELECT * FROM ${tableName};
        `;
        const queryResponse = await db_user.query(query);
        db_user.end();
        return queryResponse.rows;
    } catch (error) {
        console.log(error);
    }
    // revalidatePath('/');
} 