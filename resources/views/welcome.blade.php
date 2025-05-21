<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plagiarism Detector</title>
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    {{-- <link rel="stylesheet" href="{{asset("styles/style.css")}}">--}}
    <script defer src="{{asset("scripts/admin-panel.js")}}"></script>
    <script src="{{asset("https://kit.fontawesome.com/a076d05399.js")}}" crossorigin="anonymous"></script>
    {{-- <script src="https://cdn.tailwindcss.com"></script>--}}
</head>

<body class="welcome-page">
    <header>
        <nav>
            <div id="header-img">
                <a href="/"><img src="static/images/logo.png" alt="Logo"></a>
            </div>
            <div class="nav-container">
                <a href="{{route('login')}}" class="sign-in">Sign in</a>
                <a href="{{route('register')}}" class="sign-up">Sign up</a>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="title-wrapper">
            <h1>Your Free<br>Plagiarism<br>Detector</h1>
            <p>This is an AI powered free app which is developed for detecting plagiarism.</p>
            <a href="/register" class="btn-primary">Start exploring ➔</a>
            <div class="underline"> <img src="static/images/pointdoodle.png" alt=""> </div>
        </div>
        <div class="hero-image">
            <img src="static/images/image1.png" alt="Original vs Plagiarism Text Comparison">
        </div>
    </section>

    <section class="features">
        <div class="background-wrapper">
            <div class="feature_img">
                <div class="feature">
                    <img src="static/images/image2.png" alt="Icon 1">
                </div>
                <div class="feature">
                    <img src="static/images/image3.png" alt="Icon 2">
                </div>
                <div class="feature">
                    <img src="static/images/image4.png" alt="Icon 3">
                </div>
            </div>

            <div class="description">
                <h3>How does our AI plagiarism checker work?</h3>
                <p>Our AI-powered plagiarism checker is the most advanced tool with a large database to detect
                    plagiarism in your text.</p>

                <div class="process-steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>Text Plagiarism Checker</h4>
                            <p>Our AI powered models analyzes your document's structure, writing style, and content
                                patterns.</p>
                        </div>
                    </div>

                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>Source Code Plagiarism Checker</h4>
                            <p>Your source code is compared against vast repositories, including open-source projects,
                                academic codebases, and online coding platforms, to detect potential plagiarism.</p>
                        </div>
                    </div>

                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>Results &amp; Report</h4>
                            <p>Receive a detailed similarity report with source links and percentage matches.</p>
                        </div>
                    </div>
                </div>

                <a href="/register" class="try-button">Try it for free</a>
            </div>
        </div>
    </section>

    <!-- Chatbot start-->

    <!-- <div id="app-icon">
                <img src="{{asset('static/images/chatbotlogo.png')}}" alt="Detto Icon">
            </div>

            <div class="chatbot-container">
                <div class="chatbot-header">
                    <div class="chatbot-header-left">
                        <div class="chatbot-logo">
                            <img src="{{asset('static/images/chatbotlogo.png')}}" alt="Detto Logo">
                        </div>
                        <div>
                            <div class="chatbot-title">Assistant</div>
                            <div class="chatbot-online">Online</div>
                        </div>
                    </div>
                    <div class="chatbot-close">✕</div>
                </div>

                <div class="chatbot-content">
                    <div class="message-bubble bot-message">
                        Hi there! I am Robert. I will be assisting you today.
                        <br>Do you need help?
                        <div class="bot-avatar">
                            <img src="{{asset('static/images/chatbotlogo.png')}}" alt="Robert Avatar">
                        </div>
                    </div>
                    <div class="option-buttons">
                        <button class="option-button">Yes</button>
                        <button class="option-button">No</button>
                    </div>
                </div>

                <div class="chatbot-footer">
                    <div class="chatbot-tools">
                        <div class="tool-button">
                            📋 <span>FAQs</span>
                        </div>
                    </div>
                    <div class="chatbot-input-container">
                        <input type="text" class="chatbot-input" placeholder="Type your message here...">
                        <div class="send-button">➤</div>
                    </div>
                </div>
            </div>
        </div> -->
    
    <!-- Chatbot end -->
    @include('layouts.footer')

</body>
<!-- End welcome page -->

</html>