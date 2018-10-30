import * as express from 'express'
import { Request, Response } from 'express'
import * as path from 'path'
import render from './render'

class ExpressApp {
    public app : express.Application
    constructor(){
        this.app = express()
        this.parserSetup()
        this.routerSetup()
    }

    private parserSetup () : void {

    }

    private routerSetup () : void {
        this.app.use('/public', express.static(path.join(__dirname, '../../public')))
        this.app.get('*', (req : Request, res : Response) : Response => {
            const url = req.url
            const rendered = render(url)
            return res.send(rendered)
        })
    }
}

export default ExpressApp