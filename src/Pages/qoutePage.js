import { useEffect, useState } from "react";
import axios from "axios";

const QuotePage = () => {
  const [quotes, setQuotes] = useState([]);
  const [curQ, setCurQ] = useState("");
  const [txtColor, setTxtColor] = useState("");
  const [bdyColor, setBdyColor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://type.fit/api/quotes");
        setQuotes(res.data);
        const randomIndex = Math.floor(Math.random() * res.data.length);
        setCurQ(res.data[randomIndex]);
        setTxtColor(randomColor);
        setBdyColor(randomColor);
      } catch (error) {
        console.error("error fetching");
      }
    };
    fetchData();
  }, []);

  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getRandomOnClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurQ(quotes[randomIndex]);
    setTxtColor(randomColor);
    setBdyColor(randomColor);
  };

  return (
    <div id="quote-box" style={{ color: txtColor, backgroundColor: bdyColor }}>
      <div id="text">
        <h3>"{curQ.text}"</h3>
        <div id="author">
          <span>~{curQ.author}</span>
        </div>
      </div>
      <div className="bt_grp">
        <a href="twitter.com/intent/tweet" target="_blank">
          Twitter
        </a>
        <button onClick={getRandomOnClick}>Next</button>
        <div>
          <span>bySumit</span>
        </div>
      </div>
    </div>
  );
};
export { QuotePage };
