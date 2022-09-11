const faqData = [
    {
        section: "Project",
        data: [
            {
                question: "What is this website?",
                answer: "This is a project by team Sanzal for Incubate Nepal 2022. More about Incubate Nepal."
            }
        ]

    },
    {
        section: "Sentiment Analysis",
        data: [
            {
                question: "What algorithm is used for sentiment analysis?",
                answer: "We are using a python library called text_blob for sentiment analysis. It offers a simple Naive Bayes classifer. Certain words (mainly adjectives) are given prior score from the training data. Such words are used as references to calculate scores for neighboring words. This algorithm then averages scores of each word to get the score for the whole sentence." 
            },
            {
                question: "How good is the sentiment classification?",
                answer: "The algorithm performs well for most of our data but because it is a Naive Bayes, it has it's limitation when it comes to understanding complex context like scarcasm, and sometimes even double negatives. "
            },
            {
                question: "Why are you not using deep learning?",
                answer: "It's mainly because we want to scope our project to 8 weeks and there was simply not enough time. We do realize the shortcomings of our current algorithm and hope to switch to more accurate model in future."
            }
        ]
    },
    {
        section: "Network",
        data: [
            {
                question: "Question about Network?",
                answer: "Answer about Network"
            }
        ]
    },
];

export {faqData};