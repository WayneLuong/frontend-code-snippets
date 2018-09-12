import React from "react";
import classnames from "classnames";

/* const TextInputGroup = (props) => {}
 Destructuring*/
const TextInputGroup = ({
  /* expected props */
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  error
}) => {
  return (
      <div className="form-group">
        <label htmlFor="name">{label}</label>
        {/* classnames lets you add classes e.g. bootstrap is-invalid for validation */}
        <input
          type={type}
          name={name}
          className={classnames("form-control form-control-lg", {
            "is-invalid": error
          })}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {/* conditional expression to show error message*/}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
  );
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
