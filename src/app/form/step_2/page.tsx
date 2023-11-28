import Form from "@/components/Form";
import form_step_2 from "@/utils/form_items";

export default function Form_Step_2() {
    return (
        <div className="flex justify-center">
            <Form formData={form_step_2[1]} />
        </div>
    );
}
