// Get buttons
const lightModeBtn = document.getElementById("lightMode");
const nav = document.getElementById("nav");
const darkModeBtn = document.getElementById("darkMode");
const profilePic = document.getElementById("profilePic");
const dropdown = document.getElementById("dropdown");
const arrow = document.getElementById("arrow");
const bell = document.getElementById("bell");
const menuItems = document.querySelectorAll(".left-menu-element");
const contentDivs = document.querySelectorAll(".content-div");
const content = document.getElementById("content");


lightModeBtn.addEventListener("click", () => {
    lightModeBtn.classList.add("active");
    darkModeBtn.classList.remove("active");

    arrow.style.color = "#222222";
    bell.style.color = "#222222";
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
    bell.style.color = "#4a6cf7"
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
    document.querySelectorAll('.profile-container .dropdown p, .profile-container .dropdown a').forEach(el => {
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

    document.querySelectorAll(".icon-container h3, .icon-container p").forEach(el => {
        el.style.color = "white";
    });
    document.querySelectorAll("h1, h2, h3, h4, .footer-link, .features-section p, .tech p, .footer p")
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
const lineNumbers = document.getElementById('lineNumbers');
const codeEditorContainer = document.getElementById('codeEditorContainer');

const sampleCode = `// Type some code ->
console.log("o0a8 j1Il1 g9qCcQ --+>");
// 0 ó ü ï ð ç Æ É œ

function updateGutters(cm) {
    var gutters = cm.display.gutters,
        __specs = cm.options.gutters;

    removeChildren(gutters);

    for (var i = 0; i < specs.length; ++i) {
        var gutterClass = __specs[i];
        var gElt = gutters.appendChild(
            elt(
                "div",
                null,
                "CodeMirror-gutter " + gutterClass
            )
        );
        if (gutterClass == "CodeMirror-linenumbers") {
            cm.display.lineGutter = gElt;
            gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
        }
    }
    gutters.style.display = i ? "" : "none";
    updateGutterSpace(cm);

    return false;
}`;

// Initialize editor with sample code
codeEditor.textContent = sampleCode;
updateLineNumbers();
applySyntaxHighlighting();

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
            updateLineNumbers();
            applySyntaxHighlighting();
        }, 100); // Debounce for better performance
    }
});

// Synchronize scrolling
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
checkButton.addEventListener('click', function () {
    reportCard.classList.remove('hidden');
});

// Function to update line numbers
function updateLineNumbers() {
    const lines = codeEditor.textContent.split('\n');

    // Only rebuild if necessary
    if (lineNumbers.childElementCount !== lines.length) {
        lineNumbers.innerHTML = '';

        const fragment = document.createDocumentFragment();
        for (let i = 0; i < lines.length; i++) {
            const lineNum = document.createElement('div');
            lineNum.className = 'line-number';
            lineNum.textContent = i + 1;
            fragment.appendChild(lineNum);
        }

        lineNumbers.appendChild(fragment);
    }
}

// Optimized syntax highlighting function
function applySyntaxHighlighting() {
    // Save selection state
    const selection = window.getSelection();
    const range = selection.rangeCount > 0 ? selection.getRangeAt(0).cloneRange() : null;
    let cursorNode, cursorOffset;

    if (range) {
        cursorNode = range.startContainer;
        cursorOffset = range.startOffset;
    }

    // Get the code
    const code = codeEditor.textContent;

    // Process the code - using optimized regex patterns with fewer replacements
    let html = code
        .replace(/[&<>]/g, char => {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;'
            }[char];
        })
        // Combine patterns to minimize DOM operations
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

    // Apply the highlighted HTML
    if (codeEditor.innerHTML !== html) {
        codeEditor.innerHTML = html;

        // Restore selection if it existed
        if (range && cursorNode && cursorNode.nodeType === Node.TEXT_NODE) {
            try {
                // Create a new range
                const newRange = document.createRange();

                // Find the equivalent position in the new DOM
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

// Initial setup
updateLineNumbers();
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

let textFieldCount = 2;

// Add a new text field
addButton.addEventListener('click', function () {
    textFieldCount++;
    const newTextField = document.createElement('div');
    newTextField.className = 'text-field';
    newTextField.innerHTML = `<textarea placeholder="Enter text ${textFieldCount} here..."></textarea>`;
    container.appendChild(newTextField);
});

// Compare button click handler
compareButton.addEventListener('click', function () {
    const textFields = document.querySelectorAll('.text-field textarea');
    let filledFields = 0;

    // Count filled text fields
    textFields.forEach(field => {
        if (field.value.trim() !== '') {
            filledFields++;
        }
    });

    // Show error if less than 2 fields are filled
    if (filledFields < 2) {
        errorMessage.style.display = 'block';
        reportSection.style.display = 'none';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000); // Hide after 5 seconds
    } else {
        errorMessage.style.display = 'none';

        // Show or hide document 3 related elements based on the number of documents
        const showDoc3 = filledFields >= 3;

        tfIdf13.style.display = showDoc3 ? 'table-row' : 'none';
        tfIdf23.style.display = showDoc3 ? 'table-row' : 'none';
        semantic13.style.display = showDoc3 ? 'table-row' : 'none';
        semantic23.style.display = showDoc3 ? 'table-row' : 'none';
        doc3TfIdf.style.display = showDoc3 ? 'list-item' : 'none';
        doc3Semantic.style.display = showDoc3 ? 'list-item' : 'none';

        // Adjust "least similar" messages if doc3 is not present
        if (!showDoc3) {
            leastSimilarTfIdf.textContent = "Least similar pair: Document 1 and Document 2 (49.99%)";
            leastSimilarSemantic.textContent = "Least similar pair: Document 1 and Document 2 (82.93%)";
        } else {
            leastSimilarTfIdf.textContent = "Least similar pair: Document 1 and Document 3 (25.90%)";
            leastSimilarSemantic.textContent = "Least similar pair: Document 2 and Document 3 (60.64%)";
        }

        // Show the report section
        reportSection.style.display = 'block';

        // In a real application, this is where you would process the texts
        // and generate actual similarity scores
    }
});
const appIcon = document.querySelector('.app-icon');
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
        "Ինչ է անում ձեր գրագողության ստուգման համակարգը՞":
            "Մեր համակարգը ստուգում է տեքստի օրիգինալությունը՝ համեմատելով այն առկա տվյալների բազայի և այլ աղբյուրների հետ՝ հայտնաբերելով հնարավոր գրագողությունը։Ինչպես նաև կարող եք օգտագործել մեր հավելվածը և որոնել նմանատիպ նյութեր որոնողական համակարգում։ Կարող եք մուքագրել մի քանի տարբեր փաստաթղթեր և համեմատել դրանք իրար միջև նմանություն գտնելու համար։Կարող եմ ուղղորդել ձեզ ինչպես օգտվել մեր հավելվածից։Ցանկանո՞ւմ եք։",
        "Ինչպես է աշխատում ձեր համակարգը՞":
            "Մեր կայքը աշխատում է հիմնված մեքենայական ուսուցման և խորը ուսուցման մոդելների վրա։ Դուք պարզապես մուտքագրում եք տեքստը, և մեր արհեստական բանականության մոդելը համեմատում է այն մեր տվյալների բազայի մեջ գտնվող նյութերի հետ՝ տրամադրելով նմանության տոկոս և մանրամասն հաշվետվություն։",
        "Ինչպիսի աղբյուրների հետ եք համեմատում տեքստերը՞":
            "Մենք համեմատում ենք մեր STEM ոլորտի տվյալների բազայի նյութերի հետ՝ օգտագործելով մեր մշակած տվյալներ բազան։ Այլ ոլորտի նյութերի յուրօրինակությունը ստուգելու համար ևս ունենք մոդել, որը ստուգում է արդյոք որոնողական համակարգում առկա է նման հոդված և տրամադրում մանրամասն հաշվետվություն։",
        "Ինչպե՞ս կարող եմ ստուգել իմ տեքստը":
            "Պարզապես գրանցվեք կամ մուտք գործեք մեր համակարգ, հետո տեղադրեք ձեր տեքստը համապատասխան դաշտում և սեղմեք \"Ստուգել\" կոճակը։ Մեր համակարգը կվերլուծի ձեր տեքստը և կներկայացնի արդյունքները։ Եթե հարցեր առաջացան կարող եք դիտել ուղղորդող հոլովակը անցնելով հետևյալ հղումով https://www.youtube.com/watch?v=Mm6g8Nlaa7c ։",
        "Կարո՞ղ եմ օգտագործել համակարգը առանց գրանցվելու":
            "Ոչ, մեր ծառայություններից օգտվելու համար հարկավոր է գրանցվել։ Սա մեզ օգնում է ապահովել ձեր տվյալների անվտանգությունը և տրամադրել անհատականացված ծառայություններ։",
        "Ինչպե՞ս կարող եմ տեսնել ստուգման արդյունքները":
            "Ստուգումից հետո դուք կստանաք մանրամասն հաշվետվություն, որը կներառի գրագողության տոկոսի ցուցանիշը և աղբյուրների հղումները։",
        "Ձեր համակարգն անվճա՞ր է":
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
        messageDiv.innerHTML = text + '<div class="bot-avatar"><img src="http://127.0.0.1:8000/static/images/chatbotlogo.png" alt="Robert Avatar"></div>';
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
const googleReportContent = document.getElementById('googleReportContent');
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

scanBtn.addEventListener('click', () => {
    if (textInput.value.trim() === '') {
        alert('Please enter text or upload a file to check for plagiarism.');
        return;
    }

    loadingOverlay.style.display = 'flex';

    setTimeout(() => {
        loadingOverlay.style.display = 'none';
        inputContainer.style.display = 'none';
        resultsContainer.style.display = 'block';

        plagiarismReportBtn.classList.add('active');
        googleSearchBtn.classList.remove('active');
        plagiarismReportContent.style.display = 'block';
        googleReportContent.style.display = 'none';

        const lines = textInput.value.trim().split('\n');
        if (lines.length > 0 && lines[0].trim() !== '') {
            contentTitle.textContent = lines[0].trim();
        }
    }, 2000);
});

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