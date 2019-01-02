import React, { Component } from 'react';
import { ImageCard } from '../card-component';
import { SearchDropDown } from '../dropdown';
import './styles.css'

type Props = {
  queryString: string,
  filterKeyword?: string,
  sortKeyword?: string,
  openModal: (Object) => void,
  getMedia: () => void,
  media: Array<any>,
};
type State = {
  data: Array<Object>,
  names: Array<Object>,
};

export const ImageGrid = ({ openModal, media, getMedia }: Props) => {
  console.log(media);

  getMedia();
  console.log('media2', media);
  const sortOptions = [
    { value: 1, label: 'Name' },
    { value: 2, label: 'Age' },
    { value: 3, label: 'Likes' },
    { value: 4, label: 'Comments' },
  ];
  //const filterOptions = this.state.names.map((name, i) => ({ value: i, label: name }));
  let filterOptions;
  return (
    <React.Fragment>
      <span className='dropdown-container'>
        <SearchDropDown
          placeholder={'Sort By:'}
          options={sortOptions}
          type={'SORT'}
          classname={'dropdown-sort'}
        />
        <SearchDropDown
          placeholder={'Filter By:'}
          options={filterOptions}
          type={'FILTER'}
          classname={'dropdown-filter'}
        />
      </span>
      <div className={'image-container'} >

        {
          media.map((picture, i) => (
            <ImageCard
              key={i}
              pictureSrc={picture}
              onClick={() => openModal(picture)}
            />
          ))
        }
      </div >
    </React.Fragment>
  )
}
