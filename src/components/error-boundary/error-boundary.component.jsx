import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }

  //to let react know its an error boundary component, we need to derive these two  methods
  static getDerivedStateFromError(error) {
    //Do something with error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return <div> Something went wrong </div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
