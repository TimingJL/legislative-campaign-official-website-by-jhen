import styled from 'styled-components';
import Card from 'src/components/Card';
import SectionTitle from 'src/components/SectionTitle';
import education from 'src/assets/images/education.png';
import entertainment from 'src/assets/images/entertainment.png';
import medical from 'src/assets/images/medical.png';
import { AnchorId } from 'src/config';

const issues = [
  {
    imgSrc: entertainment,
    title: '打造休閒天堂！\n推廣寵物休閒與娛樂場所',
    tag: '喵的福利',
    tagColor: '#BEEADB',
  },
  {
    imgSrc: medical,
    title: '為毛孩子謀福利！\n推動寵物醫療保障方案案',
    tag: '喵的保障',
    tagColor: '#F7ECE1',
  },
  {
    imgSrc: education,
    title: '推廣寵物飼養教育！\n讓愛更加專業',
    tag: '喵的教育',
    tagColor: '#FDD',
  },
];

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

const PolicyIssues = () => {
  return (
    <Section id={AnchorId.policyIssues}>
      <SectionTitle
        tag="POLICY ISSUES"
        title="政策議題"
      />
      <CenterBox>
        <CardsGroup>
          {issues.map((issue) => (
            <Card key={issue.title} {...issue} />
          ))}
        </CardsGroup>
      </CenterBox>
    </Section>
  );
};

export default PolicyIssues;