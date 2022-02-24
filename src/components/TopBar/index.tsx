import * as React from "react";
import "./style.scss";
import { ArrowLeftBlack } from "../../theme/images";
import { useNavigate } from "react-router-dom";

interface IMyProps {
  backStatus: boolean;
  headingName: string;
}

export default function TopBar({ backStatus = false, headingName }: IMyProps) {
  const navigate = useNavigate();

  return (
    <div className="top-bar">
      {backStatus && (
        <img
          className="back-btn"
          src={ArrowLeftBlack}
          alt=""
          onClick={() => navigate(-1)}
        />
      )}
      <h2 className="heading">{headingName}</h2>
    </div>
  );
}
