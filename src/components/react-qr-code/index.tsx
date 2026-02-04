// npm install react-qr-code

import QRCode from "react-qr-code";

// 使用相机扫码即可

export function ReactQrCode() {
    return (
        <div className="size-48">
            <QRCode value="https://www.example-plus.work/" bgColor="#fff"/>
        </div>
    )
}