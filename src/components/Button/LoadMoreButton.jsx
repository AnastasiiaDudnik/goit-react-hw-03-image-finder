import PropTypes from 'prop-types';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load more
    </button>
  );
};

LoadMoreButton.PropType = {
  onClick: PropTypes.func.isRequired,
};
