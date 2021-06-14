import TellUsYourStory from './TellUsYourStory/TellUsYourStory'
import SocialProject from './SocialProject/SocialProject'
import FooterParth from './FooterParth/FooterParth'

export default function () {
    return (
        <div>
        <div className="FooterWrapper">
            <div className="FooterContainer">
                <TellUsYourStory/>
                <SocialProject/>
            </div>
        </div>
        <FooterParth/>
            <style jsx>{`
        .FooterContainer {
          width: 1170px;
          height: 820px;
          margin: 0 auto;
        }
        .FooterWrapper{
            border: 1px solid rgba(0, 0, 0, 0);
            background: url("./img/Footer/BgImage.png");
            background-position: center;
        }
      `}</style>
        </div>
    )
}