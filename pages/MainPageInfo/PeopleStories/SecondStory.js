import Image from 'next/image'


export default function () {
    return (
        <div>
            <div className="VideoShape">
                <div className="playWrap">
                    <div className="play" >
                        <Image  src={"/img/MainPageInfo/PeopleStories/play.png"} height={50} width={50}/>
                    </div>
                    <div className="line" >
                        <Image src={"/img/MainPageInfo/line.png"} width={50} height={5}/>
                    </div>
                    <div className="name" >
                        РАСИМ
                    </div>
                </div>
                <Image src={"/img/MainPageInfo/PeopleStories/Racim.png"} width={570} height={328}/>
            </div>
            <div className="VideoFrame">
                <Image src={"/img/MainPageInfo/PeopleStories/VideoFrame.png"} width={570} height={320}/>

                </div>
            <div className="Story">
                В армии у Расима появились первые пятнышки, которые быстро распространились по всему телу.
                Более 20 лет Расим ходил в закрытой одежде с длинным рукавом, не мог раздеться на пляже и купаться вместе со своей семьей, уходя от них в поисках безлюдного места.
                <div className="Tag">
                    <div className="FigureImg">
                        <Image src={"/img/MainPageInfo/PeopleStories/figures.png"} width={48} height={38}/>
                    </div>
                    <div className="text">
                        «Мы с женой пошли в бассейн, специально сходили в магазин, приобрели купальные принадлежности.
                        Было непривычно, думал на меня все смотрят, а оказалось никто не смотрит, потому что этой болезни больше нет»
                    </div>

                </div>
            </div>
            <style jsx>{`
                .VideoShape{

                    margin-top: -230px;
                    margin-right: 30px;
                    width: 570px;
                    height: 320px;
                    background-image: url(/img/MainPageInfo/PeopleStories/VideoShape.png);
                    position: relative;
                    z-index: 3;
                    float: right;



                }
                .playWrap{
                    position: relative;
                    top: 270px;
                    display: block;

                }
                .play{
                    position: absolute;
                    bottom: 85px;
                    left: 260px;
                    z-index: 4;


                }
                .VideoFrame{
                    position: relative;
                    top: -280px;
                    left: 129px;
                    z-index: 2;
                    display: inline-block;


                }
                .Story{
                    position: relative;
                    top: -280px;
                    font-family: 'Gilroy';
                    font-size: 16px;
                    font-weight: 500;
                    font-style: normal;
                    line-height: 20px;
                    width: 470px;
                    display: inline-block;
                    float: left;



                }
                .Tag{
                    font-family: 'Gilroy';
                    line-height: 20px;
                    font-weight: 700;
                    font-size: 16px;
                    display: inline-block;
                    width: 400px;
                    margin-left: 70px;
                }
                .Tag .FigureImg{
                    position: relative;
                    left: -70px;
                    top: 42px;
                }
                .line{
                    position: absolute;
                    bottom: 0px;
                    left: 60px;
                    z-index: 4;
                }
                .name{
                    font-family: 'Gilroy';
                    font-size: 50px;
                    line-height: 20px;
                    font-weight: 700;
                    position: absolute;
                    bottom: 0px;
                    left: 60px;
                    top: 61px;
                    z-index: 4;

                }


            `}</style>
        </div>
    )
}