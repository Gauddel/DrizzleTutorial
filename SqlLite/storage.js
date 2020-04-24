import { openDatabase } from 'react-native-sqlite-storage';

class Storage {

    db;

    constructor() {
        this.db = openDatabase({name : 'KeyStorage'});
        this.db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS KeyTable(key_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), key VARCHAR(255))'
            );
        });
    }

    updateStore(keyStore, id) {
        this.db.transaction((tx) => {
            tx.executeSql(
                'UPDATE KeyTable set key=? where key_id=?',
                [keyStore, id],
                (rtx, result) => this.afterTransaction(rtx, result)
            );
        });
    }

    selectStore(name) {
        this.db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM KeyTable where name=?',
                [name],
                (rtx, result) => this.afterTransaction(rtx, result)
            )
        });
    }

    insertStore(name, keyStore) {
        this.db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO KeyTable(name, key) VALUES (?, ?)',
                [name, keyStore],
                (rtx, result) => this.afterTransaction(rtx, result)
            );
        });
    }

    afterTransaction(rtx, keyStore) {
        console.log('Result', result.rowAffected);  
        console.log('Transaction result', rtx); 
    }
}

export default Storage;