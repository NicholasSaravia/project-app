import { GlassPane } from "@/components/GlassPane";
import { PropsWithChildren } from "react";

export default function DashBoardRootLayout({ children }: PropsWithChildren) {
  return (
    <section className="h-screen w-screen rainbow-mesh p-6">
      <GlassPane className="w-full h-full flex items-center justify-center">
        {children}
      </GlassPane>
    </section>
  );
}
