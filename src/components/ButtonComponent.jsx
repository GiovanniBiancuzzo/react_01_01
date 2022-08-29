// 6 Crea un nuovo componente come function, chiamalo ButtonComponent: dovrebbe ritornare un tag ‘button’. Il testo del bottone dovrebbe essere passato tramite le Props del componente e visualizzato in mezzo ai tag <button></button> .

const ButtonComponent = (props) => (
    <button>
        <a href={props.href}>{props.text}</a>
    </button>
);

export default ButtonComponent;
