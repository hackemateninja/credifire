import { LampContainer } from "@/components/ui/lamp";
import { GalleryVerticalEnd } from "lucide-react";
import { motion } from "motion/react";
import { Outlet } from "react-router";


export default function AuthLayout() {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
           <Outlet />	
          </div>
        </div>
			
      </div>
      <div className="bg-muted relative hidden lg:block">
        <LampContainer>
					<motion.h1
						initial={{ opacity: 0.5, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.3,
							duration: 0.8,
							ease: "easeInOut",
						}}
						className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
					>
						Bienvenido <br /> de nuevo
					</motion.h1>
				</LampContainer>
	
      </div>
    </div>
	)
}
