import JSONdb  from 'simple-json-db'

export default class DatabaseAdapter {
    db: any

    constructor(dbFile: any){
        this.db = new JSONdb(dbFile);
    }

    public async incrementAndGetCount(){
        let data: any = await this.db.get('counter');
        data = data + 1;
        await this.db.set('counter', data);

        return await this.db.get('counter');
    }
}
