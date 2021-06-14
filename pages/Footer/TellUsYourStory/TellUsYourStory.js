import Image from 'next/image'

export default function () {
    return (
        <div className="TellUsYourStoryContainer" >
            <div className="TellUsYourStoryBackground">
                <div className="Icon">
                    <Image src={"/img/MainPageInfo/TellUsYourStory/wright-story.png"} width={50} height={50}/>
                </div>
                <div className="TellStory">
                    Расскажите свою историю <div className="littleText">об опыте борьбы с псориазом</div>
                </div>
                <div className="TelUsButton">
                    <div className="TelUsText" >Рассказать</div>
                    <Image src={"/img/MainPageInfo/TellUsYourStory/Button.png"} width={130} height={40}/>
                </div>
                <div className="Label">
                    <Image src={"/img/MainPageInfo/TellUsYourStory/Shape.png"} width={275} height={50}/>
                    <div className="Tag1">
                        ВДОХНОВИТЕ
                    </div>
                    <div className="Tag2">
                        ДРУГИХ
                    </div>
                </div>
            </div>
            <div className="FeaterContainer">
                <div className="Feater">
                    <Image src={"/img/MainPageInfo/TellUsYourStory/feater.png"} width={255} height={240}/>
                </div>
            </div>


            <style jsx>{`
        .TellUsYourStoryContainer {
            position: relative;
            top: -112px;
            height: 240px;
        }
        .TellUsYourStoryBackground{
            position: relative;
            background: url("/img/MainPageInfo/TellUsYourStory/bg.png");
            height: 200px;
            padding-top: 20px;
        }
        .Label{
            padding-left: 100px;
            padding-top: 75px;
        }
        .Tag1{
            color: black;
            line-height: 45px;
            font-family: 'Gilroy', sans-serif;
            font-weight: 800;
            font-style: normal;
            font-size: 40px;
            position: relative;
            top:-53px;
            left: 11px;
        }
        .Tag2{
            color: white;
            line-height: 45px;
            font-family: 'Gilroy', sans-serif;
            font-weight: 800;
            font-style: normal;
            font-size: 40px;
            position: relative;
            top:-98px;
            left: 285px;
        }
        .Icon{
            position: absolute;
            left: 600px;
            top: 75px;
        }
        .TellStory{
            width: 220px;
            height: 80px;
            font-family: 'Gilroy', sans-serif;
            font-weight: 700;
            font-size: 24px;
            line-height: 25px;
            position: absolute;
            left: 670px;
            top: 60px;
        }
        .littleText{
            font-family: 'Gilroy', sans-serif;
            font-weight: 600;
            font-size: 15px;
            line-height: 20px;
            margin-top:19px;
        }
        .TelUsButton{
            position: absolute;
            left: 940px;
            top: 80px;
        }
        .TelUsText{
            position: absolute;
            left: 25px;
            top: 9px;
            z-index: 1;
            color: black;
            font-family: 'Gilroy', sans-serif;
            font-weight: 600;
            font-size: 15px;
            line-height: 20px;
        }
        .FeaterContainer{
            position: relative;
            top: -215px;
            left: 755px;
        }
        .Feater{
            position: absolute;
            left: 0px;
            top: 0px;
        }
      `}</style>
        </div>
    )
}