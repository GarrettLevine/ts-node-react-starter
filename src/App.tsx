import * as React from 'react';

import components from './components';
const { Header, componentTypes } = components;

export default class App extends React.Component<{}, {}> {
    render() {
      return (
        <section className='app__container'>
          <Header
            title='This project'
            subtitle='is the one that you want'
            type={componentTypes.HeaderType.Primary}
          />
      </section>
    );
  }
}
