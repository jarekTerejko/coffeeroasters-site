import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonPrimaryLinkR = styled(Link)`
  background: var(--darkCyan);
  font-family: var(--serif);
  font-weight: var(--weight-bold);
  padding: 1.7rem 3.5rem;
  letter-spacing: 1px;
  color: var(--lightCream);
  border-radius: 0.5rem;
  font-size: 1.8rem;
  transition: background-color var(--transition);

  &:hover {
    background: var(--btnHover);
  }
`;
