import Image from 'next/image'

export default function () {
    return (
        <div className="HotLineWrapper">
            <div className="HotLineBlock">
                <div className="title">
                    <Image src={"/img/HotLine/title.png"} width={175} height={100}/>
                </div>
                <div className="Number">
                    8 800 201 76 10
                </div>
                <div className="Info">
                    Портал psoriaz.life совместно с благотворительным фондом «ЛЮДИ ЛЮДЯМ» запустили <div className="yellowText"> бесплатную
                    горячую линию </div> психологической поддержки спустя год после введения режима самоизоляции по всей России.
                </div>
                <div className="PhoneWrapper">
                    <div className="Buttons">
                        <Image src={"/img/HotLine/Phone/Buttons.png"} width={195} height={93}/>
                    </div>
                    <div className="Case">
                        <Image src={"/img/HotLine/Phone/Case.png"} width={185} height={380}/>
                    </div>
                    <div className="LeftShine">
                        <Image src={"/img/HotLine/Phone/LeftShine.png"} width={143.68} height={375.45}/>
                    </div>
                    <div className="RightShine">
                        <Image src={"/img/HotLine/Phone/RightShine.png"} width={58.3} height={375.45}/>
                    </div>
                    <div className="Cameras">
                        <Image src={"/img/HotLine/Phone/Cameras.png"} width={33} height={6}/>
                    </div>
                    <div className="BackGroundImage">
                        <div className="infoHotLine">
                            ГОРЯЧАЯ ЛИНИЯ
                        </div>
                        <div className="logo">
                            <Image src={"/img/HotLine/Phone/logo.png"} width={125} height={60}/>
                        </div>
                    </div>

                </div>
            </div>
            <style jsx>{`
                .HotLineWrapper{
                    position: relative;
                    margin-top: 20px;
                    margin-bottom: 60px;
                    height: 380px;
                    border: 1px solid rgba(0, 0, 0, 0);

                }
                .HotLineBlock{
                    margin-top: 85px;
                    height: 210px;
                    display: flex;
                    background-image: url("/img/HotLine/bg.png");
                }
                .PhoneWrapper{
                    position: relative;
                    top: -85px;
                    left: 345px;
                    height: 380px;
                    width: 195px;
                    border: 1px solid rgba(0, 0, 0, 0);
                }
                .Case{
                    position: absolute;
                    z-index: 5;


                }
                .LeftShine{
                    position: absolute;
                    z-index: 6;
                }
                .RightShine{
                    position: absolute;
                    left: 122px;
                    z-index: 6;
                }
                .Buttons{
                    position: absolute;
                    top: 47px;
                    left: -7px;
                    z-index: 3;
                }
                .Cameras{
                    position: absolute;
                    z-index: 6;
                    left: 81px;
                    top: -4px;
                }
                .BackGroundImage{
                    margin-top: 3px;
                    height: 99%;
                    width: 181px;
                    position: relative;
                    background: url("/img/HotLine/Phone/BgImg.png");
                    border-radius: 20px;
                }
                .infoHotLine{
                    position: absolute;
                    transform: rotate(-90deg);
                    width: 220px;
                    height: 85px;
                    font-family: 'Gilroy', sans-serif;
                    font-weight: 800;
                    font-style: normal;
                    font-size: 50px;
                    top: 101px;
                    left: -20px;
                    line-height: 40px;
                }
                .logo{
                    position: absolute;
                    top: 285px;
                    left: 43px;
                }
                .title{
                    position: absolute;
                    left: 100px;
                    top: 145px;
                }
                .Number{
                    position: absolute;
                    left: 597px;
                    top: 275px;
                    line-height: 25px;
                    font-family: 'Gilroy', sans-serif;
                    font-weight: 800;
                    font-style: normal;
                    font-size: 65px;
                }
                .Info{
                    width: 470px;
                    height: 80px;
                    position: absolute;
                    left: 597px;
                    top: 145px;
                    line-height: 25px;
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 20px;
                }
                .yellowText{
                    color: #FFB800;
                    display: inline-block;
                }
      ` }</style>
        </div>
    )
}