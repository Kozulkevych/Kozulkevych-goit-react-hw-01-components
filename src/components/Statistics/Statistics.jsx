import PropTypes from 'prop-types';
import { Section, StatTitle, StatList, Item, Label, Percentage} from "./Statistics.styled";

function getRandomHexColor() {
  return `#${Math.random().toString(16).slice(2,8)}`;
}
export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title && <StatTitle>{title}</StatTitle>}

            <StatList>
                {stats.map(({ id, label, percentage }) => (
                    <Item key={id} bgColor={getRandomHexColor()}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}</Percentage>
                    </Item>
                ))}
            </StatList>
        </Section>
    );
}
 
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}