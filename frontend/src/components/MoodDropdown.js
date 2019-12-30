import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
  {
    key: 'very bad',
    text: 'very bad',
    value: 'very bad',
    image: { avatar: true, src: 'https://cdn.vox-cdn.com/thumbor/RlAwOw19UUtp3654kFrkg1CrvH8=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/16011248/Screen_Shot_2019_04_05_at_3.13.33_PM.png' },
  },
  {
    key: 'bad',
    text: 'bad',
    value: 'bad',
    image: { avatar: true, src: 'https://cdn.vox-cdn.com/thumbor/RlAwOw19UUtp3654kFrkg1CrvH8=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/16011248/Screen_Shot_2019_04_05_at_3.13.33_PM.png' },
  },
  {
    key: 'moderate',
    text: 'moderate',
    value: 'moderate',
    image: { avatar: true, src: 'https://cdn.vox-cdn.com/thumbor/RlAwOw19UUtp3654kFrkg1CrvH8=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/16011248/Screen_Shot_2019_04_05_at_3.13.33_PM.png' },
  },
  {
    key: 'good',
    text: 'good',
    value: 'good',
    image: { avatar: true, src: 'https://cdn.vox-cdn.com/thumbor/RlAwOw19UUtp3654kFrkg1CrvH8=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/16011248/Screen_Shot_2019_04_05_at_3.13.33_PM.png' },
  },
  {
    key: 'very good',
    text: 'very good',
    value: 'very good',
    image: { avatar: true, src: 'https://cdn.vox-cdn.com/thumbor/RlAwOw19UUtp3654kFrkg1CrvH8=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/16011248/Screen_Shot_2019_04_05_at_3.13.33_PM.png' },
  }
]

const MoodDropdown = (props) => (
        <Dropdown
            placeholder='Select Friend'
            fluid
            selection
            options={friendOptions}
            onChange={props.thang}
        />
)

export default MoodDropdown