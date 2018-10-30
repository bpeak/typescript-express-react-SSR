import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../react/App'
import * as path from 'path'
import * as fs from 'fs'

const render = (url : string) => {
    const indexFile = fs.readFileSync(path.join(__dirname, '../../public/index.html'), { encoding : 'utf-8' } )
    const appRenderingResult = ReactDOMServer.renderToString(
        <StaticRouter location={url}>
            <App/>
        </StaticRouter>
    )
    const rendered = indexFile.replace('<div id="app-root"></div>', `<div id="app-root">${appRenderingResult}</div>`)
    return rendered
}

export default render