import React from 'react'
import { Image } from 'cloudinary-react'

const CloudinaryImage = ({ id, ...rest }) => (
  <Image cloudName="modus-labs" publicId={id} {...rest} />>
)

export default CloudinaryImage
