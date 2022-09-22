import React , {useState} from 'react'
import contactImg from '../assets/img/contact-img.svg'
import { Col , Container ,Row} from 'react-bootstrap'



function Contact() {
 const forminitialDetails = {
  firstName: '',
  lastName: '',
  email: '',
  phone:'',
  message:''
 }

 const [formDetails, setFormDetails] = useState(forminitialDetails)
 const [buttonText, setButtonText] = useState('Send')
 const [status, setStatus] = useState({})


 const onFormUpdate=(catigory, value)=>{
    setFormDetails({
      ...formDetails, 
      [catigory]: value
    })
 }


  const handleSubmit = async(e)=>{
    e.preventDefault();
    setButtonText('Sending...')
    let response = await fetch('http://localhost:5000/contact' , {
      method:'POST',
      headers: {
        'Content-type': 'Application/json; charset=utf-8',
      },
      body: JSON.stringify(formDetails),
    })
    setButtonText('Send');
    let result = response.json();
    setFormDetails(forminitialDetails);
    if (result.code === 200){
      setStatus({ success: true , message: 'Message sent successfully'})
    } else {
      setStatus({ success: false , message: 'Something went wrong, please try again later'})
      
    }
  }

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt="contact Us" />
          </Col>
          <Col md={6}>
              <h2>Get In Toch</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6} className='px-1'>
                    <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e)=> onFormUpdate('firstName', e.target.value )} ></input>
                  </Col>
                  <Col sm={6} className='px-1'>
                  <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e)=> onFormUpdate('lastName', e.target.value )} ></input>
                  </Col>
                  <Col sm={6} className='px-1'>
                  <input type='email' value={formDetails.email} placeholder='Email Address' onChange={(e)=> onFormUpdate('email', e.target.value )} ></input>
                  </Col>
                  <Col sm={6} className='px-1'>
                  <input type='tel' value={formDetails.phone} placeholder='Phone No.' onChange={(e)=> onFormUpdate('phone', e.target.value )} ></input>
                  </Col>
                  <Col>
                  <textarea row='6' value={formDetails.nessage} placeholder='Message' onChange={(e)=> onFormUpdate('message', e.target.value )}/>
                  <button type='submit'><span>{buttonText}</span></button>
                  </Col>
                  { 
                  status.message && 
                  <Col>
                  <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                  </Col>
                  }
                </Row>
              </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact