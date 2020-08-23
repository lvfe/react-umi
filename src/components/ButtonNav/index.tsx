import React, { Component } from 'react'
import PropTypes from 'prop-types'
interface ButtonProps {
    pathname: string
}
export default class ButtonNav extends Component<ButtonProps> {
    render() {
        const {pathname} = this.props;
        return (
            <div>
                <h3>Bottom-{pathname}</h3>
            </div>
        )
    }
}
