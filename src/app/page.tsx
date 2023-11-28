import Link from "next/link";
import { Button, Card } from "@/components";

export default function Home() {
    return (
        <div className="flex justify-center items-center min-h-full">
            <Card className="md:p-10 p-6">
                <div className="mb-6 text-center">
                    <p className="mb-3 md:text-4xl text-2xl font-bold">
                        ประกวด Dog Super Model 🐕
                    </p>
                    <p className="font-bold">
                        วันที่ 29 พฤศจิกายน 2566 เวลา 14.00 น.
                    </p>
                </div>
                <div className="mb-6">
                    <p className="mb-1">
                        เปิดรับสมัคร 25 พฤศจิกายน - 28 พฤศจิกายน 2566
                    </p>
                    <ol className="pl-4 list-decimal">
                        <li>ใบสมัครหนึ่งใบต่อสัตว์เลี้ยงหนึ่งตัวเท่านั้น</li>
                        <li>ไม่จำกัดอายุ เพศ น้ำหนัก และสายพันธุ์</li>
                        <li>
                            ไม่มีโรคประจำตัวที่มีผลต่อการปฏิบัติภารกิจเป็นพรีเซนเตอร์ตลอด
                            1 ปี
                        </li>
                        <li>
                            การสมัครแข่งขันในครั้งนี้มีค่าใช้จ่าย 200 บาท/ตัว
                        </li>
                    </ol>
                </div>
                <div className="text-center">
                    <Link href={"/form/step_1"}>
                        <Button className="px-6 py-3 md:w-fit w-full btn-register">
                            ลงทะเบียน
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
}
