import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { EMAILJS_USER_ID, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../../services/emailService';
import notificationService from '../../services/notificationService';
import { validateEmail } from '../../services/helpers';

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool
}

const defaultProps = {
    ...SectionProps.defaults,
    split: false
}

const Cta = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    split,
    ...props
}) => {
    const { register, watch } = useForm();
    emailjs.init(EMAILJS_USER_ID);
    
    const outerClasses = classNames(
        'cta section center-content-mobile reveal-from-bottom',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'cta-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider',
        split && 'cta-split'
    );

    const onSubmit = (e) => {
        e.preventDefault();

        var loadingId = notificationService.showInfo("Sending...");

        let hasError = false;

        if (name === "") {
            notificationService.showError("Name is a required field.");
            hasError = true;
        }
        if (email === "" || !validateEmail(email)) {
            notificationService.showError("Email is a required field and must be valid.");
            hasError = true;
        }
        if (message === "") {
            notificationService.showError("Message is a required field.");
            hasError = true;
        }
        
        if (!hasError) {
            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target, EMAILJS_USER_ID)
                .then((result) => {
                    notificationService.showSucess("Thank you for your message.");
                    document.getElementById('contactForm').reset();
                    notificationService.dismiss(loadingId);
                }, (error) => {
                    notificationService.showError("Sorry, there was an error while sending your message. Please try again.");
                    notificationService.dismiss(loadingId);
                });
        } else {
            notificationService.dismiss(loadingId);
        }
    }

    const name = watch('name') || "";
    const email = watch('email') || "";
    const message = watch('message') || "";

    const splitClasses = classNames(
        'split-wrap',
        'alignTop'
    );

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div
                    className={innerClasses}
                >
                    <div className={splitClasses}>
                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <div className="contactInfo">
                                    <p>If you have any suggestions or any doubts, please feel free to message us.</p>
                                </div>
                                <form id="contactForm" onSubmit={onSubmit}>
                                    <Input className="mb-24" name="name" placeholder="Name" {...register("name", { required: true })}></Input>
                                    <Input className="mb-24" name="email" type="email" placeholder="Email" {...register("email")}></Input>
                                    <Input className="mb-24" name="message" type="textarea" placeholder="Your message" rows={5} {...register("message")}></Input>
                                    <ButtonGroup>
                                        <Button type="submit" color="secondary" wideMobile>Send</Button>
                                    </ButtonGroup>
                                </form>
                            </div>
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <p>The full Guide is available for consult for everyone in the link below</p>
                                <div className="reveal-from-bottom" data-reveal-delay="600">
                                    <ButtonGroup>
                                        <Button tag="a" color="secondary" target="_blank" wideMobile href="https://mega.nz/file/ZvAzjKaY#eH8nz1ibqZppXSqZiVD99zA2rT-3CkzTcP9ZlDexMW4">
                                            See Guide
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;