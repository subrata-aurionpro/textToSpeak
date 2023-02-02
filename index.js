function myFunc() {
  const speech = document.getElementById("speech");
  let utter = new SpeechSynthesisUtterance();
  utter.lang = "en-IN";
  utter.text = speech.value;
  utter.volume = 0.5;
  console.log(speech.value);
  // event after text has been spoken
  utter.onend = function () {
    alert("Speech has finished");
  };

  // speak
  window.speechSynthesis.speak(utter);
}
