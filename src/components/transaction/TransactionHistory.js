import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { TransactionData } from './StyledTransactionHistory';

export const TransactionHistory = ({ items }) => {
    return (
        <Box as = "table" width = "100%" mx = "auto" py= {4}>
            <Box as="thead" fontSize="s" bg = "primary" color = "white">
                <Box as = "tr">
                    <Box as = "th" py = {2} >Type</Box>
                    <Box as = "th" py = {2}>Amount</Box>
                    <Box as = "th" py = {2}>Currency</Box>
                </Box>
            </Box>
            <TransactionData>
                    {items.map(({ id, type, amount, currency }) => (
                        <Box as="tr" key={id} textAlign = "center">
                            <Box as = "td" py = {2}>{type}</Box>
                            <Box as = "td" py = {2}>{amount}</Box>
                            <Box as = "td" py = {2}>{currency}</Box>
                        </Box>
                ))}
            </TransactionData>
        </Box>
    )
}

TransactionHistory.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};