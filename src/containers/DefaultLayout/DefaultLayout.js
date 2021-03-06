import React, { Component, Suspense,} from 'react';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppHeader,
  AppSidebar,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import * as nav from '../../_nav';
// routes config
import Dashboard from "../../views/Dashboard/Dashboard";


const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));


/**
 * Default Layout
 * Combines the Dashboard, header, sidebar and footer components to form the default dashboard page
 */
class DefaultLayout extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  state = {
    county: "",
  }

  constructor(props) {
    super(props);

    this.state.county = nav.county.county;
  }

  async componentDidUpdate(){
    }

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar  fixed display="lg" >
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense >
            <AppSidebarNav  navConfig={nav.navigation} {...this.props} router={router}/>
            </Suspense>
          </AppSidebar>
          <main className="main">
            <Container fluid>
              <Suspense fallback={this.loading()}>
              <div onClick={()=>{
                if(this.state.county!=nav.county.county)
                {
                  this.setState({county: nav.county.county});
                }
              }}>
<Dashboard />
</div>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
