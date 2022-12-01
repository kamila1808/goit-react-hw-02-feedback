import PropTypes from 'prop-types';
import { List, ListItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((option, index) => (
        <ListItem key={index}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </ListItem>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

