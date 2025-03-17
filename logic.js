

document.addEventListener("DOMContentLoaded", () => {
  const proScoreForm = document.getElementById("pro-score-form");
  const proResultContainer = document.getElementById("pro-result-container");
  const proTableWrapper = document.getElementById("pro-table-wrapper");
  const proMarks = document.getElementById("pro-marks");
  const marksScoreForm = document.getElementById("marks-score-form");
  const marksResultContainer = document.getElementById(
    "marks-result-container"
  );
  const prosTableBody = document.getElementById("pros-table-body");
  const marksDisplay = document.getElementById("marks");

  // Event listener for Pro Score Calculator form submission
  proScoreForm.addEventListener("submit", (event) => {
    event.preventDefault();
    proTableWrapper.innerHTML = "";
    const desiredMarks = parseFloat(
      document.getElementById("desired-marks").value
    );
    const numberOfPros = parseInt(
      document.getElementById("number-of-pros").value
    );
    const calcu = document.getElementById("pro-cal");

    // Perform calculations and display results for Pro Score Calculator
    calculateProScores(desiredMarks, numberOfPros);
    proResultContainer.classList.remove("hidden");
  });

 
  // Function to calculate and display results for Pro Score Calculator
  function calculateProScores(desiredMarks, numberOfPros) {
    const calcu = document.getElementById("pro-cal");
    prosTableBody.innerHTML = "";
    proMarks.innerHTML = " ";
    getdata();

    function getdata() {
      // const result = document.getElementById("result").value;
      // const noofpros = document.getElementById("noofpros").value;
      let pros2 = [];
      let sum = [];
      sum = 0;
      earnedPoints = 0;
      function getpros(min, max, decimalPlaces) {
        let pro1 = Math.random() * (max - min) + min;
        let power = Math.pow(10, decimalPlaces);
        return Math.floor(pro1 * power) / power;
      }
      if (desiredMarks > 98) {
        min = 4.9;
        max = 5.1;
        decimalPlaces = 1;
      } else if (desiredMarks > 94) {
        min = 4.7;
        max = 5.1;
        decimalPlaces = 1;
      } else if (desiredMarks > 90) {
        min = 4.5;
        max = 4.9;
        decimalPlaces = 1;
      } else if (desiredMarks > 85) {
        min = 4.2;
        max = 4.7;
        decimalPlaces = 1;
      } else if (desiredMarks > 80) {
        min = 4.0;
        max = 4.4;
        decimalPlaces = 1;
      } else if (desiredMarks > 78) {
        min = 3.9;
        max = 4.1;
        decimalPlaces = 1;
      } else if (desiredMarks > 75) {
        min = 3.7;
        max = 4.1;
        decimalPlaces = 1;
      } else if (desiredMarks > 70) {
        min = 3.5;
        max = 3.9;
        decimalPlaces = 1;
      } else if (desiredMarks > 66) {
        min = 3.3;
        max = 3.6;
        decimalPlaces = 1;
      } else if (desiredMarks > 60) {
        min = 3;
        max = 3.5;
        decimalPlaces = 1;
      } else if (desiredMarks > 56) {
        min = 2.8;
        max = 3.1;
        decimalPlaces = 1;
      } else if (desiredMarks > 50) {
        min = 2.5;
        max = 2.9;
        decimalPlaces = 1;
      } else if (desiredMarks > 45) {
        min = 2.3;
        max = 2.6;
        decimalPlaces = 1;
      } else if (desiredMarks >= 40) {
        min = 2;
        max = 2.4;
        decimalPlaces = 1;
      }

      for (i = 0; i < numberOfPros; i++) {
        pros2.push(getpros(min, max, decimalPlaces));
      }

      for (i = 0; i < numberOfPros; i++) {
        sum += pros2[i] * 20;
      }

      tempsum = sum;
      sum = sum * (20 / (numberOfPros * 20));

      // return sum;
      // console.log(parseInt(sum));
      let resulted_5 = [
        95, 97, 91, 99, 81, 93, 83, 85, 89, 87, 77, 79, 75, 71, 73, 65, 61, 63,
        67, 69, 51, 53, 55, 57, 59, 41, 43, 45, 47, 49,
      ];
      for (m = 0; m < resulted_5.length; m++) {
        if (desiredMarks === resulted_5[m] && numberOfPros === 5) {
          sum = parseInt(sum);
        }
      }
      let resulted_3 = [
        71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 61, 63, 65,
        67, 69, 51, 53, 55, 57, 59, 41, 43, 45, 47, 49,
      ];
      for (m = 0; m < resulted_3.length; m++) {
        if (desiredMarks === resulted_3[m] && numberOfPros === 3) {
          sum = parseInt(sum);
        }
      }

      if (5 >= numberOfPros) {
        if (sum == desiredMarks) {
          j = 0;
          calcu.innerHTML = `
        <h2>Calculation Results</h2>
        `;

          proTableWrapper.innerHTML += `
        <div class="table-header">
          <div>Pro</div>
          <div>Weight</div>
          <div>Points</div>
          <div>Score</div>
        </div>
        `;

          while (j < numberOfPros) {
            earnedPoints += pros2[j];

            const row = `
            <div class="table-row">
              <div>Pro-${j + 1}</div>
              <div>20</div>
              <div>${pros2[j]}</div>
              <div>${pros2[j] * 20}</div>
            </div>
          `;
            proTableWrapper.insertAdjacentHTML("beforeend", row);

            // console.log("Pro", j + 1, "--", pros2[j], " sum : ", pros2[j] * 20);
            j++;
          }
          earnedPoints = earnedPoints / numberOfPros;
          earnedPoints = Math.floor(earnedPoints * 100) / 100;
          proMarks.innerHTML += `
        <div class="table">
          <div class="total-score">
            <h3>Total Score :<span> ${tempsum}</span></h3>
          </div>
        </div>
        <div class="table">
          <div class="earned-points">
            <h4>Earned Points :<span> ${earnedPoints}</span></h4>
            <h4>Marks in 100 :<span> ${desiredMarks}</span></h4>
          </div>
        </div>`;
          // console.log("Total Sum :", tempsum);
          // console.log("Earned Points : ", earnedPoints);
          // console.log("desiredMarks", desiredMarks);
          return 0;
        } else {
          // getdata();
          setTimeout(getdata, 1);
          console.log();
        }
      } else {
        console.log("System Doesnot contain More then 5 pros");
      }
    }
  }
})