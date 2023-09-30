import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button, {PropButton} from './Button'
import Card from './Card'
import Bootstrap from './Bootstrap'

function App() {

    const [data, setData] = useState(0);

    // console.log(data)

    // useEffect(function(){

    // },[])
    useEffect(()=> {
        console.log("run---methode")
        console.log(data);
    },[data])


    const dataArray = [
        {
            title: 'Sample Title 1',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, possimus deserunt quasi animi nihil alias vel error maxime enim aut quibusdam tempora magni adipisci eos nam provident incidunt? Consectetur, itaque!',
            btnColor: 'blue',
            btnName: 'Add Content 1',
        },
        {
            title: 'Sample Title 2',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, possimus deserunt quasi animi nihil alias vel error maxime enim aut quibusdam tempora magni adipisci eos nam provident incidunt? Consectetur, itaque!',
            btnColor: 'green',
            btnName: 'Add Content 2',
        },
        {
            title: 'Sample Title 3',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, possimus deserunt quasi animi nihil alias vel error maxime enim aut quibusdam tempora magni adipisci eos nam provident incidunt? Consectetur, itaque!',
            btnColor: 'red',
            btnName: 'Add Content 3',
        }
    ];

    function click (val){
        console.log(val);
    }

    return (
        <>
            <h1>Chamikara Ruchiranga</h1>

            <Button name={'Add Button'} color={'blue'} onClick={(val)=> setData(data+1)}/>
            <Button name={'Delete Button'} color={'black'} onClick={(val)=> console.log(val)}/>
            <Button name={'Update Button'} color={'green'} onClick={(val)=> console.log(val)}/>
            <Button name={'Send Button'} color={'#29255b'} onClick={(val)=> console.log(val)}/>

            <br/>
            <PropButton name={'CLick Name'}/>

            <br />
            <br />
            {/* Card */}
            <div className='card-area'>
                {dataArray.map((value, index)=> (
                    <Card
                    key={index}
                    title={value.title} 
                    content={value.content}
                    btnName={value.btnName}
                    btnColor={value.btnColor}
                    onClickChange={(val)=> click(val)}/>
                ))}
            </div>

            <br /><br />
            <h2>Bootstrap</h2>
            <Bootstrap/>
            
        </>
    )
}

export default App
