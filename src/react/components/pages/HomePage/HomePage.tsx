import * as React from 'react'
import * as classNames from 'classnames/bind'

//styles
const styles = require('./HomePage.scss')
const cx = classNames.bind(styles)
//assets
const homeImg : string = require('~assets/55.jpg')

interface IProps {
    
}

interface IState {

}

class HomePage extends React.PureComponent<IProps, IState> {
    constructor(props : IProps){
        super(props)
    }

    render() {
        return (
            <div className={cx('title')}>
                홈
                <img src={homeImg}/>
            </div>
        )
    }
}

export default HomePage