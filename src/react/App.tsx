import * as React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
//components
import HomePage from '~components/pages/HomePage/HomePage'
import PostsPage from '~components/pages/PostsPage/PostsPage'

interface IProps {
    location? : 'string'
}

class App extends React.Component<IProps>{
    constructor(props : IProps){
        super(props)
        const isBrowser = process.env.isBrowser
        if(isBrowser){
            console.log('run in browser')
        } else {
            console.log('run in server')
        }
    }

    render(){
        return (
            <div>
                <h1>REACT SERVER SIDE RENDERING</h1>
                <div>
                    <div><Link to="/">홈</Link></div>
                    <div><Link to="/posts">포스트스</Link></div>
                </div>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/posts" component={PostsPage}/>
            </div>
        )
    }
}

export default App