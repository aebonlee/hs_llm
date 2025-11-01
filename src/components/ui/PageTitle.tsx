import { LucideIcon } from 'lucide-react';

interface PageTitleProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function PageTitle({ icon: Icon, title, description }: PageTitleProps) {
  return (
    <div className="flex items-center space-x-3">
      <Icon className="h-8 w-8 text-gray-600" />
      <div>
        <h1 className="text-3xl font-bold gradient-text">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}