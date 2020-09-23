import { createElement, Component, render } from "./toy-react.js";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        {this.chilren}
      </div>
    );
  }
}
render(
  <MyComponent id="a" class="dd">
    <div>1111</div>
  </MyComponent>,
  document.body
);
