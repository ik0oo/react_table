import React from 'react';
import Arrow from './arrows';
import Button from './button';

class Anchor extends React.Component {
    render () {
        const url = this.props.url ?  this.props.url : 'javascript:void(0);';
        return (
            <a href={url} class="blackbox__item-wrapper link">{this.props.name}</a>
        );
    }
}

export default class BlackboxItem extends React.Component {
    constructor () {
        super();

        this.hash = ['been', 'now', 'soon'];
        this.params = ['ontap', 'bottles'];
    }



    render () {
        const arrows = [];
        const buttons = [];
        const host = window.location.pathname + '#';
        const url = typeof this.props.model == 'string' ? host + this.props.model : undefined;


        // устанавливаем для переключателя с объектом занчения в переключателе
        if (typeof this.props.name === 'object') {
            var props = this.props.model.props;
            var handler = props.route.handler[0];
            this.param = props.params.id ? this.params.indexOf(props.params.id) : 0; // устанвливает выбранный параметр

            this.counter = this.hash.indexOf(handler);
            this.prev = this.counter === 0 ? undefined : host + this.hash[this.counter - 1] + '/' + this.params[this.param];
            this.next = this.counter === 2 ? undefined :  host + this.hash[this.counter + 1] + '/' + this.params[this.param];

            // переключение навигации по стрелкам
            buttons.push(<Button href={this.prev} side={'left'} key={'11'} />);
            buttons.push(<Button href={this.next} side={'right'} key={'22'} />);
        }

        // выставляем нарпавление для Arrow
        this.props.position.forEach((elem, index, array) => {
            arrows.push(<Arrow position={elem} key={index}/>)
        });

        // устанавливаем имя по значению каунтера
        this.name = typeof this.props.name === 'object' ? this.props.name[this.counter] : this.props.name;

        return (
            <div class="blackbox__item">
                {arrows}
                {buttons}

                <Anchor url={url}  name={this.name}/>
            </div>
        );
    }
}
