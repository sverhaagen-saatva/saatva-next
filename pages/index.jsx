import HomeHero from "@components/Home/HomeHero";
import ShoppableHome from '@components/ShoppableHome';
import WhatYoullGet from "@components/WhatYoullGet/WhatYoullGet";
import PressReviews from "@components/PressReviews/PressReviews";
import ServiceStandard from "@components/ServiceStandard/ServiceStandard";
import CompleteBedroom from "@components/CompleteBedroom";

export default function Home() {
    return (
        <main>
            <HomeHero />
            <ShoppableHome />
            <WhatYoullGet />
            <PressReviews />
            <CompleteBedroom />
            <ServiceStandard />
        </main>
    )
}
