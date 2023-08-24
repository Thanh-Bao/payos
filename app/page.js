import Image from 'next/image'
import QRCode from "react-qr-code";

export default function Home() {
  return (
    <div style={{ margin: 99 , backgroundColor: 'white'}}>
      <div style={{ margin: 99 , backgroundColor: 'white', padding: 99}}>
        <QRCode value="00020101021238570010A000000727012700069704220113VQRQ0000mbalk0208QRIBFTTA5303704540410005802VN62220818TT3QUMD6 THANHTOAN6304FD3A" />
      </div>
    </div>
  )
}
