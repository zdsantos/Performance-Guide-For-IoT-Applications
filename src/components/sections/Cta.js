import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import { useForm } from 'react-hook-form';

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
  const { register, handleSubmit, watch } = useForm();
  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [message, setMessage] = React.useState("");

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

  const onSubmit = data => {
    console.log(data);
  }

  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input className="mb-24" name="name" placeholder="Name" {...register("name")}></Input>
            <Input className="mb-24" name="email" type="email" placeholder="Email" {...register("email")}></Input>
            <Input className="mb-24" name="message" type="textarea" placeholder="Your message" rows="5" {...register("message")}></Input>
            <div><span>{messageCharsLeft}</span></div>
            <ButtonGroup>
              <Button type="submit" color="secondary" wideMobile>Send</Button>
            </ButtonGroup>
          </form>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;