import { useState, useContext } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  const { addFeedback } = useContext(FeedbackContext);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    if (newText === "") {
      setMessage(null);
    } else if (newText !== "" && newText.trim().length < 10) {
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
    }
    setText(newText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      addFeedback(newFeedback);
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} selected={rating} />
        <div className="input-group">
          <input type="text" placeholder="Write a review" value={text} onChange={handleTextChange} />
          <Button type="submit" version="secondary" isDisabled={text.trim().length < 10}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
