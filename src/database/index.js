import * as SQLite from 'expo-sqlite';

// criando um banco de dados SQLite
const tarefas = SQLite.openDatabaseAsync('tarefas.db');

export default tarefas;