import { ClockCircleOutlined } from "@ant-design/icons";

export default function RecordItem({ data = [] }) {
  const newData = data.transcription;
  return (
    <div>
      {newData ? newData.map((item, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <div className="bg-white rounded-lg p-2 border-l-4 border-negative-color mb-3">
              <div className="flex justify-between items-center">
                <p>Agent(Stephen Hawking)</p>
                <div>
                  <ClockCircleOutlined className="pr-1" />
                  {item.START} - {item.END}
                </div>
              </div>
              <div>{item.TEXT}</div>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-2 border-l-4 border-positive-color mb-3">
              <div className="flex justify-between items-center">
                <p>Client</p>
                <div>
                  <ClockCircleOutlined className="pr-1" />
                  {item.START} - {item.END}
                </div>
              </div>
              <div>{item.TEXT}</div>
            </div>
          )}
        </div>
      )) : ""}
    </div>
  );
}
