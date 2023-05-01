export default function RecordItem({ data = [], index }) {
  return (
    <div>
        {index % 2 === 0 ? (
          <div className="bg-white rounded-lg pl-3 pr-1 border-l-4 border-agent-color mb-3">
            <div>Agent(Stephen Hawking) {data.speaker}</div>
            <div>
              {data.text}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg pl-3 pr-1 border-l-4 border-client-color mb-3">
            <div>Client {data.speaker}</div>
            <div>
              {data.text}
            </div>
          </div>
        )}
    </div>
  );
}
