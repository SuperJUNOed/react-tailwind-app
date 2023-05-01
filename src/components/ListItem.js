import {
  PlayCircleOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
export default function ListItem({data=[]}) {
  return (
    <div>
          <div>
            {data[0].transcription.slice(0, 17) + "    ....."}
            <PlayCircleOutlined className="pl-10 pr-4" />
            <ClockCircleOutlined className="pr-1" />
            6:30
            <div className="pt-1 font-extralight text-xs">
              37248395206 <ArrowRightOutlined /> Stephen Hawking
            </div>
          </div>

    </div>
  );
}
