import { useState } from "react"
import Loading from "./Loading";

export default function Counter({ nums }) {
  const [ numbers, setNumbers ] = useState(Array.from({length: nums}, (_, i) => i + 1));
  const [ result, setResult ] = useState(0);
  const [ loading, setLoading ] = useState(false);

  const debounce = (func) => {
    let timeoutId;
    return function executedFunction(...args) {
      clearTimeout(timeoutId);
      setLoading(true);
      timeoutId = setTimeout(() => func.apply(this, args), 1500);
    };
  }

  const getNum = () => {
    console.log(numbers);
    if (numbers.length === 0) {
      setResult(`That's all questions done! 🎉`);
      setLoading(false);
      return;
    }
    const cardNum = numbers[Math.floor(Math.random() * numbers.length)];
    setResult(cardNum);
    const filteredNumbers = numbers.filter(num => num !== cardNum);
    setNumbers(filteredNumbers);
    setLoading(false);
  }

  const debouncedNum = debounce((item) => {
    getNum(item);
  });

  return (
    <div className="counter__wrapper">
      {loading ? <Loading /> : <p className="number">{result}</p>}
      <button className="counter__switch" onClick={debouncedNum}>Let's go!</button>
    </div>
  )
}
