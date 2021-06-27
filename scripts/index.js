// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TweenLite, TimelineMax, Power3 } from 'gsap';
import { ScrollMagicPluginIndicator, ScrollMagicPluginGsap } from "scrollmagic-plugins";

ScrollMagicPluginIndicator(ScrollMagic);
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// import g from 'gsap/src/gsap-co'
const controller = new ScrollMagic.Controller({
    addIndicators: false
})

const leafs = document.querySelector('.leafs');

// TweenMax.to('', 2, {ease: Power3.easeOut})

const scene1 = new ScrollMagic.Scene({
    duration: (document.querySelector('.firstSections').clientHeight / 2) + 200,
    triggerElement: document.querySelector('.firstSections'),
    offset: 0,
    triggerHook: 'onLeave',
    
}).setPin('.leafs').setTween('.leafShadow', { opacity: 0, bottom: 0, ease: Power3.easeOut }).addTo(controller)


const scene2 = new ScrollMagic.Scene({
    duration: (document.querySelector('.firstSections').clientHeight / 2),
    triggerElement: document.querySelector('.firstSections'),
    offset: (document.querySelector('.firstSections').clientHeight / 2) + 100,
    triggerHook: 'onLeave',
    
}).setPin('.leafs').setTween('.leafs', { bottom: 2500 }).addTo(controller)



const scene3 = new ScrollMagic.Scene({
    duration: document.querySelector('#section3').clientHeight / 2,
    triggerElement: document.querySelector('#section3'),
    offset: -400,
    triggerHook: 'onLeave',
    
}).setTween('#leaf3', { bottom: 0 }).addTo(controller)

const scene4 = new ScrollMagic.Scene({
    duration: document.querySelector('#section3').clientHeight + 1000,
    triggerElement: document.querySelector('#section3'),
    offset: 200,
    triggerHook: 'onLeave',
    
}).setTween('#leaf3', { bottom: 1500 }).addTo(controller)