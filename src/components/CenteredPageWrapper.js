import styled from "styled-components";
import GenericPageWrapper from "./GenericPageWrapper";

export default styled(GenericPageWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 576px) {  
     padding: calc(70px + 10px) 10px 0 10px ;
    }
`