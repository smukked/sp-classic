import * as React from "react";
import "./DemoPages.module.scss";
import { StateActions } from "../Actions/StateActions";
import PageModel from "../Models/PageModel";

export interface IDemoPagesProps {
    listName: string;
}

export interface IDemoPagesState {
    loading: boolean;
    pages: PageModel[];
    from: string;
}

export class DemoPages extends React.Component<IDemoPagesProps, IDemoPagesState>{

    constructor(props) {
        super(props);

        this.state = {
            pages: [],
            loading: true,
            from: "server"
        };
    }

    public reload = (flush?: boolean) => {
        
        this.setState({
            pages: [],
            loading: true
        });

        if (flush) {
            localStorage.clear();
        }

        return StateActions.getPages(this.props.listName).then((pages) => {
            this.setState({
                pages: pages,
                loading: false,
                from: flush ? "server" : "local storage"
            });                
        });
    }

    public componentDidMount() {
        return StateActions.getPages(this.props.listName).then((pages) => {
            this.setState({
                pages: pages,
                loading: false
            });
        });
    }

    public render() {
        return (
            <div className="demo-pages">
                <button id="buttonServer" onClick={() => this.reload(true) }>Reload from server</button>
                <button id="buttonLocal" onClick={() => this.reload(false) }>Reload from cache</button>
                <h2>Pages:</h2>
                <div className="demo-pages-loading" style={this.state.loading ? { display: "block" } : { display: "none" }}>Loading...</div>
                <ul className="demo-pages-list">
                {this.state.pages.map((page: PageModel, index: number) => {
                    return <li key={index}><strong>{page.Id}</strong> {page.Title}</li>;
                })}
                </ul>
                Loaded from: {this.state.from}
            </div>
        );
    }
}

export default DemoPages;