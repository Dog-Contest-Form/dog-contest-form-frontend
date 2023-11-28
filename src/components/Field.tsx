export function Textbox({
    formInput,
    value,
    onChange,
}: {
    formInput: any;
    value?: any;
    onChange?: any;
}) {
    return (
        <div className="grid">
            <label htmlFor={formInput.name} className="font-bold">
                {formInput.label}
                {formInput.required && (
                    <span className="ml-0.5 text-red-600">*</span>
                )}
            </label>
            <input
                id={formInput.name}
                name={formInput.name}
                type={formInput.type}
                value={value}
                onChange={onChange}
                pattern={formInput.pattern || null}
                min={1}
                placeholder={formInput.placeholder}
                required={formInput.required}
                className="px-3 py-2 border border-slate-300 rounded-md text-sm bg-white placeholder-slate-400
                focus:outline-none focus:border-sky-700 focus:ring-1 focus:ring-sky-500 shadow-sm"
            />
        </div>
    );
}

export function Textarea({
    formInput,
    value,
    onChange,
}: {
    formInput: any;
    value?: any;
    onChange?: any;
}) {
    return (
        <div className="grid">
            <label htmlFor={formInput.name} className="font-bold">
                {formInput.label}
                {formInput.required && (
                    <span className="ml-0.5 text-red-600">*</span>
                )}
            </label>
            <textarea
                id={formInput.name}
                name={formInput.name}
                value={value}
                onChange={onChange}
                placeholder={formInput.placeholder}
                required={formInput.required}
                rows={4}
                className="px-3 py-2 border border-slate-300 rounded-md text-sm bg-white placeholder-slate-400
                focus:outline-none focus:border-sky-700 focus:ring-1 focus:ring-sky-500 shadow-sm"
            />
        </div>
    );
}

export function Radio({
    formInput,
    value,
    onChange,
}: {
    formInput: any;
    value?: any;
    onChange?: any;
}) {
    return (
        <div className="grid">
            <p className="font-bold">
                {formInput.label}
                {formInput.required && (
                    <span className="ml-0.5 text-red-600">*</span>
                )}
            </p>
            <div onChange={onChange}>
                {formInput.options.map((option: any, i: number) => (
                    <div className="flex items-center gap-0.5">
                        <input
                            id={option.value}
                            name={formInput.name}
                            type={formInput.type}
                            value={option.value}
                            checked={option.value === value}
                            required={i === 0 ? true : false}
                            className="w-4 h-4"
                        />
                        <label htmlFor={option.value} className="ml-2">
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function Select({
    formInput,
    value,
    onChange,
}: {
    formInput: any;
    value?: any;
    onChange?: any;
}) {
    return (
        <div className="grid">
            <label htmlFor={formInput.name} className="font-bold">
                {formInput.label}
                {formInput.required && (
                    <span className="ml-0.5 text-red-600">*</span>
                )}
            </label>
            <select
                id={formInput.name}
                name={formInput.name}
                value={value}
                onChange={onChange}
                placeholder={formInput.placeholder}
                required={formInput.required}
                className="appearance-none px-3 py-2 border border-slate-300 rounded-md text-sm bg-white placeholder-slate-400
                focus:outline-none focus:border-sky-700 focus:ring-1 focus:ring-sky-500 shadow-sm"
            >
                <option value="" selected disabled>
                    กรุณาเลือก
                </option>
                {formInput.options.map((option: any, i: number) => (
                    <option value={option} key={i}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export function FileUpload({
    formInput,
    value,
    onChange,
}: {
    formInput: any;
    value?: any;
    onChange?: any;
}) {
    return (
        <div className="grid">
            <div>
                <p className="font-bold">
                    {formInput.label}
                    {formInput.required && (
                        <span className="ml-0.5 text-red-600">*</span>
                    )}
                </p>
                <label htmlFor={formInput.name}>
                    <input
                        id={formInput.name}
                        name={formInput.name}
                        type={formInput.type}
                        onChange={onChange}
                        pattern={formInput.pattern || null}
                        required={formInput.required}
                        accept={formInput.accept}
                        className="block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 hover:file:cursor-pointer"
                    />
                </label>
            </div>
            {formInput.accept === "image/*" && value && (
                <div className="mt-2 h-64">
                    <img src={value} className="h-full object-contain" />
                </div>
            )}
        </div>
    );
}
