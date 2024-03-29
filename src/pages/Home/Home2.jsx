import React from 'react';
import styled from 'styled-components';
import HomePageLogo from '../../components/common/HomepageLogo';
import ConnectButton from '../../components/buttons/Connect';
import SocialIcons from '../../components/buttons/SocialIcon';
import  HomeImage2 from '../../assets/images/home_anime.gif'

const Home2 = ({ data }) => (
    <HomePage>
          <div>
            <Image>
                <img
                  src={HomeImage2}
                />
            </Image>
            </div>
           <HomePageLogo />
            <ConnectButton />
            <SocialIcons />
    </HomePage>
);



const HomePage = styled.section`
    overflow-y: hidden;
    overflow-x: hidden;
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center horizontally */
    margin-top: 5vh;
`;

const Image = styled.div`
    max-width: 300px;
    margin: 0 auto;
    // box-shadow: rgba(0, 0, 0, 0.45) 20px 25px 0 -20px;
    // box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

export default Home2;