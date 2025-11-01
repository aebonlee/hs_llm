import { LucideIcon } from 'lucide-react';

interface PageTitleProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function PageTitle({ icon: Icon, title, description }: PageTitleProps) {
  return (
    <div className="text-center space-y-4">
      <div className="inline-flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl shadow-lg">
        <Icon className="h-10 w-10 text-white" />
        <div className="text-left">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="text-gray-100">{description}</p>
        </div>
      </div>
    </div>
  );
}