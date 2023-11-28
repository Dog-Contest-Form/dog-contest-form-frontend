import Form from "@/components/Form";
import form_step_3 from "@/utils/form_items";

export default function Form_Step_3() {
    return (
        <div className="flex justify-center">
            <Form formData={form_step_3[2]} />
        </div>
    );
}
