import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function useShowItems(targets: gsap.TweenTarget = ".item", delay: gsap.TweenValue | undefined = 0, sectionName: string = "#offer") {
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionName,
                start: "top 70%",
                once: true
            }
        })

        timeline.fromTo(targets, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.5,
            delay
        })
    }, [])
}

export default useShowItems