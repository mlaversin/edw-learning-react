import {useContext} from 'react';
import FrenchFlag from '../../assets/france.svg';
import SpainFlag from '../../assets/spain.svg';
import UkFlag from '../../assets/united-kingdom.svg';
import './ToggleLangs.css';
import {Context} from '../../context/langContext';

export default function ToggleLangs() {

    const {toggleLang} = useContext(Context);

    return (
        <div className='container-langs'>
            <img onClick={() => toggleLang('FR')} src={FrenchFlag} alt="drapeau français" />            
            <img onClick={() => toggleLang('EN')} src={UkFlag} alt="drapeau du Royaume Uni" />            
            <img onClick={() => toggleLang('SP')} src={SpainFlag} alt="drapeau de l'Espagne" />            
        </div>
    );
}
