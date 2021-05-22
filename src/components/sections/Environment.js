import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import 'react-tabs/style/react-tabs.css';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const Environment = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
}) => {
    const outerClasses = classNames(
        'environment',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'environment-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    // const splitClasses = classNames(
    //     'split-wrap',
    //     invertMobile && 'invert-mobile',
    //     invertDesktop && 'invert-desktop',
    //     alignTop && 'align-top'
    // );

    const sectionHeader = {
        title: "Environment"
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <SectionHeader data={sectionHeader} className="center-content" />
                <div className={innerClasses}>
                    <p>Performance refers to the amount of resources used under defined conditions. The performance characteristic, according to ISO 25010, is divided into 3 subcharacteristics - Temporal Behavior - is the level to which the response and processing time and transfer rates of a product or system, when performing its functions, meet the requirements, Resource Utilization - is the degree to which the quantities and types of resources used by a product or system, when performing their functions, meet the requirements, and Capacity - it is the degree to which the maximum limits of a product or system parameter meet the requirements. The guide aims to assist in performance testing of IoT applications by providing at the end of the process a customizable test plan.</p>
                    <div className="image-block">
                        <Image alt="Archteture flow" src="https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg"></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

Environment.propsTypes = propTypes;
Environment.defaultProps = defaultProps;

export default Environment;