	import PropTypes from 'prop-types';  
	import Button from './Button';  
	  
	const Header = ({ title }) => {  
	    const onClick = () => {  
	        //alert('Clique');  
            let elemento = document.createElement('p');
            elemento.innerHTML = 'A LUTA É GRANDE MAS A DERROTA É MAIOR'
            let container = document.querySelector('.container');
            container.appendChild(elemento)

	    };  
	    return (  
	        <header className="header">  
	            <h1> E a frase do {title}</h1>  
            <Button bgColor="red" text="Clique" onClick={onClick} />  
	        </header>  
    );  
	};  
	  
	Header.defaultProps = {  
	    title: 'compromissos',  
	};  
	  
	Header.propTypes = {  
	    title: PropTypes.string.isRequired,  
	};  
	  
	export default Header;  


    
    