import Image from 'next/image'

export default function () {
    return (
        <div className="FooterParthWrapper">
                <div className="InfoWrapper">
                    <Image src={'/img/Footer/FooterParth/Logo.png'} width={145} height={40}/>
                    <div className="Caution">
                        ИНФОРМАЦИЯ НА ДАННОМ САЙТЕ НЕ ДОЛЖНА ИСПОЛЬЗОВАТЬСЯ ДЛЯ САМОСТОЯТЕЛЬНОЙ ДИАГНОСТИКИ ЛЕЧЕНИЯ И НЕ МОЖЕТ БЫТЬ ЗАМЕНОЙ ОЧНОЙ КОНСУЛЬТАЦИИ ВРАЧА
                    </div>
                    <div className="CallBackButton">
                        <Image src={'/img/Footer/FooterParth/Outline_bt.png'} width={145} height={40}/>
                    </div>
                    <div className="CopyrightLine">
                        <div className="Copyright">
                            Copyright © 2020. PsoriazLife
                        </div>
                        <div className="Agreement">
                            <div className="agree">
                                Соглашение об использовании сайта
                            </div>
                            <div className="agree">
                                Политика в отношении обработки ПДН
                            </div>
                            <div className="agree">
                                Политика cookies
                            </div>
                        </div>
                    </div>
                </div>

            <style jsx>{`
        .FooterParthWrapper {
          background-color: white;
          width: 1170px;
          height: 240px;
          margin: 0 auto;
        }
        .InfoWrapper{
            margin-top: 70px;
            display: inline-block;
        }
        .Caution{
            color: black;
            display: inline-block;
            margin-left: 90px;
            width: 720px;
            font-family: Gilroy;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 20px;
            text-align: center;
        }
        .CallBackButton{
            display: inline-block;
            margin-left: 70px;
        }
        .CopyrightLine{
            display: block;
            margin-top: 40px;
            color: #959AA7;
            font-family: Gilroy;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 20px;
        }
        .Copyright{
            display: inline-block;
        }
        .agree{
            display: inline-block;
            margin-left: 80px;
        }
        .Agreement{
            display: inline-block;
            float: right;

        }
      `}</style>
        </div>
    )
}