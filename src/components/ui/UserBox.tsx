interface UserBoxProps {
  username: string;
}

export function UserBox({ username }: UserBoxProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-9 w-9 rounded-md bg-dim-lilac" />
      <span className="font-bold">{username}</span>
    </div>
  );
}
