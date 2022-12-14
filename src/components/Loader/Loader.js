import { Hearts } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const LoaderImg = () => {
  return (
    <Wrapper>
      <Hearts heigth="200" width="200" color="#eeaeca" ariaLabel="loading" />
    </Wrapper>
  );
};

export default LoaderImg;
