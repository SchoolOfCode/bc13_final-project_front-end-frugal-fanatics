import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";

// const MultiStepProgressBarFunction = () => (
//   <div className={styles.container}>
//     {/* ... */}
//   </div>
// );


const MultiStepProgressBar = ({ page, onPageNumberClick }) => {
  var stepPercentage = 0;
  if (page === 0) {
    stepPercentage = 0;
  } else if (page === 1) {
    stepPercentage = 50;
  } else if (page === 2) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }
  
  // Have yet to figure out the best method for applying the css to this element. The css that came with the component can be found in ../styles as its own module.

  return (
    <ProgressBar percent={stepPercentage} className="w-4/5">
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("1")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("2")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("3")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;