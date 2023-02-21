import "./search-box.styles.css";

export const Searchbox = ({className, placeholder, onChangeHandler}) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
