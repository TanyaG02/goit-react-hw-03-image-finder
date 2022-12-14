import React from 'react';
import { Button, ButtonDiv } from './LoadMore.styled';
import PropTypes from 'prop-types';

const LoadMore = ({ onClick }) => {
  return (
    <ButtonDiv>
      <Button type="submit" onClick={onClick}>
        {' '}
        Load more
      </Button>
    </ButtonDiv>
  );
};

export default LoadMore;

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
