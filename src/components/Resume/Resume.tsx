import React, { FC } from 'react';
import styled from '../../util/styled-components';
import { Wrapper, WrapperType } from '../Wrapper';
import { Heading, Content, Link } from '../Text';
import { ResumePosition, Position } from './Position';

// @todo: move this to graphQL
const positions: ResumePosition[] = [
  {
    title: 'Director of Technology',
    company: 'projekt202',
    location: 'Addison, Texas',
    startDate: new Date(2018, 2, 1),
    details: [
      'Fugiat in duis non Lorem do anim mollit Lorem amet officia cupidatat. Dolore qui laborum reprehenderit et mollit in minim consequat sint voluptate labore officia reprehenderit. Consequat sint consequat laborum dolor labore laboris. Ad incididunt Lorem sunt sit esse laboris excepteur fugiat.',
      'Minim fugiat anim sint esse elit tempor cillum ut. Ex et sunt sint dolore adipisicing ea aliquip. Proident Lorem nostrud pariatur occaecat nisi ea aute aliquip id minim dolore ex non anim. Amet mollit adipisicing ad velit consequat in.',
      'Cillum laborum ad cupidatat aute exercitation commodo ut voluptate nostrud veniam tempor officia cupidatat proident. Sunt culpa aute aliquip amet irure in deserunt ex labore. Labore est nulla proident duis commodo sint laboris dolore aliqua eiusmod. Excepteur minim dolor commodo culpa minim sint quis ea qui excepteur incididunt.',
      'Est ipsum ipsum culpa dolor occaecat est ex aute id sint minim commodo et nulla. Qui nulla deserunt velit pariatur veniam elit id deserunt commodo commodo non occaecat reprehenderit. Nulla voluptate cillum mollit consectetur dolore in tempor veniam. Quis qui est et eu fugiat reprehenderit adipisicing culpa minim exercitation.'
    ]
  },
  {
    title: 'Manager, Design Technology',
    company: 'Capital One',
    location: 'Plano, Texas',
    startDate: new Date(2017, 1, 1),
    endDate: new Date(2018, 2, 1),
    details: [
      'Spearheaded information architecture and UI component library creation for the expansion of dealer platform handling over $500 million in loan originations',
      'Lead and trained team of backend developers in modern front-end practices with Angular 4, Redux and Sass during full re-architecture of foundational sales tool',
      'Constructed high-fidelity prototypes of new dealer tools to validate functionality enhancements with actual users, reducing cost and time to market for new features',
      'Championed Agile methodologies to foster collaboration and transparency between design, development and product teams'
    ]
  },
  {
    title: 'Managing Architect',
    company: 'projekt202',
    location: 'Addison, Texas',
    startDate: new Date(2015, 8, 1),
    endDate: new Date(2017, 1, 1),
    details: [
      'Architected design system for multi-billion dollar enterprise client, providing a roadmap for user interface unification across a diverse product suite',
      'Collaborated with business development team to build new client relationships and estimate scopes of work, helping to successfully secure many new projects',
      "Evaluated potential team members' cultural fit, technical proficiency and consulting skills to grow development team",
      'Effectively managed team of developers across multiple projects, with a focus on growth of consulting and technical skills'
    ]
  },
  {
    title: 'Freelance Front-End Architect',
    company: 'Drewloomer.com LLC',
    location: 'Bloomington, Indiana',
    startDate: new Date(2007, 7, 1),
    endDate: new Date(2015, 9, 1),
    details: [
      'Successfully positioned development capabilities and industry expertise to seek and win new business opportunities and secure long-term retainer contracts',
      'Developed mobile-first web quiz for the Australian national government to promote national organ and tissue donation initiative',
      'Partnered with the University of Michigan Health System to develop interactive Facebook applications, increasing visibility of online community'
    ]
  },
  {
    title: 'Senior Web Developer',
    company: 'Hook Studios',
    location: 'Ann Arbor, Michigan',
    startDate: new Date(2012, 8, 1),
    endDate: new Date(2014, 7, 1),
    details: [
      'Constructed award-winning applications in partnership with Google Creative Lab to generate interest in and drive trial of the Chromecast source development kit',
      'Developed branded online experience to publish pre-scheduled content in support of Oreo\'s "Cookie vs. Creme" Super Bowl campaign, increasing impact of ad buy',
      'Integrated real-time fundraising with branded materials for Toyota\'s "Tundra Endeavour" campaign, generating over $400,000 in gifts to the California Science Center',
      'Conceptualized and developed cutting edge mobile advertising experiences for Target\'s "Summer Up" campaign to differentiate brand from competitive retailers',
      'Evangelized next-generation development practices using tools like gulp.js, Browserify, Ember and npm to improve internal efficiency and collaboration'
    ]
  },
  {
    title: 'Lead Web Developer',
    company: 'Perich Advertising + Design',
    location: 'Ann Arbor, Michigan',
    startDate: new Date(2010, 2, 1),
    endDate: new Date(2012, 8, 1),
    details: [
      "Managed web development team's production of concurrent client website builds and advertisement deployments to effectively address tight timelines and budgets",
      'Advised clients and internal creative team on digital best practices to better conceptualize promotions, campaigns and digital materials',
      'Developed social media application for regional bank client, resulting in record growth earnings, national press coverage and over 500% increase in Facebook following',
      'Restructured and maintained internal servers, development environments and procedures to improve asset security and reduce agency downtime'
    ]
  }
];

const Section = styled.section``;

const H2 = styled(Heading)`
  align-items: center;
  display: flex;
  margin-bottom: 3rem;
`;

const P = styled(Content)``;

export interface ResumeProps {
  className?: string;
}

// @todo: links
export const Resume: FC<ResumeProps> = props => (
  <Section {...props}>
    <Wrapper type={WrapperType.Dark}>
      <H2 as="h2">My Experience</H2>
      <P>
        If you’re interested in my formal resume, here it is as a{' '}
        <Link href="">.pdf</Link> or <Link href="">.docx</Link>.
      </P>
      {positions.map(position => (
        <Position {...position} />
      ))}
    </Wrapper>
  </Section>
);

export default Resume;
