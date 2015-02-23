var React = require('react');

var Contact = React.createClass({
  render() {
    return (
      <div style={{marginTop:-96, paddingTop:96, minHeight:100, backgroundColor:'#2d5572'}}>
        <div style={{padding:30, backgroundColor:'white', fontSize:'24px'}}>Contacts Page!
          <div className="contact-form">
            <div className="form-row">
              <input type="text" className="input-text input-text_full" placeholder="Name"/>
            </div>
            <div className="form-row">
              <input type="tel" className="input-text input-text_full" placeholder="Phone Number"/>
            </div>
            <div className="form-row">
              <div className="custom-select">
                <select>

                </select>
              </div>
            </div>
            <div className="form-row">
              <textarea className="textarea input-text_full" placeholder="Message"/>
            </div>
            <div className="form-row">
              <button type="submit" className="button button_rainbow">Get a quote</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Contact;