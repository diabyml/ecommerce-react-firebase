import styled, { css } from "styled-components";

const BaseButtonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const CartButtonStyles = css`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;


`;

const GoogleSignInStyles = css`
  background-color: #4285f4;
  color: #fff;
  border:none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const InvertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn === true) return GoogleSignInStyles;
  return props.inverted ? InvertedStyles : BaseButtonStyles;
};

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;

  ${getButtonStyles}
  ${ ({isCartButton}) => isCartButton? CartButtonStyles : null }
`;
