import React from 'react';
import styled from "styled-components";
const Contact = () => {
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;
  .container {
    margin-top: 6rem;
    .contact-form {
      max-width: 50rem;
      margin: auto;
      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

  return (
    <Wrapper>
          <h2 className="common-heading">Contact page</h2>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.713048655538!2d72.85937921685226!3d21.233517047622957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f2652963ac9%3A0x7d9787a5b5c4275d!2sSilver%20Business%20Point!5e1!3m2!1sen!2sin!4v1679730082582!5m2!1sen!2sin" 
        width="100%" 
        height="400" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className='container'>
        <div className='contact-form'>
        <form action='https://formspree.io/f/xeqwlvwl' method='post' className='contact-inputs'>
          <input name='name' type="text" placeholder='Enter your name' required autoComplete='off'/>
          <input name='Email' type="email" placeholder='Enter your Emailid' required autoComplete='off'/>
          <textarea name="Message" cols="30" rows="10" required autoComplete='off'></textarea>
          <input type="submit" value="send"/>
        </form>
      </div>
      </div>
    </Wrapper>

  )
}

export default Contact
