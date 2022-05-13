import { useRef } from 'react';
import profImg from './../Assets/Images/350X375.png';

function ProfileForm({ handleClick }) {
  // let [name,phone,email,city,currentCompany,currentRole]  = useRef();
  const name = useRef();
  const phone = useRef();
  const email = useRef();
  const city = useRef();
  const currentCompany = useRef();
  const currentRole = useRef();

  const handleSubmit = () => {
    let myProfileObj = {
      name: name.current.value,
      phone: phone.current.value,
      email: email.current.value,
      city: city.current.value,
      currentCompany: currentCompany.current.value,
      currentRole: currentRole.current.value,
      imgSrc: profImg,
    };
    handleClick(myProfileObj);
  };
  return (
    <>
      <div className='main-profile-div'>
        <input type='text' placeholder='Name' ref={name} />
        <input type='number' placeholder='Phone' ref={phone} />
        <input type='text' placeholder='Email' ref={email} />
        <input type='text' placeholder='City' ref={city} />
        <input type='text' placeholder='Current Company' ref={currentCompany} />
        <input type='text' placeholder='Current Job Role' ref={currentRole} />
        {/* <input type='file' /> */}
        <button className='submitBtn' onClick={handleSubmit}>
          View Profile
        </button>
      </div>
    </>
  );
}

export default ProfileForm;
