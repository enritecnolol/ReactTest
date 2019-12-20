import React, {Component} from 'react';
import './Global/css/Footer.css';
import Proptypes from 'prop-types'
class Footer extends Component {
    static propTypes = {
      copyright: Proptypes.string
    };
    render() {
        const { copyright = "&copy; there is not messages" } = this.props;

        return (
            <div className="Footer">
                <p dangerouslySetInnerHTML={{__html:copyright}} />
            </div>
        );
    }
}

export default Footer;
