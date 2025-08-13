import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function useShowHeading2(headingName: gsap.TweenTarget, sectionName: gsap.DOMTarget | undefined = "#offer") {
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionName,
                start: "top 70%",
                once: true
            }
        })

        timeline.fromTo(headingName, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
        })
    }, [])
}

export default useShowHeading2