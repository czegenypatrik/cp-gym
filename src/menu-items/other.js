// assets
import { IconUsersGroup, IconHelp, IconCurrencyDollar } from '@tabler/icons-react';

// constant
const icons = { IconUsersGroup, IconHelp, IconCurrencyDollar };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'members',
      title: 'Members',
      type: 'item',
      url: '/members',
      icon: icons.IconUsersGroup,
      breadcrumbs: false
    },
    {
      id: 'transactions',
      title: 'Transactions',
      type: 'item',
      url: '/transactions',
      icon: icons.IconCurrencyDollar,
      breadcrumbs: false
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/berry/',
      icon: icons.IconHelp,
      external: true,
      target: true
    }
  ]
};

export default other;
