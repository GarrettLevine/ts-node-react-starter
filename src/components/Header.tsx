import * as React from 'react';
import * as classNames from 'classnames';
import { HeaderType } from './types';


type HeaderProps = {
  title: string,
  subtitle: string,
  className?: string,
  type: HeaderType,
}

export default class Header extends React.Component<HeaderProps, undefined> {
  render() {
    return(
      <section className={classNames(this.props.className, this.props.type, 'hero')}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title"> {this.props.title}</h1>
            <h2 className="subtitle">{this.props.subtitle}</h2>
          </div>
        </div>
      </section>
    );
  }
}