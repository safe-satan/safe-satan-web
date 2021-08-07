import { FC } from 'react';
import { SvgIconProps } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';

type SocialLink = {
  label: string;
  url: string;
  icon: FC<SvgIconProps>;
};

const links: SocialLink[] = [
  {
    label: 'Twitter',
    url: 'https://twitter.com/SafeSealFinance',
    icon: TwitterIcon,
  },
  {
    label: 'Telgram',
    url: 'https://t.co/SafeSealFinance',
    icon: TelegramIcon,
  },
];

export default links;
