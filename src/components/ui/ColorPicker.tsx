import { TAG_COLORS } from "../../features/workflows/constants";

interface ColorPickerProps {
    value: string;
    onChange: (color: string) => void;
}

export function ColorPicker({ value, onChange }: ColorPickerProps) {
    return (
        <div className="flex gap-1">
            {TAG_COLORS.map((color) => (
                <button
                    key={color}
                    type="button"
                    onClick={() => onChange(color)}
                    className={`w-5 h-5 rounded-full cursor-pointer ${value === color ? "ring-2 ring-black ring-offset-1" : ""
                        }`}
                    style={{ backgroundColor: color }}
                />
            ))}
        </div>
    );
}
