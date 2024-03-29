import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Newsletter from './Newsletter'



function MailchimpForm() {
 const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}$ID=${process.env.REACT_APP_MAILCHIMP_ID}`


  return (
    <>
    <MailchimpSubscribe
      url={postUrl}
      render={({subscribe, status, message})=>(
     <Newsletter
        status={status}
        messge={message}
        onValidated={formData => subscribe(formData)}
     />
      )}
    />
    </>
  )
}

export default MailchimpForm