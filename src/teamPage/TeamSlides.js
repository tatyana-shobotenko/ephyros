import React, { Component } from 'react';
import cx from 'classnames';

class Slides extends Component {
  constructor() {
    super();
    this.state = {
      activeSlide: 0,
    };
  }

  nextSlide() {
    window.gae('team', 'swipe', 'arrows', 5);
    this.setState({
      activeSlide: (this.state.activeSlide + 1) % this.props.slides.length,
    });
  }

  prevSlide() {
    this.setState({
      activeSlide: (this.state.activeSlide - 1 + this.props.slides.length) % this.props.slides.length,
    });
  }

  render() {
    const slides = this.props.slides.map((slide, index) => (
      <div className={cx('photo-screen__slide', { active: index === this.state.activeSlide })} key={index}>
        <div
          className="photo-screen__photo"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        <div className={cx('photo-screen__shadow', slide.shadowModifier)}>
          <div className="photo-screen__title">{slide.title}</div>
        </div>
      </div>
    ));


    return (

      <div className="photo-screen">
        <div className="photo-screen__label">our workdays and holydays</div>
        {slides}
        <button
          className="photo-screen__nav photo-screen__nav_prev icon-left-arrow"
          onClick={this.nextSlide.bind(this)}
        />
        <button
          className="photo-screen__nav photo-screen__nav_next icon-right-arrow"
          onClick={this.prevSlide.bind(this)}
        />
      </div>
    );
  }
}

Slides.propTypes = {
  slides: React.PropTypes.array.isRequired,
};

export default Slides;
