import styled from "styled-components";

interface Props {
  color?: string;
  bg?: string;
}

const StyledButton = styled.button<Props>`
  color: ${props => props.color || "white"};
  background-color: ${props => props.bg || "green"};
  border: none;
  font-size: 20px;
  margin: 8px;
  padding: 4px;
`;

export default StyledButton;
