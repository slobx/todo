import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './index.css';

class Page extends Component {
    render() {
        return (
            <div className="fab_btn">
                <Button variant="fab" color="primary"><div id="plus_fab">+</div>

                </Button>
            </div>

        )
    }
}

export default Page;