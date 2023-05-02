import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Card, Col, Layout, Menu, Row, theme, Progress, Space } from "antd";
import RecordItem from "../components/RecordItem";
import ListItem from "../components/ListItem";
import TimeLine from "../components/TimeLine";
import { useEffect, useState } from "react";
const { Header, Sider, Content } = Layout;
const gridStyle = {
  width: "100%",
};
const transData = `
phonecalldata/test/call_recording_00bb93f2-db1b-4330-9fe1-d791b0abd2ce_20230223185358.wav:
Transcription:
[Speaker undefined(9)]: no my Transportation good morning this morning I can I help you hey Mother Goose just a little is Jeanette or oh yeah give me one second okay talk to you
[Speaker undefined(61)]:  yeah Jesse There Jewelers can you give me a quote here or why I know the charge but as soon as you can do better on it on the quote it's a 7 pallet water picking up in Stockton 7 tablet order you know what call call Mark right now cuz right now we're trying to get these phones fixed and I got another shipment right now 62000 pounds I'm trying to
[Speaker undefined(68)]:  okay yeah you have his number right 925-9089
[Speaker undefined(77)]:  670 gyro 0 thank you
{ score: '', content: '' }

phonecalldata/test/call_recording_0a177af2-c0e7-4cc2-a6c7-3fa709f07a5e_20230210214723.wav:
Transcription:
[Speaker undefined(7)]: hello Mark McGrath real how are you alright
[Speaker undefined(26)]:  so I just want to know like last time which trailer did you use it was a whole day or what the start time there's a little confusion regarding your trailer I've got the 1 Unit number 3 V 261 it's the fountain
[Speaker undefined(35)]:  tell him okay TV to six months okay 3 V 261 okay thank you so much
[Speaker undefined(39)]:  so what it what else going on
[Speaker undefined(57)]:
[Speaker undefined(64)]:
{ score: '', content: '' }

phonecalldata/test/call_recording_0a5832c7-a75a-46a7-a7ca-6c5f3decdb60_20230314222256.wav:
Transcription:
[Speaker undefined(6)]: thank you for calling Pacific Coast Express limited your cross border experts
[Speaker undefined(14)]:  if you know the extension of the person you wish to speak with you can enter it anytime during this 
message
[Speaker undefined(19)]:  this call maybe recorded for quality assurance and training purposes
[Speaker undefined(23)]:  please choose one of the following options
[Speaker undefined(27)]:  for customer service and pick up press 1
[Speaker undefined(29)]:
[Speaker undefined(42)]:  Pacific Coast
[Speaker undefined(46)]:
{ score: '', content: '' }

phonecalldata/test/call_recording_00ba5dc7-3766-4007-9852-a841afebee7e_20230310190900.wav:
Transcription:
[Speaker undefined(7)]: hey sorry hi this is how are you pretty good hey I just sent you
[Speaker undefined(9)]:
[Speaker undefined(13)]:  I just sent you a
[Speaker undefined(38)]:  the pick up here for Pomona is you should be on your app already it's basically the same on the same Pol it has to Direction's but go to Pomona First are going to love you 10 skids and then you drop off in front and everything off load and then we're loaded back we'll go back to the Ontario one and lower again
[Speaker undefined(80)]:  would you please I'm sorry it was my second line is I need to go first to Pomona correct pick up some load and we'll have Louis per seat Fontana correct and then after you upload your go back to Ontario and picked up the other 16 pallets you've told me she knows not area they're they're right next to each other they're they're building they're right 
next to each other okay okay okay I see
[Speaker undefined(95)]:  I see 2001 West Mission Boulevard a Pomona press 91766 okay okay pick up
[Speaker undefined(125)]:  G FL C 11 got this got out of it it's it's two stops in the same Pol so it's the same order for the other ones as well so we're not gonna change anything we're just going to pick up the half load the first 10 and then come back to a different location so the other one so they're they're going to the same number so all of these I need to represent one B IL G FL C 11
[Speaker undefined(132)]:  yeah yeah yeah just let you know this coming to pick up let me know
[Speaker undefined(141)]:  okay okay okay thank you very much
[Speaker undefined(144)]:
{ score: '', content: '' }

phonecalldata/test/call_recording_0a3363a5-f9f4-4538-a482-74f927d3f691_20230302220301.wav:
Transcription:
[Speaker undefined(11)]: dropping Jack this is 1 / 22 how are you sorry about that Jeff I was so caught up I couldn't call you earlier
[Speaker undefined(28)]:
[Speaker undefined(30)]:
[Speaker undefined(40)]:
[Speaker undefined(43)]:
[Speaker undefined(54)]:
[Speaker undefined(77)]:  Customs Department I will get back to you on this
[Speaker undefined(83)]:  okay I'm also a coat on p.m. x 20 I guess
[Speaker undefined(84)]:
[Speaker undefined(87)]:
[Speaker undefined(91)]:
[Speaker undefined(95)]:
[Speaker undefined(107)]:
[Speaker undefined(119)]:
[Speaker undefined(144)]:
[Speaker undefined(157)]:
[Speaker undefined(162)]:  you need to Pop's number from us if you have next 20
[Speaker undefined(168)]:  okay I sure last day to send it to you okay okay thank you thank you
{ score: '', content: '' }
`;

function convertToJSON(str) {
  const newStr = str.replace(/\{.*\}/g, "");
  const transcription = newStr.split("Transcription:")[1].trim();
  const speakers = transcription.match(/\[Speaker\sundefined\(\d+\)\]:/g);
  const splitTranscription = transcription
    .split(/\[Speaker\sundefined\(\d+\)\]:/)
    .filter((t) => t !== "");
  const jsonOutput = [];

  for (let i = 0; i < splitTranscription.length; i++) {
    const transcription = newStr
      .split("Transcription:")[0]
      .replace(/:|\n/g, "");
    const text = splitTranscription[i].trim();
    const speaker = speakers[i].match(/\d+/)[0];
    const obj = { transcription: transcription, speaker: speaker, text: text };
    jsonOutput.push(obj);
  }

  return jsonOutput;
}

function convertAllToJSON(inputStr) {
  const recordings = inputStr.split("\n\n");
  const outputJSON = [];

  for (let i = 0; i < recordings.length; i++) {
    if (recordings[i]) {
      const converted = convertToJSON(recordings[i]);
      outputJSON.push(converted);
    }
  }

  return outputJSON;
}

export default function MainPage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [data, setData] = useState([]);
  const [dataItem, setDataItem] = useState([]);

  const handleClick = (item) => {
    setDataItem(item);
  };

  useEffect(() => {
    const outputJSON = convertAllToJSON(transData);
    setData(outputJSON);
  }, []);

  return (
    <Layout>
      <Sider className="h-auto">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["2"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <PlusSquareOutlined style={{ width: 100, height: 100 }} />
        </Header>
        <Content
          style={{
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Row>
            <Col xs={24} sm={12} md={12} lg={8}>
              <Card title="NEWEST" bordered={true} style={{ width: 300 }}>
                {data.map((item) => (
                  <Card.Grid
                    style={gridStyle}
                    onClick={() => handleClick(item)}
                  >
                    <ListItem data={item} />
                  </Card.Grid>
                ))}
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8}>
              {dataItem.map((item, index) => (
                <RecordItem data={item} index={index} />
              ))}
            </Col>
            <Col xs={21} sm={21} md={21} lg={5} offset={3}>
              <Space wrap direction="vertical">
                <Progress
                  type="circle"
                  percent="90"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                />
                <p className="font-black text-blue-700 text-center">POSITIVE</p>
                <Progress
                  type="circle"
                  percent="70"
                  strokeColor={{
                    "0%": "#ff0000",
                    "100%": "#000000",
                  }}
                />
                <p className="font-black text-red-700 text-center">NEGATIVE</p>
              </Space>
            </Col>
          </Row>
        </Content>
        <TimeLine data={dataItem} />
      </Layout>
    </Layout>
  );
}
