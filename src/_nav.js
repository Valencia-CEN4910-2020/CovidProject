const county = 'Orange';

export default {
  items: [
    {
      name: county,
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
      url: '/',
    },
    {
      name: 'Current Restrictions',
      url: '/',

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
      children: [
        {
          name: 'Location 1',
        },
        {
          name: 'Location 2',
        },
        {
          name: 'Location 3',
        },
      ],
    },
    {
      name: 'Plan for Florida’s Recovery.',
      url: 'https://www.flgov.com/wp-content/uploads/covid19/Taskforce%20Report.pdf',
    },
    {
      divider: true,
    },
  ],
};
