import { SectionEl } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionEl>
      {title && <h2>{title}</h2>}
      {children}
    </SectionEl>
  );
};
