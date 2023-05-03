import { Divider } from "antd";

export default function TimeLine({ data = [] }) {
  let totalTime = 0;
  const newData = data ? data.transcription : "";
  const timeArray = newData
    ? newData.map((item, index) => ({
        START: item.START.replace(/:/g, ""),
        END: item.END.replace(/:/g, ""),
        startTime: (
          item.START.replace(/:/g, "").charAt(0) * 600 +
          item.START.replace(/:/g, "").charAt(1) * 60 +
          parseInt(item.START.replace(/:/g, "").slice(-2))
        ).toString(),
        endTime: (
          item.END.replace(/:/g, "").charAt(0) * 600 +
          item.END.replace(/:/g, "").charAt(1) * 60 +
          parseInt(item.END.replace(/:/g, "").slice(-2))
        ).toString(),
      }))
    : "";

  const newTime = timeArray
    ? timeArray.map((item) => ({
        time: item.endTime - item.startTime,
      }))
    : "";

  for (let i = 0; i < newTime.length; i++) {
    totalTime = totalTime + newTime[i].time;
  }

  return (
    <div className="bottom-0 left-0 w-full bg-gradient-to-br from-my-from-color to-my-to-color p-3">
      <div className="flex pr-1">
        <div className="flex text-positive-color">
          Client
          <Divider
            type="vertical"
            style={{ marginLeft: "18px", marginTop: "6px" }}
          />
        </div>
        <div className="flex w-full h-4 mt-2">
          {timeArray
            ? timeArray.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: `${
                        ((item.endTime - item.startTime) / totalTime) * 100
                      }%`,
                    }}
                  >
                    <div
                      className={
                        index % 2 === 0
                          ? "h-full"
                          : "h-full bg-gradient-to-br from-client-from-color to-client-to-color"
                      }
                      style={{ width: "100%", height: "50%" }}
                    ></div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <div className="flex pr-1">
        <div className="flex text-negative-color">
          Agent
          <Divider
            className="ml-4"
            type="vertical"
            style={{ marginTop: "6px" }}
          />
        </div>
        <div className="flex w-full h-4 mt-2">
          {timeArray
            ? timeArray.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: `${
                        ((item.endTime - item.startTime) / totalTime) * 100
                      }%`,
                    }}
                  >
                    <div
                      className={
                        index % 2 === 0
                          ? "h-full bg-gradient-to-br from-agent-from-color to-agent-to-color"
                          : "h-full"
                      }
                      style={{ width: "100%", height: "50%" }}
                    ></div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <div className="flex pr-1">
        <div className="flex text-blue-500">
          Time(s)
          <Divider type="vertical" style={{ marginTop: "6px" }} />
        </div>
        <div className="flex w-full items-center">
          <div className="text-ts"></div>
          {timeArray
            ? timeArray.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex"
                    style={{
                      width: `${
                        ((item.endTime - item.startTime) / totalTime) * 100
                      }%`,
                    }}
                  >
                    <div style={{ width: "100%" }}></div>
                    <div className="h-full text-ts">
                      {index % 2 === 0
                        ? `${item.END.charAt(0)}${item.END.charAt(
                            1
                          )}:${item.END.slice(-2)}`
                        : ""}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
