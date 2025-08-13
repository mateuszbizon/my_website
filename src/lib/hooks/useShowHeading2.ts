import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function useShowHeading2(sectionName: string = "#offer", headingName: gsap.TweenTarget = ".heading2") {
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionName,
                start: "top center",
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