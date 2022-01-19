import {useState} from 'react'
import './MultiForm.css'
import Indicator from './Indicator/Indicator'

export default function MultiForm() {

    const [formIndex, setFormIndex] = useState(1);
    const [allFormData, setAllFormData] = useState({
        dietForm: "",
        foodStyle: [],
        allergies: [],
        prefs: {}
    })

    return (
        <div className='container-multiform'>
            <Indicator />
        </div>
    )
}
