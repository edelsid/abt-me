import { useState, useEffect } from "react"

export default function Counter() {
  const [ numbers, setNumbers ] = useState([1, 2, 3, 4, 5, 6]);
  const [ result, setResult ] = useState(0)

  const debounce = (func) => {
    let timeoutId;
    return function executedFunction(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), 300);
    };
  }

  const getNum = () => {
    console.log(numbers);
    if (numbers.length === 0) {
      setResult(`That's all questions done! 🎉`);
      return;
    }
    const cardNum = Math.floor(Math.random() * (numbers[numbers.length - 1] - numbers[0] + 1) + numbers[0]);
    setResult(cardNum);
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
      <p className="number">{result}</p>
      <button className="counter__switch" onClick={debouncedNum}>Let's go!</button>
    </div>
  )
}
