import { Router, Request, Response } from  'express'
import JSONdb  from 'simple-json-db'
import fetch from 'node-fetch'

const router = Router();
const db = new JSONdb('db.json');

router.get('/double/:number', (req: Request, res: Response) => {
    const numb: number = req.params.number as unknown as number;
    return res.json({ result : numb * 2 });
})

router.get('/count', (req: Request, res: Response) => {
    let data: any = db.get('counter');
    data = data + 1;
    db.set('counter', data);
    return res.json({ count : data });
  })

router.get('/joke', async (req: Request, res: Response) => {
    const resposne = await fetch('https://api.jokes.one/jod');
    const data = await resposne.json();
    return res.json({ jokeOfTheDay : data.contents.jokes[0].joke.text});
  })

export default router;