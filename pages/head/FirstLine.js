import Image from 'next/image'


export default function () {
    return (
        <div className="FirstLineContainer" >
            <ul className="FirstLineWrapper" >
                <li>
                    <Image src={'/img/header/menu.png'} width={16} height={16}/>
                </li>
                <li className="menu">
                    Меню
                </li>
                <li>
                    <Image src={'/img/header/search.png'} width={20} height={20}/>
                </li>
                <li className="search">
                    Поиск
                </li>
            </ul>
            <div className="Tag">
                Портал для людей с псориазом
            </div>
            <ul className="SocialNetworks" >
                <li>
                    <Image src={'/img/header/youtube.png'} width={20} height={20}/>
                </li>
                <li>
                    <Image src={'/img/header/insta.png'} width={20} height={20}/>
                </li>
                <li>
                    <Image src={'/img/header/facebook.png'} width={20} height={20}/>
                </li>
                <li>
                    <Image src={'/img/header/vk.png'} width={20} height={20}/>
                </li>
            </ul>
        <style jsx>{`
             .FirstLineContainer {
                  padding-top: 40px;
                  align-items: center;
                  display: grid;
                  grid-template-columns: 20% 60% 20%;
                  grid-template-rows: 100%;
                  gap: 0px 0px;
                  grid-template-areas:
                    "MenuSearch Tag SocialNetworks";
                }
                .SocialNetworks { grid-area: SocialNetworks; }
            .FirstLineWrapper{
                grid-area: MenuSearch;
            }
            .FirstLineWrapper li{
                display: inline-block;
                font-family: Gilroy;
                font-style: normal;
                font-weight: 600;
                font-size: 15px;
            }
            .FirstLineWrapper li:nth-child(1){
                padding: 2px;
            }
            .FirstLineWrapper li:nth-child(2){
                margin-left: 8px;
            }
            .FirstLineWrapper li:nth-child(3){
                margin-left: 20px;

            }
            .FirstLineWrapper li:nth-child(4){
                margin-left: 8px;

            }

            .Tag{
              grid-area: Tag;
              font-family: 'Gilroy';
              font-size: 15px;
               display: inline-block;
               text-align: center;
                display: inline-block;
                text-align: center;
            }
            .SocialNetworks{
                grid-area: SocialNetworks;
            }
            .SocialNetworks li{
                margin-left: 20px;
                float:right;
            }
            .FirstLineWrapper .menu ,.search{
                position: relative;
                top:-3px;
            }
      `}</style>
    </div>
    )
}