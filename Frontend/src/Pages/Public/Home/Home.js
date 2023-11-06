import Banner from 'C:/Users/Invite/Desktop/ProjetOpenClassRooms/Last/ArgentBank-website/Frontend/src/Components/Banner/Banner.js';
import Features from 'C:/Users/Invite/Desktop/ProjetOpenClassRooms/Last/ArgentBank-website/Frontend/src/Components/Features/Features.js';
import IconChat from '../../../Assets/img/icon-chat.png';
import IconMoney from '../../../Assets/img/icon-money.png';
import IconSecurity from '../../../Assets/img/icon-security.png';
import Img from '../../../Assets/img/bank-tree.avif'

const Home = () => {
    return (
        <>
            <Banner
                BannerImg={Img}
                Titre={'Promoted Content'}
                Interet1={'No fees.'}
                Interet2={'No minimum deposit.'}
                Interet3={'High interest rates.'}
                texte={'Open a savings account with Argent Bank today!'} />
            <Features
                IconChat={IconChat}
                IconMoney={IconMoney}
                IconSecurity={IconSecurity} />

        </>
    );
}
export default Home