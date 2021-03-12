import React from 'react';
import {useHistory} from 'react-router-dom'
import './AboutPage.css'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (<div className="about">
        <h3>Саша Мангир лучше всех!</h3>
        <button className="btn" onClick={ () => history.push("/")}>Обратно к списку</button>
    </div>)
}