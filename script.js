let text = document.querySelector('.container>h1');
let save = '';
text.textContent.split('').forEach((e) => {
  save += `<span class="text">${e}</span>`
  text.innerHTML = save;
})
let tl = gsap.timeline();
tl.from(".text",{
  scale:10,
  stagger:.3,
  opacity:0,
  filter:"blur(10px)",
  ease: "power4.out",
})
tl.to('.container',{
  left:"100%",
  filter:'blur(10px)',
  opacity:0,
  ease: "elastic.out(1,0.3)",
})
tl.from('.main>h1',{
  scale:10,
  opacity:0,
  filter:'blur(10px)'
})