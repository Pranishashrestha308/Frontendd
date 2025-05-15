document.getElementById("BMIform").addEventListener("submit",
    function(e)
    {
        e.preventDefault();

        const height = document.getElementById("height").value;
         const weight = document.getElementById("weight").value;
          const result = document.getElementById("result");

          if (!height || !weight || height<=0 || weight<=0){
            result.textContent = "Please enter valid height and weight!";
            return;
          }

          const heightInMeter = height / 100;
          const BMI = (weight / (heightInMeter * heightInMeter)).toFixed(2);

          let category = "";
          if (BMI<18.5){
            category = "Underweight";
          } else if(BMI < 24.9){
            category = "Normal weight";
          } else if(BMI<29.9) {
            category="Overweight";
          } else {
            category="Obesity";
          }
          result.textContent = 'Your BMI is ${BMI} (${category})';
          });