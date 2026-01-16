import HomeCards from "@/components/home-cards";
import HomeChart from "@/components/home-chart";
import { HomeTable } from "@/components/home-table";

export default function DashboardIndex() {
	return (
		 <div className="flex flex-1 flex-col">
			<div className="@container/main flex flex-1 flex-col gap-2">
				<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
					<HomeCards />
					<div className="px-4 lg:px-6">
						<HomeChart />
					</div>
					<HomeTable />
				</div>
			</div>
		</div>
	)
}
