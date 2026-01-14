import { useState } from "react";
import { ColorPicker } from "../../components/ui/ColorPicker";
import { DEFAULT_TAG_COLOR } from "./constants";
import type { Tag } from "./types";

interface TagInputProps {
    onAdd: (tag: Tag) => void;
}

export function TagInput({ onAdd }: TagInputProps) {
    const [name, setName] = useState("");
    const [color, setColor] = useState(DEFAULT_TAG_COLOR);

    function handleAdd() {
        if (!name.trim()) return;
        onAdd({ name: name.trim(), color });
        setName("");
    }

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAdd();
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Tag name"
                    className="flex-1 border border-black-alpha-8 rounded-md px-2 py-1 text-sm"
                />
                <button
                    type="button"
                    onClick={handleAdd}
                    className="px-3 py-1 bg-black text-white text-sm rounded-md cursor-pointer"
                >
                    Add
                </button>
            </div>
            <ColorPicker value={color} onChange={setColor} />
        </div>
    );
}
