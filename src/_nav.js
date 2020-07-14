export let county = {county:"Orange"};

 export const navigation = {
  items: [
    {
      name: county.county + " County",
      url: '/dashboard',
    },
    {
      title: true,
      name: 'County Current Status',
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
      attributes: {className: "testing"},
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
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      divider: true,
    },
  ],
};

 export const testing = {
  Orange: [{attributes: {style:{whiteSpace: "pre-line"}},name:
    `
    1. Orange County Convention Center
     5980 Destination Pkwy Orlando,32819

     Hours of Operation:
  7 days a week
  9 a.m. – 5 p.m.
   Testing Criteria:
     Ages 18 and older, regardless of symptoms  Offers antibody testing to ages 18 and older`}],
  Brevard: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
  1. Eastern Florida State College - Palm Bay Campus
250 Community College Parkway,
Palm Bay, FL 32909

    Hours of Operation:
    7 days a week
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms
`}],
Broward: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Mitchell Moore Park
901 NW 10th Street
Pompano Beach, FL 33060

    Hours of Operation:
    Mon. – Sun., closed on Thursdays
    9 a.m. – 5 p.m.
    Testing Criteria: All ages, regardless of symptoms
    Appointments: 954-412-7300
`},{attributes: {style:{whiteSpace: "pre-line"}},name: `
2. Urban League
560 NW 27th Avenue
Fort Lauderdale, FL 33311

    Hours of Operation:
    Tues. – Sat.
    9 a.m. – 6 p.m.
    Testing Criteria: All ages, regardless of symptoms
    Appointments: 954-412-7300
`},{attributes: {style:{whiteSpace: "pre-line"}},name:`
3. Miramar Vernon Hargray Youth Enrichment Center
7000 Miramar Pkwy
Miramar, FL 33025

    Hours of Operation:
    9 a.m. – 2 p.m.
    Testing Criteria: All ages, regardless of symptoms
    Appointments: 954-412-7300
`},{attributes: {style:{whiteSpace: "pre-line"}},name:`
4. Publix at Coral Ridge
11600 W. Sample Road
Coral Springs, FL 33065

    Hours of Operation:
    Mon. – Fri.
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms
`}, {attributes: {style:{whiteSpace: "pre-line"}},name:`
5. North Lauderdale – Hampton Pines Park
7800 Hampton Boulevard
North Lauderdale, FL 33068

    Hours of Operation:
    Tues. – Sat.
    9 a.m. – 5 p.m.
    Testing Criteria: All ages, regardless of symptoms
`},{attributes: {style:{whiteSpace: "pre-line"}},name:`
6. Coral Springs – Mullins Park
10000 Ben Geiger Drive
Coral Springs, FL 33065

    Hours of Operation:
    Mon. – Fri.
    8 a.m. – 4:30 p.m.
    Testing Criteria: All ages, regardless of symptoms
    Appointments: 954-412-7300
`},{attributes: {style:{whiteSpace: "pre-line"}},name:`
7. Sawgrass Mills
12801 W. Sunrise Blvd.
Sunrise, FL 33323

    Hours of Operation:
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms
`},{attributes: {style:{whiteSpace: "pre-line"}},name:`
8. Torres Park
4331 NW 36th St.,
Lauderdale Lakes, 33319

    Hours of Operation:
    9 a.m. – 5 p.m.
    Testing Criteria: All ages regardless of symptoms`},{attributes: {style:{whiteSpace: "pre-line"}},name:`
    9. CB Smith Park
900 North Flamingo Road
Pembroke Pines, FL 33028

    Hours of Operation:
    7 days a week
    7 a.m. – 4 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms. Pediatric testing for ages 7-18 available.
`},{attributes: {style:{whiteSpace: "pre-line"}},name:`
10. War Memorial
800 NE 8th St.
Fort Lauderdale, FL 33304

    Hours of Operation: Tues. – Sat.
    9 a.m. – 6 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms
    Appointments: 1-800-209-7919
`}],
Charlotte: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Publix at Port Charlotte Crossing
4265 Tamiami Trail
Port Charlotte, FL 33980

    Hours of Operation: Mon. – Fri.
9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms
`}],
Duval: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Legends Center
5130 Soutel Dr.
Jacksonville, FL 32208

    Hours of Operation: 7 days a week
    9 a.m. – 5 p.m.
    Testing Criteria – All ages, regardless of symptoms
`},{attributes: {style:{whiteSpace: "pre-line"}},name: `
2. TIAA Bank Field- Lot J
1 Stadium Place
Jacksonville, FL 32202

    Hours of Operation: 7 days a week
    9 a.m. – 5 p.m.
    Testing Criteria – Ages 18 and older, regardless of symptoms
    Offers antibody testing to ages 18 and older
`}],
Escambia: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Publix at 9th Ave
5055 N 9th Ave
Pensacola, FL 32504

    Hours of Operation: Mon. – Fri.
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms
`},{attributes: {style:{whiteSpace: "pre-line"}},name: `
2. University of West Florida, Softball Complex
11000 University Parkway, Campus Dr. SP 2
Pensacola, FL 32514

    Days of operation: Mon. - Sun.
    Hours: 9 a.m. - 5 p.m.
    Individuals over the age of 18 can be tested regardless of symptoms`}],
Hillsborough: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Lee Davis Community Resource Center
3402 N 22nd Street
Tampa, FL 33606

    Hours of Operation:
    Mon., Wed.,Thurs.
    8 a.m. – 12 p.m.
    Testing Criteria – All ages, regardless of symptoms
    By appointment only
    Appointments: 888-513-6321
`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
2. SouthShore Community Resource Center
201 14th Ave SE
Ruskin, FL 33570



    Days of operation: Wed., Thurs., Thurs.
    Hours: 8 a.m. - 12 p.m.
    Testing Criteria: All ages, regardless of symptoms
    By appointment only
    Call to schedule an appointment: 888-513-6321`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
    3. Raymond James Stadium
4201 N Dale Mabry Hwy
Tampa, FL 33607

    Days of Operation: Tues. through Sat.
    Hours: 8 a.m. – 11 a.m.
    Testing Criteria: All ages, regardless of symptoms
    By appointment only
    Call to schedule an appointment: 888-513-6321`}],
Lake: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Publix at Tavares Crossroads
2042 State Road 19
Tavares, FL 32778

    Hours of Operation:
    Mon. – Fri.
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms
`}],
Lee: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. CenturyLink Sports Complex
4100 Ben C. Pratt/ Six-Mile Cypress Parkway
Fort Myers, FL 33912

    Days of operation:
    Mon. - Sun.
    Hours: 9 a.m. - 5 p.m.
    Individuals over the age of 18 can be tested regardless of symptoms
`}],
Leon: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. FAMU Bragg Memorial Football Stadium
1500 Wahnish Way
Tallahassee, FL 32310

    Days of operation: Mon. - Sat.
    Hours: 9 a.m. - 6 p.m.
    Testing Criteria: All ages, regardless of symptoms
    Call to schedule an appointment: 850-404-6399
`}],
Manatee: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Lincoln Park
501 17th Street E
Palmetto, FL 34221

    Hours of Operation:
    7 days a week
    9 a.m. – 6 p.m.
    Testing Criteria: All ages, regardless of symptoms
`}, {attributes: {style:{whiteSpace: "pre-line"}},name:`
2. Home Depot
2350 Cortez Road
Bradenton, FL 34207

    Hours of Operation:
    7 days a week
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms
`}],
Miami: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Walk Up Testing Site

Sherbondy Park
777 Sharazod Blvd
Opa Locka, FL 33054

    Hours of Operation:
    7 days a week
    9 a.m. – 3 p.m.
    Testing Criteria: All ages, regardless of symptoms
    Appointments: 305-499-8767
`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
2. Holy Family Catholic Church
14500 NE 11th Ave.
Miami, FL 33161

    Days of operation: Mon. - Sat.
    Hours: 9 a.m. - 5 p.m.
    Testing Criteria: All ages, regardless of symptoms
    Call to schedule an appointment: 305-499-8767
`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
3. Miami International Mall
1455 NW 107th Ave.
Doral, FL 33172

    Hours of Operation:
     9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms
`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
4. West Perrine Health Center
18255 Homestead Ave.
Miami, 33157

    Hours of Operation:
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptons`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
    5. Hard Rock Stadium
347 Don Shula Drive
Miami Gardens, FL 33056

    Hours of Operation:
    7 days a week
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms
    Offers antibody testing to ages 18 and older
`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
6. Miami Beach Convention Center
1901 Convention Center Dr.
Miami Beach, FL 33139

    Hours of Operation:
    7 days a week
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms
    Offers antibody testing to ages 18 and older
`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
7. Marlins Park
501 Marlins Way
Miami, FL 33125

    Hours of Operation:
    7 days a week
    9 a.m. – 1 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms
    Appointments: 305-499-8767
`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
8. Amelia Earhart
401 E. 65th Street
Hialeah, FL 33013

    Hours of Operation:
    Mon. – Sat.
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms`}],
Okaloosa: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Publix at Eglin Parkway
610 Eglin Pkwy NE
Fort Walton Beach, FL 32547

    Hours of Operation:
    Mon. – Fri.
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms
`}],
Palm: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Lakeside Hospital
39200 Hookey Hwy
Belle Glade, FL 33430

    Days of operation: Mon. - Sat.
    Hours: 8 a.m. - 3 p.m.
    Testing Criteria: All ages, regardless of symptoms
    Call to schedule an appointment: 561-642-1000

`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
2. Florida Atlantic University
901 NW 35th Street
Boca Raton, FL 33431

    Hours of Operation:
    Mon. – Fri.
    8 a.m. – 12 p.m.
    Testing Criteria: All ages, regardless of symptoms
    Appointments: 800-209-7919
`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
3. Home Depot
9820 Glades Road
Boca Raton, FL 33434

    Hours of Operation:
    7 days a week
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
4. Town Center at Boca Raton
6000 Glades Road
Boca Raton, FL 33431

    Hours of Operation:
     9 a.m. – 5 p.m.
    Testing Criteria:
    Ages 18 and older, regardless of symptoms`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
    5. Publix at Northlake Promenade Shoppes
374 Northlake Blvd.
North Palm Beach, FL 33408

    Hours of Operation:
    Mon. – Fri.
    9 a.m. – 5 p.m.
    Testing Criteria:
    Ages 18 and older, regardless of symptoms`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
    6. FITTEAM Ballpark of the Palm Beaches
5444 Haverhill Road
West Palm Beach, FL 33407

    Any age; need not be symptomatic
    Days of operation:Tuesday - Saturday 8:00 am - Noon
    *Drive-thru site: By appointment only; call (561) 642-1000
    *Antibody Testing: 40 appointments per day; call (561) 642-1000
    Over 18 years, regardless of symptoms`},
    {attributes: {style:{whiteSpace: "pre-line"}},name: `
    7. South County Civic Center in Delray Beach
16700 Jog Road
Delray Beach, FL 33446

    Over age 12; with or without COVID-19 symptoms.
    Days of operation: Tuesday - Saturday 8:00 am - Noon
    *Drive-thru site: By appointment only; call 1-800-209-7919`}],
Pasco: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Home Depot
1315 U.S. Highway 19
Holiday, Florida 34691

    Hours of Operation:
    7 days a week
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms`}],
Polk: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Publix at Imperial Lakes Plaza
2040 Shepherd Road
Mulberry, FL 33860

    Hours of Operation:
    Mon. – Fri.
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms`}],
Sarasota: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Robert L. Taylor Community Center
1845 34th St.
Sarasota, FL 34234

    Hours of Operation:
    7 days a week
    9 a.m. – 5 p.m.
    Testing Criteria: All ages, regardless of symptoms`}, {attributes: {style:{whiteSpace: "pre-line"}},name: `
2. University Town Center
299 University Town Center Drive
Sarasota, FL 34234

    Days of operation:
    Mon. - Sun.
    Hours: 9 a.m. - 5 p.m.
    Individuals over the age of 18 can be tested regardless of symptoms`}],
Lucie: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Publix at Verano
9335 SW Commerce Center Dr.
Port Saint Lucie, FL 34986

    Hours of Operation:
     Mon. – Fri.
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms`}],
Volusia: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
1. Publix at Saxon Crossings
2100 Saxon Blvd
Deltona, FL 32725

    Hours of Operation:
    Mon. – Fri.
    9 a.m. – 5 p.m.
    Testing Criteria: Ages 18 and older, regardless of symptoms`}],
None: [{attributes: {style:{whiteSpace: "pre-line"}},name: `
There are no State Supported testing sites`}]
     };
