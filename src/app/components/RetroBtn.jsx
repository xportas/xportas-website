'use client';
import React from 'react';
import { waitForMs } from '../utils/utils';

export default class RetroBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  async handleClick(e) {
    const { effect } = this.props;
    this.setState({ isClicked: true });
    if (effect) effect();
    await waitForMs(70);
    this.setState({ isClicked: false });
  }

  handleMouseDown() {
    this.setState({ isClicked: true });
  }

  handleMouseUp() {
    this.setState({ isClicked: false });
  }

  handleMouseLeave() {
    this.setState({ isClicked: false });
  }

  render() {
    const {
      child,
      darkTheme,
      download,
      href,
      rel,
      style,
      styles,
      target,
    } = this.props;

    const { isClicked } = this.state;

    const baseStyles = `border-2 border-solid transition ease-in no-count ${styles}`;
    const themeStyles = darkTheme
      ? 'bg-orange-200 border-main-gray shadow-custom-dark-theme'
      : 'bg-main-gray border-orange-200 shadow-custom';
    const hoverStyles = !isClicked
      ? 'hover:shadow-custom-hover hover:-translate-y-1 hover:scale-105'
      : '';

    return (
      <a
        className={`${baseStyles} ${themeStyles} ${hoverStyles}`}
        style={style}
        href={href}
        download={download}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
        target={target}
        rel={rel}
      >
        {child}
      </a>
    );
  }
}
