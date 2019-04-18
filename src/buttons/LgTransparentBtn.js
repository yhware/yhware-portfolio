import styled from 'styled-components';
import {Button} from 'antd';

const LgTransparentBtn = styled(Button)`
  background: rgba(255,255,255,0.1);
  width: 170px;
  height: 50px;
  margin: 5px; 
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 800;
  font-size: 1.5em;
  
  :focus {
    background : rgba(255,255,255,0.2);
    color: palevioletred; 
  }
  :hover {
    background : rgba(255,255,255,0.2);
  }
`;

export default LgTransparentBtn;