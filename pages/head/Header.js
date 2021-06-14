import FirstLine from './FirstLine'
import SecondLine from './SecondLine'
import Image from 'next/image'


export default function () {
    return (
    <div className="HeadContainer" >
        <div className="HeadContentContainer">
            <FirstLine/>
            <SecondLine/>
        </div>
        <style jsx>{`
        .HeadContainer {
          min-height: 170px;
          background: #2D344B;
        }
        .HeadContentContainer {
          width: 1170px;
          margin: 0 auto;
          }

      `}</style>
    </div>
    )
}