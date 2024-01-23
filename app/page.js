import Image from 'next/image'
import QRCode from "react-qr-code";

export default function Home() {
  return (
    <div style={{ margin: 99 , backgroundColor: 'white'}}>
      <div style={{ margin: 99 , backgroundColor: 'white', padding: 99}}>
        <QRCode value="00020101021238570010A000000727012700069704220113VQRQ000198ram0208QRIBFTTA5303704540450005802VN62200816TTBN52ZD COMSUON63040950" />
      </div>
    </div>
  )
}
