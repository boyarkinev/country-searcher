import { connect } from 'react-redux';
import CountrySearch from './CountrySearch';
import mapStateToProps from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';

const CountrySearchContainer = connect(
	mapStateToProps('CountrySearch'),
	mapDispatchToProps('CountrySearch')
)(CountrySearch);

export default CountrySearchContainer;
