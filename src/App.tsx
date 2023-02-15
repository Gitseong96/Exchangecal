import { useState, KeyboardEvent } from 'react';

import './App.css';

import { useExchcnage } from './react-query/queryFactory';


function App() {
  const [before, setBefore] = useState<string>("KRW")
  const [after, setAfter] = useState<string>("USD")
  const [amountNum, setAmountNum] = useState<number>(0)

  const { data, status } = useExchcnage(before, after, amountNum);

  if (status === "loading") {
    return <span>Loading...</span>
  }
  const changeBeforeSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBefore(e.target.value)
  }
  const changeAfterSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAfter(e.target.value)
  }
  const onChangeAmount = (e: KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement
    setAmountNum(Number(value))
  }

  return (
    <div className="App">
      <div className='container'>
        <form>
          <div className="before">
            <input className="inputBox" type="number" name="원" defaultValue={amountNum} onKeyUp={onChangeAmount}></input>
            <select className="selectBox" onChange={changeBeforeSelectValue} defaultValue={before}>
              <option value="KRW">한국</option>
              <option value="USD">미국</option>
              <option value="CNY" >중국</option>
              <option value="JPY">일본</option>
              <option value="EUR">유럽</option>
              <option value="THB">태국</option>
              <option value="SGD">싱가포르</option>
              <option value="VND" >배트남</option>
            </select>
          </div>
          <div className='after'>
            <input className="inputBox" value={data?.result as number}></input>
            <select className="selectBox" onChange={changeAfterSelectValue} defaultValue={after}>
              <option value="USD">미국</option>
              <option value="KRW">한국</option>
              <option value="CNY" >중국</option>
              <option value="JPY">일본</option>
              <option value="EUR">유럽</option>
              <option value="THB">태국</option>
              <option value="SGD">싱가포르</option>
              <option value="VND" >배트남</option>
            </select>
          </div>
        </form >
      </div>
    </div >

  );
}

export default App;
