import { memo } from 'react';
import { styled } from 'styled-components';
interface ChildProps {
  handleOnChange: (lable: string) => void;
}

const Inputfilter = styled.input({
  width: '300px',
  height: '30px',
  marginLeft: '10px',
  borderRadius: '5px',
});
export default memo(function Child({ handleOnChange }: ChildProps) {
  console.log('this is Input filter component')
  return (
    <>
      <Inputfilter
        onChange={(e) => handleOnChange(e.target.value)}
      ></Inputfilter>
      <p>Et mon Fille</p>
    </>
  );
});
