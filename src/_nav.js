export default {
  items: [
    {
      name: 'Orange County',
      url: '/dashboard',
    },
    {
      title: true,
      name: 'Orange County Current Status',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'State of Emergency',
      url: '/theme/colors',
    },
    {
      name: 'Current Restrictions',
      url: '/theme/typography',

    },
    {
      title: true,
      name: 'Orange County Resources',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Testing Locations',
      url: '/base',
      children: [
        {
          name: 'Location 1',
          url: '/base/breadcrumbs',
        },
        {
          name: 'Location 2',
          url: '/base/cards',
        },
        {
          name: 'Location 3',
          url: '/base/carousels',
        },
      ],
    },
    {
      name: 'Plan for Florida’s Recovery.',
      url: '/buttons',
      children: [
        {
          name: 'Phase 1',
          url: '/buttons/buttons',
        },
        {
          name: 'Phase 2',
          url: '/buttons/button-dropdowns',
        },
        {
          name: 'What is Currently Open',
          url: '/buttons/button-groups',
        },
      ],
    },
    {
      divider: true,
    },
    {
      name: 'Tables',
      url: '/base/tables',
    },
    {
      name: 'Pages',
      url: '/pages',
      children: [
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },


  ],
};
