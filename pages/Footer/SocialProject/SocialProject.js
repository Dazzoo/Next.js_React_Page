import Image from 'next/image'

export default function () {
    return (
        <div>
            <div className="SocialIsolation">
                <Image src={"/img/Footer/SelfIsolation.png"} width={400} height={120}/>
                <div className="SocialProject">
                    <Image src={"/img/Footer/SocialProject.png"} width={320} height={30}/>
                </div>
                <div className="Instagram">
                    <Image src={"/img/Footer/Instagram.png"} width={135} height={50}/>
                    <div className="YouTube">
                        <Image src={"/img/Footer/YouTube.png"} width={120} height={50}/>
                    </div>
                </div>

            </div>
            <style jsx>{`
        .SocialIsolation{
            position: relative;
            top: 110px;
            margin-left: 100px;
        }
        .SocialProject{
            padding-top: 40px;
        }
        .Instagram{
            margin-top: 40px;
            margin-bottom: 185px;
        }
        .YouTube{
            display: inline-block;
            margin-left: 10px;
        }
      `}</style>
        </div>
    )
}