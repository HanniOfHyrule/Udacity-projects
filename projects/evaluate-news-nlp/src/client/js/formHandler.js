function handleSubmit(event) {
  event.preventDefault();
  // check what text was put into the form field
  let formText = document.getElementById("url").value;

  Client.checkForURL(formText);

  //TODO: if - validierung URL

  console.log(formText);

  fetch("/sentiment", {
    method: "POST",
    body: JSON.stringify({ text: formText }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async function (res) {
    const sentiment = await res.json();
    console.log(sentiment);

    document.getElementById("results").innerHTML = JSON.stringify(
      sentiment.sentence_list[14].text
    );
    document.getElementById("sentiment").innerHTML = JSON.stringify(
      sentiment.subjectivity
    );
    document.getElementById("polarity").innerHTML = JSON.stringify(
      sentiment.score_tag
    );
    document.getElementById("confidence").innerHTML = JSON.stringify(
      sentiment.confidence
    );
    document.getElementById("irony").innerHTML = JSON.stringify(
      sentiment.irony
    );
  });
}

export { handleSubmit };
