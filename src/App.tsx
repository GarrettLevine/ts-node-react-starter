import * as React from 'react';
import * as Components from './components';

const { Header, componentTypes } = Components.default;
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
