import * as React from "react";
import "./style.scss";
import TopBar from "../../components/TopBar";
import { ArrowRightBlue } from "../../theme/images";
import { DOMAIN } from "../../constants/env";
import axios from "axios";

export default function Contry() {
  const filterRef: any = React.useRef();
  const [keyword, setKeyword] = React.useState("");
  const [contries, setContries] = React.useState([]);
  const [typing, setTyping] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let delayFunction: any;

    if (!filterRef.current) {
      filterRef.current = true;
    } else {
      delayFunction = setTimeout(async () => {
        if (keyword === "") {
          setContries([]);
          setTyping(false);
          return;
        }

        try {
          setLoading(true);
          const { data: response } = await axios.get(DOMAIN + `${keyword}`);
          setContries(response);
        } catch (error) {
          setContries([]);
        } finally {
          setLoading(false);
          setTyping(false);
        }
      }, 500);
      return () => clearTimeout(delayFunction);
    }
  }, [keyword]);

  const handleKeyWord = (value: string) => {
    setTyping(true);
    setKeyword(value);
  };

  return (
    <div className="container">
      <TopBar backStatus={true} headingName="Country list" />
      <div className="contry">
        <div className="input-primary">
          <input
            type="text"
            placeholder="Search"
            name="keyWord"
            value={keyword}
            onChange={(event) => handleKeyWord(event.target.value)}
          />
          <span>
            {typing ? (
              <div className="typing"></div>
            ) : (
              <img src={ArrowRightBlue} alt="" />
            )}
          </span>
        </div>
        <div className="contry-content">
          <div className="contry-list">
            {contries.length > 0 &&
              contries.map((contry, index) => (
                <div className="contry-item" key={index}>
                  {contry.name.common}
                </div>
              ))}
          </div>
          {loading && <div className="loader"></div>}
        </div>
      </div>
    </div>
  );
}
