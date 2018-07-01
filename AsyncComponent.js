class AsyncComponent extends React.PureComponent {
    _component = null;

    render() {
        const { resolve, ...props} = this.props;
        const Component = this._component;
        return Component !== null? <Component {...props} />:Component;
    }

    componentDidMount(){
        this._isMounted = true;
        this.props.resolve().then(Component => {
            if (this._isMounted) {
                this._component = Component;
            }
        });
    }
    
    componentWillMount() {
        this._isMounted = false;
    }
}
