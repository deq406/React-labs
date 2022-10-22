function logProps(WrappedComponent) {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("Текущие пропсы: ", this.props);
      console.log("Предыдущие пропсы: ", prevProps);
    }
    render() {
      // Оборачиваем компонент в контейнер без мутаций. Супер!
      return <WrappedComponent {...this.props} />;
    }
  };
}
export default logProps;
