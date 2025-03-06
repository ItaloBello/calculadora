import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    setCurentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleOnClear = () => {
    setCurentNumber("0");
    setFirstNumber("0");
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurentNumber(String(sum));
      setOperation("");
    }
  };

  const handleSubNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurentNumber("0");
      setOperation("-");
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurentNumber(String(sub));
      setOperation("");
    }
  };

  const handleMpyNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurentNumber("0");
      setOperation("*");
    } else {
      const mpy = Number(firstNumber) * Number(currentNumber);
      setCurentNumber(String(mpy));
      setOperation("");
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurentNumber("0");
      setOperation("/");
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurentNumber(String(div));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleSubNumbers();
          break;
        case "*":
          handleMpyNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;
        default:
          break;
      }
      setFirstNumber("0");
    }
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"*"} onClick={handleMpyNumbers} />
          <Button label={"/"} onClick={handleDivNumbers} />
          <Button label={"C"} onClick={() => handleOnClear("C")} />
          <Button label={"="} onClick={handleEquals} />
        </Row>
        <Row>
          <Button label={1} onClick={() => handleAddNumber("1")} />
          <Button label={2} onClick={() => handleAddNumber("2")} />
          <Button label={3} onClick={() => handleAddNumber("3")} />
          <Button label={"-"} onClick={handleSubNumbers} />
        </Row>

        <Row>
          <Button label={4} onClick={() => handleAddNumber("4")} />
          <Button label={5} onClick={() => handleAddNumber("5")} />
          <Button label={6} onClick={() => handleAddNumber("6")} />
          <Button label={"+"} onClick={handleSumNumbers} />
        </Row>

        <Row>
          <Button label={7} onClick={() => handleAddNumber("7")} />
          <Button label={8} onClick={() => handleAddNumber("8")} />
          <Button label={9} onClick={() => handleAddNumber("9")} />
          <Button label={0} onClick={() => handleAddNumber("0")} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
