import * as React from "react";
import TopBar from "../../components/TopBar";
import { ArrowRightRed } from "../../theme/images";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export default function Home() {
  const navigate = useNavigate();
  const handleToPage = (page: string) => {
    navigate(page);
  };

  return (
    <div className="container">
      <TopBar backStatus={false} headingName="Eastplayers Test" />
      <div className="home">
        <div className="home-list">
          <div className="home-item" onClick={() => handleToPage("/tasks")}>
            <div className="home-label">
              <div className="home-label-number">1</div>
              <div className="home-label-title">Todo list</div>
            </div>
            <img src={ArrowRightRed} alt="" />
          </div>
          <div className="home-item" onClick={() => handleToPage("/contry")}>
            <div className="home-label">
              <div className="home-label-number">2</div>
              <div className="home-label-title">Contry list</div>
            </div>
            <img src={ArrowRightRed} alt="" />
          </div>
          <div className="home-item" onClick={() => handleToPage("/image")}>
            <div className="home-label">
              <div className="home-label-number">3</div>
              <div className="home-label-title">Image gallery</div>
            </div>
            <img src={ArrowRightRed} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
