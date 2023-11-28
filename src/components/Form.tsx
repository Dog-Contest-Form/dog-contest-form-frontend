"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Button,
    Card,
    FileUpload,
    Textbox,
    Textarea,
    Radio,
    Select,
} from "@/components";

import axios from "@/services/axios";

export default function Form({ formData }: { formData: any }) {
    const maxPage = 3;
    const router = useRouter();
    const [form, setForm] = useState({
        ownerName: "",
        ownerAddress: "",
        ownerPhoneNumber: "",
        ownerEmail: "",
        dogName: "",
        dogBreed: "",
        dogSex: "",
        dogAge: 0,
        dogWeight: 0,
        dogImage: null,
        contestCriteria: "",
        contestType: "",
        contestClass: "",
        dogTalent: "",
        transferSlip: "",
        agreement: "",
    });

    useEffect(() => {
        const localData = JSON.parse(
            localStorage.getItem(formData.form_step.toString()) || "{}"
        );

        setForm(localData);
    }, []);

    const handleChange = (e: any) => {
        const file = e.target.files;
        if (e.target.type === "file" && file) {
            const reader = new FileReader();

            reader.readAsDataURL(file[0]);
            reader.onloadend = () => {
                setForm({ ...form, [e.target.name]: reader.result });
            };
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    };

    const handleSaveForm = () => {
        localStorage.setItem(
            formData.form_step.toString(),
            JSON.stringify(form)
        );
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let formSubmit = {};

        handleSaveForm();

        let btnClass = e.nativeEvent.submitter.id;
        if (btnClass === "btn-prev") {
            router.push(`/form/step_${formData.form_step - 1}`);
        }
        if (btnClass === "btn-next") {
            router.push(`/form/step_${formData.form_step + 1}`);
        }
        if (btnClass === "btn-submit") {
            router.push(`/`);

            for (let i = 1; i <= maxPage; i++) {
                formSubmit = {
                    ...formSubmit,
                    ...JSON.parse(localStorage.getItem(i.toString()) || "{}"),
                };
            }

            axios.post(`/submit`, formSubmit).then(() => {
                alert("ลงทะเบียนสำเร็จ");
                localStorage.clear();
            });
        }
    };

    return (
        <Card className="md:px-8 px-4 py-6 lg:w-3/5 md:w-4/5 w-full">
            <div className="mb-6 text-center">
                <p className="md:text-3xl text-2xl font-bold">
                    ใบสมัครการแข่งขัน
                    <br />
                    การประกวด Dog Super Model
                </p>
            </div>
            <form name="dog-contest-form" onSubmit={handleSubmit}>
                <p className="text-lg font-bold">ตอนที่ {formData.form_step}</p>
                {formData.form_info.map((item: any, i: number) => (
                    <div key={i} className="grid gap-3 mb-8">
                        <p className="font-bold text-slate-600 underline">
                            {item.form_subtitle}
                        </p>
                        {item.form_items.map((formInput: any, j: number) =>
                            formInput.type === "textarea" ? (
                                <Textarea
                                    formInput={formInput}
                                    onChange={handleChange}
                                    value={
                                        form[
                                            formInput.name as keyof typeof form
                                        ]
                                    }
                                />
                            ) : formInput.type === "select" ? (
                                <Select
                                    formInput={formInput}
                                    onChange={handleChange}
                                    value={
                                        form[
                                            formInput.name as keyof typeof form
                                        ]
                                    }
                                />
                            ) : formInput.type === "radio" ? (
                                <Radio
                                    formInput={formInput}
                                    onChange={handleChange}
                                    value={
                                        form[
                                            formInput.name as keyof typeof form
                                        ]
                                    }
                                />
                            ) : formInput.type === "file" ? (
                                <FileUpload
                                    formInput={formInput}
                                    onChange={handleChange}
                                    value={
                                        form[
                                            formInput.name as keyof typeof form
                                        ]
                                    }
                                />
                            ) : (
                                <Textbox
                                    formInput={formInput}
                                    onChange={handleChange}
                                    value={
                                        form[
                                            formInput.name as keyof typeof form
                                        ]
                                    }
                                />
                            )
                        )}
                    </div>
                ))}
                <div className="flex md:flex-row flex-col md:justify-between justify-normal gap-4">
                    <Button onClick={handleSaveForm} formNoValidate={true}>
                        บันทึกแบบฟอร์ม
                    </Button>
                    <div className="flex md:flex-row flex-col-reverse md:justify-between justify-normal gap-4">
                        {formData.form_step !== 1 && (
                            <Button
                                type="submit"
                                id="btn-prev"
                                formNoValidate={true}
                            >
                                ย้อนกลับ
                            </Button>
                        )}
                        {formData.form_step !== maxPage ? (
                            <Button type="submit" id="btn-next">
                                ถัดไป
                            </Button>
                        ) : (
                            <Button type="submit" id="btn-submit">
                                ลงทะเบียน
                            </Button>
                        )}
                    </div>
                </div>
            </form>
        </Card>
    );
}
