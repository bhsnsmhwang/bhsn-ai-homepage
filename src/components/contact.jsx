import { useRef, useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
// const options = {
//   //지도를 생성할 때 필요한 기본 옵션
//   center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
//   level: 3, //지도의 레벨(확대, 축소 정도)
// }

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const container = useRef(null) //지도를 담을 영역의 DOM 레퍼런스

  // useEffect(() => {
  //   new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
  //   return () => {};
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Location</h2>
              </div>
              <div className='row'>
                <div className="col-xs-12 col-md-8">
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 BHSN. All rights RESERVED.
          </p>
        </div>
      </div>
    </div>
  )
}
