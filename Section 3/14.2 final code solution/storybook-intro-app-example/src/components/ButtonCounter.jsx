import './buttonCounter.css'

export const ButtonCounter = ({label, onClick, size, backgroundColor, buttonStyleVersion}) => {
    return (
        <div>
            <button
            className={[buttonStyleVersion,`counter-button--${size}`].join(' ')}
            style={backgroundColor && {backgroundColor}}
            onClick={onClick}
            >{label}</button>
        </div>
    )
}