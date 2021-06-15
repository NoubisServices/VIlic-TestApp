import JSONdb  from 'simple-json-db'

export default class DatabaseAdapter {
    db: any

    constructor(dbFile: any){
        this.db = new JSONdb(dbFile);
    }

    public incrementAndGetCount(){
        let data: any = this.db.get('counter');
        data = data + 1;
        this.db.set('counter', data);

        return this.db.get('counter');
    }
}
