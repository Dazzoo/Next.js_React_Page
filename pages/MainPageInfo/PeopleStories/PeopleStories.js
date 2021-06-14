import FirstStory from './FirstStory'
import SecondStory from './SecondStory'
import ThirdStory from './ThirdStory'
import FourthStory from './FourthStory'
import FivethStory from './FivethStory'
import SixthStory from './SixthStory'
import SeventhStory from './SeventhStory'

export default function () {

    return (

        <div className="PeopleStoriesWrapper">
                <FirstStory/>
                <SecondStory/>
                <ThirdStory/>
                <FourthStory/>
                <FivethStory/>
                <SixthStory/>
                <SeventhStory/>
            <style jsx>{`
                .PeopleStoriesWrapper{
                    margin-top: 140px;
                    height: 2890px;
                    border: 1px solid rgba(0,0,0,0);
                }
            `}</style>
        </div>

    )
}