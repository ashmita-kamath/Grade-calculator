function calculate() {
    let ia1 = Number(document.getElementById("ia1").value);
    let ia2 = Number(document.getElementById("ia2").value);
    let endterm = Number(document.getElementById("endsem").value);
    let project = Number(document.getElementById("project").value);
    let viva_lab_mock = Number(document.getElementById("viva").value);
    let attendance = Number(document.getElementById("attendance").value);
    let subject = document.getElementById("subject").value;
    
    let contest1 = Number(document.getElementById('contest1').value);
    let contest2 = Number(document.getElementById('contest2').value);
    let contest3 = Number(document.getElementById('contest3').value);

    let averageIA = (ia1 + ia2) / 2;
    let contestAvg = (contest1 + contest2 + contest3) / 3;

    if (subject == "dsa_lab") {
        let finalScore = (averageIA * 0.2) + (endterm * 0.5) + (0.07 * project) + (0.05 * viva_lab_mock) + (0.15 * contestAvg);
        document.getElementById("totalDisplay").innerText = finalScore.toFixed(2);
    }
    else if (subject == "web_app") {
        let finalScore = (averageIA * 0.2) + (endterm * 0.30) + (0.3 * project) + (0.05 * viva_lab_mock) + (0.05 * attendance) + (0.10 * contestAvg);
        document.getElementById("totalDisplay").innerText = finalScore.toFixed(2);
    }
    else if (subject == 'maths') {
        let finalScore = (averageIA * 0.20) + (0.05 * attendance) + (0.03 * viva_lab_mock) + (0.07 * project) + (endterm * 0.5) + (0.15 * contestAvg);
        document.getElementById("totalDisplay").innerText = finalScore.toFixed(2);
    }
    else if (subject == 'chemistry') {
        let finalScore = (0.2 * averageIA) + (0.20 * viva_lab_mock) + (0.50 * endterm) + (0.10 * contestAvg);
        document.getElementById("totalDisplay").innerText = finalScore.toFixed(2);
    }
    else if (subject == 'english') {
        let finalScore = (0.30 * project) + (0.5 * endterm) + (0.20 * averageIA);
        document.getElementById("totalDisplay").innerText = finalScore.toFixed(2);
    }
    else {
        console.log("Invalid Subject");
    }
}
