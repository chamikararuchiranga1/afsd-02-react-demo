import './card.css'
import Button, {PropButton} from './Button'

export default function Card ({title='Title', content='content...', btnName='Button Name', btnColor='black',onClickChange }) {
    return (
        <div className="card">
            <h2 className='title'>{title}</h2>
            <p className='paragraph'>{content}</p>
            <div className='btn-content'>
                <Button name={btnName} color={btnColor} onClick={(val)=> onClickChange(val)}/>
            </div>
        </div>
    )
}