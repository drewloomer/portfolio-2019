import styled from '../util/styled-components';

export const Heading = styled.h1`
  color: ${props => props.theme.colors.gray._100};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 3rem;
  line-height: 1.333333333333333;
`;

export const SubHeading = styled.h2`
  color: ${props => props.theme.colors.gray._100};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 2.5rem;
  line-height: 1.2;
`;

export const Content = styled.p`
  color: ${props => props.theme.colors.gray._150};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.75rem;
  line-height: 1.714285714285714;
  margin-bottom: 2rem;
`;

export const Caption = styled.span`
  font-size: 1.25rem;
  line-height: 1.6;
`;

export const List = styled(Content)``;

export const ListItem = styled.li`
  line-height: 1.5;
  margin-bottom: 0.5rem;
  padding-left: 2.125rem;

  &::before {
    content: '';
    display: inline-block;
    border-radius: 50%;
    border: 0.125rem ${props => props.theme.colors.gray._400} solid;
    height: 0.875rem;
    margin-left: -2.125rem;
    margin-right: 1rem;
    width: 0.875rem;
  }
`;

export const Link = styled.a`
  color: ${props => props.theme.colors.blue._400};
  transition: color 100ms linear;

  &:hover {
    color: inherit;
  }
`;
