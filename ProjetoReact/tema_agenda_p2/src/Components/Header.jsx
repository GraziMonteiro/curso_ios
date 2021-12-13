import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    const onClick = () => {
        //alert('Clique');
        let elemento = document.createElement('p');
        elemento.innerHTML = 'Lavar a Louça';
        let container = document.querySelector('.container');
        container.appendChild(elemento);
    };
    return (
        <header className="header">
            <div>
                <h1> Frase do {title}</h1>
                <Button bgColor="#E6E9F8" text="Clique" onClick={onClick} />
            </div>
        </header>
    );
};

Header.defaultProps = {
    title: 'Casa',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;