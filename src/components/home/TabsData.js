export const tabsData = [
  {
    label: 'Featured',
    value: 'featured',
    index: 0
  },
  {
    label: 'Stories',
    value: 'story',
    index: 1
  },
  {
    label: 'Works',
    value: 'work',
    index: 2
  },
  {
    label: 'Clients',
    value: 'client',
    index: 3
  }
];

export const renderTabFallbackContent = index => {
  switch (index) {
    case 0:
      return 'Since the other three tabs are empty, this one is empty too :P';
    case 1:
      return 'There is no Story at the monent, check back later?';
    case 2:
      return 'I am working on my portfolio at the monent, check back later?';
    case 3:
      return "There are too many clients I've worked with, trying to organize them in a better way :P, check back later";
    default:
      return null;
  }
};
