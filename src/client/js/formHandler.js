function handleSubmit(event) {
  event.preventDefault();
  debugger;
  // check what text was put into the form field
  let formText = document.getElementById("url").value;
  if (Client.validateUrl(formText)) {
    //Fetch request
    fetch("http://localhost:8080/analyzeData", {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formText: formText }),
    })
      .then((res) => res.json())

      .then(function (res) {
        console.log(res);
        document.getElementById("conf").innerHTML = res.confidence + " %";
        document.getElementById("polarity").innerHTML = getPolarityToDisplay(
          res.score_tag
        );

        document.getElementById("agree").innerHTML = getAgreementToDisplay(
          res.agreement
        );

        document.getElementById("obj").innerHTML = getObjToDisplay(
          res.subjectivity
        );

        document.getElementById("ironic").innerHTML = getIronyToDisplay(
          res.irony
        );
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("::: Form Submitted :::");
  } else {
    document.getElementById("conf").innerHTML = "-";
    document.getElementById("polarity").innerHTML = "-";
    document.getElementById("agree").innerHTML = "-";
    document.getElementById("obj").innerHTML = "-";
    document.getElementById("ironic").innerHTML = "-";
    alert("Please enter a valid URL");
  }
}

const getPolarityToDisplay = (polarity) => {
  let displayText = "-";
  switch (polarity) {
    case "P+":
      displayText = "Too positive (++)";
      break;
    case "P":
      displayText = "Positive (+)";
      break;
    case "NEW":
      displayText = "Neutral";
      break;
    case "N":
      displayText = "Negative (-)";
      break;
    case "N+":
      displayText = "Too Negative (--)";
      break;
    case "NONE":
      displayText = "None";
  }
  return displayText;
};

const getAgreementToDisplay = (agreement) => {
  let displayText = "-";
  switch (agreement) {
    case "AGREEMENT":
      displayText = "Consistent";
      break;
    case "DISAGREEMENT":
      displayText = "Not Consistent";
      break;
  }
  return displayText;
};

const getObjToDisplay = (obj) => {
  let displayText = "-";
  switch (obj) {
    case "OBJECTIVE":
      displayText = "Objective";
      break;
    case "SUBJECTIVE":
      displayText = "Subjective";
      break;
  }
  return displayText;
};

const getIronyToDisplay = (irony) => {
  let displayText = "-";
  switch (irony) {
    case "IRONIC":
      displayText = "Irony detected";
      break;
    case "NONIRONIC":
      displayText = "No Irony detected";
      break;
  }
  return displayText;
};
export { handleSubmit };
