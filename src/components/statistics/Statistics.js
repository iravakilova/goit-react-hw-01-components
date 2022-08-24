import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title, StatList, StatItem } from './StyledStatistics';

export const Statistics = ({ title, stats }) => {
    return (<Box mx = "auto" py = {4}>
  <Title>{title}</Title>
        <StatList>
            {stats.map(({ id, label, percentage }) =>
            (<StatItem key={id}>
                <Box fontSize = "s" color = "white">{label}</Box>
                <Box fontSize = "m" color = "white" fontWeight = "bold">{percentage}%</Box>
            </StatItem>))}
        </StatList>   
    </Box>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
