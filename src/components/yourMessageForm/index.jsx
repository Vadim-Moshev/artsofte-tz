import TextInput from "../controls/textInput";
import EmailInput from "../controls/emailInput";
import TextArea from "../controls/textArea";
import SubmitButton from "../controls/submitButton";

import "./index.scss";

const YourMessageForm = () => {
  return (
    <form action="">
      <div className="your-message-form">
        <TextInput
          placeholder="Your name"
          className="your-message-form__name"
        />

        <EmailInput placeholder="Email" className="your-message-form__email" />

        <TextInput
          placeholder="Subject"
          className="your-message-form__subject"
        />

        <TextArea
          placeholder="Message"
          className="your-message-form__message-text"
        />

        <SubmitButton className="your-message-form__submit" />
      </div>
    </form>
  );
};
export default YourMessageForm;
