import React,{useState,useEffect,useRef} from 'react';
import { data } from './data';
import './quiz.css'


const Quiz = () => {
        const [index,setIndex] = useState(0);
        const [ques,setQues] =  useState(data[index]);
        const [lock,setLock] =  useState(true);
        const [score,setScore] = useState(0);
        console.log(data);
     
        useEffect(() => {
            setQues(data[index]);
            setLock(true);
          }, [index, data]);
          
    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1,Option2,Option3,Option4];

          const check = (e,k) => {
            if(lock)
          { if (ques.ans===k) {
              e.target.classList.add('correct');
              setLock(false);
              setScore(score+1);
              
            } 
            else {
              e.target.classList.add('wrong'); 
              setLock(false);
              option_array[ques.ans-1].current.classList.add('correct');
            }
        }
             
          };

         const next = () =>
            {  if(index<=4)
               { setIndex(index+1);
                console.log(index);
                const listItems = document.querySelectorAll('li');
                listItems.forEach((item) => {
                 item.classList.remove('correct', 'wrong');
                     }); }
            }   

  return (
    <div className='card'>
  {index <= 4 ? (
    <>
      <h1>Quiz</h1>
      <h2>{ques.question}</h2>
      <ul>
        <li ref={Option1} onClick={(e) => check(e, 1)}>
          {ques.option2}
        </li>
        <li ref={Option2} onClick={(e) => check(e, 2)}>
          {ques.option1}
        </li>
        <li ref={Option3} onClick={(e) => check(e, 3)}>
          {ques.option3}
        </li>
        <li ref={Option4} onClick={(e) => check(e, 4)}>
          {ques.option4}
        </li>
      </ul>
      <button onClick={next}>Next</button>
      <p>{index + 1} Out of 5</p>
    </>
  ) : (
    <h1>Your Score is {score}/5</h1>
  )}
</div>

  )
}

export default Quiz