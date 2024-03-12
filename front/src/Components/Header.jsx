import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const onSearch = () => {
    navigate(`/search?search=${encodeURIComponent(text)}`)
  }
  
  return (
    <div>
      <input type = "text" value = {text} onChange = {handleChange}/>
      <button onClick = {onSearch}>검색</button>
    </div>
  );
};

export default Header;