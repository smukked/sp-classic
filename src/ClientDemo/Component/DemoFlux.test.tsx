/// <reference types="jest" />

import {DemoFlux} from './DemoFlux';
import * as React from "react";
import {shallow} from 'enzyme';
import { StateActions } from '../Actions/StateActions';

jest.mock('../Services/DemoService');


describe('DemoFlux component' , () => {
    
    let demoFlux = shallow(<DemoFlux />);
    
    afterAll(() => {
        let component = (demoFlux.instance() as DemoFlux);
        component.componentWillUnmount();
    });

    it('should exist', () => {
        expect(demoFlux).toBeDefined();
    });

    it('should be empty', () => {
        const pages = demoFlux.find(".demo-flux-list li").length;
        expect(pages).toBe(0);
    });

    it('should contain 2 pages', () => {
        StateActions.getPages("Pages").then((_) => {
            const pages = demoFlux.find(".demo-flux-list li").length;
            expect(pages).toBe(2);
        });
    });

});