import React from 'react';
import { useInput } from '../hooks/input';
import dynamic from 'next/dynamic';

const emailjs = dynamic(
  () => import('emailjs-com').then((mod) => mod.emailjs),
  { ssr: false }
);

const ContactForm = (props) => {
  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const {
    value: subject,
    bind: bindSubject,
    reset: resetSubject,
  } = useInput('');
  const {
    value: message,
    bind: bindMessage,
    reset: resetMessage,
  } = useInput('');
  const userID = process.env.NEXT_PUBLIC_USER_ID;

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailTemplate = {
      from_name: name,
      from_email: email,
      to_name: 'Monika Chmielewska',
      subject,
      message_html: message,
    };

    console.log(emailTemplate);
    emailjs.send('gmail', 'template_wcyq856', emailTemplate, userID);

    resetName();
    resetEmail();
    resetSubject();
    resetMessage();
  };

  return (
    <div className="container">
      <h1>Contact me!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name *
          <input type="text" required aria-required="true" {...bindName} />
        </label>
        <label>
          E-mail *
          <input type="email" required aria-required="true" {...bindEmail} />
        </label>
        <label>
          Subject
          <input type="text" {...bindSubject} />
        </label>
        <label>
          Message *
          <textarea rows="5" required aria-required="true" {...bindMessage} />
        </label>

        <input type="submit" value="Submit" className="button" />
      </form>
    </div>
  );
};

export default ContactForm;
