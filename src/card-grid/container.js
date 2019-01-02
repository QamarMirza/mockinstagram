import { connect } from 'react-redux'
import { ImageGrid } from './component';
import { getMedia } from './actions';

const mapStateToProps = (state) => {
  return {
    sortKeyword: state.selectSort,
    filterKeyword: state.selectFilter,
    media: state.media,
  };
}


const mapDispatchToProps = {
  getMedia: getMedia.request,
};


export const ImageGridContainer = connect(mapStateToProps, mapDispatchToProps)(ImageGrid);