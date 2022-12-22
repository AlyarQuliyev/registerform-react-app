import { Component } from "react";

export default class RegisterForm extends Component {
  state = {
    formData: {
      fullName: "Elyar",
      idNumber: "AZE12345",
      isMale: false,
      age: 32,
      email: "quliyev20@gmail.com",
      mobile: "+994554749899",
      simptoms: "yoxdur",
      isChecked: false
    },
    isRegistered: false
  };
  formSubmit = (e) => {
    e.preventDefault();
    this.setState({ isRegistered: true });
    console.log(this.state.formData);
  };
  render() {
    return (
      <div className="reg-form">
        {this.state.isRegistered ? (
          <div className="alert">Registered</div>
        ) : null}
        <form onSubmit={this.formSubmit}>
          <label>
            Xəstənin A.S.A
            <input
              className="info"
              type="text"
              name="fullName"
              value={this.state.formData.fullName}
              onChange={(e) =>
                this.setState({
                  formData: { ...this.state.formData, fullName: e.target.value }
                })
              }
            />
          </label>
          <label>
            Vəsiqə seriyası və nömrəsi
            <input
              type="text"
              name="idNumber"
              value={this.state.formData.idNumber}
              onChange={(e) =>
                this.setState({
                  formData: { ...this.state.formData, idNumber: e.target.value }
                })
              }
            />
          </label>
          <label>
            Cinsi
            <select
              name="isMale"
              value={this.state.formData.isMale}
              onChange={(e) =>
                this.setState({
                  formData: { ...this.state.formData, isMale: e.target.value }
                })
              }
            >
              <option value="false">Kişi</option>
              <option value="true">Qadın</option>
            </select>
          </label>
          <label>
            Yaşı
            <input
              type="number"
              name="age"
              value={this.state.formData.age}
              onChange={(e) =>
                this.setState({
                  formData: { ...this.state.formData, age: e.target.value }
                })
              }
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={this.state.formData.email}
              onChange={(e) =>
                this.setState({
                  formData: { ...this.state.formData, email: e.target.value }
                })
              }
            />
          </label>
          <label>
            Telefon
            <input
              type="text"
              name="mobile"
              value={this.state.formData.mobile}
              onChange={(e) =>
                this.setState({
                  formData: { ...this.state.formData, mobile: e.target.value }
                })
              }
            />
          </label>
          <label>
            Simptomların təsviri
            <textarea
              name="simptoms"
              rows="5"
              cols="30"
              value={this.state.formData.simptoms}
              onChange={(e) =>
                this.setState({
                  formData: { ...this.state.formData, simptoms: e.target.value }
                })
              }
            ></textarea>
          </label>
          <label className="check">
            Təkrar qəbul
            <input
              type="checkbox"
              name="check"
              checked={this.state.formData.isChecked ? true : false}
              onChange={(e) =>
                this.setState({
                  formData: {
                    ...this.state.formData,
                    isChecked: e.target.checked
                  }
                })
              }
            />
          </label>
          <button type="submit">Göndər</button>
        </form>
      </div>
    );
  }
}
