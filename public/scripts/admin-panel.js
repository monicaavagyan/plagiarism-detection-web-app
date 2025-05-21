// Get buttons
const lightModeBtn = document.getElementById("lightMode");
const nav = document.getElementById("nav");
const darkModeBtn = document.getElementById("darkMode");
const profilePic = document.getElementById("profilePic");
const dropdown = document.getElementById("dropdown");
const arrow = document.getElementById("arrow");
const menuItems = document.querySelectorAll(".left-menu-element");
const contentDivs = document.querySelectorAll(".content-div");
const content = document.getElementById("content");


lightModeBtn.addEventListener("click", () => {
    lightModeBtn.classList.add("active");
    darkModeBtn.classList.remove("active");
    arrow.style.color = "#222222";
    content.style.backgroundColor = "#ffffff";
    nav.style.backgroundColor = "#ffffff";
    document.body.style.backgroundColor = "#ffffff";
    document.getElementById("home").style.color = "";

    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.backgroundColor = "";
        card.style.color = "";
    });

    document.querySelectorAll("h1, h2, h3, h4, p, .footer-link, .features-section p, .tech p, .footer p")
        .forEach(el => {
            el.style.color = "";
        });

    let highlights = document.querySelectorAll(".highlight");
    highlights.forEach(el => {
        el.style.background = "";
        el.style.webkitBackgroundClip = "";
        el.style.webkitTextFillColor = "";
    });

    let highlightAlts = document.querySelectorAll(".highlight-alt");
    highlightAlts.forEach(el => {
        el.style.background = "";
        el.style.webkitBackgroundClip = "";
        el.style.webkitTextFillColor = "";
    });

    document.querySelector("footer").style.backgroundColor = "";
    document.querySelector("footer").style.borderTop = "";

    document.querySelectorAll("footer .social-icons a i").forEach(el => {
        el.style.color = "";
    });

    document.querySelectorAll("#left-menu .left-menu-element").forEach(el => {
        el.style.color = "";
    });
    document.querySelectorAll("#left-menu .left-menu-element svg").forEach(el => {
        el.style.fill = "";
    });
    document.querySelectorAll("#lightMode svg").forEach(el => {
        el.style.color = "";
    });
    localStorage.setItem("theme", "light");
});

darkModeBtn.addEventListener("click", () => {
    darkModeBtn.classList.add("active");
    lightModeBtn.classList.remove("active");
    arrow.style.color = "#4a6cf7"
    // bell.style.color = "#4a6cf7"
    content.style.backgroundColor = "#1a202c"
    document.body.style.backgroundColor = "#222222";
    nav.style.backgroundColor = "#222222";
    document.getElementById("home").style.color = "#222222";
    document.querySelectorAll('.input-label ').forEach(el => {
        el.style.color = 'white';

    });
    document.querySelectorAll('.header h1 ').forEach(el => {
        el.style.background = 'linear-gradient(90deg,rgb(18, 94, 235) 30%,rgb(15, 139, 241) 70%, #3182ce 100%)';
        el.style.webkitBackgroundClip = "text";
        el.style.webkitTextFillColor = "transparent";

    });
    document.querySelectorAll('.profile-container .dropdown p, .profile-container .dropdown a, h3 .result-label ').forEach(el => {
        el.style.color = "rgba(0, 0, 0, 0.2) !important";
    });
    document.querySelectorAll(' .report-content, .report-content google-report ').forEach(el => {
        el.style.color = "rgba(0, 0, 0, 0.2) !important";
    });

    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.backgroundColor = "#2d3748";
        card.style.color = "#e2e8f0";
    });

    let highlights = document.querySelectorAll(".highlight");
    highlights.forEach(el => {
        el.style.background = "linear-gradient(90deg,rgb(25, 117, 247) 84%,rgb(29, 57, 215) 91%, #4A5BBB 95%)";
        el.style.webkitBackgroundClip = "text";
        el.style.webkitTextFillColor = "transparent";
    });
    let headings = document.querySelectorAll("h1");
    headings.forEach(el => {
        el.style.color = "#f7fafc";
    });

    let highlightAlts = document.querySelectorAll(".highlight-alt");
    highlightAlts.forEach(el => {
        el.style.background = "linear-gradient(90deg, #FFFFFF 91%,rgb(247, 247, 247) 90%)";
        el.style.webkitBackgroundClip = "text";
        el.style.webkitTextFillColor = "transparent";
    });

    document.querySelectorAll("h1, .features-section h2, .features-section .title, .features-section p")
        .forEach(el => el.style.color = "#ffffff");

    document.querySelectorAll(".icon-container .material-icons").forEach(el => {
        el.style.color = "#000000";
    });

    document.querySelectorAll(".icon-container h3, .icon-container p, .checker-container p").forEach(el => {
        el.style.color = "white";
    });
    document.querySelectorAll("h1,․footer h2, .arrow, .footer h4, .footer-link, .features-section p, .tech p,.tech h3, .footer p, .footer h3")
        .forEach(el => el.style.color = "#ffffff");

    document.querySelector("footer").style.backgroundColor = "#111111";
    document.querySelector("footer").style.borderTop = "2px solid #444";

    document.querySelectorAll("footer .social-icons a i").forEach(el => {
        el.style.color = "#ffffff";
    });

    document.querySelectorAll("#left-menu .left-menu-element").forEach(el => {
        el.style.color = "white";
    });
    document.querySelectorAll("#left-menu .left-menu-element svg").forEach(el => {
        el.style.fill = "white";
    });
    document.querySelectorAll("#lightMode svg").forEach(el => {
        el.style.color = "white";
    });
    localStorage.setItem("theme", "dark");
});



profilePic.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
    arrow.style.transform = dropdown.style.display === "flex" ? "rotate(180deg)" : "rotate(0deg)";
});

arrow.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
    arrow.style.transform = dropdown.style.display === "flex" ? "rotate(180deg)" : "rotate(0deg)";
});

function loadContent(index) {
    contentDivs.forEach(div => div.style.display = "none");
    contentDivs[index].style.display = "block";
    menuItems.forEach(item => item.classList.remove("active"));
    menuItems[index].classList.add("active");
}
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => loadContent(index));
});

loadContent(0);

const themeToggle = document.getElementById('themeToggle');
const codeEditor = document.getElementById('codeEditor');
const checkButton = document.getElementById('checkButton');
const reportCard = document.getElementById('reportCard');
const codeEditorContainer = document.getElementById('codeEditorContainer');

document.addEventListener('DOMContentLoaded', () => {
    const sampleCode = `// Example Python code for plagiarism check
def bubble_sort(arr):
    n = len(arr)
    # Traverse through all array elements
    for i in range(n):
        # Last i elements are already in place
        for j in range(0, n-i-1):
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr
`;

    codeEditor.classList.add('placeholder');
    codeEditor.textContent = sampleCode;
    applySyntaxHighlighting();
});

// Clear placeholder when focused
codeEditor.addEventListener('focus', function () {
    if (codeEditor.classList.contains('placeholder')) {
        codeEditor.classList.remove('placeholder');
        codeEditor.textContent = '';
    }
});

// Restore placeholder if empty on blur
codeEditor.addEventListener('blur', function () {
    if (codeEditor.textContent.trim() === '') {
        codeEditor.classList.add('placeholder');
        applySyntaxHighlighting();
    }
});

// Toggle theme - only for the code editor
themeToggle.addEventListener('click', function () {
    codeEditorContainer.classList.toggle('dark-editor');
    themeToggle.textContent = codeEditorContainer.classList.contains('dark-editor') ? '🌙' : '☀️';
    // Reapply syntax highlighting to update colors for the new theme
    applySyntaxHighlighting();
});

// Optimize event handlers with debouncing
let inputTimeout;
let lastContent = codeEditor.textContent;

codeEditor.addEventListener('input', function () {
    if (codeEditor.textContent !== lastContent) {
        lastContent = codeEditor.textContent;
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
            applySyntaxHighlighting();
        }, 100);
    }
});

codeEditor.addEventListener('scroll', function () {
    lineNumbers.scrollTop = codeEditor.scrollTop;
});

// Tab key handling
codeEditor.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        document.execCommand('insertText', false, '    ');
    }
});

// Show report when check button is clicked

checkButton.addEventListener("click", function () {
    checkButton.classList.add("loading");
    checkButton.disabled = true;
    checkButton.innerHTML = `
        <span class="spinner"></span>
        <span>Checking...</span>
    `;
    const formData = new FormData();
    formData.append("input_code", codeEditor.textContent.trim());


    fetch("http://127.0.0.1:8000/code_plagiarism_check/", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            updateUI(data);
            document.getElementById("reportCard").classList.remove("hidden");
            reportCard.style.display = 'block';

            // Restore button to original state
            checkButton.classList.remove("loading");
            checkButton.disabled = false;
            checkButton.innerHTML = "Check plagiarism";
        })
        .catch(error => {
            console.error("Error:", error);
            checkButton.classList.remove("loading");
            checkButton.disabled = false;
            checkButton.innerHTML = "Check plagiarism";
        });
});

function getScoreColorClass(score) {
    if (score >= 0.8) return 'red';
    if (score >= 0.5) return 'orange';
    return 'green';
}

function getScoreBackgroundClass(score) {
    if (score >= 0.8) return 'light-red';
    if (score >= 0.5) return 'light-orange';
    return 'light-green';
}

function updateUI(data) {
    const tokenSimilarity = data.token_similarity;
    const syntacticSimilarity = data.syntax_similarity;
    const semanticSimilarity = data.semantic_similarity;
    const finalScore = data.final_similarity;

    // Update Token
    const tokenColor = getScoreColorClass(tokenSimilarity);
    document.getElementById('tokenSimilarity').textContent = `${Math.round(tokenSimilarity * 100)}%`;
    document.getElementById('tokenSimilarity').className = `report-value text-${tokenColor}`;
    document.getElementById('token-progress').style.width = `${tokenSimilarity * 100}%`;
    document.getElementById('token-progress').className = `progress-value bg-${tokenColor}`;

    // Update Syntactic
    const syntacticColor = getScoreColorClass(syntacticSimilarity);
    document.getElementById('syntacticSimilarity').textContent = `${Math.round(syntacticSimilarity * 100)}%`;
    document.getElementById('syntacticSimilarity').className = `report-value text-${syntacticColor}`;
    document.getElementById('syntactic-progress').style.width = `${syntacticSimilarity * 100}%`;
    document.getElementById('syntactic-progress').className = `progress-value bg-${syntacticColor}`;

    // Update Semantic
    const semanticColor = getScoreColorClass(semanticSimilarity);
    document.getElementById('semanticSimilarity').textContent = `${Math.round(semanticSimilarity * 100)}%`;
    document.getElementById('semanticSimilarity').className = `report-value text-${semanticColor}`;
    document.getElementById('semantic-progress').style.width = `${semanticSimilarity * 100}%`;
    document.getElementById('semantic-progress').className = `progress-value bg-${semanticColor}`;

    // Final Score
    const finalColor = getScoreColorClass(finalScore);
    const bgColor = getScoreBackgroundClass(finalScore);
    const finalScorePercent = Math.round(finalScore * 100);
    const circle = document.getElementById('progressCircle2');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    const offset = circumference - (finalScore * circumference);
    circle.style.strokeDashoffset = offset;
    circle.setAttribute("stroke", finalColor === "red" ? "#d32f2f" : finalColor === "orange" ? "#d97b07" : "#00c853");

    // Update percentage text
    document.getElementById('finalScoreText2').textContent = `${finalScorePercent}%`;
    document.getElementById('finalScoreText2').style.color =
        finalColor === "red" ? "#d32f2f" : finalColor === "orange" ? "#fbc02d" : "#00c853";

    document.getElementById('verdict2').className = `verdict bg-${bgColor}`;

    const verdictEl = document.getElementById('verdict2');
    const statusEl = document.getElementById('plagiarismStatus2');
    const isPlagiarized = data.plagiarism_status?.toLowerCase().includes("not") === false;

    if (isPlagiarized) {
        verdictEl.innerHTML = `
            <svg class="icon-lg text-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <div class="plagiarism-status text-red">Plagiarized</div>
        `;
        statusEl.classList.remove("not-plagiarized");
        statusEl.classList.add("plagiarized");
    } else {
        verdictEl.innerHTML = `
            <svg class="icon-lg text-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <div class="plagiarism-status text-green">Not Plagiarized</div>
        `;
        statusEl.classList.remove("plagiarized");
        statusEl.classList.add("not-plagiarized");
    }

    // Set problem ID if provided
    if (data.problem_id) {
        document.getElementById('problemId').textContent = `Problem ID: ${data.problem_id}`;
    }
}

// checkButton.addEventListener("click", function () {
//     const formData = new FormData();
//     formData.append("input_code", codeEditor.textContent.trim());

//     fetch("http://127.0.0.1:8000/code_plagiarism_check/", {
//         method: "POST",
//         body: formData
//     })
//         .then(response => response.json()) // Convert response to JSON
//         .then(data => {
//             // Update the report card with response data
//             document.getElementById("problemId").textContent = data.problem_id;
//             document.getElementById("tokenSimilarity").textContent = data.token_similarity.toFixed(2);
//             document.getElementById("syntacticSimilarity").textContent = data.syntax_similarity.toFixed(2);
//             document.getElementById("semanticSimilarity").textContent = data.semantic_similarity.toFixed(2);
//             document.getElementById("finalScore").textContent = data.final_similarity.toFixed(2);
//             document.getElementById("plagiarismStatus").textContent = data.plagiarism_status;

//             // Add class for styling based on plagiarism status
//             const statusElement = document.getElementById("plagiarismStatus");
//             statusElement.classList.remove("not-plagiarized", "plagiarized");
//             if (data.plagiarism_status.toLowerCase().includes("not")) {
//                 statusElement.classList.add("not-plagiarized");
//             } else {
//                 statusElement.classList.add("plagiarized");
//             }

//             // Show the report card
//             document.getElementById("reportCard").classList.remove("hidden");
//         })
//         .catch(error => console.error("Error:", error));
// });


// function getScoreColorClass(score) {
//     if (score >= 0.8) return 'red';
//     if (score >= 0.5) return 'orange';
//     return 'green';
// }

// function getScoreBackgroundClass(score) {
//     if (score >= 0.8) return 'light-red';
//     if (score >= 0.5) return 'light-orange';
//     return 'light-green';
// }

// function updateUI(data) {
//     // Token Similarity
//     const tokenSimilarity = data.token_similarity ?? data.tokenSimilarity;
//     const tokenColor = getScoreColorClass(tokenSimilarity);
//     document.getElementById('tokenSimilarity').textContent = `${Math.round(tokenSimilarity * 100)}%`;
//     document.getElementById('tokenSimilarity').className = `report-value text-${tokenColor}`;
//     document.getElementById('token-progress').style.width = `${tokenSimilarity * 100}%`;
//     document.getElementById('token-progress').className = `progress-value bg-${tokenColor}`;

//     // Syntactic Similarity
//     const syntacticSimilarity = data.syntax_similarity ?? data.syntacticSimilarity;
//     const syntacticColor = getScoreColorClass(syntacticSimilarity);
//     document.getElementById('syntacticSimilarity').textContent = `${Math.round(syntacticSimilarity * 100)}%`;
//     document.getElementById('syntacticSimilarity').className = `report-value text-${syntacticColor}`;
//     document.getElementById('syntactic-progress').style.width = `${syntacticSimilarity * 100}%`;
//     document.getElementById('syntactic-progress').className = `progress-value bg-${syntacticColor}`;

//     // Semantic Similarity
//     const semanticSimilarity = data.semantic_similarity ?? data.semanticSimilarity;
//     const semanticColor = getScoreColorClass(semanticSimilarity);
//     document.getElementById('semanticSimilarity').textContent = `${Math.round(semanticSimilarity * 100)}%`;
//     document.getElementById('semanticSimilarity').className = `report-value text-${semanticColor}`;
//     document.getElementById('semantic-progress').style.width = `${semanticSimilarity * 100}%`;
//     document.getElementById('semantic-progress').className = `progress-value bg-${semanticColor}`;

//     // Final Score
//     const finalScore = data.final_similarity ?? data.finalScore;
//     const finalColor = getScoreColorClass(finalScore);
//     const bgColor = getScoreBackgroundClass(finalScore);
//     document.getElementById('finalScore').textContent = `${Math.round(finalScore * 100)}%`;
//     document.getElementById('finalScore').className = `report-value text-${finalColor}`;
//     document.getElementById('verdict').className = `verdict bg-${bgColor}`;

//     const verdictEl = document.getElementById('verdict');
//     const isPlagiarized = data.plagiarism_status ?
//         !data.plagiarism_status.toLowerCase().includes("not") :
//         data.isPlagiarized;

//     if (isPlagiarized) {
//         verdictEl.innerHTML = `
//             <svg class="icon-lg text-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
//                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                  stroke-linejoin="round">
//                 <line x1="18" y1="6" x2="6" y2="18"></line>
//                 <line x1="6" y1="6" x2="18" y2="18"></line>
//             </svg>
//             <div class="plagiarism-status text-red">Plagiarized</div>
//         `;
//     } else {
//         verdictEl.innerHTML = `
//             <svg class="icon-lg text-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
//                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                  stroke-linejoin="round">
//                 <polyline points="20 6 9 17 4 12"></polyline>
//             </svg>
//             <div class="plagiarism-status text-green">Not Plagiarized</div>
//         `;
//     }
// }

// function initializeUI() {
//     updateUI(data);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     initializeUI();
//     updateSimilarityReport(similarityScores);

// });

// function updateSimilarityReport(similarityData) {
//         const thresholds = {
//             green: 60,
//             yellow: 40,
//             red: 0,
//         };

//         function getColorClass(value) {
//             if (value >= thresholds.green) return 'bg-green';
//             if (value >= thresholds.yellow) return 'bg-yellow';
//             return 'bg-red';
//         }

//         function updateSection(scoreId, progressId, value) {
//             const roundedValue = Math.round(value);
//             document.getElementById(scoreId).textContent = `${roundedValue}%`;

//             const progressBar = document.getElementById(progressId);
//             progressBar.style.width = `${roundedValue}%`;

//             progressBar.classList.remove('bg-green', 'bg-yellow', 'bg-red');
//             progressBar.classList.add(getColorClass(roundedValue));
//         }

//         // Update each similarity section
//         updateSection('tokenSimilarity', 'token-progress', similarityData.tokenSimilarity);
//         updateSection('syntacticSimilarity', 'syntactic-progress', similarityData.syntacticSimilarity);
//         updateSection('semanticSimilarity', 'semantic-progress', similarityData.semanticSimilarity);

//         // Update final score
//         const finalScore = Math.round(similarityData.finalScore);
//         document.getElementById('finalScore').textContent = `${finalScore}%`;

//         const verdictBox = document.getElementById('verdict');
//         const statusText = document.getElementById('plagiarismStatus');

//         // Set verdict and styling
//         if (finalScore >= 50) {
//             verdictBox.classList.remove('bg-green-light');
//             verdictBox.classList.add('bg-red-light');
//             statusText.textContent = 'Potential Plagiarism Detected';
//             statusText.classList.remove('not-plagiarized');
//             statusText.classList.add('plagiarized');
//         } else {
//             verdictBox.classList.remove('bg-red-light');
//             verdictBox.classList.add('bg-green-light');
//             statusText.textContent = 'No Significant Plagiarism Detected';
//             statusText.classList.remove('plagiarized');
//             statusText.classList.add('not-plagiarized');
//         }

//         // Optional: set a problem ID if needed
//         if (similarityData.problemId) {
//             document.getElementById('problemId').textContent = `Problem ID: ${similarityData.problemId}`;
//         }
//     }
// end 

// Optimized syntax highlighting function
function applySyntaxHighlighting() {
    if (codeEditor.classList.contains('placeholder')) return;

    const selection = window.getSelection();
    const range = selection.rangeCount > 0 ? selection.getRangeAt(0).cloneRange() : null;
    let cursorNode, cursorOffset;

    if (range) {
        cursorNode = range.startContainer;
        cursorOffset = range.startOffset;
    }
    const code = codeEditor.textContent;

    let html = code
        .replace(/[&<>]/g, char => {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;'
            }[char];
        })
        .replace(/(\/\/.*$)|(".*?"|'.*?')|(\b(?:var|function|for|if|return|else|while)\b)|(\b\d+\b)|([+\-*/%=&|^<>!?:]+)|(\.\w+)/gm,
            (match, comment, string, keyword, number, operator, property) => {
                if (comment) return `<span class="token comment">${comment}</span>`;
                if (string) return `<span class="token string">${string}</span>`;
                if (keyword) return `<span class="token keyword">${keyword}</span>`;
                if (number) return `<span class="token number">${number}</span>`;
                if (operator) return `<span class="token operator">${operator}</span>`;
                if (property) return `<span class="token property">${property}</span>`;
                return match;
            });

    if (codeEditor.innerHTML !== html) {
        codeEditor.innerHTML = html;

        if (range && cursorNode && cursorNode.nodeType === Node.TEXT_NODE) {
            try {
                const newRange = document.createRange();

                let found = false;
                function findTextNode(node, targetLength) {
                    if (found) return;

                    if (node.nodeType === Node.TEXT_NODE) {
                        if (node.length >= targetLength) {
                            newRange.setStart(node, targetLength);
                            found = true;
                        }
                    } else {
                        for (let i = 0; i < node.childNodes.length && !found; i++) {
                            findTextNode(node.childNodes[i], targetLength);
                        }
                    }
                }

                findTextNode(codeEditor, cursorOffset);

                if (found) {
                    selection.removeAllRanges();
                    selection.addRange(newRange);
                }
            } catch (e) {
                console.warn("Could not restore selection:", e);
            }
        }
    }
}


const tryItButtons = document.querySelectorAll(".try-it-now");
let plagiarismDivIndex = -1;
contentDivs.forEach((div, index) => {
    if (div.id === "check-plagiarism") {
        plagiarismDivIndex = index;
    }
});

tryItButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (plagiarismDivIndex !== -1) {
            loadContent(plagiarismDivIndex);
        } else {
            console.error("Plagiarism checker div not found in content divs!");
        }
    });
});

// Initial setup
applySyntaxHighlighting();
const container = document.getElementById('text-container');
const addButton = document.getElementById('add-button');
const compareButton = document.getElementById('compare-button');
const errorMessage = document.getElementById('error-message');
const reportSection = document.getElementById('report-section');

// Elements that depend on document 3
const tfIdf13 = document.getElementById('tf-idf-1-3');
const tfIdf23 = document.getElementById('tf-idf-2-3');
const semantic13 = document.getElementById('semantic-1-3');
const semantic23 = document.getElementById('semantic-2-3');
const doc3TfIdf = document.getElementById('doc3-tf-idf');
const doc3Semantic = document.getElementById('doc3-semantic');
const leastSimilarTfIdf = document.getElementById('least-similar-tf-idf');
const leastSimilarSemantic = document.getElementById('least-similar-semantic');


let textFieldCount = 1;

addButton.addEventListener('click', function () {
    textFieldCount += 1;

    const newTextField = document.createElement('div');
    newTextField.className = 'text-field';
    newTextField.innerHTML = `<textarea placeholder="Enter text ${textFieldCount} here..."></textarea>`;

    container.appendChild(newTextField);
});


// Compare button click handler
compareButton.addEventListener('click', function () {
    compareButton.classList.add("loading");
    compareButton.disabled = true;
    compareButton.innerHTML = `
        <span class="spinner"></span>
        <span>Checking...</span>
    `
    const textareas = container.querySelectorAll('textarea');
    userInput = '';
    textareas.forEach((textarea, index) => {
        userInput += textarea.value.trim();
        if (index < textareas.length - 1) {
            userInput += '\n'; // Add newline only if not the last textarea
        }
    });
    // Send a request to FastAPI
    fetch('http://127.0.0.1:8000/compare_documents/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_input: userInput }) // Stringify the object
    })
        .then(response => response.json())
        .then(data => {
            console.log("Comparison Result:", data);
            compareButton.classList.add("loading");
            compareButton.disabled = true;
            compareButton.innerHTML = `
            <span class="spinner"></span>
            <span>Checking...</span>
            `
            if (data.success !== false) {
                const tfidfResults = data.tfidf_results;
                const semanticResults = data.semantic_results;
                const summary = data.summary;

                // Helper function to generate rows for result tables
                function generateTableRows(results, type) {
                    return results.map(result => {
                        const { doc1_id, doc2_id, similarity, potential_plagiarism } = result;
                        const rowId = `${type}-${doc1_id}-${doc2_id}`;
                        const highlight = potential_plagiarism ? ' style="background-color: #fdd;"' : '';
                        return `
                        <tr id="${type}-${doc1_id}-${doc2_id}"${highlight}>
                            <td>Document ${doc1_id} vs Document ${doc2_id}</td>
                            <td>${similarity.toFixed(2)}%</td>
                        </tr>`;
                    }).join('');
                }

                // Generate TF-IDF table rows
                const tfidfTable = `
                <table>
                    <tr><th>Document Pair</th><th>Similarity (%)</th></tr>
                    ${generateTableRows(tfidfResults, 'tf-idf')}
                </table>
                <p class="highlight">Most similar pair: Document ${summary.most_similar_tfidf.doc1_id} and Document ${summary.most_similar_tfidf.doc2_id} (${summary.most_similar_tfidf.similarity}%)</p>
                <p class="highlight" id="least-similar-tf-idf">Least similar pair: Document ${summary.least_similar_tfidf.doc1_id} and Document ${summary.least_similar_tfidf.doc2_id} (${summary.least_similar_tfidf.similarity}%)</p>
                <h3>TF-IDF Document Uniqueness Scores</h3>
                <ul>
                    ${data.documents.map((doc, index) => `<li${index === 2 ? ' id="doc3-tf-idf" style="display: list-item;"' : ''}>Document ${index + 1}: ${(100 - (tfidfResults.filter(r => r.doc1_id === index + 1 || r.doc2_id === index + 1).reduce((a, b) => a + b.similarity, 0) / (data.documents.length - 1))).toFixed(2)}%</li>`).join('')}
                </ul>
            `;

                // Generate Semantic table rows
                const semanticTable = `
                <table>
                    <tr><th>Document Pair</th><th>Similarity (%)</th></tr>
                    ${generateTableRows(semanticResults, 'semantic')}
                </table>
                ${semanticResults.some(r => r.potential_plagiarism)
                        ? `<p class="alert">*** POTENTIAL PLAGIARISM DETECTED between Document ${semanticResults.find(r => r.potential_plagiarism).doc1_id} and Document ${semanticResults.find(r => r.potential_plagiarism).doc2_id} (${semanticResults.find(r => r.potential_plagiarism).similarity}%) ***</p>`
                        : ''
                    }
                <p class="highlight">Most similar pair: Document ${summary.most_similar_tfidf.doc1_id} and Document ${summary.most_similar_tfidf.doc2_id} (${summary.most_similar_tfidf.similarity}%)</p>
                <p class="highlight" id="least-similar-semantic">Least similar pair: Document ${summary.least_similar_tfidf.doc1_id} and Document ${summary.least_similar_tfidf.doc2_id} (${summary.least_similar_tfidf.similarity}%)</p>
                <h3>Semantic Document Uniqueness Scores</h3>
                <ul>
                    ${data.documents.map((doc, index) => `<li${index === 2 ? ' id="doc3-semantic" style="display: list-item;"' : ''}>Document ${index + 1}: ${(100 - (semanticResults.filter(r => r.doc1_id === index + 1 || r.doc2_id === index + 1).reduce((a, b) => a + b.similarity, 0) / (data.documents.length - 1))).toFixed(2)}%</li>`).join('')}
                </ul>
            `;

                // Assemble full HTML report
                reportSection.innerHTML = `
                <div class="report-container">
                    <h1>Document Similarity Analysis Report</h1>
                    <div class="section">
                        <h2>TF-IDF Analysis Results</h2>
                        ${tfidfTable}
                    </div>
                    <div class="section">
                        <h2>Semantic Analysis Results</h2>
                        ${semanticTable}
                    </div>
                </div>
            `;
                reportSection.style.display = 'block';
            } else {
                errorMessage.textContent = "Error comparing documents.";
                errorMessage.style.display = 'block';
            }


        })
        .catch(error => {
            console.error("Error:", error);
            compareButton.classList.remove("loading");
            compareButton.disabled = false;
            compareButton.innerHTML = "Compare";
        });

});



const appIcon = document.querySelector('#app-icon');
const chatbotContainer = document.querySelector('.chatbot-container');
const closeButton = document.querySelector('.chatbot-close');
const chatContent = document.querySelector('.chatbot-content');

// Initially hide the chatbot container
chatbotContainer.style.display = 'none';

// Database of FAQs in English and Armenian
const faqDatabase = {
    english: {
        "What does your plagiarism detection system do?":
            "Our system checks the originality of the text by comparing it with the existing database and other sources, identifying potential plagiarism. Additionally, you can use our application to search for similar materials in search engines. You can also upload multiple documents and compare them with each other to find similarities. I can guide you on how to use our application. Would you like me to?",
        "How does your system work?":
            "Our website is based on machine learning and deep learning models. You simply enter the text, and our artificial intelligence model compares it with the materials available in our database, providing a similarity percentage and a detailed report.",
        "What sources do you compare the texts with?":
            "We compare texts with the materials in our STEM field database, using our developed dataset. For materials from other fields, we also have a model that checks whether a similar article exists in search engines and provides a detailed report.",
        "How can I check my text?":
            "Simply register or log into our system, then paste your text into the appropriate field and click the \"Check\" button. Our system will analyze your text and present the results. If you have any questions, you can watch the tutorial video by following this link: https://www.youtube.com/watch?v=Mm6g8Nlaa7c",
        "Can I use the system without registering?":
            "No, you need to register to use our services. This helps us ensure the security of your data and provide personalized services.",
        "How can I see the results of the check?":
            "After the check, you will receive a detailed report that includes the plagiarism percentage and source links.",
        "Is your system free?":
            "Yes, our system is completely free, aiming to promote academic integrity by providing unlimited checking opportunities for educational institutions, writers, publishers, and content creators on social networks."
    },
    armenian: {
        "Ի՞նչ է անում այս գրագողության ստուգման համակարգը։":
            "Մեր համակարգը ստուգում է տեքստի օրիգինալությունը՝ համեմատելով այն առկա տվյալների բազայի և այլ աղբյուրների հետ՝ հայտնաբերելով հնարավոր գրագողությունը։Ինչպես նաև կարող եք օգտագործել մեր հավելվածը և որոնել նմանատիպ նյութեր որոնողական համակարգում։ Կարող եք մուքագրել մի քանի տարբեր փաստաթղթեր և համեմատել դրանք իրար միջև նմանություն գտնելու համար։Կարող եմ ուղղորդել ձեզ ինչպես օգտվել մեր հավելվածից։Ցանկանո՞ւմ եք։",
        "Ինչպե՞ս է աշխատում  համակարգը,ի՞նչ մոդելներ է օգտագործում։":
            "Մեր կայքը աշխատում է հիմնված մեքենայական ուսուցման և խորը ուսուցման մոդելների վրա։ Դուք պարզապես մուտքագրում եք տեքստը, և մեր արհեստական բանականության մոդելը համեմատում է այն մեր տվյալների բազայի մեջ գտնվող նյութերի հետ՝ տրամադրելով նմանության տոկոս և մանրամասն հաշվետվություն։",
        "Ինչպի՞սի աղբյուրների հետ եք համեմատում մուտքագրված փաստաթուղթը։":
            "Մենք համեմատում ենք մեր STEM ոլորտի տվյալների բազայի նյութերի հետ՝ օգտագործելով մեր մշակած տվյալներ բազան։ Այլ ոլորտի նյութերի յուրօրինակությունը ստուգելու համար ևս ունենք մոդել, որը ստուգում է արդյոք որոնողական համակարգում առկա է նման հոդված և տրամադրում մանրամասն հաշվետվություն։",
        "Ինչպե՞ս կարող եմ ստուգել  տեքստը արտագրված է թե ոչ։ ":
            "Պարզապես գրանցվեք կամ մուտք գործեք մեր համակարգ, հետո տեղադրեք ձեր տեքստը համապատասխան դաշտում և սեղմեք \"Ստուգել\" կոճակը։ Մեր համակարգը կվերլուծի ձեր տեքստը և կներկայացնի արդյունքները։ Եթե հարցեր առաջացան կարող եք դիտել ուղղորդող հոլովակը անցնելով հետևյալ հղումով https://www.youtube.com/watch?v=Mm6g8Nlaa7c ։",
        "Կարո՞ղ եմ օգտագործել համակարգը առանց գրանցվելու։":
            "Ոչ, մեր ծառայություններից օգտվելու համար հարկավոր է գրանցվել։ Սա մեզ օգնում է ապահովել ձեր տվյալների անվտանգությունը և տրամադրել անհատականացված ծառայություններ։",
        "Ինչպե՞ս կարող եմ տեսնել ստուգման արդյունքները։":
            "Ստուգումից հետո դուք կստանաք մանրամասն հաշվետվություն, որը կներառի գրագողության տոկոսի ցուցանիշը և աղբյուրների հղումները։",
        "Համակարգն անվճա՞ր է։":
            "Այո մեր համակարգը ամբողջությամբ անվճար է, նպատակ ունենալով խթանել ակադեմիական ազնվությունը, տրամադրելով անսահմանափակ ստուգման հնարավորություններ ինչպես կրթական հաստատություններին, գրողներին, հրատարակիչներին, այնպես էլ սոցիալական ցանցերում բովանդակություն ստեղծողներին։"
    }
};

// Keep track of the current language and conversation state
let currentLanguage = null;
let awaitingLanguageSelection = false;
let awaitingGuideResponse = false;
let commonQuestions = {};

function selectLanguage(language) {
    currentLanguage = language;

    // Set commonQuestions based on the selected language
    commonQuestions = Object.keys(faqDatabase[currentLanguage]);

    // Now you can call showFAQOptions() to display the FAQ options
    showFAQOptions();
}

// Add click event to the app icon
appIcon.addEventListener('click', function () {
    // Show the chatbot container
    chatbotContainer.style.display = 'block';

    // Hide the app icon
    appIcon.style.display = 'none';

    // Optional: Add a smooth animation for opening
    chatbotContainer.style.opacity = '0';
    chatbotContainer.style.transform = 'translateY(20px)';

    // Trigger reflow to ensure the animation works
    void chatbotContainer.offsetWidth;

    // Apply transition properties
    chatbotContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    chatbotContainer.style.opacity = '1';
    chatbotContainer.style.transform = 'translateY(0)';

    // Start the conversation with language selection
    startConversation();
});

// Add click event to the close button
closeButton.addEventListener('click', function () {
    // Apply closing animation
    chatbotContainer.style.opacity = '0';
    chatbotContainer.style.transform = 'translateY(20px)';

    // Wait for animation to complete, then hide chatbot and show icon
    setTimeout(function () {
        // Hide the chatbot container
        chatbotContainer.style.display = 'none';

        // Show the app icon again
        appIcon.style.display = 'flex';

        // Optional: Add a smooth animation for showing the icon
        appIcon.style.opacity = '0';
        appIcon.style.transform = 'scale(0.8)';

        // Trigger reflow
        void appIcon.offsetWidth;

        // Apply transition properties
        appIcon.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        appIcon.style.opacity = '1';
        appIcon.style.transform = 'scale(1)';

        // Reset the conversation
        resetConversation();
    }, 300); // Match this timing with the CSS transition duration
});

// Function to start the conversation
function startConversation() {
    // Clear any existing content
    chatContent.innerHTML = '';

    // Ask for language preference
    addChatMessage("Please select your preferred language:<br>Խնդրում եմ ընտրեք ձեր նախընտրած լեզուն:", 'bot');

    // Add language options
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'option-buttons';
    optionsDiv.innerHTML = `
            <button class="option-button" data-language="english">English</button>
            <button class="option-button" data-language="armenian">Հայերեն</button>
        `;
    chatContent.appendChild(optionsDiv);

    // Add event listeners to language buttons
    const languageButtons = document.querySelectorAll('.option-button[data-language]');
    languageButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLanguage = this.getAttribute('data-language');
            selectLanguage(selectedLanguage);
        });
    });

    awaitingLanguageSelection = true;
}

// Function to select language
function selectLanguage(language) {
    currentLanguage = language;
    awaitingLanguageSelection = false;

    // Set common questions based on language
    commonQuestions = Object.keys(faqDatabase[language]);

    // Add user's selection to the chat
    const languageText = language === 'english' ? 'English' : 'Հայերեն';
    addChatMessage(languageText, 'user');

    // Send welcome message based on language
    let welcomeMessage;
    if (language === 'english') {
        welcomeMessage = "Hi there! I am Robert. I will be assisting you today. Do you need help with our plagiarism detection system?";
    } else {
        welcomeMessage = "Ողջույն! Ես Ռոբերտն եմ։ Ես կարող եմ օգնել ձեզ օգտվել մեր հավելվածից։ Ձեզ օգնություն  հարկավո՞ր է մեր գրագողության ստուգման համակարգի վերաբերյալ։";
    }

    setTimeout(() => {
        addChatMessage(welcomeMessage, 'bot');

        // Add Yes/No options
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'option-buttons';

        if (language === 'english') {
            optionsDiv.innerHTML = `
                    <button class="option-button" data-response="yes">Yes</button>
                    <button class="option-button" data-response="no">No</button>
                `;
        } else {
            optionsDiv.innerHTML = `
                    <button class="option-button" data-response="yes">Այո</button>
                    <button class="option-button" data-response="no">Ոչ</button>
                `;
        }

        chatContent.appendChild(optionsDiv);

        // Add event listeners to yes/no buttons
        const responseButtons = document.querySelectorAll('.option-button[data-response]');
        responseButtons.forEach(button => {
            button.addEventListener('click', function () {
                const response = this.getAttribute('data-response');
                handleInitialResponse(response);
            });
        });
    }, 600);
}

document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById('elementId');
    if (element) {
        element.addEventListener('click', function () {
            // Your logic here
        });
    }
});

// Initialize chat functionality when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Force initial scroll to bottom to show buttons
    scrollToBottom();

    // Add event listeners for buttons
    document.querySelectorAll('.option-button').forEach(button => {
        button.addEventListener('click', function () {
            // Handle button clicks
            const buttonText = this.textContent;
            // Process response based on button text
        });
    });
});

// Function to scroll to bottom of chat
function scrollToBottom() {
    const chatContent = document.querySelector('.chatbot-content');
    chatContent.scrollTop = chatContent.scrollHeight;
}

// Add these CSS modifications to ensure proper scrolling
document.head.insertAdjacentHTML('beforeend', `
<style>
    .chatbot-content {
        height: calc(100% - 200px);
        overflow-y: auto;
        padding: 15px;
        scroll-behavior: smooth;
        display: flex;
        flex-direction: column;
    }

    .option-buttons {
        position: relative;
        margin-top: 10px;
        margin-bottom: 15px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }
</style>
`);


// Function to handle initial yes/no response
function handleInitialResponse(response) {
    // Add user's response to the chat
    const responseText = response === 'yes' ?
        (currentLanguage === 'english' ? 'Yes' : 'Այո') :
        (currentLanguage === 'english' ? 'No' : 'Ոչ');

    addChatMessage(responseText, 'user');

    setTimeout(() => {
        if (response === 'yes') {
            // Show common questions
            showFAQOptions();
        } else {
            // Say goodbye
            const goodbyeMessage = currentLanguage === 'english' ?
                "Thank you for reaching out. If you have any questions in the future, feel free to ask!" :
                "Շնորհակալություն դիմելու համար։ Եթե հետագայում հարցեր առաջանան, ազատ կարող եք դիմել!";

            addChatMessage(goodbyeMessage, 'bot');
        }
    }, 600);
}

// Function to show FAQ options
function showFAQOptions() {
    const faqPrompt = currentLanguage === 'english' ?
        "Here are some common questions about our plagiarism detection system. What would you like to know?" :
        "Ահա մեր գրագողության ստուգման համակարգի վերաբերյալ որոշ հաճախակի տրվող հարցեր: Ի՞նչ կցանկանայիք իմանալ:";

    addChatMessage(faqPrompt, 'bot');

    // Create buttons for each FAQ
    const faqOptionsDiv = document.createElement('div');
    faqOptionsDiv.className = 'faq-options';
    faqOptionsDiv.style.display = 'flex';
    faqOptionsDiv.style.flexDirection = 'column';
    faqOptionsDiv.style.gap = '8px';
    faqOptionsDiv.style.marginTop = '10px';

    commonQuestions.forEach((question, index) => {
        const button = document.createElement('button');
        button.className = 'option-button faq-button';
        button.style.textAlign = 'left';
        button.style.whiteSpace = 'normal';
        button.setAttribute('data-question-index', index);
        button.textContent = question;

        faqOptionsDiv.appendChild(button);
    });

    chatContent.appendChild(faqOptionsDiv);

    // Add event listeners to FAQ buttons
    const faqButtons = document.querySelectorAll('.faq-button');
    faqButtons.forEach(button => {
        button.addEventListener('click', function () {
            const questionIndex = parseInt(this.getAttribute('data-question-index'));
            const selectedQuestion = commonQuestions[questionIndex];
            handleFAQSelection(selectedQuestion);
        });
    });

    // Add chat input functionality
    setupChatInput();
}
// Function to handle FAQ selection
function handleFAQSelection(question) {
    // Add the selected question to the chat
    addChatMessage(question, 'user');

    // Get the answer from the database
    const answer = faqDatabase[currentLanguage][question];

    setTimeout(() => {
        // Check if this is the first question about the system
        if (question === (currentLanguage === 'english' ?
            "What does your plagiarism detection system do?" :
            "Ինչ է անում ձեր գրագողության ստուգման համակարգը՞")) {

            // Add the answer to the chat
            addChatMessage(answer, 'bot');

            // Add Yes/No options for guide
            setTimeout(() => {
                const guideOptionsDiv = document.createElement('div');
                guideOptionsDiv.className = 'option-buttons';

                if (currentLanguage === 'english') {
                    guideOptionsDiv.innerHTML = `
                            <button class="option-button" data-guide="yes">Yes</button>
                            <button class="option-button" data-guide="no">No</button>
                        `;
                } else {
                    guideOptionsDiv.innerHTML = `
                            <button class="option-button" data-guide="yes">Այո</button>
                            <button class="option-button" data-guide="no">Ոչ</button>
                        `;
                }

                chatContent.appendChild(guideOptionsDiv);

                // Add event listeners to guide yes/no buttons
                const guideButtons = document.querySelectorAll('.option-button[data-guide]');
                guideButtons.forEach(button => {
                    button.addEventListener('click', function () {
                        const guideResponse = this.getAttribute('data-guide');
                        handleGuideResponse(guideResponse);
                    });
                });

                awaitingGuideResponse = true;
            }, 500);
        } else {
            // Just add the answer for other questions
            addChatMessage(answer, 'bot');

            // Scroll to the bottom of the chat content
            chatContent.scrollTop = chatContent.scrollHeight;
        }
    }, 600);
}


document.querySelector('.tool-button').addEventListener('click', function () {
    console.log("Button clicked!");
    showFAQOptions();
});
// Function to handle guide response
function handleGuideResponse(response) {
    awaitingGuideResponse = false;

    // Add user's response to the chat
    const responseText = response === 'yes' ?
        (currentLanguage === 'english' ? 'Yes' : 'Այո') :
        (currentLanguage === 'english' ? 'No' : 'Ոչ');

    addChatMessage(responseText, 'user');

    setTimeout(() => {
        if (response === 'yes') {
            // Provide guide information
            const guideMessage = currentLanguage === 'english' ?
                "To use our application, follow these steps:<br>1. Register or log in<br>2. Paste your text in the check field<br>3. Click the 'Check' button<br>4. Wait for the analysis to complete<br>5. View the detailed report with similarity percentages<br><br>Is there anything specific you'd like to know about the process?" :
                "Մեր հավելվածից օգտվելու համար հետևեք այս քայլերին:<br>1. Գրանցվեք կամ մուտք գործեք։<br>2. Տեղադրեք ձեր տեքստը ստուգման դաշտում։<br>3. Սեղմեք 'Ստուգել' կոճակը<br>4. Սպասեք վերլուծության ավարտին։<br>5. Ստացեք մանրամասն հաշվետվությունը նմանության տոկոսներով և նման աղբյուրների հղումներով։<br><br>Կա՞ արդյոք ինչ-որ կոնկրետ բան, որ ցանկանում եք իմանալ գործընթացի մասին:";

            addChatMessage(guideMessage, 'bot');
        } else {
            // Offer more help
            const moreHelpMessage = currentLanguage === 'english' ?
                "No problem. Is there anything else you'd like to know about our plagiarism detection system?" :
                "Ոչ մի խնդիր: Կա՞ որևէ այլ բան, որ ցանկանում եք իմանալ մեր գրագողության ստուգման համակարգի մասին:";

            addChatMessage(moreHelpMessage, 'bot');
        }

        // Scroll to the bottom of the chat content
        chatContent.scrollTop = chatContent.scrollHeight;
    }, 600);
}

// Function to setup chat input for typing questions
function setupChatInput() {
    const sendButton = document.querySelector('.send-button');
    const inputField = document.querySelector('.chatbot-input');

    sendButton.addEventListener('click', sendMessage);
    inputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Function to send message
function sendMessage() {
    const inputField = document.querySelector('.chatbot-input');
    const userMessage = inputField.value.trim();

    if (!userMessage) return;

    // Add user message to chat
    addChatMessage(userMessage, 'user');

    // Clear input field
    inputField.value = '';

    // Process the message
    setTimeout(() => {
        processUserMessage(userMessage);
    }, 600);
}

// Function to process user message and find the best matching FAQ
function processUserMessage(message) {
    if (!currentLanguage) {
        // If language not selected yet, handle as language selection
        if (message.toLowerCase().includes('english')) {
            selectLanguage('english');
        } else if (message.toLowerCase().includes('հայերեն') || message.toLowerCase().includes('armenian')) {
            selectLanguage('armenian');
        } else {
            // Default to English if unclear
            addChatMessage("I'll respond in English by default. How can I help you?", 'bot');
            currentLanguage = 'english';
            showFAQOptions();
        }
        return;
    }

    if (awaitingLanguageSelection) {
        // Handle language selection
        if (message.toLowerCase().includes('english')) {
            selectLanguage('english');
        } else if (message.toLowerCase().includes('հայերեն') || message.toLowerCase().includes('armenian')) {
            selectLanguage('armenian');
        } else {
            // Default to English if unclear
            addChatMessage("I'll respond in English by default. How can I help you?", 'bot');
            currentLanguage = 'english';
            showFAQOptions();
        }
        return;
    }

    if (awaitingGuideResponse) {
        // Handle guide response
        if (message.toLowerCase().includes('yes') || message.toLowerCase().includes('այո')) {
            handleGuideResponse('yes');
        } else {
            handleGuideResponse('no');
        }
        return;
    }

    // Find the best matching FAQ
    let bestMatch = null;
    let highestScore = 0;

    for (const question of commonQuestions) {
        const score = similarityScore(message.toLowerCase(), question.toLowerCase());

        if (score > highestScore && score > 0.3) { // Threshold for matching
            highestScore = score;
            bestMatch = question;
        }
    }

    if (bestMatch) {
        // Found a matching FAQ
        const answer = faqDatabase[currentLanguage][bestMatch];
        addChatMessage(answer, 'bot');
    } else {
        // No matching FAQ found
        const noMatchMessage = currentLanguage === 'english' ?
            "I'm not sure I understand your question. Would you like to see the common questions about our system?" :
            "Վստահ չեմ, որ հասկանում եմ ձեր հարցը: Կցանկանայի՞ք տեսնել մեր համակարգի վերաբերյալ հաճախակի տրվող հարցերը:";

        addChatMessage(noMatchMessage, 'bot');

        // Show FAQ options again
        setTimeout(() => {
            showFAQOptions();
        }, 800);
    }

    // Scroll to the bottom of the chat content
    chatContent.scrollTop = chatContent.scrollHeight;
}

// Function to calculate similarity score between two strings
function similarityScore(str1, str2) {
    // Simple word matching algorithm - count words in common
    const words1 = str1.split(/\s+/).filter(w => w.length > 3); // Ignore short words
    const words2 = str2.split(/\s+/).filter(w => w.length > 3);

    let matchCount = 0;

    for (const word1 of words1) {
        for (const word2 of words2) {
            if (word2.includes(word1) || word1.includes(word2)) {
                matchCount++;
                break;
            }
        }
    }

    // Calculate score based on matches relative to length
    return matchCount / Math.max(words1.length, 1);
}

// Function to add messages to the chat
function addChatMessage(text, sender) {
    const messageDiv = document.createElement('div');

    if (sender === 'bot') {
        messageDiv.className = 'message-bubble bot-message';
        messageDiv.innerHTML = text + '<div class="bot-avatar"><img src="http://127.0.0.1:8080/static/images/chatbotlogo.png" alt="Robert Avatar"></div>';
    } else {
        messageDiv.className = 'message-bubble user-message';
        messageDiv.style.backgroundColor = '#4e6bff';
        messageDiv.style.color = 'white';
        messageDiv.style.marginLeft = 'auto';
        messageDiv.style.borderBottomRightRadius = '5px';
        messageDiv.innerHTML = text;
    }

    chatContent.appendChild(messageDiv);

    // Scroll to the bottom of the chat content
    chatContent.scrollTop = chatContent.scrollHeight;
}

// Function to reset the conversation
function resetConversation() {
    chatContent.innerHTML = '';
    currentLanguage = null;
    awaitingLanguageSelection = false;
    awaitingGuideResponse = false;
}


// Text plag checker page JS script 
const textInput = document.getElementById('textInput');
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const uploadFile = document.getElementById('uploadFile');
const uploadIconBtn = document.getElementById('uploadIconBtn');
const clipboardBtn = document.getElementById('clipboardBtn');
const scanBtn = document.getElementById('scanBtn');
const placeholderText = document.getElementById('placeholderText');
const inputContainer = document.getElementById('inputContainer');
const resultsContainer = document.getElementById('resultsContainer');
const newScanBtn = document.getElementById('newScanBtn');
const loadingOverlay = document.getElementById('loadingOverlay');
const googleSearchBtn = document.getElementById('googleSearchBtn');
const plagiarismReportBtn = document.getElementById('plagiarismReportBtn');
const plagiarismReportContent = document.getElementById('plagiarismReportContent');
const googleSearchContent = document.getElementById('googleSearchContent');
const contentTitle = document.getElementById('contentTitle');

// Sample text for demonstration
const sampleText = `The Human Code: Stories of Ethical AI and Its Importance
    
    AI is shaping our world in ways we never imagined, but with great power comes great responsibility. This book presents a collection of short stories that highlight the ethical challenges and importance of human-centered AI. Each tale delves into real-world dilemmas—bias, privacy, autonomy, and the delicate balance between innovation and ethics.
    
    Lena, a talented software engineer, develops an AI hiring system for a major tech company. Excited about her innovation, she soon discovers that the AI is disproportionately rejecting women and minorities due to biased training data. Faced with a moral dilemma, she must decide whether to speak up and risk her job or ignore the flaw to meet corporate deadlines.`;

// Event handlers
textInput.addEventListener('focus', () => {
    placeholderText.style.display = 'none';
});

textInput.addEventListener('blur', () => {
    if (textInput.value.trim() === '') {
        placeholderText.style.display = 'block';
    }
});

textInput.addEventListener('input', () => {
    if (textInput.value.trim() !== '') {
        placeholderText.style.display = 'none';
    } else {
        placeholderText.style.display = 'block';
    }
});

uploadFile.addEventListener('click', () => {
    fileInput.click();
});

uploadIconBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        const file = e.target.files[0];
        placeholderText.style.display = 'none';
        textInput.value = sampleText;
    }
});

clipboardBtn.addEventListener('click', () => {
    fileInput.click();
});

const overlay = document.querySelector("#overlay");
scanBtn.addEventListener('click', handleScan);

function handleScan() {
    if (textInput.value.trim() === '') {
        alert('Please enter text or upload a file to check for plagiarism.');
        return;
    }

    scanBtn.disabled = true;

    displayLoading();

    fetch("http://127.0.0.1:8000/check_plagiarism/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user_input: textInput.value.trim() })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            hideLoading();

            scanBtn.disabled = false;

            inputContainer.style.display = 'none';
            resultsContainer.style.display = 'block';

            plagiarismReportBtn.classList.add('active');
            googleSearchBtn.classList.remove('active');
            plagiarismReportContent.style.display = 'block';
            googleReportContent.style.display = 'none';

            contentTitle.innerHTML = textInput.value.trim().replace(/\n/g, '<br>');

            // --- Most Semantically Similar ---
            const matched_segments = [];
            for (let i = 0; i < data.results.length; i++) {
                const segments = data.results[i].matched_segments;
                if (segments && segments.length > 0) {
                    matched_segments.push(...segments);
                }
            }
            const most = data.most_semantically_similar;
            const circle = document.getElementById('progressCircle');
            const finalText = document.getElementById('finalScoreText');
            const statusLabel = document.getElementById('plagiarismStatus');
            if (most) {
                const score = most.cosine_similarity;
                const percent = Math.round(score * 100);
                const radius = circle.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;

                circle.style.strokeDasharray = `${circumference} ${circumference}`;
                circle.style.strokeDashoffset = `${circumference}`;

                const offset = circumference - score * circumference;
                circle.style.strokeDashoffset = offset;

                let strokeColor, textLabel;

                if (score >= 0.8) {
                    strokeColor = '#d32f2f';
                    textLabel = 'Plagiarized';
                } else if (score >= 0.5) {
                    strokeColor = '#fbc02d';
                    textLabel = 'Possibly Plagiarized';
                } else {
                    strokeColor = '#00c853';
                    textLabel = 'Not Plagiarized';
                }

                circle.setAttribute("stroke", strokeColor);
                finalText.textContent = `${percent}%`;
                finalText.style.color = strokeColor;
                statusLabel.textContent = textLabel;
            }



            // --- Top 5 Similar Results ---
            const resultList = document.querySelector('.result-list');
            resultList.innerHTML = '';

            data.results.slice(0, 5).forEach((doc, index) => {
                const item = document.createElement('div');
                item.classList.add('result-item');
                item.innerHTML = `
            <p class="result-title">DOCUMENT ${index + 1} TITLE: ${doc.title}</p>
            <p class="result-similarity">SIMILARITY: ${(doc.cosine_similarity * 100).toFixed(2)}%</p>
            <p class="result-source">SOURCE: <a href="${doc.url}" target="_blank" class="source-link">Wikipedia</a></p>
            `;
                resultList.appendChild(item);
            });

            // Scroll to results section (optional)
            document.getElementById('plagiarismReportContent').scrollIntoView({ behavior: 'smooth' });
        })
        .catch(error => {
            console.error("Error:", error);
            // Hide loading and re-enable button in case of error too
            hideLoading();
            scanBtn.disabled = false;
            alert("An error occurred while checking for plagiarism. Please try again.");
        });
}

// Function to display loading animation
function displayLoading() {
    overlay.classList.add("display");
}

// Function to hide loading animation
function hideLoading() {
    overlay.classList.remove("display");
}


googleSearchBtn.classList.add('active');
if (googleSearchContent) googleSearchContent.style.display = 'block';
plagiarismReportContent.style.display = 'none';

plagiarismReportBtn.classList.add('active');
googleSearchBtn.classList.remove('active');
plagiarismReportContent.style.display = 'block';
googleReportContent.style.display = 'none';

googleSearchBtn.addEventListener('click', function () {
    googleSearchBtn.classList.add('active');
    plagiarismReportBtn.classList.remove('active');
    googleReportContent.style.display = 'block';
    plagiarismReportContent.style.display = 'none';

    fetch("http://127.0.0.1:8000/google_search/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: textInput.value.trim() })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Received data:", data);

            const analysisText = document.querySelector('.google-report .analysis-text');
            if (analysisText) {
                const hasPlagiarism = data.analysis && data.analysis.some(item => item.similarity >= 0.7);
                analysisText.innerHTML = hasPlagiarism
                    ? '<span class="red-dot"></span> The text is likely to be copied. Here are some sources where it was found:'
                    : '<span class="green-dot"></span> No significant plagiarism detected based on search results.';
            }

            const most = data.most_semantic_match;
            if (most) {
                const circle = document.getElementById('progressCircle1');
                const finalText = document.getElementById('finalScoreText1');
                const statusLabel = document.getElementById('plagiarismStatus1');
                const score = most.similarity;
                const percent = Math.round(score * 100);
                const radius = circle.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;

                circle.style.strokeDasharray = `${circumference}`;
                circle.style.strokeDashoffset = `${circumference}`;

                const offset = circumference - score * circumference;
                circle.style.strokeDashoffset = offset;

                console.log("Setting circle properties:", { score, percent, circumference, offset });
                console.log(finalText);
                let strokeColor, textLabel;

                if (score >= 0.8) {
                    strokeColor = '#d32f2f';
                    textLabel = 'Plagiarized';
                } else if (score >= 0.5) {
                    strokeColor = '#fbc02d';
                    textLabel = 'Possibly Plagiarized';
                } else {
                    strokeColor = '#00c853';
                    textLabel = 'Not Plagiarized';
                }

                circle.setAttribute("stroke", strokeColor);
                finalText.innerHTML = `${percent}%`;

                finalText.style.color = strokeColor;
                statusLabel.textContent = textLabel;

                console.log("Set visualization values:", { percent, strokeColor, textLabel });
            } else {
                console.error("Missing elements for visualization:", {
                    most: !!most,
                    circle: !!circle,
                    finalText: !!finalText,
                    statusLabel: !!statusLabel
                });
            }

            // Search results list
            const searchResultsList = document.querySelector('.google-report .search-results ul');
            if (searchResultsList && data.analysis) {
                searchResultsList.innerHTML = '';

                data.analysis.forEach(result => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                    <p><strong>TITLE: ${result.title || 'No Title Found'}</strong></p>
                    <p>LINK: <a href="${result.url}" class="source-link" target="_blank">${new URL(result.url).hostname}</a></p>
                    <p>Cosine Similarity: <strong>${result.similarity}</strong></p>
                    <p>Jaccard Similarity: <strong>${result.jaccard_similarity}</strong></p>
                    <p>Matched Segments: <strong>${result.matched_segments}</strong></p>
                `;
                    searchResultsList.appendChild(li);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
        });
});


plagiarismReportBtn.addEventListener('click', function () {
    plagiarismReportBtn.classList.add('active');
    googleSearchBtn.classList.remove('active');
    plagiarismReportContent.style.display = 'block';
    googleReportContent.style.display = 'none';
});

googleSearchBtn.addEventListener('click', () => {
    // Show loading overlay
    loadingOverlay.style.display = 'flex';

    // Simulate processing time
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
        plagiarismReportContent.style.display = 'none';
        googleReportContent.style.display = 'block';
    }, 1500);
});

newScanBtn.addEventListener('click', () => {
    // Reset and show input container again
    textInput.value = '';
    placeholderText.style.display = 'block';
    resultsContainer.style.display = 'none';
    inputContainer.style.display = 'block';
});


plagiarismReportBtn.addEventListener('click', () => {
    plagiarismReportContent.style.display = 'block';
    googleReportContent.style.display = 'none';
});

// Initialize the interface
window.addEventListener('load', () => {
    // Check if textInput already has content
    if (textInput.value.trim() !== '') {
        placeholderText.style.display = 'none';
    }
});