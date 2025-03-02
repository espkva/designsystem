import React from 'react';
import { bool, func, node, string, number } from 'prop-types';
import classNames from 'classnames';
import Collapse from '@sb1/ffe-collapse-react';
import { v4 as uuid } from 'uuid';

class Tooltip extends React.Component {
    constructor({ isOpen }) {
        super();
        this.state = {
            isOpen: !!isOpen,
        };
        this.onToggle = this.onToggle.bind(this);
        this.tooltipId = uuid();
        this.tooltipButtonId = uuid();
    }

    onToggle(evt) {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
        if (this.props.onClick) {
            this.props.onClick(evt);
        }
    }

    render() {
        const {
            'aria-controls': ariaControls,
            'aria-label': ariaLabel,
            children,
            className,
            // eslint-disable-next-line no-unused-vars
            onClick,
            tabIndex,
            ...rest
        } = this.props;

        const { isOpen } = this.state;

        return (
            <span
                {...rest}
                className={classNames('ffe-tooltip', {
                    'ffe-tooltip--open': isOpen,
                })}
            >
                <button
                    aria-expanded={isOpen}
                    aria-controls={children ? this.tooltipId : ariaControls}
                    aria-label={ariaLabel}
                    className="ffe-tooltip__icon"
                    onClick={this.onToggle}
                    type="button"
                    tabIndex={tabIndex}
                    id={this.tooltipButtonId}
                >
                    <span aria-hidden={true}>?</span>
                </button>
                {children && (
                    <Collapse
                        className="ffe-tooltip__text"
                        id={this.tooltipId}
                        isOpen={isOpen}
                    >
                        <div
                            className={classNames('ffe-small-text', className)}
                            role={isOpen ? 'status' : 'none'}
                        >
                            {children}
                        </div>
                    </Collapse>
                )}
            </span>
        );
    }
}

Tooltip.propTypes = {
    /** Provide the id of the controlled element *unless* you're sending in children */
    'aria-controls': string,
    /** Descriptive text for the Tooltip expand icon */
    'aria-label': string,
    /** The children are rendered in the expanded tooltip. */
    children: node,
    /** The className is set on the root node of the expanded tooltip. */
    className: string,
    isOpen: bool,
    /** Optional listener for clicks on the tooltip button. Is passed the event object. */
    onClick: func,
    /** Sets the tabIndex of the tooltip button. */
    tabIndex: number,
};

Tooltip.defaultProps = {
    'aria-label': 'Vis hjelpetekst',
};

export default Tooltip;
