import React from 'react'
import { useState } from 'react';
import './quizstyle.css'


const QuizComp = () => {

    var Questionbank = [
        {
            Question: "Numbness or tingling?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Feeling hot?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Wobbliness in legs?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Unable to relax?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Fear of worst happening?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Dizzy or lightheaded?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Heart pounding/racing? ",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Unsteady?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Terrified or afraid?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Nervous?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Feeling of choking?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Hands trembling?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Shaky / unsteady?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: " Fear of losing control ?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Difficulty in breathing?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Fear of dying?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Scared?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Indigestion?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Faint / lightheaded?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Face flushed?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        {
            Question: "Hot/cold sweats?",
            Answers: [
                { Answer: "Not At All", Number: 0 },
                { Answer: "Mildly but it did not bother me much", Number: 1 },
                { Answer: "Moderately - it was not pleasant at times", Number: 2 },
                { Answer: "Severely – it bothered me a lot", Number: 3 }
            ]
        },
        


    ]
    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [visible, setVisible] = useState(true)
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const hide = () => setVisible(false)

const handleAnswerResponse=(Number)=>
{
    if(Number===1)
    {
        setScore(score+1);
    }
    if(Number===2)
    {
        setScore(score+2);
    }
    if(Number===3)
    {
        setScore(score+3);
    }
    if(Number===4)
    {
        setScore(score+4);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion< Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
    
   }
   else{
    setShowScore(true);
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}
console.log(score);
var bro = parseInt(score);
if(bro<22){
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    <h1>You have scored {score} </h1>
                    
                    
                    <div className='lowanxiety'>
                    <h2><center>Low Anxiety</center></h2>
                    <p>
                    A healthful diet may help prevent depression and boost mental well-being. dietary interventions do play a role in treating depression.
                    Foods that would help are
                    fresh fruits and vegetables, green tea, soybean products, healthful oils, such as olive oil, whole grains, fish.
                    At the same time, people should limit their intake of the following:
                    red meat and meat products, baked goods,trans fats,	sugary desserts and sodas.
                    Fresh fruits and vegetables provide antioxidants. These helps to protect the body from oxidative stress and cell damage.
                    Processed foods may adversely affect the gut microbiota, which could increase the risk of depression,
                    According to an, there is a strong link between depression and insomnia. A lack of sleep may worsen symptoms of depression, and it is also a common symptom.
                    <br></br>
                    <br></br>
                    Here are some tips  that people can try to improve their sleep naturally:
                    <br></br>
                    •	Go to bed and get up at the same time each day, including weekends.
                    <br></br>
                    •	Try to ensure the room is quiet, dark, and of a comfortable temperature.
                    <br></br>
                    •	Avoid large meals, caffeine, and alcohol before sleeping.
                    <br></br>
                    •	Do physical exercise during the day.
                    <br></br>
                    •	Remove electronic equipment from the sleeping area and switch off 30 minutes before bedtime.
                    <br></br>
                    •	Get up again if you do not fall asleep within 20 minutes. Read or find some other distraction for a while,   then try again.
                    <br></br>
                    •	Follow a healthful diet.
                    <br></br>
                    •	Avoid drinking too much fluid too close to bedtime.
                    <br></br>
                    •	Limit exposure to bright light in the evening.
                    <br></br>
                    • Include doing breathing or relaxation exercises before sleeping. The 4-7-8 breathing technique can also calm anxiety.
                    <br></br>
                    <br></br>
                    Alcohol control:
                    The use of alcohol and some recreational drugs can increase the risk of depression and make symptoms worse.
                    Various factors can trigger symptoms of stress and depression, and these will vary between individuals. It may be possible to avoid or reduce exposure to some of these triggers.
                    Triggers that a person may be able to avoid include:
                    <br></br>
                    •	Exposure to news, some movies, and other media. 
                    <br></br>
                    •	Using alcohol or drugs, unless the person has a related disorder
                    <br></br>
                    •	Having too little sleep due to late nights
                    <br></br>
                    If avoiding triggers is not an option, it may be possible to reduce exposure, for example, by deciding on one specific time of day to check emails or watch the news.
                    </p>
                    </div>
                    <div className='mawa'>
                    
                       <button type="submit" onClick={resetQuiz} ><center>Attempt Again!!!</center></button>
                       
                    </div>
                </div>
                
                
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                        {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.Number)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
    );
}
else if(bro>=22 && bro <= 35){
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    <div className='text1'>You have scored {score} </div>
                    <>
                       <button type="submit" onClick={resetQuiz}>Attempt again!!</button>
                       
                    </>
                    <p className='text2'>Moderate anxiety</p>
                    <p>Medium Level:
                    • Exercise: Both aerobic (such as jogging or walking) and anaerobic (such as weightlifting) exercise might help lessen the symptoms of depression.
                    • Relaxation training: A depressed person can learn to relax freely by deliberately tensing and relaxing different muscle groups.
                    •Light treatment: Certain types of depression, such as SAD, can be treated by exposing the eyes to bright, full-spectrum light that simulates natural outside light, especially in the morning (seasonal affective disorder)
                    •Self-help books based on cognitive behavioural therapy (CBT): Self-help books based on CBT can help a person with depression work through some of their symptoms.
                    •Electronic treatment. Self-help programs offered online have also been shown to be successful in treating depression. When people follow the steps on the CBT website Mood Gym, which has undergone scientific evaluation, they can find relief from the symptoms of depression. The website instructs users on how to think in ways that can shield them from despair.
</p>
                </div>
                
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.Number)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
    );
}
else {
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} 
                    <>
                       <button type="submit" onClick={resetQuiz}>Attempt again!!</button>
                       
                    </>
                    <p>Potentially concerning levels of anxiety</p>
                </div>
                
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.Number)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
        
    );
}


}
export default QuizComp;