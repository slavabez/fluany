import React, {Component} from 'react';
import Header from '../Header/Header';
import SelectLanguageOptions from '../SelectLanguageOptions/SelectLanguageOptions';
import ButtonStart from '../ButtonStart/ButtonStart';
import InputInterval from '../InputInterval/InputInterval';
import Points from '../Points/Points';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Points />
        <InputInterval />
        <SelectLanguageOptions />
        <ButtonStart />
      </div>
    );
  }
}

export default App;