import {useContext} from 'react';
import {Context} from '../../context/langContext';
import './Content.css';
import data from '../../assets/data.js';

function Content() {

    const {lang} = useContext(Context);

    return (
        <div className='content'>
            <h1 className="title">{data[lang].title}</h1>
            <p className="content-txt">{data[lang].txt}</p>        
        </div>
    );
}

export default Content;