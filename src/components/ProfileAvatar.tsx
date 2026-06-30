import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  className?: string;
}

export default function ProfileAvatar({ className }: ProfileAvatarProps) {
  return (
    <div
      className={cn(
        "flex h-[233px] w-[175px] items-center justify-center rounded-xl border border-border bg-muted shadow-md",
        className,
      )}
      aria-label="Profile photo placeholder"
    >
      <span className="font-serif text-5xl font-medium text-muted-foreground">
        SP
      </span>
    </div>
  );
}
