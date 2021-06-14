import Image from 'next/image'

export default function () {
    return(
    <div className="SecondLine">
        <ul className="LeftSide" >
            <li>
                Узнавай
            </li>
            <li>
                Контролируй
            </li>
            <li>
                Освободись
            </li>
            <li>
                Вдохновляйся
            </li>
        </ul>
        <div className="Logo">
            <Image src="/img/header/Logo.png" width={146} height={40} />
        </div>
        <ul className="RightSide" >
            <li>
                Полезные сервисы
            </li>
            <li>
                Специалистам
            </li>
        </ul>
            <div className="RightSideButton">
                <Image  src="/img/header/white_bt.png" width={120} height={40} />
            </div>

        <style jsx>{`
            .SecondLine li:nth-child(n+2){
                margin-left: 18px;
                font-size: 15px;
            }
           .SecondLine {
                  font-family: 'Gilroy';
                  font-size: 15px;
                  margin-top: 30px;
                  align-items: center;
                  display: grid;
                  grid-template-columns: 40% 20% 25% 15%;
                  grid-template-rows: 100%;
                  gap: 0px 0px;
                  grid-template-areas:
                    "LeftSide Logo RightSide RightSideButton";
                }

                .LeftSide{
                    grid-area: LeftSide;
                    display: inline-block;
                }
                .Logo{
                    justify-content: center;
                    text-align: center;
                    display: inline-block;
                    grid-area: Logo;
]                }
                .RightSide{
                    grid-area: RightSide;
                    justify-content: end;
                    text-align: end;
                }

                .RightSideButton{
                    display: inline-block;
                    margin-left: 40px;
                    float: right;
                    grid-area: RightSideButton;
                    justify-content: end;
                    text-align: end;
                }




      `}</style>
    </div>
)
}