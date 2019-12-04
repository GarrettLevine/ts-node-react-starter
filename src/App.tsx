import * as React from 'react';
import { Bar } from './components/AppBar/AppBar';

export default class App extends React.Component<{}, {}> {
    render() {

      return (
        <main className='app__container'>
          <Bar title='test' />
        </main>
    );
  }
}
