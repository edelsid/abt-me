import { useState, useEffect } from "react"
import Loading from "./Loading";

export default function Counter() {
  const [ numbers, setNumbers ] = useState([1, 2, 3, 4, 5, 6]);
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
    const cardNum = Math.floor(Math.random() * (numbers[numbers.length - 1] - numbers[0] + 1) + numbers[0]);
    setResult(cardNum);
    setLoading(false);
  }

  const debouncedNum = debounce((item) => {
    getNum(item);
  });

  useEffect(() => {
    const filteredNumbers = numbers.filter(num => num !== result);
    setNumbers(filteredNumbers);
    console.log(result)
  }, [result])

  return (
    <div className="counter__wrapper">
      {loading ? <Loading /> : <p className="number">{result}</p>}
      <button className="counter__switch" onClick={debouncedNum}>Let's go!</button>
    </div>
  )
}
