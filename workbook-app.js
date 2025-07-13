<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Understanding My Contributions: A Workbook</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc; /* Light blue-gray background */
            color: #334155; /* Darker text */
        }
        .container {
            max-width: 960px;
        }
        .section-card {
            background-color: #ffffff;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            padding: 1.5rem; /* p-6 */
        }
        textarea {
            resize: vertical; /* Allow vertical resizing */
            min-height: 80px; /* Minimum height for text areas */
        }
        /* Auth UI Styles */
        .auth-container {
            z-index: 1000;
        }
        .auth-container button {
            transition: all 0.3s ease;
        }
        .auth-container button:hover {
            transform: translateY(-1px);
        }
        /* Save indicator */
        .save-indicator {
            opacity: 0;
            animation: fadeInOut 2s ease-in-out;
        }
        @keyframes fadeInOut {
            0% { opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
        }
        /* Textarea container */
        .textarea-container {
            position: relative;
        }
        /* Responsive adjustments */
        @media (max-width: 640px) {
            .auth-container {
                top: 1rem;
                right: 1rem;
                left: 1rem;
                text-align: center;
            }
        }
    </style>
    <!-- Firebase SDK -->
    <script type="module" src="workbook-app.js"></script>
</head>
<body class="antialiased">
    <div class="container mx-auto p-4 md:p-8">
        <!-- Header Section -->
        <header class="text-center mb-8 md:mb-12">
            <h1 class="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 rounded-lg p-2">
                Understanding My Contributions to the Relationship Breakdown
            </h1>
            <p class="text-lg md:text-xl italic text-gray-600">
                "If we claim to be without sin, we deceive ourselves" (1 John 1:8).
            </p>
            <p class="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                This workbook is designed to help you reflect on your past actions and understand your contributions to the challenges faced in your relationship. For each section, take time to consider the points and how they resonate with your experience. Use the comment sections to explore your feelings and relate your personal journey.
            </p>
        </header>

        <main class="space-y-8 md:space-y-12">
            <!-- Emotional Neglect Section -->
            <section class="section-card">
                <h2 class="text-2xl md:text-3xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Emotional Neglect</h2>
                <p class="text-gray-700 mb-6">
                    This section focuses on instances where emotional connection and support may have been withheld.
                </p>

                <div class="space-y-6">
                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">I withheld affection.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> How did it feel to withhold affection? What emotions or thoughts came up for you at that time?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Dismissed your stress/feelings because I prioritized my own stress/feelings.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> Reflect on moments where your own stress overshadowed your partner's. What was happening internally for you?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Minimized feelings by dismissing wife's emotions.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> Can you recall specific instances where you might have dismissed your partner's emotions? What was the impact, in your view?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Avoided deep conversations.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> Why did you avoid deep conversations? What fears or discomforts did you experience?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Silent treatment. Withheld communication as punishment and out of indifference.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> How did it feel to give the silent treatment? What did you hope to achieve, or what was the underlying emotion?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Emotionally absent while being physically present. Mentally checked out.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> Describe situations where you were physically present but emotionally distant. What was occupying your mind?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>
                </div>
            </section>

            <!-- Neglecting Affection and Intimacy Section -->
            <section class="section-card">
                <h2 class="text-2xl md:text-3xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Neglecting Affection and Intimacy</h2>
                <p class="text-gray-700 mb-6">
                    This section explores the lack of physical and verbal expressions of love and closeness.
                </p>

                <div class="space-y-6">
                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Rarely hugging, holding hands, or offering comfort.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> What prevented you from offering physical affection or comfort more often?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Ignored intimacy needs without discussion or compromise.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> How did you perceive your partner's intimacy needs? What made it difficult to address them?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Never saying "I love you", giving compliments, or expressing appreciation.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> What was the barrier to expressing love, compliments, or appreciation more frequently?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>
                </div>
            </section>

            <!-- Ignoring Needs Section -->
            <section class="section-card">
                <h2 class="text-2xl md:text-3xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Ignoring Needs</h2>
                <p class="text-gray-700 mb-6">
                    This section addresses instances where your partner's needs may have been overlooked.
                </p>

                <div class="space-y-6">
                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Showing limited interest in wife's daily life and struggles.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> Reflect on your level of engagement in your partner's daily life. What was your mindset at the time?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Expecting emotional labour (listening to my stress) but not reciprocating.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> How did you feel about expecting emotional support without providing it in return?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>
                </div>
            </section>

            <!-- Avoiding Conflict or Connection Section -->
            <section class="section-card">
                <h2 class="text-2xl md:text-3xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Avoiding Conflict or Connection</h2>
                <p class="text-gray-700 mb-6">
                    This section examines how conflict was handled or avoided, and the impact on connection.
                </p>

                <div class="space-y-6">
                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Stonewalling: Refusing to engage.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> Describe situations where you stonewalled. What emotions were you trying to avoid or express?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Suppressing issues to avoid "rocking the boat".</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> What were your fears or motivations behind suppressing issues?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">No Shared Goals: Failing to discuss or plan a future together (finances, family, career).</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> Why was it challenging to discuss or plan a future together? What implications did this have for the relationship?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>
                </div>
            </section>

            <!-- Prioritizing Others Over the Marriage Section -->
            <section class="section-card">
                <h2 class="text-2xl md:text-3xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Prioritizing Others Over the Marriage</h2>
                <p class="text-gray-700 mb-6">
                    This section focuses on instances where the relationship took a backseat to other priorities.
                </p>

                <div class="space-y-6">
                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Never making time for the relationship as a couple.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> What did you prioritize over making time for the relationship? How did this feel?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Work/Games/Pleasure over relationship.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> Reflect on moments where work, hobbies, or personal pleasure took precedence. What was the impact on your partner and the relationship?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>
                </div>
            </section>

            <!-- Gaslighting and Invalidation Section -->
            <section class="section-card">
                <h2 class="text-2xl md:text-3xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Gaslighting and Invalidation</h2>
                <p class="text-gray-700 mb-6">
                    This section addresses actions that may have undermined your partner's reality and feelings.
                </p>

                <div class="space-y-6">
                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Denying your Reality: "I never said that".</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> Can you recall instances where you denied your partner's reality? What was your intention or motivation?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Blaming you for my neglect.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> When you blamed your partner for your neglect, what emotions or thoughts were you trying to avoid or project?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>
                </div>
            </section>

            <!-- Financial or Practical Neglect Section -->
            <section class="section-card">
                <h2 class="text-2xl md:text-3xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Financial or Practical Neglect</h2>
                <p class="text-gray-700 mb-6">
                    This section examines contributions to financial or practical imbalances.
                </p>

                <div class="space-y-6">
                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Refusing to contribute to equal or more share of bills.</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> What were your reasons for not contributing equally or more to shared expenses?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Sabotaging Financial Stability</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> If you engaged in actions that sabotaged financial stability, what was happening in your mind at that time?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Disregarding Partners Time – making last minute changes without consideration</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> How did you perceive your partner's time, and why did you make last-minute changes without consideration?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>
                </div>
            </section>

            <!-- Why it Hurts: Understanding the Impact Section -->
            <section class="section-card">
                <h2 class="text-2xl md:text-3xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Why it Hurts: Understanding the Impact</h2>
                <p class="text-gray-700 mb-6">
                    These are common feelings experienced by someone on the receiving end of these actions. Reflect on how your actions might have contributed to these feelings in your partner.
                </p>

                <div class="space-y-6">
                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Unimportant ("Do I even matter to them?")</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> How do you feel, reflecting on the possibility that your actions made your partner feel unimportant?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Alone in the Marriage ("Being a roommate, not a spouse.")</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> Consider the idea of your partner feeling like a roommate, not a spouse. What thoughts come to mind?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>

                    <div class="textarea-container">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Guilty for Needing More ("Maybe I'm asking too much")</h3>
                        <p class="text-gray-600 mb-3"><em>Comment Section:</em> What is your reaction to the thought that your partner might have felt guilty for wanting more from the relationship?</p>
                        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your reflections here..."></textarea>
                    </div>
                </div>
            </section>

            <!-- Name the Issue using the "I felt" statement. Section -->
            <section class="section-card">
                <h2 class="text-2xl md:text-3xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Name the Issue using the "I felt" statement.</h2>
                <p class="text-gray-700 mb-6">
                    Now, take some time to formulate "I felt" statements based on your reflections. For example, "I felt disconnected when I avoided deep conversations."
                </p>
                <div class="textarea-container">
                    <p class="text-gray-600 mb-3"><em>Comment Section:</em> Use this space to write out your "I felt" statements, taking ownership of your contributions and acknowledging the potential impact on your partner.</p>
                    <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" placeholder="Write your 'I felt' statements here..."></textarea>
                </div>
            </section>
        </main>

        <!-- Footer Section -->
        <footer class="text-center mt-12 py-6 text-gray-500 text-sm">
            <p>&copy; 2025 Relationship Reflection Workbook. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>