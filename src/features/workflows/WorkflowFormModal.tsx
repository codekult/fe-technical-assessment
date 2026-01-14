import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Modal } from "../../components/ui/Modal";
import { Button } from "../../components/ui/Button";
import { useWorkflowsContext } from "./context";
import { TagInput } from "./TagInput";
import { ColorChip } from "./ColorChip";
import { Badge } from "../../components/ui/Badge";
import type { WorkflowType, Tag } from "./types";

interface WorkflowFormModalProps {
  mode: "create" | "edit";
}

export function WorkflowFormModal({ mode }: WorkflowFormModalProps) {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { getById, create, update } = useWorkflowsContext();

  const workflow = mode === "edit" ? getById(Number(id)) : undefined;
  const [name, setName] = useState("");
  const [type, setType] = useState<WorkflowType>("workflow");
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    if (workflow) {
      setName(workflow.name);
      setType(workflow.type);
      setTags(workflow.tags || []);
    }
  }, [workflow]);

  function handleAddTag(tag: Tag) {
    if (tags.some((existingTag) => existingTag.name === tag.name)) return;
    setTags([...tags, tag]);
  }

  function handleRemoveTag(tagName: string) {
    setTags(tags.filter((existingTag) => existingTag.name !== tagName));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = {
      name,
      type,
      lastUpdated: Math.floor(Date.now() / 1000),
      tags,
    };

    if (mode === "edit" && workflow) {
      update(workflow.id, data);
    } else {
      create(data);
    }
    navigate("/");
  }

  return (
    <Modal title={mode === "create" ? "Create Workflow" : "Edit Workflow"}>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-black-alpha-8 rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as WorkflowType)}
            className="w-full border border-black-alpha-8 rounded-md px-3 py-2"
          >
            <option value="workflow">Workflow</option>
            <option value="agent">Agent</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Tags</label>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <Badge key={tag.name}>
                  <ColorChip color={tag.color} />
                  <span className="pl-1">{tag.name}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag.name)}
                    className="ml-1 text-light-gray hover:text-black cursor-pointer"
                  >
                    ✕
                  </button>
                </Badge>
              ))}
            </div>
          )}
          <TagInput onAdd={handleAddTag} />
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={() => navigate("/")}>Cancel</Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
}
