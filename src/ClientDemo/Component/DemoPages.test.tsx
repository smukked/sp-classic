/// <reference types="jest" />

import {DemoPages, IDemoPagesState} from './DemoPages';
import * as React from "react";
import {shallow} from 'enzyme';

jest.mock('../Services/DemoService');

describe('DemoPages component' , () => {
    
    let demoPages = shallow(<DemoPages listName="Pages" />);

    afterAll(() => {
        demoPages.find("#buttonServer").simulate('click');
        demoPages.find("#buttonLocal").simulate('click');
    });

    it('should exist', () => {
        expect(demoPages).toBeDefined();
    });

    it('should contain 2 pages', () => {
        const pages = demoPages.find(".demo-pages-list li").length;
        expect(pages).toBe(2);
    });

    it('should reload from server', () => {
        let component = (demoPages.instance() as DemoPages);
        expect.assertions(1);
        component.reload(true).then(_ => {
            expect(component.state.from).toBe("server");
        });
    });

    it('should reload from local storage', () => {
        let component = (demoPages.instance() as DemoPages);
        expect.assertions(1);
        component.reload(false).then(_ => {
            expect(component.state.from).toBe("local storage");
        });
    });

});