export default function Input({
    placeholder,
    type,
    id,
  }: {
    placeholder: string;
    type?: string;
    id?: string;
  }) {
    return <input className="bg-white w-full rounded-full px-5 py-3 text-sm" placeholder={placeholder} type={type || "text"} id={id} />;
  }