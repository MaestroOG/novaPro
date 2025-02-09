import { Phone } from "lucide-react";

function CallButton() {
    return (
        <button className="flex items-center gap-2 px-4 py-[10px] rounded-full bg-black text-white shadow-md hover:bg-gray-900 transition">
            <Phone size={16} />
            <span className="text-sm text-white">Book a Call</span>
        </button>
    );
}

export default CallButton;
