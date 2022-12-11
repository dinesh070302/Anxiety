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
                    <h2><center>Low Level Anxiety</center></h2>
                    <h3>You're anxious about nothing. Start to make these a daily practice:</h3>
                    <p>
•	Learn to deep breathe when you feel anxious.
<br />
<br />
•	Meditate in the morning and evening (yes, you can meditate).
<br />
<br />
•	Get great sleep.
<br />
<br />
•	Avoid alcohol.
<br />
<br />
•	Schedule time to relax.
<br />
<br />
•	Don't take pressure. 
</p>
                    </div>
                    <div className='mawa'>
                    
                       <button type="submit" onClick={resetQuiz}  >Attempt Again!!!</button>
                       
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
                    <h2><div className='text1'>You have scored {score} </div></h2>
                    <>
                       
                       
                    </>
                    <h2><p className='text2'>Moderate anxiety</p></h2>

                    <p className='midbro'>
                    <h3>Psychotherapy</h3>
Psychotherapy or “talk therapy” can help people with anxiety disorders. To be effective, psychotherapy must be directed at your specific anxieties and tailored to your needs.
<br /><br />
<h3>Stress Management Techniques</h3>
Stress management techniques, such as exercise, mindfulness, and meditation, also can reduce anxiety symptoms and enhance the effects of psychotherapy. You can learn more about how these techniques benefit your treatment by talking with a health care provider
<h3>Cognitive Behavioral Therapy</h3>
<p>
Cognitive behavioral therapy (CBT), which involves learning how to lower anxiety and face distressing situations.A CBT technique used to treat anxiety problems is exposure treatment. In order to help patients engage in activities they have been avoiding, exposure therapy focuses on facing the concerns at the root of an anxiety condition
<br /><br />
•Step One - Make A List.
<br /><br />
•Step Two - Record Unproductive Thoughts.
<br /><br />
•Step Three - Create Replacement Thoughts.
<br /><br />
•Step Four - Read Your List Often.
<br /><br />
•Step Five - Notice And Replace.
</p>
<h3>Acceptance and Commitment therapy</h3>
<p>Acceptance and commitment therapy is an additional alternative for treating some anxiety problems (ACT). In contrast to CBT, ACT approaches negative ideas differently. In order to lessen discomfort and anxiety, it employs techniques including goal-setting and mindfulness. Because ACT is a more recent type of psychotherapy than CBT, there are less studies evaluating its efficacy.</p>

</p>
<button type="submit" onClick={resetQuiz}>Attempt again!!</button>
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
                <div className='score-section severe'>
                    <h2>You have scored {score} </h2>
                    
                    <h2 className='helllll'><p>Potentially concerning levels of anxiety</p></h2>
                    <p>
                        <h3>Choosing the Right Medication</h3>
                        <p>Some types of drugs may work better for specific types of anxiety disorders, so people should work closely with a health care provider to identify which medication is best for them. Certain substances such as caffeine, some over-the-counter cold medicines, illicit drugs, and herbal supplements may aggravate the symptoms of anxiety disorders or interact with prescribed medication. People should talk with a health care provider, so they can learn which substances are safe and which to avoid.</p>

                    </p>
                    <h3>Support Groups</h3>
                    <p>
                    Some people with anxiety disorders might benefit from joining a self-help or support group and sharing their problems and achievements with others. Support groups are available both in person and online. However, any advice you receive from a support group member should be used cautiously and does not replace treatment recommendations from a health care provider.
                    </p>
                    <div>
                       <button type="submit" onClick={resetQuiz}>Attempt again!!</button>
                       
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


}
export default QuizComp;