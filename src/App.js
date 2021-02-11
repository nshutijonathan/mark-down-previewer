import React from "react";
import logo from "./logo.svg";
import Badge from "react-bootstrap/Badge";
import marked from "marked";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:
        "# Welcome to my React Markdown Previewer!\n ## This is a sub-heading...\n ### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n ",
    };
  }
  updateMarkdown(markdown) {
    this.setState({ markdown });
  }
  resetButton() {
    this.setState({ markdown: "" });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center" id="editor">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Editor
                  </Badge>
                </h4>
              </div>
              <div className="mark-input">
                <textarea
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                >
                  It was a dark and stormy night...
                  {console.log(this.state.markdown)}
                </textarea>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.resetButton()}
                >
                  Reset
                </button>
              </div>
              ;
            </div>

            <div className="col-md-6">
              <div className="col text-center" id="preview">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Previewer
                  </Badge>
                </h4>
              </div>
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
var inputStyle = {
  width: "400px",
  height: "50vh",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "10px",
};
var outputStyle = {
  width: "400px",
  height: "50vh",
  backgroundColor: "#DCDCDC",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "10px",
};
export default App;
