import React from 'react';
import { Link } from 'react-router-dom';

class AccessibilityHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {accessibility: "accessibility-visible", standard: "standard-hidden"}
    this.swapStyleSheet = this.swapStyleSheet.bind(this);
  }



  
  swapStyleSheet(sheet) {
    return e => {
      document.getElementById('theme').setAttribute('href', sheet);
      if (this.state.accessibility === 'accessibility-visible') {
        this.setState({ accessibility: 'accessibility-hidden' });
        this.setState({ standard: 'standard-visible' });
      } else {
        this.setState({ accessibility: 'accessibility-visible' });
        this.setState({ standard: 'standard-hidden' });
      }
    }
  }


  render() {

   
    return (
      <div className="accessibility-header">
        <button className={this.state.accessibility} onClick={this.swapStyleSheet("/assets/main_accessibility.scss")}>Switch to Accessibility Mode&nbsp;&nbsp;</button>
        <button className={this.state.standard} onClick={this.swapStyleSheet("/assets/main.scss")}>Switch to Standard Mode&nbsp;&nbsp;</button>
      </div>
    );
  }
}

export default AccessibilityHeader;