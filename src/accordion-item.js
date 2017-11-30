import React, { Component } from 'react';
import {
    arrayOf,
    bool,
    func,
    node,
    number,
    oneOf,
    string
} from 'prop-types';
import { Collapse } from 'react-collapse';
import Chevron from 'ffe-icons-react/chevron-ikon';
import classNames from 'classnames';

const createClasses = (baseClass, isOpen, type) => classNames(baseClass, {
    [`${baseClass}--open`]: isOpen,
    [`${baseClass}--blue`]: type === 'blue',
});

class AccordionItem extends Component {
    constructor(props) {
        super();
        this.state = {
            isOpen: props.isOpen || false,
        };

        this.onClick = this.onClick.bind(this);
        this.onClickEnterAndSpace = this.onClickEnterAndSpace.bind(this);
    }

    onClick(e) {
        if (this.props.ignoredNodeNames.some(name => name === e.target.nodeName)) {
            return;
        }
        this.toggle();
    }

    onClickEnterAndSpace(event) {
        const enterKey = 13;
        const spaceBar = 32;
        if ([enterKey, spaceBar].includes(event.keyCode)) {
            this.onClick(event);
        }
    }

    toggle() {
        const { isOpen } = this.state;

        if (isOpen) {
            this.props.onClose();
        } else {
            this.props.onOpen();
        }

        this.setState({ isOpen: !isOpen });
    }

    renderExpandedContent() {
        const { isOpen } = this.state;
        const {
            expandedContent,
            index,
            type,
            uuid,
        } = this.props;

        return (
            <div
                className={ createClasses('ffe-accordion-item__content', isOpen, type) }
                role="tabpanel"
                id={ `panel-${uuid}-${index}` }
                aria-hidden={ !isOpen }
                aria-labelledby={ `tab-${uuid}-${index}` }
            >
                { expandedContent }
            </div>
        );
    }

    render() {
        const { isOpen } = this.state;
        const {
            ariaLabel,
            children,
            hasNestedCollapse,
            index,
            type,
            uuid,
        } = this.props;

        return (
            <li className={ createClasses('ffe-accordion-item', isOpen, type) }>
                <div
                    tabIndex={ 0 }
                    aria-controls={ `panel-${uuid}-${index}` }
                    aria-expanded={ isOpen }
                    aria-label={ ariaLabel }
                    className={ createClasses('ffe-accordion-item__toggler', isOpen, type) }
                    id={ `tab-${uuid}-${index}` }
                    onClick={ this.onClick }
                    onKeyUp={ this.onClickEnterAndSpace }
                    role="tab"
                >
                    <span className="ffe-accordion-item__toggler-content">
                        <span className="ffe-accordion-item__title">
                            { children }
                        </span>
                        <Chevron className={ createClasses('ffe-accordion-item__icon', isOpen, type) } />
                    </span>
                </div>
                <Collapse
                    hasNestedCollapse={ hasNestedCollapse }
                    isOpened={ isOpen }
                >
                    {this.renderExpandedContent()}
                </Collapse>
            </li>
        );
    }
}

AccordionItem.propTypes = {
    ariaLabel: string,
    children: node,
    expandedContent: node,
    hasNestedCollapse: bool,
    ignoredNodeNames: arrayOf(string),
    index: number,
    isOpen: bool,
    onClose: func,
    onOpen: func,
    type: oneOf(['blue']),
    uuid: string,
};

AccordionItem.defaultProps = {
    hasNestedCollapse: false,
    ignoredNodeNames: [],
    onClose: f => f,
    onOpen: f => f,
};

export default AccordionItem;
