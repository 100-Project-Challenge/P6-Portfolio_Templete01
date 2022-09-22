import React ,{useState, useEffect} from 'react'
import { Col , Container ,Row} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg'
import 'animate.css'
import TrackVisibility from 'react-on-screen';

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['Web Developer', 'Web Designer', "UI/UX Designer"]
  const [text, setText] =useState('')
  const [delta,setDelta]= useState(300 - Math.random()*100)
  const period= 2000;

  useEffect(() => {
    let ticker = setInterval(()=>{
      tick()
    }, delta)
  
    return ()=> {clearInterval(ticker)}
    
  }, [text])
  
  const tick = ()=> {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0,text.length -1): fullText.substring(0,text.length +1)
  
    setText(updatedText);

    if (isDeleting){
      setDelta(prevDelta => prevDelta/2)
    }

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }else if (isDeleting && updatedText === ''){
      setIsDeleting(false)
      setLoopNum(loopNum +1)
      setDelta(500)
    }
  
  } 




  return (
    <section className='banner' id='home'>

      <Container>
        <Row className='align-items-cneter'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({isVisible}) => 
            <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{`Hi I'm Webdecoded`} <br/><span className='wrap'>{text}</span></h1>
          
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis consequatur error itaque fugit atque sunt! Quo culpa porro, velit inventore quae eos saepe, animi aliquid, sit doloribus ex qui expedita?</p>
            <button onClick={() => console.log('connect')}><a href="#connect"> Let's Connect <ArrowRightCircle sice={25}/></a> </button>
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={2}>
          <img src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner