function resposta1() {
    let questions = document.querySelector('input[name="optionquestion1"]:checked').value;
    if (questions == "Shonda Rimes") {
      alert("Você acertou!");
    } else {
      alert("Resposta errada, a resposta correta é Shonda Rimes!");
    }
  }
  resposta1();
  
  function resposta2() {
    let questions2 = document.querySelector('input[name="optionquestion2"]:checked').value;
    if (questions2 == "Millie Bobby Brown, Finn Wolfhard, Caleb McLaughlin, Gaten") {
      alert("Você acertou!");
    } else {
      alert("Resposta errada, a resposta correta é Millie Bobby Brown, Finn Wolfhard, Caleb McLaughlin, Gaten!");
    }
  }
  resposta2();
  
  function resposta3() {
    let questions3 = document.querySelector('input[name="optionquestion3"]:checked').value;
    if (questions3 == "2020") {
      alert("Você acertou!");
    } else {
      alert("Resposta errada, a resposta correta é 2020");
    }
  }
  resposta3();
  
  function result() {
    var score = 0;
    if (document.getElementById("correct1").checked) {
      score++;
    }
    if (document.getElementById("correct2").checked) {
      score++;
    }
    if (document.getElementById("correct3").checked) {
      score++;
    }
    alert("sua pontuação é: " + score);
  }
  result();
  