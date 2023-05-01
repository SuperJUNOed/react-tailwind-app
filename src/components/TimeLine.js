import { Divider } from "antd";

export default function TimeLine({ data = [] }) {
  const timeArray = data.map((item, index) => ({
    startTime: index === 0 ? "0" : data[index - 1].speaker,
    endTime: item.speaker,
  }));
  const lastEndTime = timeArray[timeArray.length - 1].endTime;

  return (
    <div>
      <div className="flex pl-48 pr-1">
        <div className="text-client-color">
          Client
          <Divider type="vertical" style={{ marginLeft: "10px" }} />
        </div>
        <div className="flex w-full h-4 mt-2">
          {timeArray.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  width: `${
                    ((item.endTime - item.startTime) / lastEndTime) * 100
                  }%`,
                }}
              >
                <div
                  className={index % 2 === 0 ? "h-full" : "h-full bg-client"}
                  style={{ width: "100%", height: "60%" }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex pl-48 pr-1">
        <div className="text-agent-color">
          Agent
          <Divider type="vertical" />
        </div>
        <div className="flex w-full h-4 mt-2">
          {timeArray.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  width: `${
                    ((item.endTime - item.startTime) / lastEndTime) * 100
                  }%`,
                }}
              >
                <div
                  className={index % 2 === 0 ? "h-full bg-agent" : "h-full"}
                  style={{ width: "100%", height: "60%" }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="flex pl-48 pr-1">
        <div className="flex w-full h-4">
          {timeArray.map((item, index) => {
            return <div>{item.endTime}</div>;
          })}
        </div>
      </div> */}
    </div>
  );
}
