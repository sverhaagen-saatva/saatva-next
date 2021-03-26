import HomeHero from "@components/Home/HomeHero";
import WhatYoullGet from "@components/WhatYoullGet/WhatYoullGet";
import PressReviews from "@components/PressReviews/PressReviews";
import ShoppableHome from '@components/ShoppableHome';
import ServiceStandard from "@components/ServiceStandard/ServiceStandard";

export default function Home() {
    return (
        <main>
            <HomeHero />
            <ShoppableHome />
            <WhatYoullGet />
            <PressReviews />
            <ServiceStandard />
        </main>
    )
}
