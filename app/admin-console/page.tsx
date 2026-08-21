import type { Metadata } from "next";
import AdminConsole from "@/components/AdminConsole";

export const metadata: Metadata = {
  title: "Admin Console — Howard University RCMI Program",
  robots: { index: false, follow: false },
};

export default function AdminConsolePage() {
  return <AdminConsole />;
}
