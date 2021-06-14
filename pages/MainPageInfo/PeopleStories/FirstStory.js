import Image from 'next/image'


export default function () {
    return (
        <div className="wrap">
            <div className="VideoShape">
                <div className="playWrap">
                    <div className="play" >
                        <Image  src={"/img/MainPageInfo/PeopleStories/play.png"} height={50} width={50}/>
                    </div>
                    <div className="line" >
                        <Image src={"/img/MainPageInfo/line.png"} width={50} height={5}/>
                    </div>
                    <div className="name" >
                        ВЛАДИМИР
                    </div>
                </div>
                <Image src={"/img/MainPageInfo/PeopleStories/Vladimir.png"} width={570} height={328}/>
            </div>
            <div className="VideoFrame">
                <Image src={"/img/MainPageInfo/PeopleStories/VideoFrame.png"} width={570} height={320}/>
                <div className="Story">
                    Владимир жил с псориазом на протяжении 40 лет.
                    Неправильный диагноз, народные средства, затем авария и после нее поражение кожи 80% процентов.
                    Все изменилось два года назад.
                    <div className="Tag">
                        <div className="FigureImg">
                            <Image src={"/img/MainPageInfo/PeopleStories/figures.png"} width={48} height={38}/>
                        </div>
                        <div className="text">
                            «Смотришь на жизнь уже по-другому, не так как раньше, из-за угла — прошла и все.
                            Это ощущение после терапии, как будто человек спал, долго спал, выспался и проснулся с такой легкостью — у него ничего не болит, ничего его не тревожит»
                        </div>

                    </div>
                </div>
            </div>
            <style jsx>{`
                .VideoShape{
                    width: 570px;
                    height: 320px;
                    background-image: url(/img/MainPageInfo/PeopleStories/VideoShape.png);
                    position: relative;
                    z-index: 3;


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
                    top: -290px;
                    left: 27px;
                    z-index: 2;
                    display: inline-block;


                }
                .Story{
                    font-family: 'Gilroy';
                    font-size: 16px;
                    font-weight: normal;
                    line-height: 20px;
                    font-weight: 500;
                    width: 470px;
                    margin-left: 95px;
                    margin-top: 30px;
                    display: inline-block;
                    float: right;

                }
                .Tag{
                    font-family: 'Gilroy';
                    line-height: 20px;
                    font-weight: bold;
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
                    font-weight: bold;
                    position: absolute;
                    bottom: 0px;
                    left: 60px;
                    top: 51px;
                    z-index: 4;
                }


            `}</style>
        </div>
    )
}