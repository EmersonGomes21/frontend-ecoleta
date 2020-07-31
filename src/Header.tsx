import React from 'react';
//React.FC = componente React escrito em formato de Função, para poder receber parametros
interface HeaderProps {
  title : string;
}


const Header: React.FC<HeaderProps> = (props)=>{
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}

export default Header;