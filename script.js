const questions = [
    {
        question:"निम्नलिखित में से कौनसा स्रोत ऐतिहासिक साहित्यिक स्रोत नहीं हैं ?",
        answers: [
            { text: "अभिलेख", correct: true},
            { text: "जैनधर्म ग्रन्थ", correct: false},
            { text: "बौद्ध ग्रन्थ", correct: false},
            { text: "ब्राह्मण ग्रन्थ", correct: false},
        ] 
    },

    {
        question:"उत्तरवैदिक साहित्य का रचना क्षेत्र है",
        answers: [
            { text: "अवध", correct: false},
            { text: "कुरु - पांचाल", correct: true},
            { text: "मिथिला", correct: false},
            { text: "सौराष्ट्र", correct: false},
        ] 
    },

    {
        question:"फाह्यान का भारत आगमन काल है",
        answers: [
            { text: "299 ई .", correct: false},
            { text: "399 ई .", correct: true},
            { text: "499 ई .", correct: false},
            
        ] 
    },

    {
        question:"अथर्ववेद में वर्णित है",
        answers: [
            { text: "यज्ञ अनुष्ठान की विधियाँ", correct: false},
            { text: "संगीत सम्बन्धित विधियाँ", correct: false},
            { text: "उपर्युक्त में से कोई नहीं", correct: false},
            { text: "चिकित्सा , जादू - टोना , धनुर्विधा , ताबीज की विधियाँ", correct: true},
        ] 
    },

    {
        question:"तमिल लेखक ' परणार ' किस काल से सम्बन्धित है ?",
        answers: [
            { text: "गुप्तवंश", correct: false},
            { text: "चालुक्य वंश", correct: false},
            { text: "मौर्यवंश", correct: true},
            { text: "शुंगवंश", correct: false},
        ] 
    },

    {
        question:"पंचमार्कड सिक्के कहलाते हैं",
        answers: [
            { text: "आहत सिक्के", correct: true},
            { text: "चाँदी के सिक्के", correct: false},
            { text: "सोने के सिक्के", correct: false},
            { text: "पर्युक्त में से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"कौनसी रचना कालिदास की नहीं हैं ?",
        answers: [
            { text: "अभिज्ञानशाकुन्तलम्", correct: false},
            { text: "मालविकाग्निमित्रम्", correct: false},
            { text: "मुद्राराक्षस", correct: true},
            { text: "रघुवंश", correct: false},
        ] 
    },

    {
        question:"कौनसा चीनी यात्री नहीं है ?",
        answers: [
            { text: "एरियन", correct: true},
            { text: "फाह्यान", correct: false},
            { text: "सुंगयुन", correct: false},
            { text: "ह्वेनसांग", correct: false},
        ] 
    },

    {
        question:"अरबी यात्री सुलेमान की रचना है",
        answers: [
            { text: "किताब - फुतूह - अल - विल्दान", correct: false},
            { text: "तहकीक - ए - हिन्द", correct: false},
            { text: "तारणपंथी", correct: false},
            { text: "सिलसिला - तुल- तवारीख", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से किसमें उत्तरापथ और हखमी साम्राज्य का वर्णन है ?",
        answers: [
            { text: "इण्डिका में", correct: false},
            { text: "थेरावली में", correct: false},
            { text: "सि यु - की में", correct: false},
            { text: "हिस्टोरिका में", correct: true},
        ] 
    },

    {
        question:" 'इण्डिका' के लेखक हैं",
        answers: [
            { text: "चारस", correct: false},
            { text: "निआर्कस", correct: false},
            { text: "मेगस्थनीज", correct: true},
            { text: "सुंगमुन", correct: false},
        ] 
    },

    {
        question:" हिस्टोरिका ' के लेखक हैं",
        answers: [
            { text: "अरिस्टोबुलस", correct: false},
            { text: "चारस", correct: false},
            { text: "शेक्सपियर", correct: false},
            { text: "हेरोडोट्स", correct: true},
        ] 
    },

    {
        question:"कौनसी शाखा कृष्ण यजुर्वेद से सम्बन्धित नहीं है ?",
        answers: [
            { text: "कपिष्ठल", correct: false},
            { text: "काठक", correct: false},
            { text: "मैत्रायणी", correct: false},
            { text: "वाजसनेयी", correct: true},
        ] 
    },

    {
        question:"हत्कथामंजरी के लेखक है",
        answers: [
            { text: "क्षेमेन्द्र", correct: true},
            { text: "ब्रह्मदेव", correct: false},
            { text: "वाणभट्ट", correct: false},
            { text: "सोमदेव", correct: false},
        ] 
    },

    {
        question:"थेरावली है ?",
        answers: [
            { text: "जैन ग्रन्थ", correct: true},
            { text: "बौद्ध ग्रन्थ", correct: false},
            { text: "ब्राह्मण ग्रन्थ", correct: false},
            { text: "वैदिक ग्रन्थ", correct: false},
        ] 
    },

    {
        question:"बाँसखेडा ताम्रपत्र अभिलेख",
        answers: [
            { text: "आजमगढ़ ( उ . प्र . ) में", correct: false},
            { text: "चिराँद ( बिहार )", correct: false},
            { text: "नालन्दा ( बिहार )", correct: false},
            { text: "शाहजहाँपुर ( उ.प्र . ) में", correct: true},
        ] 
    },

    {
        question:"एरण स्तम्भ लेख गुप्तकाल के किस शासक के समय",
        answers: [
            { text: "बुद्धगुप्त", correct: false},
            { text: "भानुगुप्त", correct: true},
            { text: "ष्णुगुप्त", correct: false},
            { text: "न्यगुप्त", correct: false},
        ] 
    },

    {
        question:"विक्रमांकदेवचरितम् में चालुक्य वंश का इतिहास है , जिसे लिखा है",
        answers: [
            { text: "कल्हण", correct: false},
            { text: "कालिदास", correct: false},
            { text: "भारवी", correct: false},
            { text: "विल्हण", correct: true},
        ] 
    },

    {
        question:"ध्रुवस्वामिनी मोहर ' किस वंश से सम्बन्धित है ?",
        answers: [
            { text: "कल्याणी के चालुक्य वंश से", correct: false},
            { text: "गुप्त वंश से", correct: true},
            { text: "मौर्य वंश से", correct: false},
            { text: "शुंगवंश से", correct: false},
        ] 
    },

    {
        question:"चीनी यात्री ह्वेनसांग की पुस्तक सी यु - की का अनुवाद किया",
        answers: [
            { text: "कैथरीन क्लेमाँ ने", correct: false},
            { text: "प्रो . रोमिला थापर ने", correct: false},
            { text: "वाटर्स ने", correct: true},
            { text: "वी . ए . स्मिथ", correct: false},
        ] 
    },

    {
        question:"मजमल उत् तवारीख को लिखा",
        answers: [
            { text: "अबुल कलाम", correct: false},
            { text: "अबुल हसनअली", correct: true},
            { text: "अलबरूनी", correct: false},

        ] 
    },

    {
        question:"तहकीक - उल - हिन्द के लेखक थे",
        answers: [
            { text: "अबुल कलाम", correct: false},
            { text: "बुल हसन", correct: false},
            { text: "अलबरूनी", correct: true},
            { text: "कोई नहीं", correct: false},
        ] 
    },

    {
        question:"सामवेद में मन्त्र है",
        answers: [
            { text: "1550 मन्त्र", correct: true},
            { text: "1600 मन्त्र", correct: false},
            { text: "2000 मन्त्र", correct: false},
            { text: "2500 मन्त्र", correct: false},
        ] 
    },

    {
        question:"' बौद्ध धर्म का इतिहास ' के लेखक थे",
        answers: [
            { text: "अलवेरूनी", correct: false},
            { text: "मेरुतुंग", correct: false},
            { text: "लामा तारानाथ", correct: true},
            { text: "ह्वेनसांग", correct: false},
        ] 
    },

    {
        question:"राणों की संख्या किसके अनुसार अट्ठारह है ?",
        answers: [
            { text: "चार्वाक दर्शन के अनुसार", correct: false},
            { text: "मत्स्यपुराण के अनुसार", correct: false},
            { text: "वराहपुराण के के अनुसार", correct: true},
            { text: "उपर्युक्त सभी के अनुसार", correct: false},
        ] 
    },

    {
        question:"भारत के प्राचीनतम सिक्के थे",
        answers: [
            { text: "आहत", correct: true},
            { text: "चमड़े के सिक्के", correct: false},
            { text: "सोने के सिक्के", correct: false},
            { text: "कोई नहीं", correct: false},
        ] 
    },

    {
        question:"गुप्तकालीन सिक्के उत्खनन से प्राप्त हुए हैं",
        answers: [
            { text: "चिरौद", correct: false},
            { text: "बयाना दफीना", correct: true},
            { text: "ह्मगिरि", correct: false},
            { text: "साँची", correct: false},
        ] 
    },

    {
        question:"खारवेल का हाथीगुम्फा ' सम्बन्धित है—",
        answers: [
            { text: "गुप्तकाल से", correct: false},
            { text: "चालुक्य वंश से", correct: false},
            { text: "मौर्य काल से", correct: false},
            { text: "शुंगवंश से", correct: true},
        ] 
    },

    {
        question:"कर्ण चौपड गुहा अभिलेख किस काल से सम्बन्धित है ?",
        answers: [
            { text: "गुप्तकाल से", correct: false},
            { text: "मौर्यकाल से", correct: true},
            { text: "शुंगवंश से", correct: false},
            { text: "हर्षकाल से", correct: false},
        ] 
    },

    {
        question:"अभिलेखों से सम्बन्धित कौनसा कथन असत्य है ?",
        answers: [
            { text: "अभिलेख उत्खनन से प्राप्त होते हैं एवं वे पुस्तक के समान होते हैं", correct: true},
            { text: "अभिलेख पहले प्राकृत भाषा में एवं इसके बाद क्रमशः संस्कृत तमिल , तेलुगू में लिखे गये", correct: false},
            { text: "अभिलेख लेखन में सर्वाधिक ब्राह्मी लिपि , खरोष्ठि लिपि एवं अरामाईक लिपि का प्रयोग किया जाता था", correct: false},
            { text: "लेखन के अनुसार अभिलेख स्तम्भ , ताम्र शिला एवं गुहा अभिलेखों में वर्गीकृत है", correct: false},
        ] 
    },

    {
        question:"एतुतोकई है",
        answers: [
            { text: "उर्दू साहित्य", correct: false},
            { text: "दिक साहित्य", correct: false},
            { text: "संगम साहित्य", correct: true},
            { text: "संस्कृत साहित्य", correct: false},
        ] 
    },

    {
        question:"उत्खनन से प्राप्त सामग्री का कालक्रम ज्ञात किया जाता है ?",
        answers: [
            { text: "C - 14 से", correct: true},
            { text: "मुद्राओं से", correct: false},
            { text: "स्मारकों से", correct: false},
            { text: "उपर्युक्त में से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"पुरातत्त्व से प्राप्त ऐतिहासिक सामग्री का वर्गीकरण नहीं",
        answers: [
            { text: "भिलेख", correct: false},
            { text: "ब्राह्मण ग्रन्थ", correct: true},
            { text: "मुद्राएँ एवं सिक्के", correct: false},
            { text: "स्मारक", correct: false},
        ] 
    },

    {
        question:"ऋग्वेद सम्बन्धित है",
        answers: [
            { text: "आर्यों से", correct: true},
            { text: "किरातों से", correct: false},
            { text: "कुषाणों से", correct: false},
            { text: "शवर पुलिन्दों से", correct: false},
        ] 
    },

    {
        question:"पाण्ड्य , चोल , चेर राजवंशों का वर्णन हुआ",
        answers: [
            { text: "अर्थशास्त्र में", correct: false},
            { text: "बौद्ध धर्म साहित्य में", correct: false},
            { text: "राजतरंगिणी में", correct: false},
            { text: "संगम साहित्य में", correct: true},
        ] 
    },

    {
        question:"अर्थशास्त्र का रचनाकाल है",
        answers: [
            { text: "ईसा की 2-3 शताब्दी", correct: true},
            { text: "ईसा की चतुर्थ शताब्दी", correct: false},
            { text: "की पञ्चम शताब्दी", correct: false},
            { text: "ईसा की प्रथम शताब्दी", correct: false},
        ] 
    },

    {
        question:"कौनसा कथन ' अर्थशास्त्र ' से सम्बन्धित है ?",
        answers: [
            { text: "अर्थशास्त्र की रचना कौटिल्य या चाणक्य ने की", correct: false},
            { text: "र्थशास्त्र में मौर्यकालीन प्रशासन , चन्द्रगुप्त मौर्य की शासन व्यवस्था का वर्णन है", correct: false},
            { text: "अर्थशास्त्र में राज्य की उत्पत्ति राज्य का संगठन , राज्य के अधिक एवं कर्तव्यों का वर्णन है", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },

    {
        question:"अर्थशास्त्र विभक्त है",
        answers: [
            { text: "100 प्रकरणों एवं 10 अधिकरणों में", correct: false},
            { text: "15 अधिकरणों एवं 180 प्रकरणों में", correct: true},
            { text: "25 अधिकरणों एवं 250 प्रकरणों में", correct: false},
            { text: "5 अधिकरणों एवं 50 प्रकरणों में", correct: false},
        ] 
    },

    {
        question:"ऐतिहासिक साहित्य ' राजतरंगिणी ' एवं ' अर्थशास्त्र ' में एक प्रमुख समानता है",
        answers: [
            { text: "दोनों की भाषा संस्कृत है", correct: true},
            { text: "दोनों की रचना 12 वीं शताब्दी में हुई", correct: false},
            { text: "दोनों में कश्मीर का इतिहास वर्णित है", correct: false},
            { text: "पर्युक्त में से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"जैन ग्रन्थों के सम्बन्ध में कौनसा कथन सत्य है ?",
        answers: [
            { text: "जैन ग्रन्थों का संकलन गुजरात ( वल्लभी ) में ईसा की छठी शताब्दी में हुआ", correct: false},
            { text: "जैन ग्रन्थों में बिहार , पूर्वी उत्तर प्रदेश की जानकारी सन्निहित है", correct: false},
            { text: "जैन धर्म ग्रन्थों से महावीरकालीन राजनीतिक , सामाजिक एवं आर्थिक जीवन की जानकारी सन्निहित है", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },

    {
        question:"जैन धर्म ग्रन्थों की भाषा है",
        answers: [
            { text: "उर्दू", correct: false},
            { text: "पालि", correct: false},
            { text: "प्राकृत भाषा", correct: true},
            { text: "संस्कृत", correct: false},
        ] 
    },

    {
        question:"' त्रिपिटिकों ' की भाषा है",
        answers: [
            { text: "उर्दू", correct: false},
            { text: "पालि", correct: false},
            { text: "प्राकृत", correct: false},
            { text: "संस्कृत", correct: false},
        ] 
    },

    {
        question:"कौनसा ग्रन्थ ऋग्वेद से साम्यता रखता है ?",
        answers: [
            { text: "ईरानी ग्रन्थ जेंद अवेस्ता", correct: true},
            { text: "चीनी ग्रन्थ फो क्यो की", correct: false},
            { text: "चीनी ग्रन्थ शी - यू- की", correct: false},
            { text: "वैदिक ग्रन्थ यजुर्वेद", correct: false},
        ] 
    },

    {
        question:"वर्तमान भारत की दण्ड संहिता का मौलिक आधार है",
        answers: [
            { text: "उपनिषद्", correct: false},
            { text: "महाभारत", correct: false},
            { text: "रामायण", correct: false},
            { text: "स्मृतियाँ", correct: true},
        ] 
    },

    {
        question:"मनुस्मृति का रचनाकाल है",
        answers: [
            { text: "200 ई . से 100 ई . के मध्य", correct: false},
            { text: "200 ई . से 200 ई . के मध्य", correct: true},
            { text: "200 ई . से 300 ई . के मध्य", correct: false},
            { text: "200 ई . से 500 ई . के मध्य", correct: false},
        ] 
    },

    {
        question:"जातकों में निम्नलिखित में से वर्णित हैं ( 1 ) कोशल , अंग , मगध एवं काशी की प्रशासनिक व्यवस्था . ( 2 ) तीसरी - चौथी शताब्दी ई . पू . के प्राचीनतम भारतीयों का इतिहास . ( 3 ) बुद्ध के पूर्व जन्म का वर्णन . ( 4 ) सृष्टि की कहानी .",
        answers: [
            { text: "केवल 1,2,3", correct: true},
            { text: "केवल 1,3,4", correct: false},
            { text: "केवल 2,3,4", correct: false},
            { text: "उपर्युक्त सभी", correct: false},
        ] 
    },

    {
        question:"' खुद्दक निकाय ' है",
        answers: [
            { text: "अष्टांगिक मार्ग", correct: false},
            { text: "जातकों का एक अंग", correct: true},
            { text: "जैनधर्म के त्रिरत्न", correct: false},
            { text: "उपर्युक्त में से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"वंशानुचरित सम्बन्धित हैं",
        answers: [
            { text: "आयुर्वेद से", correct: false},
            { text: "पुराणों से", correct: true},
            { text: "वेदों से", correct: false},
            { text: "सांख्य दर्शन से", correct: false},
        ] 
    },

    {
        question:"पुराणों की संख्या है",
        answers: [
            { text: "29", correct: false},
            { text: "अट्ठारह", correct: true},
            { text: "एक सौ आठ", correct: false},
            { text: "तीस", correct: false},
        ] 
    },

    {
        question:"पुराणों की रचना हुई",
        answers: [
            { text: "उत्तर वैदिककाल में", correct: false},
            { text: "गुप्तकाल में", correct: true},
            { text: "मौर्यकाल में", correct: false},
            { text: "वैदिककाल में", correct: false},
        ] 
    },






];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 