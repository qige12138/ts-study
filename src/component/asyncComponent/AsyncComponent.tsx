import React from 'react';
import Loading from 'src/component/loading/Loading';
import NotFound from 'src/component/notFound/NotFound';

export default function AsyncComponent(asComponent) {
  class AsyncComponent extends React.Component<any, any> {
    constructor(props) {
      super(props);
      this.state = {
        component: Loading,
        componentProps: {}
      };
    }
    async componentDidMount() {
      try {
        const { default: component } = await asComponent();
        this.setState({
          component
        });
      } catch (error) {
        this.setState({
          component: NotFound,
          componentProps: {
            type: 'fail',
            text: error
          }
        });
      }
    }
    render() {
      const C = this.state.component;
      const cProps = { ...this.props, ...this.state.componentProps };
      return <C {...cProps} />;
    }
  }
  return <AsyncComponent />;
}
