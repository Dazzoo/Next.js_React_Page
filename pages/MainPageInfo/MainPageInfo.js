import Image from 'next/image'
import PeopleStories from './PeopleStories/PeopleStories'
import HotLine from  './HotLine/HotLine'

export default function () {
    return (
        <div className="MainPageContainer">
            <div className="MainPageInfoWrapper">
                <Image src={"/img/MainPageInfo/line.png"} width={50} height={5}/>
                <h1>
                    Проект создан для привлечения внимания, развенчивания мифов и разрушения стереотипов о таком заболевании, как псориаз.
                    Здесь собраны личные истории людей, которые победили псориаз благодаря биологической терапии.
                </h1>
                <h2>
                    В рамках проекта создается горячая линия в партнерстве с благотворительным фондом «ЛЮДИ-ЛЮДЯМ».
                    Фонд специализируется на помощи взрослым с тяжелыми заболеваниями, стремясь повысить качество их жизни.
                    Кроме адресной помощи, Фонд оказывает бесплатную психологическую поддержку взрослым с тяжелыми заболеваниями и их близким.
                </h2>
                <h3>
                    На линии психологической помощи работают высококвалифицированные психологи, которые имеют большой опыт работы, в том числе на телефонах доверия. Кроме того, Фонд привлекает для работы психологов с инвалидностью, людей, которые сами прошли через тяжелые испытания и теперь помогают другим найти внутреннюю опору, чтобы жить дальше и жить счастливо!
                </h3>
                <PeopleStories/>
                <HotLine/>
            </div>
            <style jsx>{`
                .MainPageContainer{
                    background-image: url("/img/MainPageInfo/bg main.png");
                    padding-bottom: 95px;
                }
                .MainPageInfoWrapper{
                    width: 1170px;
                    margin 0 auto;
                }
                h1{
                    margin-top: 35px;
                    font-family: 'Gilroy', sans-serif;
                    font-weight: 500;
                    font-style: normal;
                    font-size: 24px;
                    line-height: 30px;
                }
                h2, h3{
                    font-family: 'Gilroy', sans-serif;
                    font-weight: 500;
                    font-style: normal;
                    font-size: 18px;
                    line-height: 25px;
                }
      ` }</style>
        </div>
    )
}