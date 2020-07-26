import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AppSidebarToggler } from '@coreui/react';


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};
/**
 * Default Header
 * Renders the sidebar toggler and title
 */
class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <div >
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <h1 style ={{float:"right"}} >COVID Tracker</h1>

        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </div>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
