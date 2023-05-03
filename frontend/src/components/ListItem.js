import {
  PlayCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
export default function ListItem({data=[]}) {
  return (
    <div>
          <div>
            {new Date().toLocaleDateString()}
            <PlayCircleOutlined className="pl-20 pr-4" />
            <ClockCircleOutlined className="pr-1" />
            {data.transcription[0].START} - {data.transcription[data.transcription.length - 1].END}
            <div className="pt-1 font-extralight text-xs">{data.fileName.replace(".json", "")}
            </div>
          </div>

    </div>
  );
}
