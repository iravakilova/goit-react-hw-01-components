import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (<section class="statistics">
  <h2 class="title">{title}</h2>
        <ul class="stat-list">
            {stats.map(({ label, percentage }) =>
            (<li class="item">
                <span class="label">{label}</span>
                <span class="percentage">{percentage}%</span>
            </li>))}
        </ul>   
    </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.array,
    label: PropTypes.string,
    percentage: PropTypes.number,
}
