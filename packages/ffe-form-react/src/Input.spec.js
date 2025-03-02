import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

const getWrapper = props => shallow(<Input {...props} />);

describe('<Input />', () => {
    it('renders an input element', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('input')).toBe(true);
        expect(wrapper.hasClass('ffe-input-field')).toBe(true);
    });

    it('passes props', () => {
        const wrapper = getWrapper({
            autoComplete: true,
            className: 'app-input',
        });
        expect(wrapper.prop('autoComplete')).toBe(true);
        expect(wrapper.hasClass('app-input')).toBe(true);
        expect(wrapper.hasClass('ffe-input-field')).toBe(true);
    });

    it('sets the correct class for inline-modifer', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-input-field--inline')).toBe(false);
        wrapper.setProps({ inline: true });
        expect(wrapper.hasClass('ffe-input-field--inline')).toBe(true);
    });

    it('sets the correct class for textLike-modifer', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-input-field--text-like')).toBe(false);
        wrapper.setProps({ textLike: true });
        expect(wrapper.hasClass('ffe-input-field--text-like')).toBe(true);
    });
    it('sets the correct class for textRightAlign', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-input-field--text-right-align')).toBe(
            false,
        );
        wrapper.setProps({ textRightAlign: true });
        expect(wrapper.hasClass('ffe-input-field--text-right-align')).toBe(
            true,
        );
    });
});
