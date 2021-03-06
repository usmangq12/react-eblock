import React, { Component } from 'react'

interface LoggerState {
    hasError: boolean 
    info: string
}

interface LoggerProps {

}

class Logger extends Component<LoggerProps, LoggerState> {
    constructor(props: any){
        super(props);
        this.state = { hasError: false, info: ""}
    }

    static getDerivedStateFromError(error: Error) {
        console.log("DETECTING")
        return { hasError: true };
    }

    componentDidCatch(err: Error, info: React.ErrorInfo) {
        console.log('Error', err, 'Info', info)
    }

    render() {
        if (this.state.hasError) {
            return <div>ERROR SCREEN</div>;
        }
        return this.props.children;
    }
}

export default Logger;
