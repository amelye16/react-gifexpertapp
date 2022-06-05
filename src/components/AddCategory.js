import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  // neceistamos saber el esatdo para saber lo que la persona está escribiendo

  const [inputValue, setInputvalue] = useState("");

  const handlerInputChange = (e) => {
    setInputvalue(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cater) => [inputValue, ...cater]);
      setInputvalue("");
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input value={inputValue} type="text" onChange={handlerInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
