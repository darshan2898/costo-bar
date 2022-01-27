import styled from "styled-components";

export const ContactSecStyle = styled.div`
  width: 100%;
  padding: 3em 8em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 3em 2.5em;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ContactSecLeftStyle = styled.div`
  width: 50%;
  display: grid;
  place-items: center;
  h1 {
    font-size: 5rem;
    margin-bottom: 0.4em;
    @media (max-width: 425px) {
      text-align: center;
    }
  }
  p {
    font-size: 1.7rem;
    text-align: center;
    font-weight: 300;
    padding-bottom: 1.7em;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;
export const ContactSecRightStyle = styled.div`
  width: 50%;
  text-align: center;
  h1 {
    font-family: ${({ theme }) => theme.fonts.stylishFont};
    font-size: 5rem;
  }

  .rgBody {
    margin-top: 3.5em;
    h2 {
      font-size: 2rem;
      font-family: ${({ theme }) => theme.fonts.bodyFont};
      font-weight: 500;
      margin-bottom: 0.2em;
    }
    p {
      font-size: 1.8rem;
      font-weight: 300;
      margin-bottom: 3em;
    }
  }
  @media (max-width: 425px) {
    width: 100%;
    margin-top: 3.5em;
  }
`;

export const ContactFormStyle = styled.div`
  width: 100%;
  padding: 2em;
  @media (max-width: 425px) {
    padding: 2em 0;
  }

  label {
    font-size: 1.7rem;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 1em;
    font-size: 2rem;
    padding: 0.7em 1em;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.colors.lightgrey};
    border-radius: 8px;
  }
  button {
    width: 100%;
    color: ${({ theme }) => theme.colors.whiteOne};
    border: none;
    outline: none;
    background: ${({ theme }) => theme.colors.darkblue};
    font-size: 1.6rem;
    padding: 0.8em;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 5px;
    font-weight: bold;
    transition: ${({ theme }) => theme.locals.transition};
    &:hover {
      background: ${({ theme }) => theme.colors.lightblue};
    }
  }
`;
