import DashboardLayout from "../components/DashboardLayout";
import TotalSavings from "../components/TotalSavings";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
	primaryNavigation,
	secondaryNavigation,
	setCurrentPage,
} from "../utils/navigation";
import {
	useUser,
	useSession,
	useSupabaseClient,
} from "@supabase/auth-helpers-react";

const Savings = () => {
	setCurrentPage(primaryNavigation, "Savings");
	const router = useRouter();
	const session = useSession();
	const supabase = useSupabaseClient();
	const user = useUser();

	const [userData, setUserData] = useState({
		savings: { total: 0, goal: 0 },
	});

	useEffect(() => {
		if (user) {
			getSavings();
			console.log("supabase user ->", user);
		}
	}, [user]);

	useEffect(() => {
		if (!session) {
			router.push("/");
		}
	});

	const getSavings = async () => {
		try {
			let { data, error, status } = await supabase
				.from("savings")
				.select(`total, goal`)
				.eq("user_id", user.id)
				.single();

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				setUserData({
					savings: { total: data.total, goal: data.goal },
				});
				console.log("supabase data ->", data);
			}
		} catch (error) {
			console.log("catch error ->", error);
		}
	};

	return (
		<>
			{session ? (
				<DashboardLayout
					primaryNavigation={primaryNavigation}
					secondaryNavigation={secondaryNavigation}
					title="Savings Page"
				>
					<div className="flex flex-col items-center gap-8">
						<TotalSavings userData={userData} />
					</div>
				</DashboardLayout>
			) : (
				<p>Loading...</p>
			)}
		</>
	);
};

export default Savings;
