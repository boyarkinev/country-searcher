import { connect } from 'react-redux';
import mapDispatchToProps from '../../store/mapDispatchToProps';
import mapStateToProps from '../../store/mapStateToProps';
import SearchForm from './SearchForm';

const SearchFormContainer = connect(
	mapStateToProps('SearchForm'),
	mapDispatchToProps('SearchForm')
)(SearchForm);

export default SearchFormContainer;
