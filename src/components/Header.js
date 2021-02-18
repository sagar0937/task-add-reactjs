import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <>
      <header className='header'>
        <h2>{title}</h2>
        <Button
          color={showAdd ? "Green" : "Red"}
          text={showAdd ? "Add" : "close"}
          onClick={onAdd}
        />
      </header>
    </>
  );
};

export default Header;
