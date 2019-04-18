import styled from 'styled-components';
import H1 from "../elements/H1";

const NameText = styled(H1)`
  font-size: 25vw;
  display: inline-block;
  text-align: center;
  color: #ff3e55;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 0 0 0 0;
  line-height: 1.0em;
  
  @media screen and (min-width: 700px) {
      
         font-size: 10em;
      
  }
`;


export default NameText;