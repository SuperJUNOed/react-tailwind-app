import { ClockCircleOutlined } from "@ant-design/icons";

export default function RecordItem({ data = [] }) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <div className="bg-white rounded-lg p-2 border-l-4 border-agent-color mb-3">
              <div className="flex justify-between items-center">
                <p>Agent(Stephen Hawking)</p>
                <div>
                  <ClockCircleOutlined className="pr-1" />
                  {`${Math.floor(item.speaker / 600)}${Math.floor(
                    item.speaker / 60
                  )} : ${item.speaker % 60 < 10 ? "0" : ""}${
                    item.speaker % 60
                  }`}
                </div>
              </div>
              <div>{item.text}</div>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-2 border-l-4 border-client-color mb-3">
              <div className="flex justify-between items-center">
                <p>Client</p>
                <div>
                  <ClockCircleOutlined className="pr-1" />
                  {`${Math.floor(item.speaker / 600)}${Math.floor(
                    item.speaker / 60
                  )} : ${item.speaker % 60 < 10 ? "0" : ""}${
                    item.speaker % 60
                  }`}
                </div>
              </div>
              <div>{item.text}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
