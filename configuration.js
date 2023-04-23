const feedback = [
// Overall impression
    {label:"Well written",message:"This is a  well-written manuscript. ",category:"manuscript",grade:"A" ,status:"Strengths"},
    {label:"Reflections",message:"The manuscript includes several convincing reflections. This is very postive.",category:"manuscript",grade:"A",status:"Strengths"},
    {label:"Very well written",message:"This is a very well-written manuscript.",category:"manuscript",grade:"A",status:"Strengths"},
    {label:"Relatively well-written",message:"This ia a relatively well written manuscript.",category:"manuscript",grade:"B",status:"Strengths"},
    {label:"Good manuscript",message:"This is a good manuscript.",category:"manuscript",grade:"C",status:"Strengths"},
    {label:"Well done!",message:"Well done!",category:"manuscript",grade:"A",status:"Strengths"},

// Language
    {label:"Unclear manuscript",message:"The manuscript is a bit unclear and hard to understand.",category:"manuscript",grade:"D",status:"Points for improvement"},
    {label:"Structure?",message:"You could possibly have worked more with the structure of the presentation to make it more understandable.",category:"manuscript",grade:"D",status:"Points for improvement"},
    {label:"Few details",message:"There could me more meat on the bone in the manuscript. You could have provided more details.",category:"manuscript",grade:"D" ,status:"Points for improvement"},
    {label:"Some language issues",message:"There are some language issues in the mansuscript you could have easily eliminated before submission. It can be useful to get feedback on your manuscript from others.",category:"manuscript",grade:"C" ,status:"Points for improvement"},
    {label:"Incomprehensible",message:"The language issues in the manuscript makes the contents hard to udnerstand.",category:"manuscript",grade:"D" ,status:"Points for improvement"},
    {label:"Unfinished",message:"The manuscript appears incomplete and unfinished. It is therefore difficult to comment much on the contents.",category:"manuscript",grade:"F" ,status:"Points for improvement"},
    {label:"More headings",message:"It would help the reader if you included more headings.",category:"manuscript",grade:"D" ,status:"Points for improvement"},
    {label:"Numbered figures",message:"You should number your figures so that they can be referred to in the text.",category:"manuscript",grade:"D" ,status:"Points for improvement"},
    {label:"Stolen image?",message:"An image appears taken from somewhere else without credit. Remember to credit the source of other's work to prevent being accused of plagiarism.",category:"manuscript",grade:"F" ,status:"Points for improvement"},
   {label:"Very good",message:"Not much to critisize here. Great work!",category:"manuscript",grade:"A" ,status:"Points for improvement"},

// Research questions
    {label:"Exciting RQ",message:"You have landed on a exceptionally exciting research question.",category:"research question",grade:"A",status:"Strengths"},
    {label:"Very good RQ",message:"You have presented a very good research question.",category:"research question",grade:"B",status:"Strengths"},
    {label:"Original RQ",message:"The research question is very original.",category:"research question",grade:"A",status:"Strengths"},
    {label:"Good RQ",message:"It is my impresison that you have identified a good research question.",category:"research question",grade:"C",status:"Strengths"},

    {label:"Trial RQ",message:"The research question seems somewhat trivial.",category:"research question",grade:"D" ,status:"Points for improvement"},
    {label:"Unfair RQ",message:"The reserach question seems somewhat unfair or biased.",category:"research question",grade:"E" ,status:"Points for improvement"},
    {label:"Unclear RQ",message:"It is unclear what you tried to investigate.",category:"research question",grade:"F" ,status:"Points for improvement"},

// Experiment
    {label:"Exceptional method",message:"The description of the methodology is exceptional.",category:"method",grade:"A",status:"Strengths"},
    {label:"Very good method",message:"The description of the methodology is very good.",category:"method",grade:"B",status:"Strengths"},
    {label:"Good Method",message:"he description of the methodology is good.",category:"method",grade:"C",status:"Strengths"},

// Method
    {label:"Unclear method",message:"It is unclear what the method entailed.",category:"method",grade:"F" ,status:"Points for improvement"},
    {label:"Unclear experimental design",message:"It is unclear what the experimental design was.",category:"method",grade:"D" ,status:"Points for improvement"},
    {label:"Few details about the method",message:"There are few details about the method.",category:"method",grade:"F" ,status:"Points for improvement"},
    {label:"Dependent variables?",message:"What where the dependent variables?",category:"method",grade:"D",status:"Points for improvement"},
    {label:"Independent variables?",message:"What were the independent variables?",category:"method",grade:"D" ,status:"Points for improvement"},
    {label:"Between or within groups?",message:"Did you emnploy a within-groups or between-groups design?",category:"method",grade:"D" ,status:"Points for improvement"},
    {label:"Randomization?",message:"Did you randomize the presentation order?",category:"method",grade:"D" ,status:"Points for improvement"},
    {label:"Tasks?",message:"What where the participants asked to do?",category:"method",grade:"D" ,status:"Points for improvement"},
    {label:"Justification of tasks?",message:"What were the rationale behind the tasks?",category:"method",grade:"C" ,status:"Points for improvement"},

// Discussion
    {label:"Convincing discussion",message:"The discussion is very convincing. Great!",category:"discussion",grade:"A",status:"Strengths"},
    {label:"Sensible discussion",message:"The discussion has several sentible arguments.",category:"discussion",grade:"B",status:"Strengths"},
    {label:"Good discussion",message:"The discussion is good.",category:"discussion",grade:"C",status:"Strengths"},
    {label:"Indluded discussion",message:"It is great that you have included a discussion.",category:"discussion",grade:"C",status:"Strengths"},

    {label:"Questionable discussion",message:"Some of the arguments in the discussion seems questionnable.",category:"discussion",grade:"D" ,status:"Points for improvement"},
    {label:"Little discussion",message:"There is too little discussion.",category:"discussion",grade:"C" ,status:"Points for improvement"},
    {label:"No discussion",message:"There is no discussion.",category:"discussion",grade:"F" ,status:"Points for improvement"},

// Related work
    {label:"Exceptional related works",message:"The related work gives an exceptionally relevant and complete coverage of the field.",category:"related work",grade:"A" ,status:"Strengths"},
    {label:"Very good related works",message:"Many relevant works are cited.",category:"related work",grade:"B" ,status:"Strengths"},
    {label:"Good related works",message:"You have cited relevant works.",category:"related work",grade:"C" ,status:"Strengths"},

    {label:"Just references",message:"The references in the list are not discussed in the text.",category:"related work",grade:"D" ,status:"Points for improvement"},
    {label:"Too little related works",message:"You have not listed many related works. There are probably many other related works you could have identified and discussed.",category:"related work",grade:"F" ,status:"Points for improvement"}
    ];

const assessment = [
    {factor:"Report",depends:['manuscript','discussion','related work']},        
    {factor:"Method",depends:['research question','method']},        
    {factor:"Overall",depends:['manuscript','discussion','related work','research question','method']}        
    ];