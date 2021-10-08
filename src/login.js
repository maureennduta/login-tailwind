import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
//import CheckButton from "react-validation/build/button";
import AuthService from "./services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

// const history = useHistory();
//   const handleRegister = useCallback(
//     () => history.push("/register"),
//     [history]
//   );

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
    console.log("working");
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    console.log("hhhhhhhhhhhhhhhh");
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.username && this.password) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/dashboard");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <div className="h-screen flex bg-gradient-to-r from-blue-400 via-red-500 to-pink-500">
        <Form
          onSubmit={this.handleLogin}
          ref={(c) => {
            this.form = c;
          }}
        >
          <div className="w-full my-16 mx-96 max-w-md bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
              Welcome,Login below:
            </h1>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
                onClick={this.handleLogin}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            {/* <CheckButton
              style={{ display: "none" , background:"red" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
              Here
            /> */}
            <div className="text-center pt-12 pb-12">
              <p>
                Don't have an account?{" "}
                <a href="/register" className="underline font-semibold">
                  Register here.
                </a>
              </p>
            </div>
            <div className="text-center pt-12 pb-12">
              <p>
                Images can be accessed{" "}
                <a href="/images" className="underline font-semibold">
                  here.
                </a>
              </p>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}
