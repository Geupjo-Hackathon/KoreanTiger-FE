import React from "react";
import SubjectList from "../SubjectList";

const Ranking = () => {
    return (
        <div className="w-full h-full" style={{ backgroundColor: "white" }}>
            <div className="flex flex-row">
                <div style={{fontSize: "22px"}}>내가 낸 과제</div>
            </div>
            <div>
                <SubjectList />
            </div>
        </div>
    );
};

export default Ranking;
