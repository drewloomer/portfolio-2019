import styled from '../util/styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 60rem;
  padding: ${props => props.theme.padding.sm};
`;

export default Wrapper;
