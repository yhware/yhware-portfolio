import styled from "styled-components";

export default styled.div`
    // xs
    @media (max-width: 575px) {  
     padding: calc(70px + 10px) 10px;
    }
    
    // sm
    @media (min-width: 576px) {  
     padding: calc(70px + 10px) 10px;
    }
     
    // md
    @media (min-width: 768px) {  
     padding: 20px 10px;
    }
     
    // lg
    @media (min-width: 992px) { 
        padding: 30px 30px;
    }
     
     // xl
    @media (min-width: 1200px) {  
        padding: 50px 50px;
    }
  
  min-height: 100vh;
`