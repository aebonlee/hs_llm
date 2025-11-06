import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });

    // 여기에 에러 로깅 서비스 연동 가능
    // logErrorToService(error, errorInfo);
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-lg w-full px-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              
              <h1 className="mt-4 text-2xl font-bold text-center text-gray-900">
                문제가 발생했습니다
              </h1>
              
              <p className="mt-2 text-center text-gray-600">
                예상치 못한 오류가 발생했습니다. 불편을 드려 죄송합니다.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                  <p className="text-sm font-mono text-red-600">
                    {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-sm text-gray-600">
                        자세한 정보
                      </summary>
                      <pre className="mt-2 text-xs overflow-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={this.handleReset}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  다시 시도
                </button>
                
                <button
                  onClick={this.handleReload}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  페이지 새로고침
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <Home className="w-4 h-4" />
                  홈으로 이동
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;