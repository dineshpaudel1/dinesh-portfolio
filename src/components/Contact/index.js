import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 70px 30px 90px;
  @media (max-width: 960px) { padding: 50px 16px 70px; }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 14px;
`

const SectionLabel = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 4px;
  text-transform: uppercase;
  opacity: 0.8;
`

const Title = styled.h2`
  font-family: 'Rajdhani', sans-serif;
  font-size: 44px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  @media (max-width: 768px) { font-size: 32px; }
`

const TitleLine = styled.div`
  width: 50px;
  height: 2px;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 10px rgba(0, 255, 135, 0.6);
  margin: 2px 0 4px;
`

const Desc = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  text-align: center;
  max-width: 540px;
  color: ${({ theme }) => theme.text_secondary};
  letter-spacing: 1px;
  @media (max-width: 768px) { font-size: 11px; }
`

const Form = styled.form`
  width: 95%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 6px;
  margin-top: 20px;
  border: 1px solid rgba(0, 255, 135, 0.12);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    width: 14px;
    height: 14px;
    border-top: 2px solid ${({ theme }) => theme.primary};
    border-left: 2px solid ${({ theme }) => theme.primary};
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 14px;
    height: 14px;
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    border-right: 2px solid ${({ theme }) => theme.primary};
  }
`

const FormTitle = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 13px;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 4px;
  opacity: 0.85;
`

const Input = styled.input`
  background: rgba(0, 255, 135, 0.03);
  border: 1px solid rgba(0, 255, 135, 0.15);
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  transition: all 0.2s ease;

  &::placeholder {
    font-family: 'Share Tech Mono', monospace;
    font-size: 12px;
    color: ${({ theme }) => theme.text_secondary};
    letter-spacing: 1px;
    opacity: 0.6;
    text-transform: uppercase;
  }

  &:focus {
    border-color: rgba(0, 255, 135, 0.5);
    box-shadow: 0 0 12px rgba(0, 255, 135, 0.08);
    background: rgba(0, 255, 135, 0.04);
  }
`

const Textarea = styled.textarea`
  background: rgba(0, 255, 135, 0.03);
  border: 1px solid rgba(0, 255, 135, 0.15);
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  resize: vertical;
  min-height: 110px;
  transition: all 0.2s ease;

  &::placeholder {
    font-family: 'Share Tech Mono', monospace;
    font-size: 12px;
    color: ${({ theme }) => theme.text_secondary};
    letter-spacing: 1px;
    opacity: 0.6;
    text-transform: uppercase;
  }

  &:focus {
    border-color: rgba(0, 255, 135, 0.5);
    box-shadow: 0 0 12px rgba(0, 255, 135, 0.08);
    background: rgba(0, 255, 135, 0.04);
  }
`

const SubmitBtn = styled.input`
  width: 100%;
  padding: 14px;
  background: ${({ theme }) => theme.primary};
  color: #050B14;
  border: none;
  border-radius: 4px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 255, 135, 0.2);
  margin-top: 4px;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 255, 135, 0.45);
    background: #1AFFA0;
  }
`

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then(() => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Container id="contact">
      <Wrapper>
        <SectionLabel>// ESTABLISH_CONNECTION.EXE</SectionLabel>
        <Title>Contact</Title>
        <TitleLine />
        <Desc>Feel free to reach out for opportunities, collaborations, or any questions.</Desc>
        <Form ref={form} onSubmit={handleSubmit}>
          <FormTitle>// TRANSMIT_MESSAGE</FormTitle>
          <Input placeholder="Your Email" name="from_email" type="email" />
          <Input placeholder="Your Name" name="from_name" />
          <Input placeholder="Subject" name="subject" />
          <Textarea placeholder="Message" rows="4" name="message" />
          <SubmitBtn type="submit" value="[ TRANSMIT ]" />
        </Form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="// TRANSMISSION SENT SUCCESSFULLY"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact
