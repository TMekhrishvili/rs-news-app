import Home from './Home';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    articles: state.home.articles,
    loadingStatus: state.home.status,
    search: state.search.searchText,
})

export default connect(mapStateToProps)(Home);
