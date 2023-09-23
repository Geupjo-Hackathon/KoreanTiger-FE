import React, { useEffect, useState } from "react";
// Style
import color from "@/tailwind-theme/color";

const Ranking = () => {
  const [data, setData] = useState();
  const [isAll, setIsAll] = useState(true);

  const getRanking = async () => {
    const response = await fetch(`${process.env.BASE_URL}/studentLms/ranking`);
    const jsonData = await response.json();
    setData(jsonData.data);
  };

  useEffect(() => {
    getRanking();
  }, []);

  return (
    <div
      className="w-full h-full p-4 border-2 rounded-md"
      style={{ backgroundColor: "white", borderColor: color.hover_D9C3F1 }}
    >
      <div className="flex flex-row">
        <div
          className="w-24 h-8 flex justify-center items-center rounded-t-lg mr-1 cursor-pointer"
          style={
            isAll
              ? { backgroundColor: color.violet_9740F6, color: "white" }
              : {
                  backgroundColor: color.hover_D9C3F1,
                  color: color.violet_9740F6,
                }
          }
          onClick={() => {
            setIsAll(true);
          }}
        >
          <p>전체</p>
        </div>
        <div
          className="w-24 h-8 flex justify-center items-center rounded-t-lg cursor-pointer"
          style={
            !isAll
              ? { backgroundColor: color.violet_9740F6, color: "white" }
              : {
                  backgroundColor: color.hover_D9C3F1,
                  color: color.violet_9740F6,
                }
          }
          onClick={() => {
            setIsAll(false);
          }}
        >
          <p>우리 학교</p>
        </div>
      </div>
      <div className="max-h-[11rem] overflow-auto border">
        <table className="w-full h-[10rem]">
          <thead className="sticky top-0" style={{ backgroundColor: "white" }}>
            <tr>
              <th>랭킹</th>
              <th>이름</th>
              <th>진행도</th>
              <th>레벨</th>
            </tr>
          </thead>
          <tbody>
            {data && isAll
              ? data.totalRanking.map((d, index) => {
                  return (
                    <tr
                      key={d.ranking}
                      style={
                        index % 2 === 0
                          ? { backgroundColor: color.hover_D9C3F1 }
                          : {}
                      }
                    >
                      <td className="text-center">{d.ranking}</td>
                      <td className="text-center">{d.name}</td>
                      <td className="text-center">{Math.floor(d.progress)}</td>
                      <td className="text-center">{d.level}</td>
                    </tr>
                  );
                })
              : data.SchoolRanking.map((d, index) => {
                  return (
                    <tr
                      key={d.ranking}
                      style={
                        index % 2 === 0
                          ? { backgroundColor: color.hover_D9C3F1 }
                          : {}
                      }
                    >
                      <td className="text-center">{d.ranking}</td>
                      <td className="text-center">{d.name}</td>
                      <td className="text-center">{Math.floor(d.progress)}</td>
                      <td className="text-center">{d.level}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ranking;
