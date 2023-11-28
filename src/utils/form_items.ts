const form_data = [
    {
        form_step: 1,
        form_info: [
            {
                form_subtitle: "ข้อมูลส่วนของเจ้าของสัตว์เลี้ยง",
                form_items: [
                    {
                        label: "ชื่อ - นามสกุล",
                        type: "text",
                        name: "ownerName",
                        pattern: "[^0-9]*",
                        placeholder: "ชื่อ - นามสกุล",
                        required: true,
                    },
                    {
                        label: "ที่อยู่",
                        type: "textarea",
                        name: "ownerAddress",
                        placeholder: "ที่อยู่",
                        required: true,
                    },
                    {
                        label: "เบอร์โทรศัพท์",
                        type: "tel",
                        name: "ownerPhoneNumber",
                        pattern: "[0-9]{10}",
                        placeholder: "เช่น 0812345678",
                        required: true,
                    },
                    {
                        label: "อีเมล",
                        type: "email",
                        name: "ownerEmail",
                        placeholder: "เช่น example@email.com",
                        required: true,
                    },
                ],
            },
            {
                form_subtitle: "ข้อมูลส่วนของสัตว์เลี้ยง",
                form_items: [
                    {
                        label: "ชื่อสัตว์เลี้ยง",
                        type: "text",
                        name: "dogName",
                        placeholder: "ชื่อสัตว์เลี้ยง",
                        required: true,
                    },
                    {
                        label: "สายพันธุ์",
                        type: "text",
                        name: "dogBreed",
                        placeholder: "สายพันธุ์",
                        required: false,
                    },
                    {
                        label: "เพศ",
                        type: "select",
                        name: "dogSex",
                        placeholder: "เพศ",
                        options: ["ผู้", "เมีย"],
                        required: true,
                    },
                    {
                        label: "อายุ (ปี)",
                        type: "number",
                        name: "dogAge",
                        placeholder: "อายุ",
                        required: true,
                    },
                    {
                        label: "น้ำหนัก (กิโลกรัม)",
                        type: "number",
                        name: "dogWeight",
                        placeholder: "น้ำหนัก",
                        required: true,
                    },
                    {
                        label: "รูปถ่ายสัตว์เลี้ยง",
                        type: "file",
                        name: "dogImage",
                        accept: "image/*",
                        required: false,
                    },
                ],
            },
        ],
    },
    {
        form_step: 2,
        form_info: [
            {
                form_subtitle: "ข้อมูลการประกวด",
                form_items: [
                    {
                        label: "เกณฑ์การประกวด",
                        type: "select",
                        name: "contestCriteria",
                        placeholder: "เกณฑ์การประกวด",
                        options: [
                            "ประกวดความน่ารัก",
                            "ประกวดความคล่องแคล่ว",
                            "ประกวดความสามารถพิเศษ",
                        ],
                        required: true,
                    },
                    {
                        label: "ประเภทการประกวด",
                        type: "select",
                        name: "contestType",
                        placeholder: "ประเภทการประกวด",
                        options: ["สุนัขขนาดเล็ก", "สุนัขขนาดใหญ่"],
                        required: true,
                    },
                    {
                        label: "รุ่นที่สมัคร",
                        type: "radio",
                        name: "contestClass",
                        options: [
                            {
                                label: "รุ่น Cutest Puppy อายุ 3 เดือน ขึ้นไปถึง 1 ปี",
                                value: "puppy",
                            },
                            {
                                label: "รุ่น Gorgeous Girl อายุ 1 ปี ขึ้นไปถึง 6 ปี",
                                value: "gorgeous",
                            },
                            {
                                label: "รุ่น Golden Oldie อายุ 7 ปีขึ้นไป",
                                value: "oldie",
                            },
                        ],
                        required: true,
                    },
                    {
                        label: "ความสามารถพิเศษของสัตว์เลี้ยง",
                        type: "textarea",
                        name: "dogTalent",
                        placeholder: "ความสามารถพิเศษของสัตว์เลี้ยง",
                        required: true,
                    },
                ],
            },
        ],
    },
    {
        form_step: 3,
        form_info: [
            {
                form_subtitle: "ข้อมูลการชำระเงิน",
                form_items: [
                    {
                        label: "หลักฐานการชำระเงิน",
                        type: "file",
                        name: "transferSlip",
                        accept: "image/*",
                        required: true,
                    },
                    {
                        label: "ข้อตกลง",
                        type: "radio",
                        name: "agreement",
                        options: [
                            {
                                label: "ข้าพเจ้ายอมรับข้อปฏิบัติและมาตรการที่ผู้จัดงานได้กำหนดขึ้น",
                                value: "agree",
                            },
                        ],
                        required: true,
                    },
                ],
            },
        ],
    },
];

export default form_data;
