import { Link } from "react-router";
import type { Tag } from "./types";
import { Badge } from "../../components/ui/Badge";
import { TextIcon } from "../../components/ui/TextIcon";
import { ColorChip } from "./ColorChip";

const MAX_DISPLAYED_TAG_COUNT = 10;

interface TagChipProps {
  tags: Tag[] | undefined;
  workflowId: number;
}

export function TagChip({ tags, workflowId }: TagChipProps) {
  if (tags === undefined || tags.length === 0) {
    return (
      <Link to={`/workflows/${workflowId}/edit`}>
        <Badge>
          <span className="flex items-center gap-1.5 text-light-gray font-semibold cursor-pointer">
            <TextIcon value="+" />
            Add Tag
          </span>
        </Badge>
      </Link>
    );
  }

  if (tags.length === 1) {
    return (
      <Badge>
        <ColorChip color={tags[0].color} />
        <span className="pl-1.5">{tags[0].name}</span>
      </Badge>
    );
  }

  const headTags = tags.slice(0, 3);

  return (
    <Badge>
      {headTags.map((tag) => (
        <ColorChip key={tag.name} color={tag.color} />
      ))}
      <span className="pl-1.5">
        {tags.length > MAX_DISPLAYED_TAG_COUNT
          ? `${MAX_DISPLAYED_TAG_COUNT}+`
          : tags.length}{" "}
        tags
      </span>
    </Badge>
  );
}
