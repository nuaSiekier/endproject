import React from "react";
import { Dropdown } from 'semantic-ui-react';


const destinationOptions = [
  {
    key: 'Prague',
    text: 'Prague',
    value: 'Prague',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Budapest',
    text: 'Budapest',
    value: 'Budapest',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Berlin',
    text: 'Berlin',
    value: 'Berlin',
    image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'Vienna',
    text: 'Vienna',
    value: 'Vienna',
    // image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
  },
]

const ServicesInfo = () =>
(
  <Dropdown
    options={destinationOptions}
  />
)

export default ServicesInfo
