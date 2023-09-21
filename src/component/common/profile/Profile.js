import React from "react";

const Profile = () => {
  return (
    <div>
      <div>사진</div>
      <div className="flex flex-col">
        <span>이름</span>
        <p>progress bar</p>
        <div>
          <span>레벨</span>
          <span>단계</span>
        </div>
        <div>
          <p>별</p>
          <p>0일 연속 접속</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
