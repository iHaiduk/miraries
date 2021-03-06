/**
 * Created by igor on 12.10.16.
 */
'use strict';

import {Component, PropTypes} from "react";

export default class Header extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {view} = this.store;
        const template = require('./templates/' + view).default;

        return template(this.store, this.events);
    }
}

Header.propTypes = {
    view: PropTypes.string,
    elements: PropTypes.any
};