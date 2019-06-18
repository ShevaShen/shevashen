import React from 'react';
import clsx from 'clsx';
import MuiCardMedia from '@material-ui/core/CardMedia';
import { CARD_MEDIA } from '../../theme/core';

const CardMedia = ({ className, wideScreen, ...props }) => (
  <MuiCardMedia
    className={clsx(
      CARD_MEDIA.root,
      className,
      wideScreen && CARD_MEDIA.wideScreen
    )}
    {...props}
  />
);

export default CardMedia;
