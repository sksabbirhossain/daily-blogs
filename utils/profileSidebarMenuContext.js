import { ProfileSidebarMenuProvider } from "@/contexts/profileSidebarMenuContext";

export default function ProfileSidebarMenu({ children }) {
  return <ProfileSidebarMenuProvider>{children}</ProfileSidebarMenuProvider>;
}
