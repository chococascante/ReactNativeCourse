import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PropsEjemplo from './PropsEjemplo';
import {connect} from 'react-redux';
import {getPosts, setCurrentPostRedux} from '../../store/actions/Posts';

class AppClass extends Component {
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
      this.props.getPosts();
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

const mapStateToProps = (state) => ({
  currentPost: state.posts.currentPost,
  posts: state.posts.posts,
  loaded: state.posts.loaded,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPost: () => dispatch(setCurrentPostRedux),
    getPosts: () => dispatch(getPosts),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppClass);
