<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Transformation Simulation</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
        button { padding: 10px 20px; margin: 10px; cursor: pointer; }
        .result { margin-top: 20px; font-size: 18px; }
    </style>
</head>
<body>
    <h1>Digital Transformation Decision Simulation</h1>
    <p>Choose a stakeholder and project management methodology for the digital transformation project:</p>

    <h2>Select Stakeholder:</h2>
    <div>
        <button onclick="chooseStakeholder('P1', 'experienced', 'certified')">P1 (Experienced, Certified)</button>
        <button onclick="chooseStakeholder('P2', 'experienced', 'uncertified')">P2 (Experienced, Uncertified)</button>
        <button onclick="chooseStakeholder('P3', 'trained', 'certified')">P3 (Trained, Certified)</button>
        <button onclick="chooseStakeholder('P4', 'untrained', 'uncertified')">P4 (Untrained, Uncertified)</button>
    </div>

    <h2>Select Project Methodology:</h2>
    <div>
        <button onclick="chooseMethodology('Agile')">Agile</button>
        <button onclick="chooseMethodology('Waterfall')">Waterfall</button>
        <button onclick="chooseMethodology('Agile-Agnostic')">Agile-Agnostic</button>
    </div>

    <div class="result" id="result"></div>

    <script>
        let stakeholder = '';
        let experience = '';
        let certification = '';
        let methodology = '';

        // Simulation Factors
        const geopoliticalRisk = Math.random(); // Random external influence
        const politicalStability = Math.random() > 0.5 ? 'stable' : 'unstable'; // Global context
        const cargoCultFactor = Math.random(); // Influence of superficial knowledge
        
        // Decision-making variables
        const methodologySuccessRates = {
            'Agile': 0.85,   // Agile success probability
            'Waterfall': 0.7,  // Waterfall success probability
            'Agile-Agnostic': 0.75  // Flexible approach success probability
        };

        function chooseStakeholder(name, exp, cert) {
            stakeholder = name;
            experience = exp;
            certification = cert;
            document.getElementById('result').innerHTML = `Selected Stakeholder: ${stakeholder} (${experience}, ${certification})`;
        }

        function chooseMethodology(method) {
            methodology = method;
            simulateOutcome();
        }

        function simulateOutcome() {
            if (!stakeholder || !methodology) {
                alert("Please select both a stakeholder and a methodology.");
                return;
            }

            let baseSuccess = methodologySuccessRates[methodology];
            let stakeholderInfluence = calculateStakeholderInfluence();
            let externalFactors = calculateExternalFactors();

            // Final outcome calculation
            let finalSuccessRate = baseSuccess * stakeholderInfluence * externalFactors;
            let success = finalSuccessRate > 0.6 ? 'SUCCESS' : 'FAILURE';

            document.getElementById('result').innerHTML = `
                Stakeholder: ${stakeholder} (${experience}, ${certification})<br>
                Methodology: ${methodology}<br>
                External Geopolitical Context: ${politicalStability}<br>
                Cargo Cult Factor: ${(cargoCultFactor * 100).toFixed(2)}%<br><br>
                <strong>Project Outcome: ${success}</strong><br>
                Success Probability: ${(finalSuccessRate * 100).toFixed(2)}%
            `;
        }

        function calculateStakeholderInfluence() {
            let influence = 1;

            if (experience === 'experienced') {
                influence += 0.2;
            } else {
                influence -= 0.1; // Penalty for lack of experience
            }

            if (certification === 'certified') {
                influence += 0.1; // Small boost for certified
            } else {
                influence -= 0.05; // Penalty for uncertified
            }

            if (cargoCultFactor > 0.5) {
                influence -= 0.2; // Significant penalty for cargo cult-like superficial understanding
            }

            return influence;
        }

        function calculateExternalFactors() {
            let externalInfluence = 1;
            
            if (geopoliticalRisk > 0.5) {
                externalInfluence -= 0.15; // Negative impact due to high geopolitical risk
            }

            if (politicalStability === 'unstable') {
                externalInfluence -= 0.1; // Additional penalty for political instability
            }

            return externalInfluence;
        }
    </script>
</body>
</html>
