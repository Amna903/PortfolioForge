export interface Project {
  id: number;
  title: string;
  subtitle: string;
  tech: string[];
  type: string;
  description: string;
  features?: string[];
  impact?: string;
  link?: string; // External link (e.g. for Riskify)
  video?: string; // Path to video file
  category: 'mobile' | 'web' | 'web3' | 'ai' | 'fullstack' | 'tool' | 'game';
  size?: 'normal' | 'wide' | 'tall' | 'large';
  github?: string;
  download?: boolean; // Indicates if downloadable files are available
  apk?: boolean; // Indicates if APK file is available
  apkFile?: string; // Custom APK file name if different from default
}
