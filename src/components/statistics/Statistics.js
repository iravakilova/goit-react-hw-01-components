import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title, StatList, Item } from './StyledStatistics';

export const Statistics = ({ title, stats }) => {
    return (<Box as="section" mx = "auto" py = {4}>
  <Title>{title}</Title>
        <StatList>
            {stats.map(({ id, label, percentage }) =>
            (<Item key={id}>
                <Box fontSize = "s">{label}</Box>
                <Box fontSize = "m">{percentage}%</Box>
            </Item>))}
        </StatList>   
    </Box>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
