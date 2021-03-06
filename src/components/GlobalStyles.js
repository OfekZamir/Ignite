import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0 ;
        box-sizing:  border-box;
    }

    html{
        &::-webkit-scrollbar{
            width: 0.5rem ;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray ;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif ;
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-weight: lighter;
    }
    h3{
        font-size: 1.3rem;
        font-family: 'Montserrat', sans-serif ;
        color: #333;
        padding:1.3rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200% normal;
        color: #696969
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-family: "Montserrat", sans-serif;
    }
          @media(max-width: 800px) {
        h3{
            
        font-size: 1rem;
        }
            p{
        font-size: 1rem;
    }
  }
`;

export default GlobalStyles;
