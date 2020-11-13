const React = require("react");
const { ThemeProvider } = require("./src/context/theme-context");
require("./src/styles/tailwind.generated.css");

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
