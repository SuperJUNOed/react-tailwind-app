import { Divider } from "antd";

export default function TimeLine({ data = [] }) {
  const timeArray = data.map((item, index) => ({
    startTime: index === 0 ? "0" : data[index - 1].speaker,
    endTime: item.speaker,
  }));
  const lastEndTime =
    timeArray.length > 0 ? timeArray[timeArray.length - 1].endTime : null;

  return (
    <div className="bottom-0 left-0 w-full bg-white p-3">
      <div className="flex pr-1">
        <div className="flex text-client-color">
          Client
          <Divider
            type="vertical"
            style={{ marginLeft: "18px", marginTop: "6px" }}
          />
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
      <div className="flex pr-1">
        <div className="flex text-agent-color">
          Agent
          <Divider
            className="ml-4"
            type="vertical"
            style={{ marginTop: "6px" }}
          />
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
      <div className="flex pr-1">
        <div className="flex text-blue-500">
          Time(s)
          <Divider type="vertical" style={{ marginTop: "6px" }} />
        </div>
        <div className="flex w-full items-center">
          <div className="text-ts">0</div>
          {timeArray.map((item, index) => {
            return (
              <div
                key={index}
                className="flex"
                style={{
                  width: `${
                    ((item.endTime - item.startTime) / lastEndTime) * 100
                  }%`,
                }}
              >
                <div style={{ width: "100%" }}></div>
                <div className="h-full text-ts">
                  {index % 2 === 0
                    ? `${Math.floor(item.endTime / 600)}${Math.floor(
                        item.endTime / 60
                      )}:${item.endTime % 60 < 10 ? "0" : ""}${
                        item.endTime % 60
                      }`
                    : ""}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
