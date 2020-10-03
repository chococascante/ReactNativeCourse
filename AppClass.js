import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PropsEjemplo from './PropsEjemplo';

export class AppClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      texto: 'Hola clase',
      contador: 0,
      name: 'Hola Props',
      showProps: false,
    };
  }

  changeName() {
    this.setState({
      name: 'Hola Props 1',
      contador: this.state.contador + 1,
      showProps: true,
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.changeName();
    }, 2000);
  }

  render() {
    const textoLargo = this.state.texto + this.state.name;
    return (
      <View>
        {this.state.showProps ? (
          <PropsEjemplo name={textoLargo} contador={this.state.contador} />
        ) : (
          <Text>No hay datos</Text>
        )}
      </View>
    );
  }
}

export default AppClass;
