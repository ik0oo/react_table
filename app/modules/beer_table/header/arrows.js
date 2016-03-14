import React from 'react';

export default class Arrow extends React.Component {
    constructor () {
        super();
        this.name = 'blackbox__arrow';
    }

    setClass (prop) {
        return this.name + ' ' + prop;
    }

    render () {
        return (
            <div class={this.setClass(this.props.position)}>
                <div class="blackbox__arrow-triangle">
                </div>
                <div class="blackbox__arrow-line">
                </div>
            </div>
        )
    }
}
