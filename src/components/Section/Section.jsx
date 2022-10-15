import PropTypes from 'prop-types';
import { SectionEl } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionEl>
      {title && <h2>{title}</h2>}
      {children}
    </SectionEl>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
