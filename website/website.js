gsap.registerPlugin(ScrollTrigger)

let timeline  = gsap.timeline()

gsap.to('.owner__namediv__movingup',{
    delay : 1,
    height : '100%',
    duration : 0.5
})
gsap.to('.all__headercontent',{
    delay : 1.2,
    display : 'block'
})



gsap.to('.all__headercontent',{
    delay:1.2,
    duration : 0.4,
    height : '100%'
})



