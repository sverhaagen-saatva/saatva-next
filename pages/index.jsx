import HomeHero from "@components/Home/HomeHero";
import WhatYoullGet from "@components/WhatYoullGet/WhatYoullGet";
import PressReviews from "@components/PressReviews/PressReviews";


export default function Home() {
    return (
        <main>
            <HomeHero />
            <WhatYoullGet />
            <PressReviews />
        </main>
    )
}
