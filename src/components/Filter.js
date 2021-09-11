import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ filter }) => {
  const handleChange = (e) => {
    filter(e.target.value);
  };

  return (
    <form className="inner-form-container">
      <input
        type="text"
        name="name"
        placeholder="Search Company"
        onChange={(e) => { setTimeout(() => handleChange(e), 1000); }}
        className="searchField"
      />
    </form>
  );
};

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};
export default Filter;
