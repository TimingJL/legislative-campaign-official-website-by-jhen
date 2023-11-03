import * as React from 'react';
import styled from 'styled-components';

import Stack from '@mui/material/Stack';
import Card from 'src/components/Card';
import SectionTitle from 'src/components/SectionTitle';
import { AnchorId } from 'src/config';
import Modal from 'src/components/Modal';
import facebookIcon from 'src/assets/icons/facebook.svg';
import instagramIcon from 'src/assets/icons/instagram.svg';
import lineIcon from 'src/assets/icons/line.svg';
import twitterIcon from 'src/assets/icons/twitter.svg';

import { issues } from './data';

const Section = styled.section`
  scroll-margin-top: 80px;
  padding: 104px 36px;
  @media ${props => props.theme.device.tablet} {
    padding: 64px 36px;
  }
  @media ${props => props.theme.device.mobile} {
    padding: 64px 16px;
  }
`;

const CardsGroup = styled.div`
  width: 100%;
  max-width: 1320px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 64px;
  @media ${props => props.theme.device.desktop} {
    grid-gap: 64px 24px;
  }
`;

const CenterBox = styled.div`
  width: 100%;
  & > div {
    margin: 64px auto 0px;
  }
  @media ${props => props.theme.device.mobile} {
    margin: 40px auto 0px;
  }
`;

const IconButton = styled.img`
  cursor: pointer;
`;

const Grid = styled.div`
  color: var(--text-primary, #334155);
  display: grid;
  grid-template-columns: 507px 1fr;
  gap: 32px;
  @media ${props => props.theme.device.desktop} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const IssueTitle = styled.div`
  color: var(--primary-color, #DA7D4A);
  font-size: 24px;
  font-weight: 700;
  line-height: 150%;
  @media ${props => props.theme.device.tablet} {
    font-size: 20px;
  }
`;

const IssueItems = styled.div`
  padding-top: 32px;
  padding-bottom: 96px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const IssueItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  .issue-item__title {
    font-size: 20px;
    font-weight: 700;
  }
  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
  }
`;

const MoreIssueBlock = styled.div`
  padding: var(--spacer-16, 16px);
  background: var(--slate-50, #F8FAFC);
  border-radius: var(--spacer-12, 12px);
  .more-event__title {
    font-weight: 600;
  }
`;

const MoreIssues = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  img {
    border-radius: 8px;
  }
  @media ${props => props.theme.device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(147px, 1fr));
  }
`;

const PolicyIssues = () => {
  const [selectedIssueId, setSelectedIssueId] = React.useState<number | null>(null);
  const selectedIssue = issues.find(issue => issue.id === selectedIssueId) || {
    id: -1,
    imgSrc: '',
    title: '',
    tag: '',
    tagColor: '',
    items: [],
  };
  const unselectedIssues = issues.filter(issue => issue.id !== selectedIssueId);
  return (
    <>
      <Section id={AnchorId.policyIssues}>
        <SectionTitle
          tag="POLICY ISSUES"
          title="政策議題"
        />
        <CenterBox>
          <CardsGroup>
            {issues.map((issue) => (
              <Card key={issue.id} onClick={() => setSelectedIssueId(issue.id)} {...issue} />
            ))}
          </CardsGroup>
        </CenterBox>
      </Section>
      <Modal
        title="政策議題"
        content={(
          <Grid>
            <Stack spacing="8px">
              <img src={selectedIssue.imgSrc} width="100%" style={{ objectFit: 'cover', borderRadius: '24px' }} />
              <div>{selectedIssue.title}</div>
              <Stack direction="row" alignItems="center" spacing="16px">
                <div>分享</div>
                <IconButton alt="facebook" className="icon-facebook" src={facebookIcon} />
                <IconButton alt="instagram" className="icon-instagram" src={instagramIcon} />
                <IconButton alt="line" className="icon-line" src={lineIcon} />
                <IconButton alt="twitter" className="icon-twitter" src={twitterIcon} />
              </Stack>
            </Stack>
            <div>
              <Stack spacing="8px">
                <IssueTitle>{selectedIssue.title}</IssueTitle>
                <IssueItems>
                  {selectedIssue.items.map(item => (
                    <IssueItem key={item.id}>
                      <div className="issue-item__title">{item.title}</div>
                      <div>{item.description}</div>
                    </IssueItem>
                  ))}
                </IssueItems>
                <MoreIssueBlock>
                  <Stack spacing="16px">
                    <div className="more-event__title">更多政策議題</div>
                    <MoreIssues>
                      {unselectedIssues.map(event => (
                        <div key={event.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedIssueId(event.id)}>
                          <img src={event.imgSrc} width="100%" />
                          <div>{event.title}</div>
                        </div>
                      ))}
                    </MoreIssues>
                  </Stack>
                </MoreIssueBlock>
              </Stack>
            </div>
          </Grid>
        )}
        open={selectedIssueId !== null}
        onClose={() => setSelectedIssueId(null)}
      />
    </>
  );
};

export default PolicyIssues;
