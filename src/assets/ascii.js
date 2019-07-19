const ASCII = [
  {
    b2: "0000 0000",
    b8: "00",
    b10: "0",
    b16: "0x00",
    summ: 'NUL(null)',
    expl: '空字符'
  },
  {
    b2: "0000 0001",
    b8: "01",
    b10: "1",
    b16: "0x01",
    summ: 'SOH(start of headline)',
    expl: '标题开始'
  },
  {
    b2: "0000 0010",
    b8: "02",
    b10: "2",
    b16: "0x02",
    summ: 'STX (start of text)',
    expl: '正文开始'
  },
  {
    b2: "0000 0011",
    b8: "03",
    b10: "3",
    b16: "0x03",
    summ: 'ETX (end of text)',
    expl: '正文结束'
  },
  {
    b2: "0000 0100",
    b8: "04",
    b10: "4",
    b16: "0x04",
    summ: "EOT (end of transmission)",
    expl: "传输结束"
  },
  {
    b2: "0000 0101",
    b8: "05",
    b10: "5",
    b16: "0x05",
    summ: "ENQ (enquiry)",
    expl: "请求"
  },
  {
    b2: "0000 0110",
    b8: "06",
    b10: "6",
    b16: "0x06",
    summ: "ACK (acknowledge)",
    expl: "收到通知"
  },
  {
    b2: "0000 0111",
    b8: "07",
    b10: "7",
    b16: "0x07",
    summ: "BEL (bell)",
    expl: "响铃"
  },
  {
    b2: "0000 1000",
    b8: "010",
    b10: "8",
    b16: "0x08",
    summ: "BS (backspace)",
    expl: "退格"
  },
  {
    b2: "0000 1001",
    b8: "011",
    b10: "9",
    b16: "0x09",
    summ: "HT (horizontal tab)",
    expl: "水平制表符"
  },
  {
    b2: "0000 1010",
    b8: "012",
    b10: "10",
    b16: "0x0A",
    summ: "LF (NL line feed, new line)",
    expl: "换行键"
  },
  {
    b2: "0000 1011",
    b8: "013",
    b10: "11",
    b16: "0x0B",
    summ: "VT (vertical tab)",
    expl: "垂直制表符"
  },
  {
    b2: "0000 1100",
    b8: "014",
    b10: "12",
    b16: "0x0C",
    summ: "FF (NP form feed, new page)",
    expl: "	换页键"
  },
  {
    b2: "0000 1101",
    b8: "015",
    b10: "13",
    b16: "0x0D",
    summ: "CR (carriage return)",
    expl: "回车键"
  },
  {
    b2: "0000 1110",
    b8: "016",
    b10: "14",
    b16: "0x0E",
    summ: "SO (shift out)",
    expl: "不用切换"
  },
  {
    b2: "0000 1111",
    b8: "017",
    b10: "15",
    b16: "0x0F",
    summ: "SI (shift in)",
    expl: "启用切换"
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
  {
    b2: "",
    b8: "",
    b10: "",
    b16: "",
    summ: "",
    expl: ""
  },
]

export default ASCII
