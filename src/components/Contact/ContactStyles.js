import styled from "styled-components"

export const ContactStyles = styled.section`
  max-width: 750px;
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  padding-top:80px;

  .intro-contacts {
    margin-top:50px;
    border-bottom:3px solid;
    border-color:var(--primary);
    padding-bottom:20px;
    margin-bottom:30px;

  }

  input {
    height: calc(var(--gap) * 2);
    margin-bottom: var(--gap);
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: red;
    opacity: 1; /* Firefox */
  }
  
  input,
  textarea {
    background-color: var(--primary);
    color: #fff;
    border: none;
    outline: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 6px;
    width: 100%;
    font-size: var(--p);
    font-weight: 700;
    font-family: "Heebo", sans-serif;
    padding: 15px;
    transition: outline 0.3s ease;

    

    &:focus {
      outline: 2px solid var(--primary);
      box-shadow: var(--boxShadow);
      background-color: #fff;
      color:  var(--primary);
    }

    &::-webkit-input-placeholder {
      color: white;
    }

    &::-moz-placeholder {
      color: white;
    }

    &:-ms-input-placeholder {
      color: white;
    }

    &:-moz-placeholder {
      color: white;
    }

    &:focus {
      &::-webkit-input-placeholder {
        color: var(--primary);
      }
  
      &::-moz-placeholder {
        color: var(--primary);
      }
  
      &:-ms-input-placeholder {
        color:var(--primary);
      }
  
      &:-moz-placeholder {
        color: var(--primary);
      }
    }
  }
  textarea {
    margin-bottom: var(--gap);
  }
`
