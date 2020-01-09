import React, { FC } from 'react';
import posed from 'react-pose';
import styled from '../../util/styled-components';
import { List, ListItem } from '../Text';

const Container = styled(
  posed.div({
    open: {
      height: 'auto',
      transition: {
        height: {
          ease: 'easeIn',
          duration: 100
        }
      }
    },
    closed: {
      height: 0,
      transition: {
        height: {
          ease: 'easeOut',
          duration: 100
        }
      }
    }
  })
)`
  overflow: hidden;

  ul {
    margin-bottom: 0;
  }
`;

export interface DetailsProps {
  content: string[];
  open: boolean;
}

export const Details: FC<DetailsProps> = ({ open, content }) => (
  <Container pose={open ? 'open' : 'closed'}>
    <List as="ul">
      {content.map((c, i) => (
        <ListItem key={i}>{c}</ListItem>
      ))}
    </List>
  </Container>
);
