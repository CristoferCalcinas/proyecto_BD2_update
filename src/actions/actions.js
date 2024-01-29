'use server';
import { Client } from 'pg'
import { cookies } from 'next/headers';
// import { revalidatePath } from 'next/cache'; 

// Se envia una query desde el textarea, esta funcion la procesa y se retorna el resultado
export const ProcessDatabaseQuery = async (query) => {
    const cookieStore = cookies();
    const userName = cookieStore.get('userDatabase')?.value ?? 'postgres';
    const password = cookieStore.get('passwordDatabase')?.value ?? '8066';

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
        cookieStore.set('response_last_query', JSON.stringify(queryResponse.rows));
        return queryResponse.rows;
    } catch (error) {
        console.log('ProcessDatabaseQuery')
        console.log(error);
        console.log('ProcessDatabaseQuery')
    }
    // revalidatePath('/');
};

// Ejecuta una query para retornar las tablas dentro de la base de datos
export const WatchDatabaseTables = async () => {
    const cookieStore = cookies();
    const userName = cookieStore.get('userDatabase')?.value ?? 'postgres';
    const password = cookieStore.get('passwordDatabase')?.value ?? '8066';

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
        console.log('WatchDatabaseTables')
        console.log(error);
        console.log('WatchDatabaseTables')
    }
    // revalidatePath('/');
};

// Ejecuta una query de tipo SELECT para retornar la informacion de una tabla
export const WatchTableData = async (tableName) => {
    const cookieStore = cookies();
    const userName = cookieStore.get('userDatabase')?.value ?? 'postgres';
    const password = cookieStore.get('passwordDatabase')?.value ?? '8066';

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
        cookieStore.set('response_last_query', JSON.stringify(queryResponse.rows));
        return queryResponse.rows;
    } catch (error) {
        cookies().set('permissionErrorMessage', JSON.stringify(error.message));
        cookies().set('response_last_query', '[]');
        console.log('WatchTableData')
        console.log(error);
        console.log('WatchTableData')
        return [
            {
                error: error.message
            }
        ];
    }
    // revalidatePath('/');
};

// Ejecuta una query para saber el nombre de la base de datos actual
export const WatchDatabaseName = async () => {
    const cookieStore = cookies();
    const userName = cookieStore.get('userDatabase')?.value ?? 'postgres';
    const password = cookieStore.get('passwordDatabase')?.value ?? '8066';

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
        SELECT current_database();
        `;
        const queryResponse = await db_user.query(query);
        db_user.end();

        return queryResponse.rows[0].current_database;
    } catch (error) {
        console.log('WatchDatabaseName')
        console.log(error);
        console.log('WatchDatabaseName')
    }
    // revalidatePath('/');
};

// Ejecuta una query de tipo CREATE TABLE para crear una nueva tabla
export const CreateTableAndRefresh = async (query) => {
    const cookieStore = cookies();
    const userName = cookieStore.get('userDatabase')?.value ?? 'postgres';
    const password = cookieStore.get('passwordDatabase')?.value ?? '8066';

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
        console.log('CreateTableAndRefresh')
        console.log(error);
        console.log('CreateTableAndRefresh')
    }
};

// Ejecuta una query de tipo CREATE USER **** WITH PASSWORD para la creacion de un nuevo usuario
export const CreateNewUserDatabase = async (query) => {
    const cookieStore = cookies();
    const userName = cookieStore.get('userDatabase')?.value ?? 'postgres';
    const password = cookieStore.get('passwordDatabase')?.value ?? '8066';

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
        console.log(queryResponse)
        return JSON.stringify(queryResponse);
    } catch (error) {
        console.log('CreateNewUserDatabase')
        console.log(error);
        console.log('CreateNewUserDatabase')
    }
};

// Ejecuta una query que retorna todos los usarios de la base de datos
export const WatchDatabaseUsers = async () => {
    const cookieStore = cookies();
    const userName = cookieStore.get('userDatabase')?.value ?? 'postgres';
    const password = cookieStore.get('passwordDatabase')?.value ?? '8066';

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
        SELECT * FROM pg_catalog.pg_user;
        `;
        const queryResponse = await db_user.query(query);
        db_user.end();
        console.log(queryResponse)
        return queryResponse.rows;
    } catch (error) {
        console.log('WatchDatabaseUsers');
        console.log(error);
        console.log('WatchDatabaseUsers');
    }
};