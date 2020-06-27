import React, { Component, lazy, Suspense, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import ReactTooltip from "react-tooltip";
import navigation from '../../_nav';
import Florida from "../../florida";
import Counties from "../../counties";
import Daily from "../../daily";
import Usa_daily from "../../usa_daily";


const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));
const curday =(day)=> {
const dash = "-"
let date = new Date();
date.setDate(date.getDate() - day);
var dd = date.getDate();
var mm = date.getMonth()+1; //As January is 0.
var yyyy = date.getFullYear();

if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;
return (mm+dash+dd+dash+yyyy);
};

const curdayr =(day)=> {
const dash = "-"
let date = new Date();
date.setDate(date.getDate() - day);
var dd = date.getDate();
var mm = date.getMonth()+1; //As January is 0.
var yyyy = date.getFullYear();

if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;
return (yyyy+dash+mm+dash+dd);
};



const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')
const daily_url ="https://covid19.mathdro.id/api/daily/";
let change = false;


// Card Chart 1
const cardChartData1 = {
    labels: [curday(7), curday(6), curday(5), curday(4), curday(3), curday(2), curday(1)],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [0,0,0,0,0,0,0],
    },
  ],
};





const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};


// Card Chart 2
const cardChartData2 = {
  labels:[curday(7), curday(6), curday(5), curday(4), curday(3), curday(2), curday(1)],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [0, 0, 0, 0, 0, 0, 0],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Card Chart 3
const cardChartData3 = {
  labels:  [curday(6), curday(5), curday(4), curday(3), curday(2), curday(1), curday(0)],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [150000, 150000, 150000, 150000, 150000, 150000, 150000],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Card Chart 4
const cardChartData4 = {
  labels:  [curday(6), curday(5), curday(4), curday(3), curday(2), curday(1), curday(0)],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [0, 0, 0, 0, 0, 0, 0],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: [curday(6), curday(5), curday(4), curday(3), curday(2), curday(1), curday(0)],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



var elements = 27;
var data1 = [];
var data2 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
}

const mainChart = {
  labels: [curday(28), curday(27), curday(26), curday(25), curday(24), curday(23), curday(22), curday(21), curday(20), curday(19), curday(18), curday(17), curday(16)
  , curday(15), curday(14), curday(13), curday(12), curday(11), curday(10), curday(9), curday(8), curday(7), curday(6), curday(5), curday(4), curday(3), curday(2), curday(1)],
  datasets: [
    {
      label: 'Florida Confirmed Cases',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'Florida Estimates',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 20000,
          stepSize: 10000,
          max: 150000,
        },
      }],
  },
  elements: {
    point: {
      radius: 1,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};



const country_url = "https://covid19.mathdro.id/api/countries/USA";
const confirmed_url = "https://covid19.mathdro.id/api/countries/USA/confirmed";
const get_country = async () => {
const response = await fetch(country_url);
const country = await response.json();
let val = await country.confirmed.value;
return val;
}

/* const counties = async () => {
let fcounties =[];
const response = await fetch(confirmed_url);
const data = await response.json();
for (let i = 0; i < data.length; i++) {
  if(data[i].provinceState=="Florida")
  {
    fcounties.push(data[i]);
  }
}

return fcounties;
} */

const orange = async (county)=>{
  let val;
  let data = await Counties();
  for(let i = 0; i<data.length;i++){
    if(data[i].admin2==county){
      val=data[i].confirmed;
    }
  }
  return val;
}

const counties_daily = async (data,county)=>{
  let val=[];
  for(let i = 0; i<data.length;i++){
    for(let k = 0; k<data[i].length;k++){
    if(data[i][k].admin2==county){
      val[6-i]=data[i][k].confirmed;
    }
  }
  }
  return val;
}

const florida_total = async ()=>{
  let val=0;
  let data = await Counties();
  for(let i = 0; i<data.length;i++){
    val+=data[i].confirmed;
  }
  return val;
}



const state_daily = async (data,n)=>{
  let val =[];
  for(let j =0; j<n+1;j++)
  {
    val.push(0);
  }
  for(let i = 0; i<data.length;i++){
    for(let k=0;k<data[i].length;k++){
val[n-i]=parseInt(val[n-i])+parseInt(data[i][k].confirmed);
  }
}
return val;
}
let est = {}
const csv_data = (data)=>{
  		est = data;
}


var us_csv = require('../../US.csv');
var fl_csv = require('../../US_FL.csv');


var Papa = require("papaparse/papaparse.min.js");





class Dashboard extends Component {
  state = {
    country: {},
    orange: {},
    osceola: {},
    total: {},
    counties_daily:[0,0,0,0,0,0,0] ,
    fl_daily: [0,0,0,0,0,0,0],
    fl_daily_main: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    us_daily: [0,0,0,0,0,0,0],
    fl_options: {},
    county: "",
    change: false,
    fl_week: [],
    us_estimates: {},
    florida_estimates: {},
  }



  constructor(props) {
    super(props);
    this.updateData_us = this.updateData_us.bind(this);
    this.updateData_fl = this.updateData_fl.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };




    this.state.fl_options = cardChartOpts1;
    this.state.county = "Orange";
  }



    async componentDidMount(){

      Papa.parse(us_csv, {
        header: true,
        dynamicTyping: false,
        delimiter: ",",
        download: true,
      	complete:  this.updateData_us,
      	}
      );

      Papa.parse(fl_csv, {
        header: true,
        dynamicTyping: false,
        delimiter: ",",
        download: true,
        complete:  this.updateData_fl,
        }
      );

    /*  Papa.parse(fl_csv, {
        header: true,
        dynamicTyping: false,
        delimiter: ",",
        download: true,
      	complete: function(results) {
          csv_data(results);
      	}
      }); */
      //console.log(this.state.us_estimates);
    const country_confirmed = await get_country();
    const orange_confirmed = await orange(this.state.county);
    const state_confirmed = await florida_total();
    const us_daily_vals = await Usa_daily();
    const daily_vals_main = await Daily(29);
    const daily_vals = daily_vals_main.slice(0,7);
    const oc_daily_vals = await counties_daily(daily_vals,this.state.county);
    const state_daily_vals = await state_daily(daily_vals,6);
    const state_daily_main = await state_daily(daily_vals_main,27);
    mainChart.datasets[0].data = state_daily_main;
    cardChartData1.datasets[0].data = state_daily_vals;
    cardChartData2.datasets[0].data = oc_daily_vals;
    cardChartData4.datasets[0].data = us_daily_vals;



    this.setState({country: this.formatNumber(country_confirmed), orange: this.formatNumber(orange_confirmed), total: this.formatNumber(state_confirmed)
    ,fl_daily: state_daily_vals, counties_daily: oc_daily_vals, us_daily: us_daily_vals, fl_daily_main: state_daily_main, county: navigation.items[0].name, fl_week: daily_vals});
    let store = this.state.florida_estimates;
    mainChart.datasets[1].data = store;
    this.setState({florida_estimates: store});




    //cardChartOpts1.scales.yAxes[0].ticks.min =  Math.min.apply(Math, this.state.fl_daily) - 5000;
    //cardChartOpts1.scales.yAxes[0].ticks.max =  Math.max.apply(Math, this.state.fl_daily) + 5000;
  }

  async componentDidUpdate(){
    if(change==true){
      change=false;
      const orange_confirmed = await orange(this.state.county);
      const daily_vals = await counties_daily(this.state.fl_week,this.state.county);
      cardChartData2.datasets[0].data = daily_vals;
      this.setState({orange: this.formatNumber(orange_confirmed), counties_daily: daily_vals});
    }


  }



async updateData_us(result) {
    const data = await result.data;
    let vals= {};
    let final = [];
    for(let i =0; i<data.length;i++)
      {
        if(data[i].date == curdayr(1))
        {
          vals = data.slice(i-28,i);
        }
      }

      for(let k = 0; k<vals.length;k++)
      {
        final[k] = vals[k].predicted_current_infected_mean;
      }
    this.setState({us_estimates: final});

  }



  async updateData_fl(result) {
      const data = await result.data;
      let final = [];
      let vals= {};
      for(let i =0; i<data.length;i++)
        {
          if(data[i].date == curdayr(1))
          {
            vals = data.slice(i-28,i);
          }
        }
        for(let k = 0; k<vals.length;k++)
        {
          final[k] = vals[k].predicted_current_infected_mean;
        }
      this.setState({florida_estimates: final});
         console.log(final);
    }

  formatNumber(num){
   return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  florida_clicked(){
    alert("clicked");
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem disabled>Disabled action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">{this.state.orange}</div>
                <div>Current Cases in Your County</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">{this.state.total}</div>
                <div>Current Cases in your State</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={this.state.fl_options} height={70} />
              </div>
            </Card>
          </Col>


          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">{this.state.country}</div>
                <div>Total Cases in the U.S</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Florida Confirmed Covid Cases vs Estimates</CardTitle>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Confirmed Cases</div>
                    <strong>29.703 Users (40%)</strong>
                    <Progress className="progress-xs mt-2" color="success" value="40" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Estimates</div>
                    <strong>24.093 Users (20%)</strong>
                    <Progress className="progress-xs mt-2" color="info" value="20" />
                  </Col>

                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
              <div onClick={ ()=>{change = true; this.setState({county: navigation.items[0].name}); }}>
              <Florida />
              </div>


      </div>

    );
  }
}

export default Dashboard;
