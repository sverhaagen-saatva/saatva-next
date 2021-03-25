import HomeHero from "@components/Home/HomeHero";
import ShoppableHome from '@components/ShoppableHome';
import WhatYoullGet from "@components/WhatYoullGet/WhatYoullGet";
import PressReviews from "@components/PressReviews/PressReviews";
import CompleteBedroom from "@components/CompleteBedroom";
import DontTakeItFromUs from "@components/DontTakeItFromUs";

export default function Home() {
    return (
        <main>
            <HomeHero />
            <ShoppableHome />
            <WhatYoullGet />
            <PressReviews />
            <CompleteBedroom />
            <DontTakeItFromUs />
        </main>
    )
}
