import { Component,  type ErrorInfo, type ReactNode } from "react";
type Props = { children: ReactNode };
type State = { hasError: boolean };
export class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Error catched by ErrorBoundary:", error, info)
  }
  render() {
    if (this.state.hasError) return <div>Ocorreu um erro na aplicação.</div>;
    return this.props.children;
  }
}

