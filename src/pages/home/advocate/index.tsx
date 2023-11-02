import styled from 'styled-components';

import SectionTitle from 'src/components/SectionTitle';
import advocate from 'src/assets/images/advocate.png';

const Section = styled.section`
  display: flex;
  justify-content: center;
  background: var(--bg-secondary);
  padding: 104px 36px;
  @media ${props => props.theme.device.tablet} {
    padding: 64px 36px;
  }
  @media ${props => props.theme.device.mobile} {
    padding: 64px 16px;
  }
`;

const CenterBox = styled.div`
  background: #FFF;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1320px;
  width: 100%;
  border-radius: var(--spacer-24, 24px);
  overflow: hidden;
  @media ${props => props.theme.device.desktop} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Paper = styled.div`
  padding: var(--spacer-64, 64px) var(--spacer-40, 40px);
  @media ${props => props.theme.device.tablet} {
    padding: var(--spacer-40, 40px) var(--spacer-24, 24px);
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const SubTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin: 32px 0px;
  span {
    color: var(--primary, #DA7D4A);
  }
  @media ${props => props.theme.device.tablet} {
    font-size: 24px;
  }
`;

const Description = styled.div`
  font-size: 18px;
  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
  }
`;

const Advocate = () => {
  return (
    <Section>
      <CenterBox>
        <Paper>
          <SectionTitle
            tag="ADVOCATE"
            title="候選人主張"
          />
          <SubTitle>
            我堅信 ! 藉由推動更完善的<span>貓咪福利</span>和相關政策，更是間接地投資於<span>台灣的未來</span>。
          </SubTitle>
          <Description>
            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。 因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </Description>
        </Paper>
        <Img src={advocate} alt="advocate" />
      </CenterBox>
    </Section>
  );
};

export default Advocate;