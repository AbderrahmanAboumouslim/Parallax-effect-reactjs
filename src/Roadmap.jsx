import styled from 'styled-components';

const CheatSheet = ({ title, desc }) => {
  return (
    <ContentItem id="roadmap">
      <ContentItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Desc>{desc}</Desc>
        </Box>
      </ContentItemContainer>
    </ContentItem>
  );
};

const Roadmap = () => {
  return (
    <Wrapper>
      <Title>roadmap</Title>

      <CheatSheet
        title="01-ABONA"
        desc="Welcome to DeGodApe community. Joining our community means that you’re now an integral member of our family. Our primary focus at this point is to build a robust, active, and healthy community. To welcome our teeming members, we plan to give away free airdrops to our active members. All you need to do is keep the community engaging, and you stand a chance to win.
            "
      />
      <CheatSheet
        title="02-BACONA"
        desc="Our 2nd generation NFTs come with many perks, including unique benefits for holders of our 1st generation NFTs."
      />
      <CheatSheet
        title="03-CATONA"
        desc="Holders of a 1st & 2nd generation NFT will have an exclusive opportunity to breed a Free DeGodSon (Ape) NFT."
      />
      <CheatSheet
        title="04-DARUS"
        desc="Our DeGodApe gameplay will bring something different while keeping players entertained. Basically,  DeGodApe NFT holders can deploy their NFTs as playable characters in the Metaverse. Similarly, gameplay sessions will allow players to earn tokens, which they can use for multiple purposes, including transactions within the  DeGodApe gameplay ecosystem. Thanks to our team of highly experienced game developers with remarkable track records, we expect our  DeGodApe game to blow your mind."
      />
      <CheatSheet
        title="
            05-DARWIN"
        desc="By holding a DeGodApe NFT you enjoy exclusive real-world utilities such as discounts at hotels, fashion cheques, vouchers, tickets, activities, goods and many more! More detailed information about all utilities will be announced during this phase. This is just a small taste of what is to come for us!"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* min-height: 100vh; */
  width: 100vw;
  background-color: ${props => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  color: ${props => props.theme.text};
  text-transform: capitalize;
  font-size: ${props => props.theme.fontxxl};
  border-bottom: 2px solid ${props => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  margin: 0 auto;
  width: fit-content;
`;

const ContentItem = styled.li`
  width: 100%;
  /* height: 100%; */
  display: flex;
  margin-bottom: 4rem;
`;

const ContentItemContainer = styled.div`
  width: 37%;
  /* height: fit-content; */
  border: 2px solid ${props => props.theme.text};
  padding: 1.2rem;

  @media (max-width: 768px) {
    width: 80%;
    text-align: center;
    padding: 0.5;
  }
`;

const Box = styled.div`
  background-color: ${props => `rgba(${props.theme.textRgba},0.17)`};
  /* background-color: ${props => props.theme.carouselColor}; */
  color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.text};
  padding: 1rem;
  /* height: fit-content; */
  position: relative;
  /* line-height: 1.6rem; */
`;

const SubTitle = styled.div`
  font-size: ${props => props.theme.fontxl};
  font-weight: 600;
  color: ${props => props.theme.body};
  /* color: ${props => props.theme.text}; */
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontlg};
  }
`;
const Desc = styled.div`
  font-size: ${props => props.theme.fontsm};
  color: ${props => props.theme.text};
  text-transform: capitalize;
  padding: 1rem 0;
  /* margin: 0.5rem 0; */

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontxs};
    letter-spacing: 0.07rem;
  }
`;

export default Roadmap;
