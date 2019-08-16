import React, { Component } from "react";
import formImage from "../images/medicine.jpg";
class FormPage extends Component {

    state = {
        email: {
          patientemail: '',
          name:'',
          income: '1',
          insurance: '4'
        }
      }
      sendEmail = event => {
        event.preventDefault();
        const { email } = this.state;
        fetch(`https://glucobasal-server-email.herokuapp.com/send-email?patientemail=${email.patientemail}&name=${email.name}`) //query string url
        .catch(err => console.log('error sending email',err))

          
        this.setState({
            email: {
                patientemail: '',
                name:'',
                income: '1',
                insurance: '4'
              }

        })
          
      }

      render() {
        const { email } = this.state;
     return (
             <div className="content-page-wrapper">
                <div className="left-column"
                style={{
                  backgroundImage: "url("+ formImage + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "25px"
                }}/>               
                <div className="right-column">
                <form className="form" onSubmit={this.sendEmail}>
                <div className="form-group">
                    <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Your name"
                    value={email.name}
                    onChange={e => this.setState({ email: { ...email, name: e.target.value } })}
                    />
                    <label>Your name</label>
                </div>
                <div className="form-group">
                    <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email"
                    value= {email.patientemail}
                    onChange={e => this.setState({ email: { ...email, patientemail: e.target.value } })}
                    />
                    <label>Your email</label>
                </div>
                <div className="form-group">
                <select
                      name="income"
                      value={email.income}
                      onChange={e => this.setState({ email: { ...email, income: e.target.value } })}
                      className = "select-element"
                      >
                      <option value="1">Less than $25000</option>
                      <option value="2">$250000 - $50000</option>
                      <option value="3">More than $50000</option>
                    </select> 
                    <label>Income level</label>
                </div>    
                <div className="form-group">
                    <select
                      name="insurance"
                      value={email.insurance}
                      onChange={e => this.setState({ email: { ...email, insurance: e.target.value } })}
                      className = "select-element"
                      >
                      <option value="1">medicaid</option>
                      <option value="2">medicare</option>
                      <option value="3">other</option>
                      <option value="4">none</option>
                    </select> 
                    <label>commercial insurance</label>
                </div>             
                 <div className="centered-btn-wrapper">
                    <button className="btn">Apply</button>
                </div>
                <div className="spacer10"></div> 
                </form>  
                </div>              
            </div>
    );
}
}
export default FormPage;