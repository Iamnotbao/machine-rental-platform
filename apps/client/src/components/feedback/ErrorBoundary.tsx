import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface State {
  hasError: boolean;
}
export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  public override state: State = { hasError: false };
  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }
  public override componentDidCatch(error: Error, info: ErrorInfo): void {
    void error;
    void info;
    /* reporting can be added with backend observability */
  }
  public override render(): ReactNode {
    return this.state.hasError ? (
      <main className="page-container">
        <h1>Something went wrong</h1>
        <p>Please refresh the page and try again.</p>
      </main>
    ) : (
      this.props.children
    );
  }
}
