import React from 'react';

export default class Button extends React.Component {
    render () {
        const className = 'blackbox__item-' + this.props.side + '-arrow';
        const icon = this.props.side === 'right' ? 'play87' : 'play87mirror';
        const url = 'assets/images/sprites/svg/symbols.svg#' + icon;
        const href = this.props.href ? this.props.href : 'javascript:void(0);';

        return (
            <a href={href}>
                <svg class={className}>
                    <use xlinkHref={url}></use>
                </svg>
            </a>
        );
    }
}
