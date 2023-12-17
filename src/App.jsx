import React , {useState} from 'react'
import Header from './Components/Header'
import UserInput from './Components/UserInput'
import Results from './Components/Results'

function App() {

  const [userInput , setUserInput] = useState({
    initialInvestment : 1000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
})

const inputIsValid = userInput.duration>=1;

const handleChange = (inputIdentifier , newValue)=>{
    setUserInput(prevInput=>{
        return{
            ...prevInput  , 
            [inputIdentifier] : +newValue
        }
    })

}

  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChangeInput = {handleChange} />
    {!inputIsValid && <p className='center' >Please Enter a valid input data</p>}
    {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App