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
        ДМИТРИЙ
        </div>
        </div>
        <Image src={"/img/MainPageInfo/PeopleStories/Dmitry2.png"} width={570} height={320}/>
    </div>
    <div className="VideoFrame">
        <Image src={"/img/MainPageInfo/PeopleStories/VideoFrame.png"} width={570} height={320}/>
    <div className="Story">
        За два года Дмитрий провел в больнице 120 дней.
        Он не выходил на улицу днем, чтобы не встречаться с осуждающими взглядами прохожих,
        уже не мог держать ложку и открывать дверь — так сильно болели руки.
    <div className="Tag">
        <div className="FigureImg">
        <Image src={"/img/MainPageInfo/PeopleStories/figures.png"} width={48} height={38}/>
    </div>
    <div className="text">
        «Если бы можно было вернуться назад, когда все это началось, я бы в первую очередь сказал себе не расстраиваться, не опускать руки, нужно искать решение проблемы»
    </div>

    </div>
    </div>
    </div>
    <style jsx>{`
                .VideoShape{
                    top: -520px;
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
                    top: -810px;
                    left: 27px;
                    z-index: 2;
                    display: inline-block;


                }
                .Story{
                    font-family: 'Gilroy';
                    font-size: 16px;
                    font-weight: 500;
                    font-style: normal;
                    line-height: 20px;
                    width: 470px;
                    margin-left: 95px;
                    margin-top: 30px;
                    display: inline-block;
                    float: right;

                }
                .Tag{
                    font-family: 'Gilroy';
                    line-height: 20px;
                    font-weight: 700;
                    font-style: bold;
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
                    font-family: 'Gilroy-Bold';
                    font-size: 50px;
                    line-height: 20px;
                    font-weight: 800;
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