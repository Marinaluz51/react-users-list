import { useNavigate } from 'react-router-dom';

function Item({ item }) {
  const navigate = useNavigate();
  const handleClick = ()  => {
   
    navigate(`/details/${item.id}`);
  }


    return (
      <li>
        <p>{item.name}</p>
        <button type="button" onClick={handleClick}>Ver detalhes</button>
      </li>
    );
  }
  
  export default Item;
  