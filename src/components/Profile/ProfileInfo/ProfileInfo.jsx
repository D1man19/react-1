import obj from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.greatbardfield-pc.gov.uk/images/header-img02.jpg"
                     alt="#"/>
            </div>
            <div className={obj.description}>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;