import Form from "@/components/Form";
import form_step_1 from "@/utils/form_items";

export default function Form_Step_1() {
    return (
        <div className="flex justify-center">
            <Form formData={form_step_1[0]} />
        </div>
    );
}
