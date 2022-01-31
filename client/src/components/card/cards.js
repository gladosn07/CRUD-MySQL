import React, {useState} from 'react'
import FormDialog from '../dialog/dialog'
import './cards.css'

export default function Cards(props) {
    const [open, setOpen] = useState(false);

    const handleClickCard = () => {
        setOpen(true)
    }

    return (
        <>
             <FormDialog
                open={open}
                setOpen={setOpen}
                title={props.name}
                category={props.category}
                cost={props.cost}
                listCard={props.listCard}
                setListCard={props.setListCard}
                id={props.id}
             />
            <div className='card-container' onClick={handleClickCard}>
                <h1 className='card-title'>{props.name}</h1>
                <p className='card-cost'>{props.cost}</p>
                <p className='category'>{props.category}</p>
            </div>
        </>
    )
}
