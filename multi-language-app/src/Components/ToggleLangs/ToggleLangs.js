import {useContext} from 'react';
import FrenchFlag from '../../assets/france.svg';
import SpainFlag from '../../assets/spain.svg';
import UkFlag from '../../assets/united-kingdom.svg';
import './ToggleLangs.css';

export default function ToggleLangs() {
    return (
        <div className='container-langs'>
            <img src={FrenchFlag} alt="drapeau français" />            
            <img src={UkFlag} alt="drapeau du Royaume Uni" />            
            <img src={SpainFlag} alt="drapeau de l'Espagne" />            
        </div>
    );
}
