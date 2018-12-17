import * as React from "react";
import "./DemoFlux.module.scss";
import { StateStor } from "../Stores/StateStor";
import PageModel from "../Models/PageModel";

export interface IDemoFluxState {
    loading: boolean;
    pages: PageModel[];
}

export class DemoFlux extends React.Component<any, IDemoFluxState> {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            pages: []
        };
    }

    private onStorChange = () => {
        this.setState({
            pages: StateStor.getPages(),
            loading: StateStor.isLoading()
        });
    }

    public componentWillMount() {
        // Add Stor listener
        StateStor.addChangeListener(this.onStorChange);
    }
    
    public componentWillUnmount() {
        // Remove Stor listener
        StateStor.removeChangeListener(this.onStorChange);
    }

    public render() {
        return (
            <div className="demo-flux">
                <h2>Flux:</h2>
                <div className="demo-flux-loading" style={this.state.loading ? { display: "block" } : { display: "none" }}>Loading...</div>
                <ul className="demo-flux-list" style={this.state.loading ? { display: "none" } : { display: "block" }}>
                {this.state.pages.map((page: PageModel, index: number) => {
                    return <li key={index}><strong>{page.Id}</strong> {page.Title}</li>;
                })}
                </ul>
            </div>
        );
    }
}

export default DemoFlux;