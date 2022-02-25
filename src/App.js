import {
  withFocusable,
  initNavigation,
} from "@noriginmedia/react-spatial-navigation";
import { useEffect, useState } from "react";

initNavigation({
  debug: true,
});

const styles = {
  focused: {
    background: "teal",
  },
};

const Cell = ({ value, focused }) => {
  return (
    <div className="item" style={focused ? styles.focused : {}}>
      {value}
    </div>
  );
};

const Container = ({ children, setFocus }) => {
  useEffect(() => {
    setFocus();
  }, [setFocus]);

  setTimeout(() => {
    setFocus();
  }, 2000);

  return <div className="container">{children}</div>;
};

const FocusableCell = withFocusable()(Cell);
const FocusableContainer = withFocusable()(Container);

function App() {
  const [loaded, setLoaded] = useState(false);
  const [added, setAdded] = useState(false);

  setTimeout(() => {
    setLoaded(true);
  }, 1000);

  const handleClick = () => {
    setAdded(true);
  };

  return (
    <div className="App">
      <>
        <button onClick={handleClick}>Add cells</button>
        <FocusableContainer>
          {loaded && (
            <>
              <div className="row">
                <FocusableCell focusKey="1" value="1" />
                <FocusableCell value="2" />
                <FocusableCell value="3" />
              </div>
              <div className="row">
                <FocusableCell value="4" />
                <FocusableCell value="5" />
                <FocusableCell value="6" />
              </div>
              <div className="row">
                <FocusableCell value="7" />
                <FocusableCell value="8" />
                <FocusableCell value="9" />
              </div>
              {added && (
                <>
                  <div className="row">
                    <FocusableCell value="10" />
                    <FocusableCell value="11" />
                    <FocusableCell value="12" />
                  </div>
                </>
              )}
            </>
          )}
        </FocusableContainer>
      </>
    </div>
  );
}

export default App;
