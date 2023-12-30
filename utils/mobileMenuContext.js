import { MobileMenuProvider } from "@/contexts/mobileMenuContext";

export default function MobileMenu({ children }) {
  return <MobileMenuProvider>{children}</MobileMenuProvider>;
}
