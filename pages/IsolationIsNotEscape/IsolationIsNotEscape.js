import Image from 'next/image'

export default function () {
    return (
        <div className="IsolationIsNotEscape">
            <div className="TagWrapper" >
                <Image src={'/img/IsolationIsNotEscape/title.png'} width={570} height={60}/>
            </div>
            <div className="MenuBorder">
                <div className="menu">
                    <ul>
                        <li>О проекте <div className="vectorDown"><Image src={'/img/IsolationIsNotEscape/Vector.png'} width={10} height={10}/></div></li>
                        <li>Истории <div className="vectorDown"><Image src={'/img/IsolationIsNotEscape/Vector.png'} width={10} height={10}/></div></li>
                        <li>Горячая линия <div className="vectorDown"><Image src={'/img/IsolationIsNotEscape/Vector.png'} width={10} height={10}/></div></li>
                        <li><div className="quill"><Image src={'/img/IsolationIsNotEscape/quill.png'} width={20} height={20}/></div>
                            <div className="yellowWord" >Рассказать</div> свою историю
                            <div className="vectorRight"><Image src={'/img/IsolationIsNotEscape/VectorRight.png'} width={10} height={10}/></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="AboutProject">
                О проекте
            </div>
            <style jsx>{`
            .IsolationIsNotEscape{
                height: 805px;
                position: relative;
                background-size: auto;
                background-position: center;
                background-image: url('img/IsolationIsNotEscape/shadow.png'), url('img/IsolationIsNotEscape/backgroundPhoto.png');
            }
            .TagWrapper{
                height: 496px;
                text-align: center;
                padding-top: 280px;
            }
            .menu{
                height: 174px;
                width: 1170px;
                margin: 0 auto;
                font-family: Gilroy;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
            }
            .menu .vectorDown{
                padding-left: 8px;
                padding-right: 40px;
                display: inline-block;
            }
            .menu li:last-child{
                float: right;


            }
            .menu ul{
                width: 100%
            }
            .menu{
                padding-top: 84px;
            }
            .quill{
                padding-right: 10px;
                display: inline-block;
            }
            .vectorRight{
                padding-left: 10px;
                display: inline-block;
            }
            .yellowWord{
                color: #FFB800;
                display: inline-block;
            }
            .MenuBorder{
                margin-left: -1px;
                background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='gray' stroke-width='2' stroke-dasharray='10%2c 5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
            }
            .AboutProject{
                width: 1170px;
                margin: 0 auto;
                padding-top: 70px;
                font-family: Gilroy;
                font-style: normal;
                font-weight: bold;
                font-size: 40px;
            }
      `}</style>
        </div>


    )
}