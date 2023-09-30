import './button.css'

export default function Button(props) {

    return (
        <>
            <button
                style={{backgroundColor: props.color}}
                className='button'
                onClick={() => props.onClick(props.name)}
            >
                {props.name}
            </button>
        </>
    )
}

export function PropButton({name}) {

    return (
        <>
            <button className='button'>
                {name}
            </button>
        </>
    )
}

// export function RoundedButton() {

//     return (
//       <>
//         <button>Delete Button</button>
//       </>
//     )
//   }

// export default Button;
