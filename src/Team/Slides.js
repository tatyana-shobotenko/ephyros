var React = require('react');

var Slides = React.createClass({
  getInitialState() {
    return {
      activeSlide: 0
    }
  },
  nextSlide() {
    this.setState({
      activeSlide: (this.state.activeSlide + 1) % this.props.slides.length
    });
  },
  prevSlide() {
    this.setState({
      activeSlide: (this.state.activeSlide - 1 + this.props.slides.length) % this.props.slides.length
    });
  },
  render() {
    var slides = this.props.slides.map((slide, index) => (
      <div className={'photo-screen__slide'+(index==this.state.activeSlide?' active':'')}>
        <div className="photo-screen__photo" style={{'backgroundImage': "url("+ slide.image +")"}}/>
        <div className={'photo-screen__shadow ' + slide.shadowModifier }>
          <div className="photo-screen__title">{slide.title}</div>
        </div>
      </div>
    ));


    return (

      <div className="photo-screen">
        <div className="photo-screen__label">our workdays and holydays</div>
        {slides}
        <span className="photo-screen__nav photo-screen__nav_prev icon-left-arrow" onClick={this.nextSlide}/>
        <span className="photo-screen__nav photo-screen__nav_next icon-right-arrow" onClick={this.prevSlide}/>
      </div>
    );
  }
});

module.exports = Slides;
