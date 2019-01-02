import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

const ProfileComponent = ({ profile }: any) => (
  <React.Fragment>
    <div className='profile__picture'>
      <img src={profile.profile_picture} alt='profile ' />
    </div>
    <div className='profile__name' >
      Name: {profile.full_name}
    </div>
    <div className='profile__analytics'>
      Following: Media: {profile.counts.media} Following: {profile.counts.follows} Followed by: {profile.counts.followed_by}
    </div>
    <div className='profile__view'>
      View
    </div>

  </React.Fragment >
);

export const intialUserState = {
  bio: 'Qamar Mirza',
  counts: { media: 10, follows: 9, followed_by: 1991 },
  full_name: 'qamar m',
  id: '1234567890',
  is_business: false,
  profile_picture: 'https://scontent.cdninstagram.com/vp/f852bb04c502bf31a203fa2cf0b93988/5C9E8DDF/t51.2885-19/s150x150/30077986_363604254044061_5427426051695312896_n.jpg?_nc_ht=scontent.cdninstagram.com',
  username: 'qmirza',
  website: '',
}


const mapStateToProps = (state) => {
  return {
    profile: state.user,
  };
}

export const Profile = connect(mapStateToProps, null)(ProfileComponent);
